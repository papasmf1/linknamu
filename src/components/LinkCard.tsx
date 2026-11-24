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
      className="block w-full rounded-xl border border-zinc-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-400"
    >
      {title}
    </a>
  );
}
