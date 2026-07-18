"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import CollectionCatalog from "./CollectionCatalog";
import MobileNav from "./MobileNav";
import ScrollReveal from "./ScrollReveal";
import { collection } from "../data/collection";
import type { CollectionCategory } from "../data/collection";
import type { Language } from "../data/translations";
import { languages, translations } from "../data/translations";

const navKeys = [
  ["about", "#about"],
  ["coins", "#coins"],
  ["banknotes", "#banknotes"],
  ["blisters", "#blisters"],
  ["facts", "#facts"],
  ["contacts", "#contacts"],
] as const;

const collectionSectionKeys = [
  {
    titleKey: "banknotesTitle",
    descriptionKey: "banknotesDescription",
    href: "#banknotes",
  },
  {
    titleKey: "coinsTitle",
    descriptionKey: "coinsDescription",
    href: "#coins",
  },
  {
    titleKey: "blistersTitle",
    descriptionKey: "blistersDescription",
    href: "#blisters",
  },
] as const;

const contacts = [
  {
    label: "WhatsApp",
    value: "+7 778 386 63 88",
    href: "https://wa.me/77783866388",
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: "mr.designer.gd",
    href: "https://www.instagram.com/mr.designer.gd/",
    icon: "instagram",
  },
  {
    label: "Email",
    value: "mr.designer.gd@gmail.com",
    href: "mailto:mr.designer.gd@gmail.com",
    icon: "email",
  },
];

type MoneyCategory = Extract<CollectionCategory, "coin" | "banknote">;

function getItemCountByCategory(category: CollectionCategory) {
  return collection.filter((item) => item.category === category).length;
}

function getCountryStatsByCategory(category: MoneyCategory) {
  const categoryItems = collection.filter((item) => item.category === category);

  const countryKeys = new Set(
    categoryItems
      .filter((item) => (item.collectionGroup ?? "regular") === "regular")
      .flatMap((item) => {
        const keys =
          item.countryKey && item.countryKey !== "europeanUnion" ? [item.countryKey] : [];
        const relatedKeys = item.relatedCountries?.map((country) => country.countryKey) ?? [];
        return [...keys, ...relatedKeys];
      }),
  );

  const specialTerritoryKeys = new Set(
    categoryItems
      .filter((item) => item.collectionGroup === "specialTerritories")
      .flatMap((item) => {
        const keys = item.countryKey ? [item.countryKey] : [];
        const relatedKeys = item.relatedCountries?.map((country) => country.countryKey) ?? [];
        return [...keys, ...relatedKeys];
      }),
  );

  const historicalStateKeys = new Set(
    categoryItems
      .filter((item) => item.collectionGroup === "historicalStates" && item.historicalEntityKey)
      .map((item) => item.historicalEntityKey),
  );

  return {
    countriesCount: countryKeys.size,
    specialTerritoriesCount: specialTerritoryKeys.size,
    historicalStatesCount: historicalStateKeys.size,
  };
}

function ContactIcon({ type }: { type: string }) {
  if (type === "instagram") {
    return (
      <>
        <rect x="5.25" y="5.25" width="13.5" height="13.5" rx="4.2" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="16.35" cy="7.65" r="0.55" />
      </>
    );
  }

  if (type === "email") {
    return (
      <>
        <rect x="4.75" y="6.5" width="14.5" height="11" rx="2.4" />
        <path d="m6.2 8.4 5.8 4.3 5.8-4.3" />
      </>
    );
  }

  return (
    <>
      <path d="M7.25 18.15 5.8 20l.45-2.55A7.05 7.05 0 1 1 9 19.1" />
      <path d="M9.65 8.75c.2-.25.45-.32.75-.2l.95.38c.3.12.43.38.32.7l-.28.78c-.08.23-.03.45.14.62.58.7 1.25 1.27 2 1.72.23.13.45.13.66-.02l.68-.5c.27-.2.55-.17.8.06l.78.72c.24.22.3.5.13.78-.27.46-.63.82-1.08 1.08-.34.2-.75.27-1.22.2-1.35-.2-2.62-.88-3.8-2.03-1.17-1.14-1.88-2.38-2.13-3.7-.08-.42.02-.78.3-1.1l.52-.6Z" />
    </>
  );
}

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="flex shrink-0 rounded-full border border-[#d8b45f]/20 bg-[#173d2d]/72 p-1">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
            language === item.code
              ? "bg-[#d8b45f] text-[#101311]"
              : "text-[#efe8d0]/75 hover:bg-[#efe8d0]/10 hover:text-[#f2cf7d]"
          }`}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    const stored = window.localStorage.getItem("wmc-language");
    if (stored === "ru" || stored === "kz" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("wmc-language", nextLanguage);
  };

  const navLinks = useMemo(
    () =>
      navKeys.map(([key, href]) => ({
        label: translations.nav[key][language],
        href,
      })),
    [language],
  );

  const coinCount = getItemCountByCategory("coin");
  const banknoteCount = getItemCountByCategory("banknote");
  const blisterCount = getItemCountByCategory("blister");
  const countryStatsByCategory = {
    coin: getCountryStatsByCategory("coin"),
    banknote: getCountryStatsByCategory("banknote"),
  };

  const totalStats = [
    {
      value: coinCount,
      label: translations.stats.coins[language],
      href: "#coins",
    },
    {
      value: banknoteCount,
      label: translations.stats.banknotes[language],
      href: "#banknotes",
    },
    {
      value: blisterCount,
      label: translations.stats.blisters[language],
      href: "#blisters",
    },
  ];

  const coinGeographyStats = [
    {
      value: countryStatsByCategory.coin.countriesCount,
      label: translations.stats.countries[language],
      href: "#coins",
    },
    {
      value: countryStatsByCategory.coin.specialTerritoriesCount,
      label: translations.stats.specialTerritories[language],
      href: "#coins:specialTerritories",
    },
    {
      value: countryStatsByCategory.coin.historicalStatesCount,
      label: translations.stats.historicalStates[language],
      href: "#coins:historicalStates",
    },
  ];

  const banknoteGeographyStats = [
    {
      value: countryStatsByCategory.banknote.countriesCount,
      label: translations.stats.countries[language],
      href: "#banknotes",
    },
    {
      value: countryStatsByCategory.banknote.specialTerritoriesCount,
      label: translations.stats.specialTerritories[language],
      href: "#banknotes:specialTerritories",
    },
    {
      value: countryStatsByCategory.banknote.historicalStatesCount,
      label: translations.stats.historicalStates[language],
      href: "#banknotes:historicalStates",
    },
  ];

  const geographyGroups = [
    {
      title: translations.stats.coinGeography[language],
      items: coinGeographyStats,
    },
    {
      title: translations.stats.banknoteGeography[language],
      items: banknoteGeographyStats,
    },
  ];

  return (
    <main
      lang={language === "kz" ? "kk" : language}
      className={`min-h-screen overflow-hidden bg-[#101311] text-[#f8f5ea] ${
        language === "kz" ? "language-kz" : ""
      }`}
    >
      <ScrollReveal />
      <div className="pointer-events-none fixed inset-0 opacity-70 [background:radial-gradient(circle_at_18%_12%,rgba(216,180,95,0.13),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(28,76,54,0.45),transparent_30%),linear-gradient(180deg,#101311_0%,#171a17_48%,#0d100e_100%)]" />

      <header className="sticky top-0 z-50 border-b border-[#d8b45f]/15 bg-[#101311]/88 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#" className="group flex min-w-0 items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-[#d8b45f]/70 bg-[#173d2d] text-sm font-bold text-[#f2cf7d] transition group-hover:scale-105">
              W
            </span>
            <span className="truncate text-base font-semibold tracking-wide text-white sm:text-lg">
              World Money Collection
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-[#efe8d0]/80 transition hover:bg-[#193e2f] hover:text-[#f2cf7d] lg:px-4"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher language={language} onChange={changeLanguage} />
            <MobileNav items={navLinks} menuLabel={translations.nav.menu[language]} />
          </div>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:py-16 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8">
        <div>
          <p data-hero-reveal style={{ "--hero-delay": "40ms" } as CSSProperties} className="mb-5 inline-flex rounded-full border border-[#d8b45f]/35 bg-[#173d2d]/80 px-4 py-2 text-sm font-medium leading-5 text-[#f2cf7d]">
            {translations.hero.badge[language]}
          </p>
          <h1 data-hero-reveal style={{ "--hero-delay": "120ms" } as CSSProperties} className="max-w-4xl text-4xl font-black leading-[1.06] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {translations.hero.title[language]}
          </h1>
          <p data-hero-reveal style={{ "--hero-delay": "220ms" } as CSSProperties} className="mt-5 max-w-2xl text-base leading-7 text-[#efe8d0]/78 sm:mt-6 sm:text-lg sm:leading-8">
            {translations.hero.lead[language]}{" "}
            {translations.hero.description[language]}
          </p>
          <div data-hero-reveal style={{ "--hero-delay": "330ms" } as CSSProperties} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#collection"
              className="w-full rounded-full bg-[#d8b45f] px-5 py-4 text-center font-bold text-[#101311] shadow-[0_16px_45px_rgba(216,180,95,0.24)] transition hover:-translate-y-1 hover:bg-[#f2cf7d] sm:w-auto sm:px-7"
            >
              {translations.hero.cta[language]}
            </a>
          </div>
        </div>

        <div data-hero-reveal style={{ "--hero-delay": "470ms" } as CSSProperties} className="relative mx-auto grid w-full max-w-[360px] grid-cols-2 items-start gap-4 overflow-hidden pb-2 sm:max-w-[520px] sm:gap-5 lg:max-w-[520px]">
          <div className="absolute inset-x-2 bottom-5 top-8 rounded-3xl border border-[#d8b45f]/15 bg-[#173d2d]/50 shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:inset-x-8 sm:bottom-8 sm:top-16 sm:rounded-[2rem]" />
          <div className="absolute left-4 top-8 h-36 w-36 rounded-full border border-[#d8b45f]/25 bg-[#efe8d0]/8 blur-2xl sm:h-44 sm:w-44" />
          <div className="absolute bottom-12 right-2 h-40 w-40 rounded-full border border-[#d8b45f]/20 bg-[#d8b45f]/10 blur-2xl sm:right-4 sm:h-56 sm:w-56" />

          <div className="relative z-10 order-1 h-36 w-36 justify-self-start rounded-full border-[10px] border-[#d8b45f] bg-[#173d2d] shadow-[0_35px_90px_rgba(0,0,0,0.45)] transition hover:rotate-6 sm:h-48 sm:w-48 sm:border-[14px] lg:h-56 lg:w-56 lg:border-[16px]">
            <div className="grid h-full place-items-center rounded-full border border-[#f8f5ea]/35 bg-[radial-gradient(circle_at_35%_28%,rgba(242,207,125,0.28),transparent_28%),linear-gradient(145deg,#1f573f,#10251d)]">
              <div className="grid size-[4.5rem] place-items-center rounded-full border border-[#f2cf7d]/50 bg-[#101311]/35 sm:size-24 lg:size-28">
                <span className="text-5xl font-black text-[#f2cf7d] sm:text-6xl lg:text-7xl">
                  $
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 order-3 col-span-2 w-full rotate-[-2deg] rounded-2xl border border-[#d8b45f]/35 bg-[#efe8d0] p-4 text-[#173d2d] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:rotate-[-1deg] sm:p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#173d2d]/55 sm:text-xs sm:tracking-[0.28em]">
                  {translations.visual.banknote[language]}
                </p>
                <p className="mt-1 text-xl font-black sm:mt-2 sm:text-2xl">
                  {translations.visual.collection[language]}
                </p>
              </div>
              <span className="rounded-full bg-[#d8b45f] px-2.5 py-1 text-xs font-bold sm:px-3 sm:text-sm">
                2026
              </span>
            </div>
            <div className="mt-6 h-12 rounded-xl bg-[repeating-linear-gradient(135deg,#173d2d_0_8px,#1f573f_8px_16px)] opacity-90 sm:mt-10 sm:h-16" />
            <p className="mt-4 text-xs leading-5 text-[#173d2d]/70 sm:mt-5 sm:text-sm sm:leading-6">
              {translations.visual.note[language]}
            </p>
          </div>

          <div className="relative z-20 order-2 w-32 justify-self-end rounded-xl border border-[#d8b45f]/30 bg-[#101311]/88 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.32)] backdrop-blur transition hover:-translate-y-1 sm:w-40 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f2cf7d] sm:text-xs sm:tracking-[0.22em]">
              {translations.visual.country[language]}
            </p>
            <p className="mt-1 text-lg font-black text-white sm:mt-2 sm:text-xl">France</p>
            <p className="mt-1 text-xs text-[#efe8d0]/62">Europe series</p>
          </div>

          <div className="relative z-20 order-4 w-28 justify-self-start rounded-xl border border-[#efe8d0]/18 bg-[#173d2d]/92 p-3 shadow-[0_18px_48px_rgba(0,0,0,0.34)] backdrop-blur transition hover:-translate-y-1 sm:w-36 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f2cf7d] sm:text-xs sm:tracking-[0.22em]">
              {translations.visual.year[language]}
            </p>
            <p className="mt-1 text-xl font-black text-white sm:mt-2 sm:text-2xl">2002</p>
          </div>

          <div className="relative z-20 order-5 w-36 justify-self-end rounded-xl border border-[#d8b45f]/35 bg-[#efe8d0] p-3 text-[#173d2d] shadow-[0_20px_50px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 sm:w-44 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#173d2d]/60 sm:text-xs sm:tracking-[0.22em]">
              {translations.visual.nominal[language]}
            </p>
            <p className="mt-1 text-xl font-black sm:mt-2 sm:text-2xl">2 Euro</p>
          </div>

          <div className="absolute left-1/2 top-6 hidden w-40 -translate-x-1/2 rounded-xl border border-[#d8b45f]/20 bg-[#efe8d0]/10 p-3 text-center backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f2cf7d]">
              {translations.visual.curated[language]}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            {translations.stats.total[language]}
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {totalStats.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                data-reveal
                data-reveal-delay={index * 80}
                className="block cursor-pointer rounded-lg border border-[#d8b45f]/18 bg-[#efe8d0]/7 p-4 transition hover:-translate-y-1 hover:border-[#d8b45f]/55 hover:bg-[#173d2d] focus:outline-none focus-visible:border-[#f2cf7d] focus-visible:ring-2 focus-visible:ring-[#d8b45f]/35 sm:p-6"
              >
                <p className="text-3xl font-black text-[#f2cf7d] sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#efe8d0]/65 sm:text-sm sm:tracking-[0.2em]">
                  {item.label}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {geographyGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              data-reveal
              data-reveal-delay={220 + groupIndex * 120}
              className="rounded-lg border border-[#d8b45f]/12 bg-[#173d2d]/42 p-4 sm:p-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-[#f2cf7d]">
                {group.title}
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {group.items.map((item, index) => (
                  <a
                    key={`${group.title}-${item.label}`}
                    href={item.href}
                    data-reveal
                    data-reveal-delay={300 + groupIndex * 120 + index * 70}
                    className="block cursor-pointer rounded-lg border border-[#d8b45f]/18 bg-[#efe8d0]/7 p-4 transition hover:-translate-y-1 hover:border-[#d8b45f]/55 hover:bg-[#173d2d] focus:outline-none focus-visible:border-[#f2cf7d] focus-visible:ring-2 focus-visible:ring-[#d8b45f]/35 sm:p-5"
                  >
                    <p className="text-3xl font-black text-[#f2cf7d]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#efe8d0]/65">
                      {item.label}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="collection" className="relative z-10 border-y border-[#d8b45f]/10 bg-[#173d2d]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div data-reveal className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
              {translations.collection.eyebrow[language]}
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              {translations.collection.title[language]}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {collectionSectionKeys.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                data-reveal
                data-reveal-delay={index * 100}
                className="group rounded-lg border border-[#d8b45f]/18 bg-[#101311]/58 p-6 transition hover:-translate-y-2 hover:border-[#d8b45f]/65 hover:bg-[#10251d]"
              >
                <span className="grid size-14 place-items-center rounded-full border border-[#d8b45f]/45 bg-[#173d2d] text-xl font-black text-[#f2cf7d] transition group-hover:scale-105">
                  {index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-black text-white">
                  {translations.collection[item.titleKey][language]}
                </h3>
                <p className="mt-4 leading-7 text-[#efe8d0]/72">
                  {translations.collection[item.descriptionKey][language]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CollectionCatalog items={collection} language={language} />

      <section id="facts" className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            {translations.facts.eyebrow[language]}
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            {translations.facts.title[language]}
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-10">
          {translations.facts.cards.map((story, index) => (
            <article
              key={index}
              data-reveal
              data-reveal-delay={index * 110}
              className="rounded-lg border border-[#d8b45f]/15 bg-[#173d2d]/72 p-5 transition hover:-translate-y-1 hover:border-[#d8b45f]/55 sm:p-6"
            >
              <span className="text-sm font-black text-[#f2cf7d]">
                0{index + 1}
              </span>
              <p className="mt-5 text-base leading-7 text-[#efe8d0]/82 sm:text-lg sm:leading-8">
                {story[language]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contacts" className="relative z-10 border-t border-[#d8b45f]/10 bg-[#173d2d]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div data-reveal className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
              {translations.contacts.title[language]}
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              {translations.contacts.description[language]}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {contacts.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-reveal
                data-reveal-delay={index * 100}
                className="group rounded-lg border border-[#d8b45f]/18 bg-[#101311]/58 p-6 text-center transition hover:-translate-y-2 hover:border-[#d8b45f]/65"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mx-auto size-6 fill-none stroke-[#efe8d0] transition group-hover:scale-110 group-hover:stroke-[#f2cf7d]"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <ContactIcon type={item.icon} />
                </svg>
                <h3 className="mt-5 text-xl font-black text-white">{item.label}</h3>
                <p className="mt-2 break-words text-[#efe8d0]/72">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
