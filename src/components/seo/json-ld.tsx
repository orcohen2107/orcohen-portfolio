import { dictionaries } from "@/i18n/dictionaries";
import { siteConfig } from "@/data/site-config";

export function JsonLd() {
  const he = dictionaries.he;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Or Cohen",
    url: siteConfig.url,
    jobTitle: "מפתח Full-Stack",
    description: he.meta.description,
    sameAs: siteConfig.socials
      .filter((s) => s.platform !== "email")
      .map((s) => s.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
