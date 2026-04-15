import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "../data/products";
import { CTABlock } from "../components/CTABlock";
import { ShieldCheck, Truck, BadgeDollarSign, Scissors, Infinity, CirclePercent, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "ФОП Моголюк — Спецодяг, взуття та супутні товари" },
      { name: "description", content: "Каталог спецодягу, робочого взуття, протипожежного інвентарю. Швидке замовлення через Telegram або email." },
    ],
  }),
});

// Needle-thread S icon
const NeedleThreadIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-2 0-4 2-4 5s2 5 4 5 4-2 4-5-2-5-4-5z" />
    <path d="M12 12c-2 0-4 2-4 5s2 5 4 5 4-2 4-5-2-5-4-5z" />
    <line x1="12" y1="2" x2="12" y2="5" />
  </svg>
);

const advantages = [
  { icon: ShieldCheck, title: "Сертифікована якість", desc: "Вся продукція відповідає стандартам ДСТУ" },
  { icon: Truck, title: "Доставка по Україні", desc: "Відправка Новою Поштою в день замовлення" },
  { icon: BadgeDollarSign, title: "Конкурентні ціни", desc: "Працюємо без посередників" },
  { icon: Scissors, title: "Вишивка логотипу", desc: "Нанесення символіки вашої компанії" },
  { icon: FileText, title: "Платник ПДВ", desc: "Офіційна робота з ПДВ — повний пакет документів" },
  { icon: NeedleThreadIcon, title: "Індивідуальний підхід", desc: "Наносимо логотипи та підбираємо комплекти під специфіку вашої галузі" },
  { icon: CirclePercent, title: "Спеціальні умови для опту", desc: "Розгалужена система знижок для гуртових замовників" },
  { icon: Infinity, title: "Перевірена витривалість", desc: "Контроль якості кожного шва. Висока зносостійкість матеріалів протягом багатьох сезонів" },
];

const reviews = [
  { name: "Олександр К.", company: "ТОВ «БудМонтаж»", text: "Замовляємо спецодяг вже 3 роки. Якість відмінна, ціни адекватні. Рекомендую!" },
  { name: "Ірина М.", company: "ПП «ЕнергоСервіс»", text: "Швидка відправка, зручне замовлення через Telegram. Вишивку логотипу зробили якісно." },
  { name: "Василь Т.", company: "КП «Комунальник»", text: "Закуповуємо зимовий спецодяг для бригади. Все чітко, по розмірах підійшло ідеально." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Спецодяг та засоби <span className="text-cta">захисту</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Якісний робочий одяг, взуття та супутні товари для вашого підприємства. Доставка по всій Україні.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/+t--fmhxKx4FlYTYy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-cta-foreground px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cta/30"
              >
                📩 Зв'язатися
              </a>
              <Link
                to="/catalog/specodyag"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105"
              >
                Переглянути каталог →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Категорії товарів</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Оберіть потрібну категорію для перегляду асортименту</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/catalog/$category"
              params={{ category: cat.slug }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-cta/40 hover:shadow-lg hover:shadow-cta/10 transition-all duration-300"
            >
              {cat.banner && (
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={cat.banner} alt={cat.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              )}
              <div className="p-4 text-center">
                <h3 className="font-bold text-card-foreground group-hover:text-cta transition-colors text-sm md:text-base">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cat.count} товарів</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-muted py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">Чому обирають нас</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">Досвід, якість та сервіс — основа нашої роботи</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl p-6 border border-border">
                <a.icon className="w-8 h-8 text-cta mb-3" />
                <h3 className="font-bold text-card-foreground mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Відгуки клієнтів</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-2xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">«{r.text}»</p>
              <div>
                <p className="font-semibold text-card-foreground text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </>
  );
}
