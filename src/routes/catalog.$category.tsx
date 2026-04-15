import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, getProductsByCategory, getSubcategories } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { CTABlock } from "../components/CTABlock";
import { useState } from "react";

export const Route = createFileRoute("/catalog/$category")({
  component: CategoryPage,
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.category);
    return {
      meta: [
        { title: cat ? `${cat.name} — ФОП Моголюк` : "Каталог — ФОП Моголюк" },
        { name: "description", content: cat ? `Купити ${cat.name.toLowerCase()} від ФОП Моголюк. ${cat.description}. Замовлення через Telegram.` : "" },
      ],
    };
  },
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = categories.find((c) => c.slug === category);
  const allProducts = getProductsByCategory(category);
  const subcategories = getSubcategories(category);
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);

  const filteredProducts = activeSubcat ? allProducts.filter((p) => p.subcategory === activeSubcat) : allProducts;

  if (!cat) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Категорію не знайдено</h1>
        <Link to="/" className="text-cta hover:text-cta-hover font-medium">На головну</Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-cta transition-colors">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{cat.name}</span>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{cat.icon} {cat.name}</h1>
          <p className="text-muted-foreground">{cat.description} — {allProducts.length} товарів</p>
        </div>

        {/* Subcategory tabs */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveSubcat(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !activeSubcat ? "bg-cta text-cta-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Усі ({allProducts.length})
            </button>
            {subcategories.map((sub) => {
              const count = allProducts.filter((p) => p.subcategory === sub).length;
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubcat(sub)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSubcat === sub ? "bg-cta text-cta-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {sub} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <CTABlock />
    </>
  );
}
