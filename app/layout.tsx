import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
// config
import config, { withBasePath } from "@/config/general";
// components
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  icons: {
    icon: withBasePath("/icon.ico"),
    shortcut: withBasePath("/icon.ico"),
    apple: withBasePath("/apple-icon.png"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
