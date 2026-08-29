import type { Metadata, Viewport } from "next";
import { Baloo_2 } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import FloatingShapes from "@/components/animations/FloatingShapes";
import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "林小满 · 创意全栈开发者",
  description:
    "个人作品集：用 Next.js、Three.js 与 GSAP 打造的黏土拟态滚动叙事网站。",
};

export const viewport: Viewport = {
  themeColor: "#EDF1F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={baloo.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <FloatingShapes />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
