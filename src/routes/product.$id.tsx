import { createFileRoute, Link } from "@tanstack/react-router";
import { getProductById, categories } from "../data/products";
import { SizeChartModal } from "../components/SizeChartModal";
import { CTABlock } from "../components/CTABlock";
import { useState } from "react";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  head: ({ params }) => {
    const product = getProductById(params.id);
    return {
      meta: [
        { title: product ? `${product.name} — ФОП Моголюк` : "Товар — ФОП Моголюк" },
        { name: "description", content: product ? `${product.name}. ${product.description} Ціна: ${product.price}. Замовити через Telegram.` : "" },
      ],
    };
  },
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Товар не знайдено</h1>
        <Link to="/" className="text-cta hover:text-cta-hover font-medium">На головну</Link>
      </div>
    );
  }

  const cat = categories.find((c) => c.slug === product.category);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-cta transition-colors">Головна</Link>
          <span className="mx-2">/</span>
          {cat && (
            <>
              <Link to="/catalog/$category" params={{ category: product.category }} className="hover:text-cta transition-colors">{cat.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                width={600}
                height={800}
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImage ? "border-cta" : "border-border hover:border-cta/40"
                    }`}
                  >
                    <img src={img} alt={`${product.name} фото ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {product.subcategory && (
              <p className="text-sm text-cta font-medium mb-2">{product.subcategory}</p>
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{product.name}</h1>
            <p className="text-3xl font-extrabold text-cta mb-6">{product.price}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {product.material && (
              <div className="mb-6">
                <h3 className="font-semibold text-foreground text-sm mb-1">Матеріал</h3>
                <p className="text-muted-foreground text-sm">{product.material}</p>
              </div>
            )}

            {product.hasEmbroidery && (
              <div className="bg-cta/10 border border-cta/20 rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-foreground">🧵 Можлива вишивка логотипу вашої компанії — уточнюйте деталі</p>
              </div>
            )}

            {product.sizes && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground text-sm">Розміри</h3>
                  <SizeChartModal />
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span key={s} className="bg-muted px-4 py-2 rounded-lg text-sm font-medium text-foreground">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {product.heights && (
              <div className="mb-8">
                <h3 className="font-semibold text-foreground text-sm mb-2">Зріст</h3>
                <div className="flex flex-wrap gap-2">
                  {product.heights.map((h) => (
                    <span key={h} className="bg-muted px-4 py-2 rounded-lg text-sm font-medium text-foreground">{h}</span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={`https://t.me/+t--fmhxKx4FlYTYy`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-cta-foreground px-6 py-4 rounded-xl text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cta/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 7.47l-1.97 9.28c-.15.67-.54.83-1.09.52l-3.02-2.23-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.05 5.56-5.02c.24-.22-.05-.33-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1 .13.83.93z"/></svg>
                Написати в Telegram
              </a>
              <a
                href={`mailto:mogolyk@ukr.net?subject=${encodeURIComponent(`Замовлення: ${product.name}`)}&body=${encodeURIComponent(`Доброго дня! Мене цікавить: ${product.name} (${product.price}). Прошу уточнити наявність та розміри.`)}`}
                className="flex items-center justify-center gap-2 border-2 border-border hover:border-cta text-foreground px-6 py-4 rounded-xl text-base font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                📧 Замовити через email
              </a>
              <p className="text-xs text-muted-foreground text-center mt-1">Уточнюйте розмір та наявність перед замовленням</p>
            </div>
          </div>
        </div>
      </article>

      <CTABlock />
    </>
  );
}
