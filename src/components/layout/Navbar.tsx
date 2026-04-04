"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-(--color-navy) border-b border-(--color-slate)">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Teqnia Digital Solutions"
              height={40}
              width={40}
              className="rounded-sm"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-sm">Teqnia</span>
              <span className="text-(--color-muted) text-xs">Digital Solutions</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="primary" size="sm">Get Started</Button>
            </Link>

            <button
              className="md:hidden text-white text-2xl p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
