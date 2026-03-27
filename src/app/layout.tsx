import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { dictionaries } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/locale-provider";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const he = dictionaries.he;

export const metadata: Metadata = {
  title: he.meta.title,
  description: he.meta.description,
  keywords: [
    "מפתח",
    "developer",
    "full-stack",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Or Cohen" }],
  openGraph: {
    title: he.meta.title,
    description: he.meta.description,
    url: "https://orcohen.dev",
    siteName: "Or Cohen",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: he.meta.title,
    description: he.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={cn("dark", inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
