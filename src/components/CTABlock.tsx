export function CTABlock() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Потрібна консультація?
        </h2>
        <p className="text-primary-foreground/70 mb-8">
          Уточнюйте наявність, розміри та умови замовлення — ми відповідаємо швидко!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/+t--fmhxKx4FlYTYy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-cta-foreground px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.95 7.47l-1.97 9.28c-.15.67-.54.83-1.09.52l-3.02-2.23-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.05 5.56-5.02c.24-.22-.05-.33-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.58-4.46c.53-.2 1 .13.83.93z"/></svg>
            Написати в Telegram
          </a>
          <a
            href="mailto:mogolyk@ukr.net?subject=Замовлення спецодягу"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 hover:border-cta text-primary-foreground px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95"
          >
            📧 Замовити через email
          </a>
        </div>
      </div>
    </section>
  );
}
