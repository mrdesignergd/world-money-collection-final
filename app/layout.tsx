import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Money Collection",
  description: "Personal online museum of coins and banknotes from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
