export type NavLink = {
  href: string;
  label: string;
};

export type SkillIcon =
  | "react"
  | "typescript"
  | "three"
  | "gsap"
  | "design"
  | "backend";

export type Skill = {
  name: string;
  description: string;
  level: number;
  icon: SkillIcon;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  href: string;
  github?: string;
};

export type ContactIcon = "mail" | "wechat" | "github";

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon: ContactIcon;
};

export const profile = {
  name: "名字",
  role: "您的角色",
  greeting: "你好，我是",
  slogan: "这是您的slogan",
  bio: "您的简介",
  location: "哪国 · 哪哪哪",
  email: "hello@example.com",
  github: "您的GitHub主页链接",
  wechat: "您的微信号",
};

export const navLinks: NavLink[] = [
  { href: "#hero", label: "首页" },
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技能" },
  { href: "#portfolio", label: "作品" },
  { href: "#contact", label: "联系" },
];

export const aboutText = [
  "这里是第一行简介",
  "这里是第二行简介",
];

export const aboutStats = [
  { value: "这里是例子：5+", label: "例：年开发经验" },
  { value: "例：30+", label: "例：上线项目" },
  { value: "例：12", label: "例：合作品牌" },
];

export const skills: Skill[] = [
  {
    name: "React / Next.js",
    description: "描述一下您的技能",
    level:"熟练度",
    icon: "react",
  },
  {
    name: "TypeScript",
    description: "用类型系统把复杂项目理顺，让重构与协作都更安心。",
    level:"熟练度",
    icon: "typescript",
  },
  {
    name: "Three.js / WebGL",
    description: "在浏览器里搭建 3D 场景与交互，让页面拥有立体感。",
    level:"熟练度",
    icon: "three",
  },
  {
    name: "GSAP 动效",
    description: "让页面讲故事：滚动叙事、时间轴与缓动曲线都是我的画笔。",
    level:"熟练度",
    icon: "gsap",
  },
  {
    name: "界面设计",
    description: "从 Figma 到像素，兼顾美感、品牌感与可用性。",
    level:"熟练度",
    icon: "design",
  },
  {
    name: "Node.js 后端",
    description: "为前端的每个想法提供稳定、可靠的服务能力。",
    level:"熟练度",
    icon: "backend",
  },
];

export const projects: Project[] = [
  {
    title: "项目名",
    description: "项目介绍",
    tags: ["标签1", "标签2", "标签三"],
    emoji: "项目图标",
    href: "#",
    github: "https://github.com/example",
  },
  {
    title: "项目名2",
    description: "项目介绍2",
    tags: ["标签1", "标签2", "标签三"],
    emoji: "项目图标2",
    href: "#",
  },
  {
    title: "项目名3",
    description: "项目介绍3",
    tags: ["标签1", "标签二", "标签三"],
    emoji: "项目图标3",
    href: "#",
  },
  {
    title: "项目名4",
    description: "项目介绍4",
    tags: ["标签一", "标签2", "标签三"],
    emoji: "项目图标4",
    href: "#",
    github: "https://github.com/example",
  },
];

export const contactItems: ContactItem[] = [
  {
    label: "邮箱",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "微信",
    value: profile.wechat,
    icon: "wechat",
  },
  {
    label: "GitHub",
    value: "@您的GitHub主页链接",
    href: profile.github,
    icon: "github",
  },
];
