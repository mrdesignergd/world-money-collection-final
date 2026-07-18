"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type {
  CollectionGroup,
  CollectionItem,
  Continent,
  KazakhstanCoinGroup,
} from "../data/collection";
import {
  blisterThemes,
  collectionGroups,
  continents,
  countries,
  historicalEntities,
} from "../data/collection";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";

type SortMode = "alpha" | "newest";
type PhotoSide = "front" | "back";
type FlagCode = "fi" | "kz" | "us" | "pl" | "sb";

type CatalogConfig = {
  category: "coin" | "banknote" | "blister";
  anchor: string;
  titleKey: "coinsByContinent" | "banknotesByContinent" | "blistersByTheme";
  eyebrowKey: "coins" | "banknotes" | "blisters";
  descriptionKey: "coinDescription" | "banknoteDescription" | "blisterDescription";
  options: readonly string[];
};

type CatalogOption = Continent | CollectionGroup | string;
type CoinSpecialCategory = "kazakhstanCoins";
type BanknoteSpecialCategory = "kazakhstanBanknotes";

const banknoteOptions: readonly CatalogOption[] = [...continents, "kazakhstanBanknotes", ...collectionGroups];
const coinOptions: readonly CatalogOption[] = [...continents, "kazakhstanCoins", ...collectionGroups];
const kazakhstanCoinGroups: readonly KazakhstanCoinGroup[] = [
  "kazakhstanHistoricalFigures",
  "kazakhstanAnniversaryDates",
  "kazakhstanHistory",
  "kazakhstanTraditions",
  "kazakhstanSevenTreasures",
  "kazakhstanSakaStyle",
  "kazakhstanCities",
  "kazakhstanCirculation",
];

const catalogConfigs: CatalogConfig[] = [
  {
    category: "banknote",
    anchor: "banknotes",
    titleKey: "banknotesByContinent",
    eyebrowKey: "banknotes",
    descriptionKey: "banknoteDescription",
    options: banknoteOptions,
  },
  {
    category: "coin",
    anchor: "coins",
    titleKey: "coinsByContinent",
    eyebrowKey: "coins",
    descriptionKey: "coinDescription",
    options: coinOptions,
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

const countryFlagAliases: Record<string, FlagCode> = {
  finland: "fi",
  suomi: "fi",
  финляндия: "fi",
  финляндияның: "fi",
  kazakhstan: "kz",
  қазақстан: "kz",
  казахстан: "kz",
  "united states": "us",
  "united states of america": "us",
  usa: "us",
  us: "us",
  сша: "us",
  ақш: "us",
  польша: "pl",
  poland: "pl",
  solomon: "sb",
  solomonislands: "sb",
  "solomon islands": "sb",
  "solomon-islands": "sb",
  "соломоновы острова": "sb",
  "соломон аралдары": "sb",
};

function normalizeCountry(country?: string) {
  return (
    country
      ?.trim()
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ") ?? ""
  );
}

function getCountryFlag(country?: string) {
  const normalized = normalizeCountry(country);
  return countryFlagAliases[normalized] ?? null;
}

function FlagSvg({ code }: { code: FlagCode }) {
  if (code === "fi") {
    return (
      <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden="true">
        <rect width="28" height="20" fill="#f8f5ea" />
        <rect x="8" width="4" height="20" fill="#1f5ca8" />
        <rect y="8" width="28" height="4" fill="#1f5ca8" />
      </svg>
    );
  }

  if (code === "kz") {
    return (
      <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden="true">
        <rect width="28" height="20" fill="#35a8d8" />
        <circle cx="14" cy="9" r="3.2" fill="#f2cf7d" />
        <path d="M9 14h10l-5 3-5-3Z" fill="#f2cf7d" />
        <rect x="2" width="2" height="20" fill="#f2cf7d" opacity="0.9" />
      </svg>
    );
  }

  if (code === "us") {
    return (
      <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden="true">
        <rect width="28" height="20" fill="#f8f5ea" />
        {Array.from({ length: 7 }).map((_, index) => (
          <rect key={index} y={index * 3} width="28" height="1.5" fill="#b22234" />
        ))}
        <rect width="12" height="9" fill="#3c3b6e" />
      </svg>
    );
  }

  if (code === "pl") {
    return (
      <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden="true">
        <rect width="28" height="10" fill="#f8f5ea" />
        <rect y="10" width="28" height="10" fill="#dc143c" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 20" className="h-full w-full" aria-hidden="true">
      <rect width="28" height="20" fill="#2d75b8" />
      <polygon points="0,20 28,0 28,4 4,20" fill="#f2cf7d" />
      <polygon points="4,20 28,4 28,20" fill="#1f573f" />
      {[
        [4,3],
        [7,5],
        [4,7],
        [10,3],
        [10,7],
      ].map(([cx, cy]) => (
        <path
          key={`${cx}-${cy}`}
          d={`M${cx} ${cy - 1.25} ${cx + 0.32} ${cy - 0.35}h0.95l-0.76 0.55 0.3 0.9L${cx} ${cy + 0.55}l-0.78 0.55 0.3-0.9-0.76-0.55h0.95L${cx} ${cy - 1.25}Z`}
          fill="#f8f5ea"
        />
      ))}
    </svg>
  );
}

function CountryFlag({
  countryCode,
  countryKey,
  countryName,
  size = "compact",
}: {
  countryCode?: string;
  countryKey?: string;
  countryName?: string;
  size?: "compact" | "card" | "detail";
}) {
  const [failed, setFailed] = useState(false);
  const normalizedCode = countryCode?.trim().toLowerCase();
  const isSwissFlag = normalizedCode === "ch";
  const isNepalFlag = normalizedCode === "np" || countryKey === "nepal";
  const shouldContainFlag = isSwissFlag || isNepalFlag || normalizedCode === "il";
  const sizeClass =
    isSwissFlag
      ? size === "compact"
        ? "h-5 w-5 rounded-[0.25rem] text-[0.5rem]"
        : size === "detail"
          ? "h-10 w-10 rounded-md text-[0.55rem]"
          : "h-11 w-11 rounded-md text-[0.55rem]"
      : isNepalFlag
        ? size === "compact"
          ? "h-6 w-7 rounded-[0.25rem] text-[0.5rem]"
          : size === "detail"
            ? "h-10 w-12 rounded-md text-[0.55rem]"
            : "h-14 w-[4.5rem] rounded-md text-[0.55rem]"
      : size === "card"
      ? "h-8 w-12 rounded-md text-[0.6rem]"
      : size === "detail"
        ? "h-8 w-12 rounded-[0.3rem] text-[0.6rem]"
        : "h-5 w-7 rounded-[0.25rem] text-[0.55rem]";
  const imageClass = isNepalFlag
    ? "h-full w-auto max-w-full object-contain"
    : `h-full w-full ${shouldContainFlag ? "object-contain" : "object-cover"}`;

  return (
    <span
      className={`inline-grid shrink-0 place-items-center overflow-hidden border border-[#d8b45f]/28 bg-[#101311]/55 font-black leading-none text-[#efe8d0]/72 shadow-[0_8px_24px_rgba(0,0,0,0.24)] ${sizeClass}`}
    >
      {normalizedCode && !failed ? (
        <img
          src={`https://flagcdn.com/${normalizedCode}.svg`}
          alt={countryName ? `${countryName} flag` : ""}
          className={imageClass}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        "N/A"
      )}
    </span>
  );
}

function countryEntries(item: CollectionItem, language: Language) {
  if (item.relatedCountries?.length) {
    return item.relatedCountries.map((country) => ({
      key: country.countryKey,
      code: country.countryCode || countries[country.countryKey].code,
      name: countries[country.countryKey][language],
    }));
  }

  if (item.historicalEntityKey) {
    return [
      {
        key: item.historicalEntityKey,
        code: "",
        name: historicalEntities[item.historicalEntityKey][language],
      },
    ];
  }

  if (item.countryKey) {
    return [
      {
        key: item.countryKey,
        code: item.countryCode || countries[item.countryKey].code,
        name: countries[item.countryKey][language],
      },
    ];
  }

  return [];
}

function CountryLine({
  item,
  language,
  size = "compact",
}: {
  item: CollectionItem;
  language: Language;
  size?: "compact" | "detail";
}) {
  const entries = countryEntries(item, language);

  if (!entries.length) return null;
  if (entries.length === 1) {
    return <span>{entries[0].name}</span>;
  }

  return (
    <span className="mt-1 grid min-w-0 gap-1.5 align-middle">
      {entries.map((entry) => (
        <span key={entry.key} className="inline-flex min-w-0 items-center gap-1.5">
          <CountryFlag countryCode={entry.code} countryKey={entry.key} countryName={entry.name} size={size} />
          <span>{entry.name}</span>
        </span>
      ))}
    </span>
  );
}

function countryLabel(item: CollectionItem, language: Language) {
  if (item.historicalEntityKey) return translations.catalog.historicalState[language];
  if (item.relatedCountries && item.relatedCountries.length > 1) {
    return translations.catalog.countries[language];
  }
  return translations.catalog.country[language];
}

function HistoricalMark() {
  return (
    <span className="inline-grid h-8 w-12 shrink-0 place-items-center rounded-md border border-[#d8b45f]/28 bg-[#101311]/55 text-xs font-black text-[#f2cf7d] shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
      H
    </span>
  );
}

function displayCountry(item: CollectionItem, language: Language) {
  if (item.relatedCountries?.length) return item.relatedCountries.map((country) => countries[country.countryKey][language]).join(", ");
  if (item.historicalEntityKey) return historicalEntities[item.historicalEntityKey][language];
  if (item.countryKey) return countries[item.countryKey][language];
  return "";
}

function displayCountryCode(item: CollectionItem) {
  if (item.historicalEntityKey) return "";
  if (item.countryCode) return item.countryCode;
  if (item.countryKey) return countries[item.countryKey].code;
  return "";
}

function isCollectionGroup(option: string): option is CollectionGroup {
  return option === "specialTerritories" || option === "historicalStates";
}

function isCoinSpecialCategory(option: string): option is CoinSpecialCategory {
  return option === "kazakhstanCoins";
}

function isBanknoteSpecialCategory(option: string): option is BanknoteSpecialCategory {
  return option === "kazakhstanBanknotes";
}

function isKazakhstanCoinGroup(option: string): option is KazakhstanCoinGroup {
  return kazakhstanCoinGroups.includes(option as KazakhstanCoinGroup);
}

function optionLabel(option: string, category: CatalogConfig["category"], language: Language) {
  if (category === "blister") {
    return translations.blisterTheme[option as keyof typeof translations.blisterTheme][language];
  }

  if (category === "coin" && isCoinSpecialCategory(option)) {
    return translations.coinSpecialCategory[option][language];
  }

  if (category === "banknote" && isBanknoteSpecialCategory(option)) {
    return countries.kazakhstan[language];
  }

  if (category === "coin" && isKazakhstanCoinGroup(option)) {
    return translations.kazakhstanCoinGroup[option][language];
  }

  if (isCollectionGroup(option)) {
    return translations.collectionGroup[option][language];
  }

  return translations.continent[option as Continent][language];
}

function optionMatches(item: CollectionItem, option: string) {
  if (item.category === "blister") return item.theme === option;
  const group = item.collectionGroup ?? "regular";
  if (item.category === "coin" && isKazakhstanCoinGroup(option)) return item.coinGroup === option;
  if (item.category === "coin" && isCoinSpecialCategory(option)) return item.countryKey === "kazakhstan";
  if (item.category === "banknote" && isBanknoteSpecialCategory(option)) return item.countryKey === "kazakhstan";
  if (isCollectionGroup(option)) return group === option;
  if (item.category === "banknote" && item.countryKey === "kazakhstan") return false;
  return group === "regular" && item.continent === option;
}

function catalogTitle(
  category: CatalogConfig["category"],
  selected: string | null,
  language: Language,
) {
  if (!selected) return "";

  if (category === "blister") {
    return `${translations.nav.blisters[language]}: ${
      translations.blisterTheme[selected as keyof typeof translations.blisterTheme][
        language
      ]
    }`;
  }

  if (isCollectionGroup(selected)) {
    return translations.collectionGroup[selected][language];
  }

  if (category === "coin" && isCoinSpecialCategory(selected)) {
    return translations.coinSpecialCategory[selected][language];
  }

  if (category === "banknote" && isBanknoteSpecialCategory(selected)) {
    return countries.kazakhstan[language];
  }

  if (category === "coin" && isKazakhstanCoinGroup(selected)) {
    return translations.kazakhstanCoinGroup[selected][language];
  }

  const continent = selected as Continent;
  return category === "coin"
    ? translations.coinCatalogTitle[continent][language]
    : translations.banknoteCatalogTitle[continent][language];
}

function localizedOption(item: CollectionItem, language: Language) {
  if (item.category === "blister") {
    return translations.blisterTheme[item.theme][language];
  }

  if (item.collectionGroup !== "regular") {
    return translations.collectionGroup[item.collectionGroup][language];
  }

  if (item.category === "coin" && item.coinGroup) {
    return translations.kazakhstanCoinGroup[item.coinGroup][language];
  }

  if (item.category === "banknote" && item.countryKey === "kazakhstan") {
    return countries.kazakhstan[language];
  }

  if (!item.continent) return "";

  return translations.continent[item.continent][language];
}

function nominalLabel(item: CollectionItem, language: Language) {
  if ("nominalText" in item && item.nominalText) return item.nominalText[language];
  if ("nominal" in item) return item.nominal;
  return "";
}

function searchableText(item: CollectionItem, language: Language) {
  const common = [
    item.title[language],
    item.description[language],
    item.year ?? "",
    nominalLabel(item, language),
    displayCountry(item, language),
    item.tags[language].join(" "),
  ];

  if (item.category === "blister") {
    return [...common, translations.blisterTheme[item.theme][language]]
      .join(" ")
      .toLowerCase();
  }

  const scope =
    item.category === "coin" && item.coinGroup
      ? translations.kazakhstanCoinGroup[item.coinGroup][language]
      : item.collectionGroup === "regular" && item.continent
        ? translations.continent[item.continent][language]
        : translations.collectionGroup[item.collectionGroup][language];

  return [...common, scope]
    .join(" ")
    .toLowerCase();
}

const searchLanguages = ["ru", "kz", "en"] as const;

function globalSearchableText(item: CollectionItem) {
  const values: string[] = [
    item.year ?? "",
    item.addedAt,
    item.updatedAt,
  ];

  searchLanguages.forEach((language) => {
    values.push(
      item.title[language],
      item.description[language],
      nominalLabel(item, language),
      displayCountry(item, language),
      item.tags[language].join(" "),
    );

    if (item.category === "blister") {
      values.push(translations.blisterTheme[item.theme][language]);
    } else {
      if (item.category === "coin" && item.coinGroup) {
        values.push(translations.kazakhstanCoinGroup[item.coinGroup][language]);
      }
      if (item.continent) values.push(translations.continent[item.continent][language]);
      values.push(translations.collectionGroup[item.collectionGroup ?? "regular"][language]);
    }

    item.relatedCountries?.forEach((country) => {
      values.push(countries[country.countryKey][language], country.countryCode);
    });

    if (item.historicalEntityKey) {
      values.push(historicalEntities[item.historicalEntityKey][language]);
    }

    if (item.countryKey) {
      values.push(countries[item.countryKey][language], countries[item.countryKey].code);
    }
  });

  return values.join(" ").toLowerCase();
}

function globalEmptyMessage(category: CatalogConfig["category"], language: Language) {
  if (category === "banknote") return translations.catalog.banknotesNotFound[language];
  if (category === "blister") return translations.catalog.blistersNotFound[language];
  return translations.catalog.coinsNotFound[language];
}

function sortItems(items: CollectionItem[], sort: SortMode, language: Language) {
  return [...items].sort((a, b) => {
    if (sort === "newest") {
      return b.addedAt.localeCompare(a.addedAt);
    }

    const left =
      a.category === "blister" ? a.title[language] : displayCountry(a, language);
    const right =
      b.category === "blister" ? b.title[language] : displayCountry(b, language);
    return left.localeCompare(right, language === "kz" ? "kk" : language);
  });
}

function imageAspectClass(item: CollectionItem, large: boolean) {
  if (item.category === "banknote") return "aspect-[16/9]";
  return large ? "aspect-square min-h-64 sm:min-h-80" : "aspect-[4/3]";
}

function imageFitClass(item: CollectionItem) {
  return item.category === "banknote" ? "object-contain bg-[#101311]/55" : "object-cover";
}

function Placeholder({
  item,
  language,
  label,
  large = false,
}: {
  item: CollectionItem;
  language: Language;
  label?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative isolate min-w-0 overflow-hidden rounded-md border border-[#d8b45f]/18 bg-[linear-gradient(135deg,rgba(216,180,95,0.24),rgba(248,245,234,0.08),rgba(16,19,17,0.35))] ${
        imageAspectClass(item, large)
      }`}
    >
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <div
          className={`mx-auto grid place-items-center rounded-full border border-[#d8b45f]/45 bg-[#101311]/45 font-black text-[#f2cf7d] ${
            large ? "size-20 text-3xl sm:size-24 sm:text-4xl" : "size-16 text-2xl"
          }`}
        >
          {item.category === "coin" ? "¤" : item.category === "banknote" ? "$" : "★"}
        </div>
        {label && (
          <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-[#f2cf7d]">
            {label}
          </p>
        )}
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-[#efe8d0]/70">
          {large
            ? translations.catalog.photoComingSoon[language]
            : translations.catalog.photoSoon[language]}
        </p>
      </div>
    </div>
  );
}

function ItemImage({
  item,
  language,
  src,
  label,
  large = false,
}: {
  item: CollectionItem;
  language: Language;
  src: string;
  label?: string;
  large?: boolean;
}) {
  if (!src) {
    return <Placeholder item={item} language={language} label={label} large={large} />;
  }

  return (
    <figure className="relative isolate min-w-0 overflow-hidden rounded-md">
      <img
        src={src}
        alt={label ? `${item.title[language]} — ${label}` : item.title[language]}
        className={`block w-full rounded-md border border-[#d8b45f]/18 ${
          imageAspectClass(item, large)
        } ${
          imageFitClass(item)
        }`}
      />
      {label && (
        <figcaption className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-[#f2cf7d]">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function DetailPhotoButton({
  item,
  language,
  src,
  label,
  onOpen,
}: {
  item: CollectionItem;
  language: Language;
  src: string;
  label: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative isolate h-full min-w-0 overflow-hidden rounded-lg border border-[#d8b45f]/16 bg-[#101311]/30 p-3 text-left transition hover:border-[#d8b45f]/55 hover:bg-[#10251d]"
    >
      <ItemImage item={item} language={language} src={src} label={label} large />
    </button>
  );
}

function LightboxNavButton({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-[#d8b45f]/35 bg-[#173d2d]/92 text-2xl font-bold text-[#f2cf7d] shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#f2cf7d] hover:bg-[#1f573f]"
      aria-label={direction === "previous" ? "Previous photo" : "Next photo"}
    >
      {direction === "previous" ? "‹" : "›"}
    </button>
  );
}

function ItemCard({
  item,
  language,
  isSelected,
  onSelect,
}: {
  item: CollectionItem;
  language: Language;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const meta = localizedOption(item, language);
  const previewImage = item.imageFront || item.image;
  const country = displayCountry(item, language);
  const code = displayCountryCode(item);

  return (
    <button
      type="button"
      data-item-id={item.id}
      onClick={onSelect}
      className={`group h-full rounded-lg border p-5 text-left transition hover:-translate-y-2 hover:border-[#d8b45f]/60 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] ${
        isSelected
          ? "border-[#d8b45f]/70 bg-[#10251d] shadow-[0_18px_55px_rgba(216,180,95,0.12)]"
          : "border-[#d8b45f]/16 bg-[#173d2d]"
      }`}
    >
      <ItemImage item={item} language={language} src={previewImage} />
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#d8b45f]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f2cf7d]">
          {translations.category[item.category][language]}
        </span>
        <span className="rounded-full bg-[#efe8d0]/10 px-3 py-1 text-xs font-bold text-[#efe8d0]/75">
          {meta}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{item.title[language]}</h3>
      <div className="mt-3 flex items-start justify-between gap-4 text-sm text-[#efe8d0]/72">
        <div className="grid min-w-0 gap-2">
        {country && (
          <p>
            <span>
              {countryLabel(item, language)}:{" "}
              <CountryLine item={item} language={language} />
            </span>
          </p>
        )}
        {"nominal" in item && item.nominal && (
          <p>
            {translations.catalog.nominal[language]}: {nominalLabel(item, language)}
          </p>
        )}
        {item.year && (
          <p>
            {translations.catalog.year[language]}: {item.year}
          </p>
        )}
        </div>
        {item.historicalEntityKey ? (
          <HistoricalMark />
        ) : country && !item.relatedCountries?.length && (
          <CountryFlag countryCode={code} countryKey={"countryKey" in item ? item.countryKey : undefined} countryName={country} size="card" />
        )}
      </div>
      <p className="mt-4 leading-7 text-[#efe8d0]/72">
        {item.description[language]}
      </p>
      {Array.from(new Set(item.tags[language])).length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {Array.from(new Set(item.tags[language])).map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="rounded-full bg-[#101311]/45 px-3 py-1 text-xs text-[#efe8d0]/72"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}

function DetailView({
  item,
  language,
  onClose,
  backLabel,
}: {
  item: CollectionItem;
  language: Language;
  onClose: () => void;
  backLabel?: string;
}) {
  const meta = localizedOption(item, language);
  const country = displayCountry(item, language);
  const code = displayCountryCode(item);
  const [lightboxSide, setLightboxSide] = useState<PhotoSide | null>(null);
  const lightboxPhoto =
    lightboxSide === "front"
      ? {
          src: item.imageFront || item.image,
          label: translations.catalog.obverse[language],
        }
      : lightboxSide === "back"
        ? {
            src: item.imageBack,
            label: translations.catalog.reverse[language],
          }
        : null;

  const switchLightboxSide = () => {
    setLightboxSide((current) => (current === "front" ? "back" : "front"));
  };

  useEffect(() => {
    if (!lightboxSide) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxSide(null);
      }

      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        setLightboxSide((current) => (current === "front" ? "back" : "front"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxSide]);

  return (
    <>
      <article
        data-reveal
        className="mt-8 min-w-0 rounded-lg border border-[#d8b45f]/22 bg-[#173d2d]/88 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-6"
      >
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2cf7d]">
              {translations.catalog.itemDetails[language]}
            </p>
            <h3 className="mt-3 text-3xl font-black text-white">
              {item.title[language]}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-[#efe8d0]/25 bg-[#101311]/45 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d]"
          >
            {backLabel ?? translations.catalog.backToCatalog[language]}
          </button>
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:items-start">
          <div className="grid min-w-0 items-stretch gap-5 md:grid-cols-[repeat(2,minmax(0,1fr))] lg:gap-6">
            <DetailPhotoButton
              item={item}
              language={language}
              src={item.imageFront || item.image}
              label={translations.catalog.obverse[language]}
              onOpen={() => setLightboxSide("front")}
            />
            <DetailPhotoButton
              item={item}
              language={language}
              src={item.imageBack}
              label={translations.catalog.reverse[language]}
              onOpen={() => setLightboxSide("back")}
            />
          </div>

          <div className="min-w-0 rounded-lg border border-[#d8b45f]/16 bg-[#101311]/48 p-5">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-[#d8b45f]/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#f2cf7d]">
                {translations.category[item.category][language]}
              </span>
              <span className="rounded-full bg-[#efe8d0]/10 px-3 py-1 text-xs font-bold text-[#efe8d0]/75">
                {meta}
              </span>
            </div>

            <dl className="mt-6 grid gap-3 text-sm text-[#efe8d0]/76">
            {country && (
              <div>
                <dt className="font-bold text-[#f2cf7d]">
                  {countryLabel(item, language)}
                </dt>
                <dd className="mt-1">
                  {item.historicalEntityKey ? (
                    <span className="inline-flex items-center gap-2">
                      <HistoricalMark />
                      <CountryLine item={item} language={language} size="detail" />
                    </span>
                  ) : (
                    <CountryLine item={item} language={language} size="detail" />
                  )}
                </dd>
              </div>
            )}
              {"nominal" in item && item.nominal && (
                <div>
                  <dt className="font-bold text-[#f2cf7d]">
                    {translations.catalog.nominal[language]}
                  </dt>
                  <dd className="mt-1">{nominalLabel(item, language)}</dd>
                </div>
              )}
              {item.year && (
                <div>
                  <dt className="font-bold text-[#f2cf7d]">
                    {translations.catalog.year[language]}
                  </dt>
                  <dd className="mt-1">{item.year}</dd>
                </div>
              )}
            </dl>

            <p className="mt-6 leading-7 text-[#efe8d0]/78">
              {item.description[language]}
            </p>

            {Array.from(new Set(item.tags[language])).length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {Array.from(new Set(item.tags[language])).map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="rounded-full bg-[#efe8d0]/10 px-3 py-1 text-xs text-[#efe8d0]/76"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050705]/82 p-4 backdrop-blur-sm"
          onClick={() => setLightboxSide(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-lg border border-[#d8b45f]/30 bg-[#101311] p-4 shadow-[0_32px_100px_rgba(0,0,0,0.55)] sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxSide(null)}
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full border border-[#efe8d0]/25 bg-[#101311]/85 font-bold text-[#efe8d0] transition hover:border-[#d8b45f] hover:text-[#f2cf7d]"
              aria-label="Close"
            >
              X
            </button>
            <div className="grid gap-4 pt-8 sm:pt-6">
              <div className="flex items-center justify-center gap-3 sm:hidden">
                <LightboxNavButton direction="previous" onClick={switchLightboxSide} />
                <p className="min-w-0 text-center text-sm font-black uppercase tracking-[0.2em] text-[#f2cf7d]">
                  {lightboxPhoto.label}
                </p>
                <LightboxNavButton direction="next" onClick={switchLightboxSide} />
              </div>
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                <div className="hidden sm:block">
                  <LightboxNavButton direction="previous" onClick={switchLightboxSide} />
                </div>
                <div className="min-w-0">
                  <ItemImage
                    item={item}
                    language={language}
                    src={lightboxPhoto.src}
                    label={lightboxPhoto.label}
                    large
                  />
                </div>
                <div className="hidden sm:block">
                  <LightboxNavButton direction="next" onClick={switchLightboxSide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function EmptyState({
  search,
  language,
  message,
}: {
  search: string;
  language: Language;
  message?: string;
}) {
  return (
    <div className="rounded-lg border border-[#d8b45f]/18 bg-[#173d2d]/72 p-8 text-center">
      <p className="text-lg font-black text-white">
        {search
          ? translations.catalog.nothingFound[language]
          : message ?? translations.catalog.empty[language]}
      </p>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-[#efe8d0]/68">
        {translations.catalog.emptyHint[language]}
      </p>
    </div>
  );
}

function CatalogBreadcrumbs({
  config,
  selected,
  selectedItem,
  language,
  onCollection,
  onCategories,
  onList,
}: {
  config: CatalogConfig | null;
  selected: string | null;
  selectedItem: CollectionItem | null;
  language: Language;
  onCollection: () => void;
  onCategories: () => void;
  onList: () => void;
}) {
  const crumbs = [
    {
      label: translations.catalog.collectionRoot[language],
      onClick: onCollection,
    },
  ];

  if (config) {
    crumbs.push({
      label: translations.nav[config.eyebrowKey][language],
      onClick: onCategories,
    });
  }

  if (config && selected) {
    crumbs.push({
      label: optionLabel(selected, config.category, language),
      onClick: onList,
    });
  }

  if (selectedItem) {
    crumbs.push({
      label: selectedItem.title[language],
      onClick: onList,
    });
  }

  return (
    <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#efe8d0]/62">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 && <span className="text-[#d8b45f]/50">/</span>}
            <button
              type="button"
              onClick={crumb.onClick}
              disabled={isLast}
              className={`transition ${
                isLast
                  ? "cursor-default font-bold text-[#f2cf7d]"
                  : "hover:text-[#f2cf7d]"
              }`}
            >
              {crumb.label}
            </button>
          </span>
        );
      })}
    </nav>
  );
}

function CatalogSection({
  config,
  items,
  language,
  onBackToCollection,
  resetSignal,
  initialSelected,
}: {
  config: CatalogConfig;
  items: CollectionItem[];
  language: Language;
  onBackToCollection: () => void;
  resetSignal: number;
  initialSelected: string | null;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [categorySearch, setCategorySearch] = useState("");
  const [search, setSearch] = useState("");
  const [searchResetKey, setSearchResetKey] = useState(0);
  const [sort, setSort] = useState<SortMode>("alpha");
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailViewRef = useRef<HTMLDivElement | null>(null);
  const previousListScrollY = useRef(0);

  const scrollToSection = () => {
    window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

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

  const globalSearchQuery = categorySearch.trim().toLowerCase();
  const globalSearchResults = useMemo(() => {
    if (!globalSearchQuery) return [];

    return sortItems(
      items.filter(
        (item) =>
          item.category === config.category &&
          globalSearchableText(item).includes(globalSearchQuery),
      ),
      "alpha",
      language,
    );
  }, [config.category, globalSearchQuery, items, language]);

  const selectedTitle = catalogTitle(config.category, selected, language);
  const activeItems = selected ? filtered : globalSearchResults;
  const selectedItem = activeItems.find((item) => item.id === selectedItemId) ?? null;

  useEffect(() => {
    if (selectedItemId && !activeItems.some((item) => item.id === selectedItemId)) {
      setSelectedItemId(null);
    }
  }, [activeItems, selectedItemId]);

  useEffect(() => {
    setSelected(initialSelected);
    setSelectedItemId(null);
    setCategorySearch("");
    setSearch("");
    setSearchResetKey((current) => current + 1);
    scrollToSection();
  }, [initialSelected, resetSignal]);

  useEffect(() => {
    if (!selectedItem || !detailViewRef.current) return;

    window.setTimeout(() => {
      if (!detailViewRef.current) return;
      const top = detailViewRef.current.getBoundingClientRect().top + window.scrollY - 86;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 0);
  }, [selectedItem]);

  const openOption = (option: string) => {
    setSearch("");
    setSearchResetKey((current) => current + 1);
    setSelectedItemId(null);
    setSelected(option);
    scrollToSection();
  };

  const goToCategories = () => {
    setSelectedItemId(null);
    setCategorySearch("");
    setSearch("");
    setSearchResetKey((current) => current + 1);
    setSelected(null);
    scrollToSection();
  };

  const goToList = () => {
    setSelectedItemId(null);
    scrollToSection();
  };

  const closeDetail = () => {
    setSelectedItemId(null);
    window.setTimeout(() => {
      window.scrollTo({ top: previousListScrollY.current, behavior: "smooth" });
    }, 0);
  };

  const openItem = (itemId: string) => {
    previousListScrollY.current = window.scrollY;
    setSelectedItemId(itemId);
  };

  const detailBackLabel =
    config.category === "banknote"
      ? translations.catalog.backToBanknoteList[language]
      : translations.catalog.backToCoinList[language];

  return (
    <section
      id={config.anchor}
      ref={sectionRef}
      className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"
    >
      <CatalogBreadcrumbs
        config={config}
        selected={selected}
        selectedItem={selectedItem}
        language={language}
        onCollection={onBackToCollection}
        onCategories={goToCategories}
        onList={goToList}
      />

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

      {!selected && (
        <>
          <button
            type="button"
            onClick={onBackToCollection}
            className="mb-6 rounded-full border border-[#efe8d0]/25 bg-[#efe8d0]/8 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d]"
          >
            {translations.catalog.backToCollection[language]}
          </button>

          <div className="mb-6">
            <div className="relative md:max-w-xl">
              <input
                value={categorySearch}
                onChange={(event) => {
                  setCategorySearch(event.target.value);
                  setSelectedItemId(null);
                }}
                aria-label={translations.catalog.search[language]}
                placeholder={translations.catalog.searchPlaceholder[language]}
                className="w-full rounded-full border border-[#d8b45f]/20 bg-[#173d2d] px-5 py-4 pr-14 text-white outline-none transition placeholder:text-[#efe8d0]/45 focus:border-[#d8b45f]/70"
              />
              {categorySearch && (
                <button
                  type="button"
                  onClick={() => {
                    setCategorySearch("");
                    setSelectedItemId(null);
                  }}
                  className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-[#efe8d0]/18 bg-[#101311]/55 font-bold text-[#efe8d0]/80 transition hover:border-[#d8b45f] hover:text-[#f2cf7d]"
                  aria-label="Clear search"
                >
                  X
                </button>
              )}
            </div>
          </div>

          {!globalSearchQuery ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => openOption(option)}
                  className="rounded-lg border border-[#d8b45f]/22 bg-[#173d2d] p-5 text-left text-white opacity-100 shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:border-[#d8b45f]/55 hover:bg-[#1c4c36]"
                >
                  <h3 className="text-2xl font-black">
                    {optionLabel(option, config.category, language)}
                  </h3>
                  <p className="mt-4 h-1 w-12 rounded-full bg-[#d8b45f]/55 transition" />
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[#d8b45f]/16 bg-[#101311]/44 p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2cf7d]">
                {translations.catalog.searchResults[language]}
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {globalSearchResults.length > 0 ? (
                  globalSearchResults.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      language={language}
                      isSelected={item.id === selectedItemId}
                      onSelect={() => openItem(item.id)}
                    />
                  ))
                ) : (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <div className="rounded-lg border border-[#d8b45f]/18 bg-[#173d2d]/72 p-8 text-center">
                      <p className="text-lg font-black text-white">
                        {globalEmptyMessage(config.category, language)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {selected && !selectedItem && (
        <div className="mt-10 rounded-lg border border-[#d8b45f]/16 bg-[#101311]/44 p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2cf7d]">
                {translations.catalog.catalog[language]}
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">{selectedTitle}</h3>
            </div>
            <button
              type="button"
              onClick={goToCategories}
              className="rounded-full border border-[#efe8d0]/25 bg-[#efe8d0]/8 px-5 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d]"
            >
              {translations.catalog.backToCategories[language]}
            </button>
          </div>

          {config.category === "coin" && isCoinSpecialCategory(selected) ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {kazakhstanCoinGroups.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => openOption(option)}
                  className="rounded-lg border border-[#d8b45f]/22 bg-[#173d2d] p-5 text-left text-white opacity-100 shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:border-[#d8b45f]/55 hover:bg-[#1c4c36]"
                >
                  <h3 className="text-2xl font-black">
                    {optionLabel(option, config.category, language)}
                  </h3>
                  <p className="mt-4 h-1 w-12 rounded-full bg-[#d8b45f]/55 transition" />
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className="mt-6 grid gap-3 md:grid-cols-[1fr_16rem]">
                <input
                  key={`${selected}-${searchResetKey}`}
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setSelectedItemId(null);
                  }}
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
                </select>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.length > 0 ? (
                  filtered.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      language={language}
                      isSelected={item.id === selectedItemId}
                      onSelect={() => openItem(item.id)}
                    />
                  ))
                ) : (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <EmptyState
                      search={search}
                      language={language}
                      message={
                        !search && config.category === "banknote"
                          ? translations.catalog.banknotesSoon[language]
                          : undefined
                      }
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {selectedItem && (
        <div ref={detailViewRef}>
          <DetailView
            item={selectedItem}
            language={language}
            onClose={closeDetail}
            backLabel={detailBackLabel}
          />
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
  const [activeCategory, setActiveCategory] = useState<CatalogConfig["category"] | null>(null);
  const [initialSelected, setInitialSelected] = useState<string | null>(null);
  const [resetSignal, setResetSignal] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const activeConfig = catalogConfigs.find((config) => config.category === activeCategory) ?? null;

  const scrollToRoot = () => {
    window.setTimeout(() => {
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const openCategory = (category: CatalogConfig["category"]) => {
    setActiveCategory(category);
    setInitialSelected(null);
    setResetSignal((current) => current + 1);
    scrollToRoot();
  };

  const backToCollection = () => {
    setActiveCategory(null);
    setInitialSelected(null);
    scrollToRoot();
  };

  useEffect(() => {
    const parseCatalogHash = (hash: string) => {
      const [anchor, selected] = hash.split(":");
      const hashConfig = catalogConfigs.find((config) => config.anchor === anchor);
      const hashSelected =
        hashConfig && selected && hashConfig.options.includes(selected)
          ? selected
          : null;
      return { hashConfig, hashSelected };
    };

    const openConfig = (hashConfig: CatalogConfig | undefined, hashSelected: string | null) => {
      if (hashConfig) {
        setActiveCategory(hashConfig.category);
        setInitialSelected(hashSelected);
        setResetSignal((current) => current + 1);
      }
    };

    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const { hashConfig, hashSelected } = parseCatalogHash(hash);
      openConfig(hashConfig, hashSelected);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a[href^='#']");
      const href = link?.getAttribute("href")?.replace("#", "");
      if (!href) return;
      const { hashConfig, hashSelected } = parseCatalogHash(href);
      openConfig(hashConfig, hashSelected);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("click", handleAnchorClick);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  if (activeConfig) {
    return (
      <div ref={rootRef}>
        <CatalogSection
          config={activeConfig}
          items={items}
          language={language}
          onBackToCollection={backToCollection}
          resetSignal={resetSignal}
          initialSelected={initialSelected}
        />
      </div>
    );
  }

  return <div ref={rootRef} aria-hidden="true" />;
}
