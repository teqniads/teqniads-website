import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-(--color-slate) border-t border-(--color-slate) py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold text-lg">
              Teqnia Digital Solutions
            </span>
            <span className="text-(--color-muted) text-sm">
              One Ecosystem. Infinite Solutions.
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-(--color-muted) hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <nav className="flex flex-col gap-3">
            <span className="text-white text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </span>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-(--color-muted) hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-(--color-navy) text-(--color-muted) text-sm">
          © {new Date().getFullYear()} Teqnia Digital Solutions. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
