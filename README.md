# Workwear Direct

Інтернет-вітрина робочого одягу та взуття. Проєкт побудований на TanStack Start (React 19 + Vite 7), стилі — Tailwind CSS v4, бекенд за потреби — Lovable Cloud (Supabase під капотом). Розгортається на Cloudflare Workers.

## Стек

- **Фронтенд:** React 19, TanStack Router (file-based routing у `src/routes/`), TanStack Query
- **Стилі:** Tailwind CSS v4 + дизайн-токени в `src/styles.css` (oklch)
- **UI:** shadcn/ui (Radix) у `src/components/ui/`
- **Бекенд:** Lovable Cloud (Supabase) — вмикається з редактора Lovable за потреби
- **Білд / деплой:** Vite 7, Cloudflare Workers (`wrangler.jsonc`)

## Швидкий старт (локально)

Потрібен [Bun](https://bun.sh/) ≥ 1.1.

```bash
bun install
bun run dev          # локальний дев-сервер на http://localhost:5173
bun run build        # продакшн-білд
bun run preview      # перегляд продакшн-білда локально
bun run lint         # ESLint
bun run format       # Prettier
```

## Структура проєкту

```
src/
  routes/            # File-based роутинг TanStack (не редагуйте routeTree.gen.ts)
    __root.tsx       # головний layout (html/head/body)
    index.tsx        # головна сторінка "/"
    catalog.$category.tsx
    product.$id.tsx
  components/        # компоненти сторінок
    ui/              # shadcn/ui
  data/products.ts   # каталог товарів
  styles.css         # дизайн-токени та Tailwind
  router.tsx         # бутстрап роутера
```

Нові сторінки створюйте файлами у `src/routes/` (наприклад `about.tsx` → `/about`). Файл `routeTree.gen.ts` оновлюється автоматично — не правте його руками.

## Дизайн-система

Усі кольори визначені як CSS-токени в `src/styles.css` (формат `oklch`). У компонентах використовуйте семантичні класи Tailwind (`bg-background`, `text-foreground`, `bg-primary`, `text-accent` тощо), а не hex/`text-white`. Поточна палітра:

- Основний / заголовки / футер: градієнт на базі `#1B263B`
- Акцент: `#FB8500`
- Робочі області (фон): `#E0E1DD`
- Шрифти: `Montserrat` (заголовки), `Inter` (текст)

## Lovable Cloud (бекенд + секрети)

Бекенд (база даних, авторизація, файли, серверні функції) надається через **Lovable Cloud** — увімкнення відбувається з чату Lovable однією командою («увімкни Cloud»). Це автоматично провіжне Supabase-проєкт і додасть змінні середовища.

### Секрети та API-ключі

- **Публічні ключі** (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` тощо) — підставляються Lovable автоматично під час білду.
- **Приватні ключі** (Stripe, OpenAI, інші API) — додавайте через редактор Lovable: меню чату → запит «додай секрет `MY_API_KEY`». Lovable відкриє безпечну форму. Секрет стане доступним як `process.env.MY_API_KEY` у серверних функціях.
- **НЕ** кладіть приватні ключі у код, у `.env` файли чи у `VITE_*` змінні (вони потрапляють у бандл клієнта).

### Запити до Supabase / Cloud

Після увімкнення Lovable Cloud у проєкті з'являться три клієнти:

| Файл | Де використовувати | RLS |
|------|-------------------|-----|
| `@/integrations/supabase/client` | браузер: компоненти, auth, realtime | застосовується |
| `@/integrations/supabase/auth-middleware` | серверні функції від імені користувача | застосовується як юзер |
| `@/integrations/supabase/client.server` | серверні функції/вебхуки з service-role | **обходиться** |

**Приклад: запит з компонента (браузер)**

```ts
import { supabase } from "@/integrations/supabase/client";

const { data, error } = await supabase.from("products").select("*");
```

**Приклад: серверна функція з авторизацією**

```ts
// src/lib/orders.functions.ts
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getMyOrders = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId);
    if (error) throw error;
    return data;
  });
```

Виклик у компоненті:

```tsx
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "@/lib/orders.functions";

const fetchOrders = useServerFn(getMyOrders);
const { data } = useQuery({ queryKey: ["orders"], queryFn: () => fetchOrders() });
```

**Вебхуки / публічні API:** використовуйте серверні маршрути у `src/routes/api/public/*` і обов'язково перевіряйте підпис запиту перед обробкою.

### Міграції БД

Файли у `supabase/migrations/` — read-only. Для змін схеми створюйте новий файл міграції з новим timestamp; Lovable застосує її автоматично.

## Розгортання (публікація)

1. У редакторі Lovable натисніть **Publish** (праворуч згори; на мобільному — справа знизу в режимі Preview).
2. Перший паблішинг створює URL виду `your-project.lovable.app`.
3. Будь-які зміни фронтенду потребують повторного натискання **Update** у діалозі публікації, щоб піти в прод. Зміни бекенду (серверні функції, міграції) деплояться автоматично одразу.
4. **Кастомний домен:** Project Settings → Domains (доступно після першого паблішу).

### Self-hosting

Проєкт зібрано під Cloudflare Workers (див. `wrangler.jsonc`). Для самостійного хостингу:

```bash
bun run build
bunx wrangler deploy
```

Не забудьте проставити змінні середовища (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` та ваші секрети) у налаштуваннях Worker'а.

## Корисні посилання

- Документація Lovable: https://docs.lovable.dev
- Lovable Cloud: https://docs.lovable.dev/features/cloud
- TanStack Start: https://tanstack.com/start
- shadcn/ui: https://ui.shadcn.com

## Ліцензія

Приватний проєкт. Усі права захищені.