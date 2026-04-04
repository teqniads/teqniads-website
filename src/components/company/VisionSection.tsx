import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function VisionSection() {
  return (
    <Section className="border-t border-(--color-slate)/50">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-(--color-teal) mb-6">
          Our Vision
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-2xl mb-8">
          One ecosystem.{" "}
          <span className="text-(--color-teal)">Infinite</span> solutions.
        </p>
        <p className="text-(--color-muted) max-w-xl">
          We believe the future of business software isn&apos;t a collection of
          disconnected tools — it&apos;s a unified platform where every product
          speaks the same language, shares the same identity, and scales as one.
        </p>
      </Container>
    </Section>
  );
}
