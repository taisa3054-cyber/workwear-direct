import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Сторінку не знайдено</h2>
        <p className="mt-2 text-sm text-muted-foreground">Сторінка, яку ви шукаєте, не існує або була переміщена.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-xl bg-cta px-6 py-3 text-sm font-bold text-cta-foreground transition-colors hover:bg-cta-hover">
            На головну
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ФОП Моголюк — Спецодяг, взуття та супутні товари" },
      { name: "description", content: "Продаж спецодягу, робочого взуття, протипожежного інвентарю. ФОП Моголюк — якість та надійність." },
      { name: "author", content: "ФОП Моголюк" },
      { property: "og:title", content: "ФОП Моголюк — Спецодяг та робоче взуття" },
      { property: "og:description", content: "Каталог спецодягу, взуття та супутніх товарів. Замовлення через Telegram або email." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
