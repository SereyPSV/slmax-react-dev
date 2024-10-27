import type { Metadata } from "next";

import "./globals.css";
import { GlobalCenterContainer } from "src/page/layouts";
import { NavigationMenu } from "src/widgets";

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
        <GlobalCenterContainer>
          <NavigationMenu />
          {children}
        </GlobalCenterContainer>
      </body>
    </html>
  );
}
