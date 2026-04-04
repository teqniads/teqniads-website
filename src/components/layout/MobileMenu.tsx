import Link from "next/link";
import { NAV_LINKS } from "@/constants";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <nav className="border-t border-(--color-slate) bg-(--color-navy) px-4 py-4 flex flex-col gap-4 md:hidden">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-white hover:text-(--color-teal) transition-colors py-1"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
