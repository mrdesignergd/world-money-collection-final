"use client";

import { useMemo, useState } from "react";
import type {
  BlisterTheme,
  CollectionItem,
  Continent,
} from "../data/collection";
import { blisterThemes, continents } from "../data/collection";

type SortMode = "alpha" | "newest" | "updated";

type CatalogConfig = {
  category: "coin" | "banknote" | "blister";
  anchor: string;
  title: string;
  eyebrow: string;
  selectorDescription: string;
  options: readonly string[];
};

const catalogConfigs: CatalogConfig[] = [
  {
    category: "banknote",
    anchor: "banknotes",
    title: "Банкноты по континентам",
    eyebrow: "Банкноты",
    selectorDescription: "Откройте каталог банкнот выбранного региона.",
    options: continents,
  },
  {
    category: "coin",
    anchor: "coins",
    title: "Монеты по континентам",
    eyebrow: "Монеты",
    selectorDescription: "Откройте каталог монет выбранного региона.",
    options: continents,
  },
  {
    category: "blister",
    anchor: "blisters",
    title: "Блистеры по тематикам",
    eyebrow: "Блистеры",
    selectorDescription: "Откройте тематический каталог коллекционных наборов.",
    options: blisterThemes,
  },
];

const sortLabels: Record<SortMode, string> = {
  alpha: "По алфавиту",
  newest: "Сначала новые",
  updated: "Недавно обновлённые",
};

function categoryLabel(category: CollectionItem["category"]) {
  if (category === "coin") return "Монета";
  if (category === "banknote") return "Банкнота";
  return "Блистер";
}

function optionMatches(item: CollectionItem, option: string) {
  if (item.category === "blister") return item.theme === option;
  return item.continent === option;
}

function searchableText(item: CollectionItem) {
  const common = [
    item.title,
    item.description,
    item.year ?? "",
    item.country ?? "",
    item.tags.join(" "),
  ];

  if (item.category === "blister") {
    return [...common, item.theme].join(" ").toLowerCase();
  }

  return [...common, item.nominal, item.continent].join(" ").toLowerCase();
}

function sortItems(items: CollectionItem[], sort: SortMode) {
  return [...items].sort((a, b) => {
    if (sort === "newest") {
      return b.addedAt.localeCompare(a.addedAt);
    }

    if (sort === "updated") {
      return b.updatedAt.localeCompare(a.updatedAt);
    }

    const left = a.category === "blister" ? a.title : a.country;
    const right = b.category === "blister" ? b.title : b.country;
    return left.localeCompare(right, "ru");
  });
}

function Placeholder({ item }: { item: CollectionItem }) {
  return (
    <div className="grid aspect-[4/3] place-items-center rounded-md border border-[#d8b45f]/18 bg-[linear-gradient(135deg,rgba(216,180,95,0.24),rgba(248,245,234,0.08),rgba(16,19,17,0.35))]">
      <div className="text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full border border-[#d8b45f]/45 bg-[#101311]/45 text-2xl font-black text-[#f2cf7d]">
          {item.category === "coin" ? "¤" : item.category === "banknote" ? "$" : "★"}
        </div>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#efe8d0]/70">
          Фото скоро
        </p>
      </div>
    </div>
  );
}

function ItemCard({ item }: { item: CollectionItem }) {
  const meta = item.category === "blister" ? item.theme : item.continent;

  return (
    <article className="group rounded-lg border border-[#d8b45f]/16 bg-[#173d2d] p-5 transition hover:-translate-y-2 hover:border-[#d8b45f]/60 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)]">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="aspect-[4/3] w-full rounded-md border border-[#d8b45f]/18 object-cover"
        />
      ) : (
        <Placeholder item={item} />
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#d8b45f]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f2cf7d]">
          {categoryLabel(item.category)}
        </span>
        <span className="rounded-full bg-[#efe8d0]/10 px-3 py-1 text-xs font-bold text-[#efe8d0]/75">
          {meta}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{item.title}</h3>
      <div className="mt-3 grid gap-2 text-sm text-[#efe8d0]/72">
        {item.country && <p>Страна: {item.country}</p>}
        {"nominal" in item && item.nominal && <p>Номинал: {item.nominal}</p>}
        {item.year && <p>Год: {item.year}</p>}
      </div>
      <p className="mt-4 leading-7 text-[#efe8d0]/72">{item.description}</p>
      {item.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#101311]/45 px-3 py-1 text-xs text-[#efe8d0]/72"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function EmptyState({ search }: { search: string }) {
  return (
    <div className="rounded-lg border border-[#d8b45f]/18 bg-[#173d2d]/72 p-8 text-center">
      <p className="text-lg font-black text-white">
        {search
          ? "Ничего не найдено. Попробуйте изменить запрос."
          : "В этом разделе пока нет добавленных экземпляров."}
      </p>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-[#efe8d0]/68">
        Когда в `data/collection.ts` появятся предметы с этой категорией, они
        автоматически отобразятся здесь.
      </p>
    </div>
  );
}

function CatalogSection({
  config,
  items,
}: {
  config: CatalogConfig;
  items: CollectionItem[];
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortMode>("alpha");

  const filtered = useMemo(() => {
    if (!selected) return [];

    const query = search.trim().toLowerCase();
    const scoped = items.filter(
      (item) => item.category === config.category && optionMatches(item, selected),
    );
    const searched = query
      ? scoped.filter((item) => searchableText(item).includes(query))
      : scoped;

    return sortItems(searched, sort);
  }, [config.category, items, search, selected, sort]);

  const selectedTitle =
    config.category === "blister"
      ? `Блистеры: ${selected ?? ""}`
      : `${config.eyebrow} ${selected ?? ""}`;

  return (
    <section
      id={config.anchor}
      className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"
    >
      <div data-reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            {config.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            {config.title}
          </h2>
        </div>
        <p className="max-w-lg text-[#efe8d0]/72">{config.selectorDescription}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.options.map((option, index) => (
          <button
            key={option}
            type="button"
            data-reveal
            data-reveal-delay={index * 70}
            onClick={() => {
              setSelected(option);
              setSearch("");
            }}
            className={`rounded-lg border p-5 text-left transition hover:-translate-y-1 ${
              selected === option
                ? "border-[#d8b45f]/70 bg-[#efe8d0] text-[#173d2d] shadow-[0_18px_50px_rgba(216,180,95,0.16)]"
                : "border-[#d8b45f]/18 bg-[#173d2d]/80 text-white hover:border-[#d8b45f]/55"
            }`}
          >
            <h3 className="text-2xl font-black">{option}</h3>
            <p
              className={`mt-4 h-1 w-12 rounded-full transition ${
                selected === option ? "bg-[#173d2d]/55" : "bg-[#d8b45f]/55"
              }`}
            />
          </button>
        ))}
      </div>

      {selected && (
        <div data-reveal className="mt-10 rounded-lg border border-[#d8b45f]/16 bg-[#101311]/44 p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2cf7d]">
                Каталог
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">{selectedTitle}</h3>
            </div>
            <a
              href="#collection"
              className="rounded-full border border-[#efe8d0]/25 bg-[#efe8d0]/8 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d]"
            >
              Вернуться к выбору коллекции
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_16rem]">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Поиск по стране, названию, номиналу, году, описанию или тегам"
              className="min-w-0 rounded-full border border-[#d8b45f]/20 bg-[#173d2d] px-5 py-4 text-white outline-none transition placeholder:text-[#efe8d0]/45 focus:border-[#d8b45f]/70"
            />
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortMode)}
              className="rounded-full border border-[#d8b45f]/20 bg-[#173d2d] px-5 py-4 text-white outline-none transition focus:border-[#d8b45f]/70"
            >
              <option value="alpha">
                {config.category === "blister"
                  ? sortLabels.alpha
                  : "По алфавиту страны"}
              </option>
              <option value="newest">{sortLabels.newest}</option>
              <option value="updated">{sortLabels.updated}</option>
            </select>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length > 0 ? (
              filtered.map((item) => <ItemCard key={item.id} item={item} />)
            ) : (
              <div className="sm:col-span-2 lg:col-span-3">
                <EmptyState search={search} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default function CollectionCatalog({
  items,
}: {
  items: CollectionItem[];
}) {
  return (
    <>
      {catalogConfigs.map((config) => (
        <CatalogSection key={config.category} config={config} items={items} />
      ))}
    </>
  );
}
