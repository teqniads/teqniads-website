import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <Section className="border-t border-(--color-slate)/50">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-(--color-teal) mb-6">
          About Us
        </p>
        <div className="max-w-2xl flex flex-col gap-8">
          <p className="text-(--color-muted) leading-relaxed">
            Teqnia Digital Solutions is a parent technology hub purpose-built to
            design, develop, and operate a suite of specialized SaaS products.
            We don&apos;t build isolated tools — we build interconnected systems
            that grow with your business.
          </p>
          <p className="text-(--color-muted) leading-relaxed">
            Our approach is rooted in deep technical expertise and a relentless
            focus on solving real problems. Every product in the Teqnia ecosystem
            is built with the same foundation: clean architecture, scalable
            infrastructure, and a user experience that removes friction.
          </p>
          <p className="text-(--color-muted) leading-relaxed">
            As a company, we operate at the intersection of product thinking and
            engineering precision — shipping solutions that are reliable on day
            one and built to last far beyond it.
          </p>
        </div>
      </Container>
    </Section>
  );
}
