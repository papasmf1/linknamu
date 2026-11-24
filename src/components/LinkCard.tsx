type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/70 bg-white/45 px-6 py-[1.125rem] text-center text-base font-medium tracking-tight text-foreground shadow-[0_8px_30px_rgba(180,110,60,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_12px_36px_rgba(180,110,60,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
    >
      {title}
    </a>
  );
}
