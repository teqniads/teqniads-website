import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/ecosystem/ProductGrid";
import { PRODUCTS } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "SaaS Ecosystem",
  description:
    "Explore the full suite of specialized SaaS products built by Teqnia Digital Solutions.",
};

export default function EcosystemPage() {
  return (
    <Section className="relative">
      {/* Gradient anchored to top of section, scoped to header height */}
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 70%)",
        }}
      />
      <Container>
        <div className="relative z-10 mb-12">
          <h1 className="text-4xl md:text-5xl text-white mb-4">
            SaaS Ecosystem
          </h1>
          <p className="text-(--color-muted) text-lg max-w-xl">
            One platform, many solutions. Browse our suite of tools built to
            solve real business problems at every scale.
          </p>
        </div>
        <div className="relative z-10">
          <ProductGrid products={PRODUCTS} />
        </div>
      </Container>
    </Section>
  );
}
