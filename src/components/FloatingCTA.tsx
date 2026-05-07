export function FloatingCTA() {
  return (
    <a
      href="https://t.me/+t--fmhxKx4FlYTYy"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-cta hover:opacity-90 text-cta-foreground px-5 py-3.5 rounded-full shadow-glow text-sm font-bold transition-all hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
      aria-label="Зв'язатися в Telegram"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 7.47l-1.97 9.28c-.15.67-.54.83-1.09.52l-3.02-2.23-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.05 5.56-5.02c.24-.22-.05-.33-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1 .13.83.93z"/></svg>
      <span className="hidden sm:inline">Зв'язатися</span>
    </a>
  );
}
