import type { Metadata } from "next";
import { site } from "./config";
import { profile } from "@/data/profile";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | ${profile.shortName}` },
    description,
    alternates: site.url ? { canonical: `${site.url}${path}` } : undefined,
    openGraph: {
      type: "website",
      title: `${title} | ${profile.shortName}`,
      description,
      siteName: profile.name,
      locale: "pt_BR",
      ...(site.url ? { url: `${site.url}${path}` } : {}),
    },
    twitter: {
      card: "summary",
      title: `${title} | ${profile.shortName}`,
      description,
    },
  };
}
