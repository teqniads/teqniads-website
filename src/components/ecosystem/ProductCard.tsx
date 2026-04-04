import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

function ProductCTA({ product }: { product: Product }) {
  if (product.status === "coming-soon") {
    return (
      <Button variant="secondary" size="sm" disabled>
        Coming Soon
      </Button>
    );
  }

  const isInternal = product.url.startsWith("/");

  if (isInternal) {
    return (
      <Link href={product.url}>
        <Button variant="ghost" size="sm">
          Explore
        </Button>
      </Link>
    );
  }

  return (
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="sm">
        Explore
      </Button>
    </a>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const liveAccent = product.status === "live" ? "border-(--color-teal)/10" : "";

  return (
    <Card className={`flex flex-col p-8 ${liveAccent}`}>
      <div className="w-fit mb-4">
        <Badge status={product.status} />
      </div>
      <h3 className="text-white mb-1">{product.name}</h3>
      <p className="text-(--color-muted) text-sm">{product.description}</p>
      <div className="mt-auto pt-6">
        <ProductCTA product={product} />
      </div>
    </Card>
  );
}
