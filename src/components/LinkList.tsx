"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/links";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0으로 표시
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0])),
  );

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => {
        // 응답을 기다리는 사이 눌린 클릭이 있으면 그만큼 더해서 덮어쓰기 방지
        setCounts((prev) => {
          const next = { ...data.counts };
          for (const id of Object.keys(prev)) {
            next[id] = Math.max(next[id] ?? 0, prev[id]);
          }
          return next;
        });
      })
      .catch((error) => {
        if (error?.name !== "AbortError") console.error("클릭 수 조회 실패:", error);
      });

    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면은 바로 +1, 서버 값이 오면 실제 값으로 맞춤
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { id: string; count: number }) => {
        setCounts((prev) => ({ ...prev, [data.id]: data.count }));
      })
      .catch((error) => console.error("클릭 수 저장 실패:", error));
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
