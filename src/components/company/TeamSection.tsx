import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import TeamMemberCard from "@/components/company/TeamMemberCard";
import type { TeamMember } from "@/types";

type TeamSectionProps = {
  members: TeamMember[];
};

export default function TeamSection({ members }: TeamSectionProps) {
  return (
    <Section className="border-t border-(--color-slate)/50">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Leadership</h2>
          <p className="text-(--color-muted) text-lg max-w-xl">
            The people building Teqnia&apos;s ecosystem of products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
