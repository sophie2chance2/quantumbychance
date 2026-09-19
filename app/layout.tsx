import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Quantum by Chance", template: "%s · Quantum by Chance" },
  description: "Sophie Chance's public research notebook on quantum computing — learning queue, evolving ideas, open questions, and experiment notes.",
  metadataBase: new URL("https://www.quantumbychance.com"),
  openGraph: {
    title: "Quantum by Chance",
    description: "Learning quantum computing in public through evolving ideas, open questions, and experiments.",
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
