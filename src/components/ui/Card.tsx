type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-(--color-slate) rounded-xl p-6 border border-transparent transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-(--color-teal)/20 ${className}`}
    >
      {children}
    </div>
  );
}
