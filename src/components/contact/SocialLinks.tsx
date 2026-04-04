import { SOCIAL_LINKS } from "@/constants";

export default function SocialLinks() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-(--color-teal) mb-4">
        Follow Us
      </p>
      <div className="flex flex-wrap gap-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-muted) hover:text-white transition-colors text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
