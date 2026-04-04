type Status = "live" | "beta" | "coming-soon";

type BadgeProps = {
  status: Status;
};

const statusConfig: Record<Status, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "text-(--color-teal) border border-(--color-teal)",
  },
  beta: {
    label: "Beta",
    className: "text-(--color-gold) border border-(--color-gold)",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "text-(--color-muted) border border-(--color-muted)",
  },
};

export default function Badge({ status }: BadgeProps) {
  const { label, className } = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
