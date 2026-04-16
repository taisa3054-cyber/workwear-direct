import { Link } from "@tanstack/react-router";
import { Settings } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Settings className="w-5 h-5 text-cta" /> ФОП Моголюк
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Продаж спецодягу, взуття та супутніх товарів. Платник ПДВ.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Каталог</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/catalog/specodyag" className="hover:text-cta transition-colors">Спецодяг та взуття</Link></li>
              <li><Link to="/catalog/protipozhezhnyj" className="hover:text-cta transition-colors">Протипожежний інвентар</Link></li>
              <li><Link to="/catalog/shpagat" className="hover:text-cta transition-colors">Шпагат</Link></li>
              <li><Link to="/catalog/elektrody" className="hover:text-cta transition-colors">Електроди</Link></li>
              <li>
                <a
                  href="https://res.cloudinary.com/durcnm4ea/image/upload/v1776169660/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_qrblaz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cta transition-colors"
                >
                  📄 Прайс-лист (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Контакти</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>📞 <a href="tel:+380679134640" className="hover:text-cta transition-colors">+38 067 913 46 40</a></li>
              <li>📧 <a href="mailto:mogolyk@ukr.net" className="hover:text-cta transition-colors">mogolyk@ukr.net</a></li>
              <li>
                💬{" "}
                <a href="https://t.me/+t--fmhxKx4FlYTYy" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} ФОП Моголюк. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
