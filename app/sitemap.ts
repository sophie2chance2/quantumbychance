import type { MetadataRoute } from "next";
import { notes } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quantumbychance.vercel.app";
  return [
    "",
    "/learn",
    "/notes",
    "/questions",
    "/about",
    ...notes.map((note) => `/notes/${note.slug}`),
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly" as const }));
}
