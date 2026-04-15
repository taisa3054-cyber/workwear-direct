export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  description: string;
  material?: string;
  sizes?: string[];
  heights?: string[];
  images: string[];
  hasVideo?: boolean;
  hasEmbroidery?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { slug: "specodyag", name: "Спецодяг та взуття", description: "Літній, зимовий спецодяг та робоче взуття", icon: "👷", count: 44 },
  { slug: "protipozhezhnyj", name: "Протипожежний інвентар", description: "Засоби пожежної безпеки", icon: "🧯", count: 6 },
  { slug: "shpagat", name: "Поліпропіленовий шпагат", description: "Міцний шпагат для різних потреб", icon: "🧵", count: 1 },
  { slug: "elektrody", name: "Зварювальні електроди", description: "Електроди для зварювальних робіт", icon: "⚡", count: 1 },
];

const summerNames = [
  "Костюм робочий літній «Майстер»", "Костюм літній «Професіонал»", "Комбінезон літній «Стандарт»",
  "Костюм літній «Будівельник»", "Напівкомбінезон літній «Класик»", "Костюм літній «Інженер»",
  "Костюм робочий «Енергія»", "Комбінезон літній «Техно»", "Костюм літній «Спец»",
  "Халат робочий літній", "Костюм літній «Монтаж»", "Напівкомбінезон «Літо»",
  "Костюм літній «Робочий-1»", "Костюм літній «Робочий-2»", "Комбінезон «Універсал»",
  "Костюм літній «Механік»", "Костюм літній «Зварник»", "Напівкомбінезон «Практик»",
  "Костюм літній «Дорожник»", "Костюм літній «Електрик»", "Костюм літній «Слюсар»",
  "Комбінезон літній «Робочий»", "Костюм літній «Комфорт»", "Костюм літній «Оптима»",
  "Напівкомбінезон «Сервіс»", "Костюм літній «Лідер»", "Костюм літній «Актив»",
  "Комбінезон «Про»", "Костюм літній «Форма»",
];

const winterNames = [
  "Костюм зимовий «Полярник»", "Куртка зимова «Арктика»", "Комбінезон зимовий «Морозко»",
  "Костюм зимовий «Сибір»", "Куртка утеплена «Зима»", "Костюм зимовий «Тепло»",
  "Напівкомбінезон зимовий «Фрост»", "Куртка зимова «Айсберг»", "Костюм зимовий «Бастіон»",
  "Комбінезон зимовий «Урал»", "Костюм зимовий «Вітрозахист»",
];

const shoeNames = [
  "Черевики робочі «Захист»", "Напівчеревики робочі «Стіл»",
  "Чоботи робочі «Фортеця»", "Черевики зимові «Тайга»",
];

const fireNames = [
  "Вогнегасник порошковий ВП-2", "Вогнегасник порошковий ВП-5", "Вогнегасник вуглекислотний ВВК-3",
  "Щит пожежний в комплекті", "Ящик для піску 0.5 м³", "Покривало протипожежне",
];

const materials = [
  "Бавовна 100%, щільність 240 г/м²",
  "Змішана тканина (65% поліестер, 35% бавовна), 245 г/м²",
  "Грета (51% бавовна, 49% поліестер), 220 г/м²",
  "Тканина «Оксфорд» з водовідштовхувальним просоченням",
  "Саржа 100% бавовна, 260 г/м²",
];

const defaultSizes = ["44–46", "48–50", "52–54", "56–58", "60–62"];
const defaultHeights = ["170–176", "182–188"];

function genProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  for (let i = 0; i < 29; i++) {
    products.push({
      id: `summer-${id++}`,
      name: summerNames[i],
      category: "specodyag",
      subcategory: "Літній спецодяг",
      price: `${800 + Math.round(Math.random() * 1200)} грн`,
      description: "Зручний та практичний спецодяг для роботи у теплу пору року. Забезпечує комфорт та захист.",
      material: materials[i % materials.length],
      sizes: defaultSizes,
      heights: defaultHeights,
      images: [`https://placehold.co/600x800/1a2744/f97316?text=${encodeURIComponent(summerNames[i].slice(0, 15))}`, `https://placehold.co/600x800/0f172a/f97316?text=Фото+2`],
      hasVideo: true,
      hasEmbroidery: true,
    });
  }

  for (let i = 0; i < 11; i++) {
    products.push({
      id: `winter-${id++}`,
      name: winterNames[i],
      category: "specodyag",
      subcategory: "Зимовий спецодяг",
      price: `${1500 + Math.round(Math.random() * 2000)} грн`,
      description: "Утеплений спецодяг для роботи в холодну пору року. Надійний захист від морозу та вітру.",
      material: "Оксфорд з утеплювачем Синтепон 200 г/м²",
      sizes: defaultSizes,
      heights: defaultHeights,
      images: [`https://placehold.co/600x800/1a2744/60a5fa?text=${encodeURIComponent(winterNames[i].slice(0, 15))}`, `https://placehold.co/600x800/0f172a/60a5fa?text=Фото+2`],
      hasVideo: true,
      hasEmbroidery: true,
    });
  }

  for (let i = 0; i < 4; i++) {
    products.push({
      id: `shoes-${id++}`,
      name: shoeNames[i],
      category: "specodyag",
      subcategory: "Робоче взуття",
      price: `${900 + Math.round(Math.random() * 800)} грн`,
      description: "Міцне робоче взуття з захисним носком. Стійке до зносу та комфортне для тривалого носіння.",
      material: "Натуральна шкіра, підошва ПУ/ТПУ",
      sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
      images: [`https://placehold.co/600x800/1a2744/22c55e?text=${encodeURIComponent(shoeNames[i].slice(0, 15))}`],
    });
  }

  for (let i = 0; i < 6; i++) {
    products.push({
      id: `fire-${id++}`,
      name: fireNames[i],
      category: "protipozhezhnyj",
      price: `${350 + Math.round(Math.random() * 1500)} грн`,
      description: "Сертифікований протипожежний інвентар. Відповідає вимогам ДСТУ.",
      images: [`https://placehold.co/600x800/1a2744/ef4444?text=${encodeURIComponent(fireNames[i].slice(0, 15))}`],
    });
  }

  products.push({
    id: `shpagat-${id++}`,
    name: "Шпагат поліпропіленовий 2000 Текс",
    category: "shpagat",
    price: "180 грн",
    description: "Міцний поліпропіленовий шпагат для пакування, обв'язки та господарських потреб. Стійкий до вологи та ультрафіолету.",
    images: [`https://placehold.co/600x800/1a2744/a855f7?text=Шпагат`],
  });

  products.push({
    id: `elektrody-${id++}`,
    name: "Електроди зварювальні АНО-21 Ø3мм",
    category: "elektrody",
    price: "420 грн/пачка",
    description: "Універсальні зварювальні електроди для ручного дугового зварювання вуглецевих і низьколегованих сталей.",
    images: [`https://placehold.co/600x800/1a2744/eab308?text=Електроди`],
  });

  return products;
}

export const products = genProducts();

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductsBySubcategory(categorySlug: string, sub: string): Product[] {
  return products.filter((p) => p.category === categorySlug && p.subcategory === sub);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getSubcategories(categorySlug: string): string[] {
  const subs = new Set(products.filter((p) => p.category === categorySlug && p.subcategory).map((p) => p.subcategory!));
  return Array.from(subs);
}
