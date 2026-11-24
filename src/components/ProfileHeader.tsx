type ProfileHeaderProps = {
  name: string;
  bio: string;
  photoUrl?: string;
};

export default function ProfileHeader({ name, bio, photoUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          className="h-36 w-36 rounded-full object-cover ring-4 ring-emerald-100 sm:h-44 sm:w-44"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-36 w-36 items-center justify-center rounded-full bg-emerald-600 text-4xl font-bold text-white ring-4 ring-emerald-100 sm:h-44 sm:w-44"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
