import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "山下饭堂｜时令中餐小馆",
  description: "用当季食材，做一桌有烟火气的现代中餐。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
