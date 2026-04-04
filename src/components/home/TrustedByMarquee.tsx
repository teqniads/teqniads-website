const PARTNERS = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
  "Partner 8",
];

export default function TrustedByMarquee() {
  return (
    <div className="py-12 border-y border-(--color-slate) overflow-hidden">
      <p className="text-center text-(--color-muted) text-sm uppercase tracking-widest mb-8">
        Trusted By
      </p>
      <div
        className="flex w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {[...PARTNERS, ...PARTNERS].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-6 w-32 h-12 bg-(--color-slate) rounded-lg flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-white text-xs font-medium">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
