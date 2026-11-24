import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links } from "@/lib/links";

const profile = {
  name: "김종덕",
  bio: "파이썬 개발자 | iOS앱개발자 | AI 개발자",
  photoUrl: "/profile.png",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-7 py-16 sm:py-24">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        photoUrl={profile.photoUrl}
      />
      <LinkList links={links} />
    </main>
  );
}
