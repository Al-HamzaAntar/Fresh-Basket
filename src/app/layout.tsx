import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "سلة الخضار والفواكه",
  description: "تسوق أفضل الخضروات والفواكه الطازجة",
  icons: {
    icon: [{ rel: "icon", type: "image/x-icon", url: "/favicon.ico" }]
  }
};

import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
