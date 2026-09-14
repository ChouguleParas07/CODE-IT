export const social = [
  { url: "mailto:paraschougule1008@gmail.com", name: "mail" },
  { url: "https://github.com/ChouguleParas07", name: "github" },
  { url: "https://www.linkedin.com/in/paras-chougule-344b15255/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
