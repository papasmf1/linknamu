type ProfileHeaderProps = {
  name: string;
  bio: string;
  photoUrl?: string;
};

const photoClass =
  "h-32 w-32 rounded-full ring-4 ring-white/80 shadow-[0_12px_32px_rgba(180,110,60,0.25),0_2px_6px_rgba(180,110,60,0.15)] sm:h-36 sm:w-36";

export default function ProfileHeader({ name, bio, photoUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          className={`${photoClass} object-cover`}
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className={`${photoClass} flex items-center justify-center bg-orange-300 text-4xl font-bold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted sm:text-base">
        {bio}
      </p>
    </header>
  );
}
