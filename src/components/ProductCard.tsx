import { Link } from "@tanstack/react-router";
import type { Product } from "../data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$id"
      params={{ id: product.id }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-cta/40 shadow-sm hover:shadow-lg hover:shadow-cta/10 transition-all duration-300"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground text-sm leading-snug line-clamp-2 group-hover:text-cta transition-colors">
          {product.name}
        </h3>
        {product.subcategory && (
          <p className="text-xs text-muted-foreground mt-1">{product.subcategory}</p>
        )}
        <p className="text-cta font-bold mt-2">{product.price}</p>
      </div>
    </Link>
  );
}
