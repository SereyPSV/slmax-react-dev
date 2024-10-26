import type { Metadata } from "next";

import "./globals.css";
import { GlobalCenterContainer } from "src/page/layouts";

export const metadata: Metadata = {
  title: "SLMax - React Разработчик",
  description: "Интернет-магазин, с использованием Next.js и TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <GlobalCenterContainer>{children}</GlobalCenterContainer>
      </body>
    </html>
  );
}
