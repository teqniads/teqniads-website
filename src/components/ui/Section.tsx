type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export default function Section({
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={`py-16 md:py-24 ${className}`}>
      {children}
    </Tag>
  );
}
