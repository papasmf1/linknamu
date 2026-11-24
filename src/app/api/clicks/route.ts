import { linkIds, links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

// 모든 링크의 클릭 수를 한 번에 반환
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find().toArray();

    const counts: Record<string, number> = Object.fromEntries(
      links.map((link) => [link.id, 0]),
    );
    for (const doc of docs) {
      if (linkIds.has(doc._id)) counts[doc._id] = doc.count;
    }

    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 가져오지 못했습니다" }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: "잘못된 요청입니다" }, { status: 400 });
  }

  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다" }, { status: 400 });
  }

  try {
    const collection = await getClicksCollection();
    const doc = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

    return Response.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다" }, { status: 500 });
  }
}
