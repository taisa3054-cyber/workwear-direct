import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Settings, Phone } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "Головна" },
  { to: "/catalog/specodyag" as const, label: "Спецодяг" },
  { to: "/catalog/pozhezhniy-inventar" as const, label: "Протипожежний" },
  { to: "/catalog/shpagat" as const, label: "Шпагат" },
  { to: "/catalog/elektrodu" as const, label: "Електроди" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground font-bold text-lg tracking-tight">
          <Settings className="w-5 h-5 text-cta" />
          <div className="flex flex-col leading-tight">
            <span>ФОП Моголюк</span>
            <span className="text-[10px] font-normal text-primary-foreground/60">платник ПДВ</span>
          </div>
        </Link>
        <a href="tel:+380679134640" className="hidden sm:flex items-center gap-1.5 text-primary-foreground/80 hover:text-cta text-sm transition-colors ml-4">
          <Phone className="w-4 h-4" />
          +38 067 913 46 40
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to))
                  ? "bg-cta text-cta-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://t.me/+t--fmhxKx4FlYTYy"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-cta-foreground px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            📩 Зв'язатися
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 animate-slide-up">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to))
                    ? "bg-cta text-cta-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://t.me/+t--fmhxKx4FlYTYy"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-cta text-cta-foreground px-4 py-3 rounded-lg text-base font-semibold"
            >
              📩 Написати в Telegram
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
