import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Settings, Phone } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "Головна" },
  { to: "/catalog/specodyag" as const, label: "Спецодяг та взуття" },
  { to: "/catalog/pozhezhniy-inventar" as const, label: "Протипожежний інвентар" },
  { to: "/catalog/shpagat" as const, label: "Поліпропіленовий шпагат" },
  { to: "/catalog/elektrodu" as const, label: "Зварювальні електроди" },
];

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 7.47l-1.97 9.28c-.15.67-.54.83-1.09.52l-3.02-2.23-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.05 5.56-5.02c.24-.22-.05-.33-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1 .13.83.93z"/></svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-cta shrink-0" />
          <div className="flex flex-col leading-tight">
            <Link to="/" className="text-primary-foreground font-bold text-lg tracking-tight whitespace-nowrap">
              ФОП Моголюк
            </Link>
            <a href="tel:+380679134640" className="flex items-center gap-1 text-xs text-primary-foreground/60 hover:text-cta transition-colors whitespace-nowrap">
              <Phone className="w-3 h-3" />
              <span>+38 067 913 46 40</span>
            </a>
          </div>
        </div>

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
            <TelegramIcon className="w-4 h-4" />
            Зв'язатися
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
              <TelegramIcon className="w-5 h-5" />
              Написати в Telegram
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}