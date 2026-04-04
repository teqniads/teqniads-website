import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import AboutSection from "@/components/company/AboutSection";
import VisionSection from "@/components/company/VisionSection";
import TeamSection from "@/components/company/TeamSection";
import type { TeamMember } from "@/types";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Teqnia Digital Solutions — a parent technology hub building a unified ecosystem of specialized SaaS products.",
};

const TEAM: TeamMember[] = [
  { id: "1", name: "Abdulrahman Al-Dahrawy", role: "Chief Technology Officer" },
  { id: "2", name: "Amr Ashry", role: "Chief Executive Officer" },
  { id: "3", name: "Mohammed Hussein", role: "Head of Product" },
  { id: "4", name: "Mohammed Selim", role: "Head of Design" },
];

export default function CompanyPage() {
  return (
    <>
      {/* Page hero */}
      <Section className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.09) 0%, transparent 70%)",
          }}
        />
        <Container>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl text-white mb-4">
              About Teqnia
            </h1>
            <p className="text-(--color-muted) text-lg max-w-xl">
              We build ecosystems, not just software — powering the next
              generation of digital business.
            </p>
          </div>
        </Container>
      </Section>

      <AboutSection />
      <VisionSection />
      <TeamSection members={TEAM} />
    </>
  );
}
