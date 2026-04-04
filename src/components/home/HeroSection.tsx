import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  return (
    <Section className="relative text-center pt-24 md:pt-32">
      {/* Subtle radial gradient behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)",
        }}
      />
      <Container>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.1] text-white mb-8">
          One Ecosystem.
          <br />
          <span className="text-(--color-teal)">Infinite Solutions.</span>
        </h1>
        <p className="text-(--color-muted) text-lg max-w-xl mx-auto mb-12">
          Teqnia Digital Solutions is a parent technology hub housing a suite of
          specialized SaaS products built to scale your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Link href="/ecosystem">
            <Button variant="primary" size="lg">
              Explore Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
