import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selemgirma.dev"),
  title: "Selem Girma — Cybersecurity Command Interface",
  description:
    "Selem Girma · Software Engineering student, full-stack developer and cybersecurity engineer in training. A live capability dashboard, not a portfolio template.",
  openGraph: {
    title: "Selem Girma — Cybersecurity Command Interface",
    description:
      "Full-stack surfaces, adversary-aware foundations. Live capability dashboard for a cybersecurity-oriented engineer.",
    type: "website",
    url: "/",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#060a0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <a
          href="#modules"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-black focus:text-white focus:rounded"
        >
          Skip to modules
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
