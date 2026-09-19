import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Quantum by Chance", template: "%s · Quantum by Chance" },
  description: "A learning-in-public field guide to quantum computing — notes, mental models, open questions, and honest confusion.",
  metadataBase: new URL("https://quantumbychance.vercel.app"),
  openGraph: {
    title: "Quantum by Chance",
    description: "Learning quantum computing in public, one confusion at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
