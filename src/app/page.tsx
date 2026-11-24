import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "김종덕",
  bio: "파이썬 개발자 | iOS앱개발자 | AI 개발자",
  photoUrl: "/profile.png",
};

const links = [
  { title: "깃허브", url: "https://github.com/papasmf1" },
  { title: "블로그", url: "https://blog.naver.com/papasmf1004" },
  { title: "이메일", url: "mailto:papasmf1@gmail.com" },
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
