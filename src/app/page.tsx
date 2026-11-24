import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여주기용 더미 값 — 나중에 실제 내용으로 교체
const profile = {
  name: "홍길동",
  bio: "더미 소개글입니다. 나중에 바꿔주세요.",
  photoUrl: "/avatar-dummy.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "Blog", url: "https://example.com/blog" },
  { title: "Mail", url: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-12 sm:py-16">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        photoUrl={profile.photoUrl}
      />
      <ul className="mt-10 flex w-full flex-col gap-5">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
