export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/papasmf1" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/papasmf1004" },
  { id: "email", title: "이메일", url: "mailto:papasmf1@gmail.com" },
];

export const linkIds = new Set(links.map((link) => link.id));
