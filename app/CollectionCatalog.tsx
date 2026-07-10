"use client";

import { useMemo, useState } from "react";
import type {
  CollectionItem,
} from "../data/collection";
import { blisterThemes, continents } from "../data/collection";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";

type SortMode = "alpha" | "newest" | "updated";

type CatalogConfig = {
  category: "coin" | "banknote" | "blister";
  anchor: string;
  titleKey: "coinsByContinent" | "banknotesByContinent" | "blistersByTheme";
  eyebrowKey: "coins" | "banknotes" | "blisters";
  descriptionKey: "coinDescription" | "banknoteDescription" | "blisterDescription";
  options: readonly string[];
};

const catalogConfigs: CatalogConfig[] = [
  {
    category: "banknote",
    anchor: "banknotes",
    titleKey: "banknotesByContinent",
    eyebrowKey: "banknotes",
    descriptionKey: "banknoteDescription",
    options: continents,
  },
  {
    category: "coin",
    anchor: "coins",
    titleKey: "coinsByContinent",
    eyebrowKey: "coins",
    descriptionKey: "coinDescription",
    options: continents,
  },
  {
    category: "blister",
    anchor: "blisters",
    titleKey: "blistersByTheme",
    eyebrowKey: "blisters",
    descriptionKey: "blisterDescription",
    options: blisterThemes,
  },
];

function optionMatches(item: CollectionItem, option: string) {
  if (item.category === "blister") return item.theme === option;
  return item.continent === option;
}

function localizedOption(item: CollectionItem, language: Language) {
  if (item.category === "blister") {
    return translations.blisterTheme[item.theme][language];
  }

  return translations.continent[item.continent][language];
}

function searchableText(item: CollectionItem, language: Language) {
  const common = [
    item.title[language],
    item.description[language],
    item.year ?? "",
    item.country ?? "",
    item.tags[language].join(" "),
  ];

  if (item.category === "blister") {
    return [...common, translations.blisterTheme[item.theme][language]]
      .join(" ")
      .toLowerCase();
  }

  return [...common, item.nominal, translations.continent[item.continent][language]]
    .join(" ")
    .toLowerCase();
}

function sortItems(items: CollectionItem[], sort: SortMode, language: Language) {
  return [...items].sort((a, b) => {
    if (sort === "newest") {
      return b.addedAt.localeCompare(a.addedAt);
    }

    if (sort === "updated") {
      return b.updatedAt.localeCompare(a.updatedAt);
    }

    const left = a.category === "blister" ? a.title[language] : a.country;
    const right = b.category === "blister" ? b.title[language] : b.country;
    return left.localeCompare(right, language === "kz" ? "kk" : language);
  });
}

function Placeholder({
  item,
  language,
}: {
  item: CollectionItem;
  language: Language;
}) {
  return (
    <div className="grid aspect-[4/3] place-items-center rounded-md border border-[#d8b45f]/18 bg-[linear-gradient(135deg,rgba(216,180,95,0.24),rgba(248,245,234,0.08),rgba(16,19,17,0.35))]">
      <div className="text-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full border border-[#d8b45f]/45 bg-[#101311]/45 text-2xl font-black text-[#f2cf7d]">
          {item.category === "coin" ? "¤" : item.category === "banknote" ? "$" : "★"}
        </div>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#efe8d0]/70">
          {translations.catalog.photoSoon[language]}
        </p>
      </div>
    </div>
  );
}

function ItemCard({
  item,
  language,
}: {
  item: CollectionItem;
  language: Language;
}) {
  const meta = localizedOption(item, language);

  return (
    <article className="group rounded-lg border border-[#d8b45f]/16 bg-[#173d2d] p-5 transition hover:-translate-y-2 hover:border-[#d8b45f]/60 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)]">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title[language]}
          className="aspect-[4/3] w-full rounded-md border border-[#d8b45f]/18 object-cover"
        />
      ) : (
        <Placeholder item={item} language={language} />
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#d8b45f]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f2cf7d]">
          {translations.category[item.category][language]}
        </span>
        <span className="rounded-full bg-[#efe8d0]/10 px-3 py-1 text-xs font-bold text-[#efe8d0]/75">
          {meta}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{item.title[language]}</h3>
      <div className="mt-3 grid gap-2 text-sm text-[#efe8d0]/72">
        {item.country && (
          <p>
            {translations.catalog.country[language]}: {item.country}
          </p>
        )}
        {"nominal" in item && item.nominal && (
          <p>
            {translations.catalog.nominal[language]}: {item.nominal}
          </p>
        )}
        {item.year && (
          <p>
            {translations.catalog.year[language]}: {item.year}
          </p>
        )}
      </div>
      <p className="mt-4 leading-7 text-[#efe8d0]/72">
        {item.description[language]}
      </p>
      {item.tags[language].length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags[language].map((tag) => (
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

function EmptyState({
  search,
  language,
}: {
  search: string;
  language: Language;
}) {
  return (
    <div className="rounded-lg border border-[#d8b45f]/18 bg-[#173d2d]/72 p-8 text-center">
      <p className="text-lg font-black text-white">
        {search
          ? translations.catalog.nothingFound[language]
          : translations.catalog.empty[language]}
      </p>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-[#efe8d0]/68">
        {translations.catalog.emptyHint[language]}
      </p>
    </div>
  );
}

function CatalogSection({
  config,
  items,
  language,
}: {
  config: CatalogConfig;
  items: CollectionItem[];
  language: Language;
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
      ? scoped.filter((item) => searchableText(item, language).includes(query))
      : scoped;

    return sortItems(searched, sort, language);
  }, [config.category, items, language, search, selected, sort]);

  const selectedTitle =
    config.category === "blister"
      ? `${translations.nav.blisters[language]}: ${
          selected ? translations.blisterTheme[selected as keyof typeof translations.blisterTheme][language] : ""
        }`
      : `${translations.nav[config.eyebrowKey][language]} ${
          selected ? translations.continent[selected as keyof typeof translations.continent][language] : ""
        }`;

  return (
    <section
      id={config.anchor}
      className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"
    >
      <div data-reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            {translations.nav[config.eyebrowKey][language]}
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            {translations.catalog[config.titleKey][language]}
          </h2>
        </div>
        <p className="max-w-lg text-[#efe8d0]/72">
          {translations.catalog[config.descriptionKey][language]}
        </p>
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
            <h3 className="text-2xl font-black">
              {config.category === "blister"
                ? translations.blisterTheme[
                    option as keyof typeof translations.blisterTheme
                  ][language]
                : translations.continent[
                    option as keyof typeof translations.continent
                  ][language]}
            </h3>
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
                {translations.catalog.catalog[language]}
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">{selectedTitle}</h3>
            </div>
            <a
              href="#collection"
              className="rounded-full border border-[#efe8d0]/25 bg-[#efe8d0]/8 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d]"
            >
              {translations.catalog.back[language]}
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_16rem]">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label={translations.catalog.search[language]}
              placeholder={translations.catalog.searchPlaceholder[language]}
              className="min-w-0 rounded-full border border-[#d8b45f]/20 bg-[#173d2d] px-5 py-4 text-white outline-none transition placeholder:text-[#efe8d0]/45 focus:border-[#d8b45f]/70"
            />
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortMode)}
              aria-label={translations.catalog.sort[language]}
              className="rounded-full border border-[#d8b45f]/20 bg-[#173d2d] px-5 py-4 text-white outline-none transition focus:border-[#d8b45f]/70"
            >
              <option value="alpha">
                {config.category === "blister"
                  ? translations.catalog.alpha[language]
                  : translations.catalog.alphaCountry[language]}
              </option>
              <option value="newest">{translations.catalog.newest[language]}</option>
              <option value="updated">{translations.catalog.updated[language]}</option>
            </select>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <ItemCard key={item.id} item={item} language={language} />
              ))
            ) : (
              <div className="sm:col-span-2 lg:col-span-3">
                <EmptyState search={search} language={language} />
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
  language,
}: {
  items: CollectionItem[];
  language: Language;
}) {
  return (
    <>
      {catalogConfigs.map((config) => (
        <CatalogSection
          key={config.category}
          config={config}
          items={items}
          language={language}
        />
      ))}
    </>
  );
}
