import { dictionaries } from "@/i18n/dictionaries";
import { siteConfig } from "@/data/site-config";

export function JsonLd() {
  const he = dictionaries.he;

  const sameAs = siteConfig.socials
    .filter((s) => s.platform !== "email")
    .map((s) => s.url);

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: he.meta.title,
    description: he.meta.description,
    url: siteConfig.url,
    inLanguage: "he-IL",
    mainEntity: {
      "@type": "Person",
      name: "Or Cohen",
      url: siteConfig.url,
      jobTitle: "Full-Stack Developer",
      description: he.meta.description,
      sameAs,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "React Native",
        "PostgreSQL",
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Or Cohen",
    url: siteConfig.url,
    inLanguage: ["he-IL", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
