import type { Metadata } from "next";
import "./globals.css";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
