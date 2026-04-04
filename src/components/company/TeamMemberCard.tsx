import Card from "@/components/ui/Card";
import type { TeamMember } from "@/types";

type TeamMemberCardProps = {
  member: TeamMember;
};

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initial = member.name.charAt(0).toUpperCase();

  return (
    <Card className="flex flex-col items-center text-center p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-(--color-navy) border border-(--color-slate) flex items-center justify-center">
        <span className="text-(--color-teal) text-xl font-semibold">
          {initial}
        </span>
      </div>
      <h4 className="text-white font-semibold mt-5 mb-1">{member.name}</h4>
      <p className="text-(--color-muted)/80 text-sm">{member.role}</p>
      {member.bio && (
        <p className="text-(--color-muted) text-xs mt-3">{member.bio}</p>
      )}
    </Card>
  );
}
