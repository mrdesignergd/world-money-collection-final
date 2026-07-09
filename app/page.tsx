import type { CSSProperties } from "react";
import MobileNav from "./MobileNav";
import ScrollReveal from "./ScrollReveal";

const navItems = ["О коллекции", "Монеты", "Купюры", "Галерея", "FAQ"];

const stats = [
  { value: "25+", label: "монет" },
  { value: "10+", label: "стран" },
  { value: "5+", label: "купюр" },
  { value: "1", label: "онлайн-музей" },
];

const coins = [
  {
    name: "Памятная монета Европы",
    country: "Франция",
    year: "2002",
    detail: "Лаконичный дизайн, тонкий рельеф и история новой валютной эпохи.",
  },
  {
    name: "Классический пенни",
    country: "Великобритания",
    year: "1998",
    detail: "Небольшая монета с узнаваемым профилем и теплым медным оттенком.",
  },
  {
    name: "Монета путешественника",
    country: "Турция",
    year: "2015",
    detail: "Современная чеканка, привезенная как память о поездке.",
  },
];

const banknotes = [
  {
    name: "Молочная купюра",
    country: "Казахстан",
    tone: "Бирюзовые и золотые элементы",
  },
  {
    name: "Городская серия",
    country: "Польша",
    tone: "Архитектура, тонкие линии и защитные узоры",
  },
  {
    name: "Исторический портрет",
    country: "США",
    tone: "Классическая палитра и музейная фактура",
  },
];

const stories = [
  "Самые маленькие номиналы часто рассказывают о повседневной жизни страны лучше редких юбилейных выпусков.",
  "На купюрах можно встретить скрытые элементы: микротекст, водяные знаки и орнаменты, видимые только под углом.",
  "Монеты из путешествий сохраняют не только стоимость, но и момент: город, маршрут, разговор или случайную находку.",
];

const galleryTiles = [
  "Редкие монеты",
  "Купюры Азии",
  "Европейские выпуски",
  "Памятные серии",
  "Детали чеканки",
  "Будущие находки",
];

const faqs = [
  {
    question: "Это настоящая коллекция?",
    answer: "Да, сайт задуман как личный онлайн-каталог для монет и купюр из разных стран.",
  },
  {
    question: "Можно ли будет добавить фотографии?",
    answer: "Да, галерея уже подготовлена под будущие снимки коллекции.",
  },
  {
    question: "Нужен ли сервер или база данных?",
    answer: "Пока нет. Весь контент находится прямо в коде сайта.",
  },
];

function sectionId(label: string) {
  if (label === "О коллекции") return "about";
  if (label === "Монеты") return "coins";
  if (label === "Купюры") return "banknotes";
  if (label === "Галерея") return "gallery";
  return "faq";
}

function sectionHref(label: string) {
  return `#${sectionId(label)}`;
}

const navLinks = navItems.map((item) => ({
  label: item,
  href: sectionHref(item),
}));

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101311] text-[#f8f5ea]">
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
            {navItems.map((item) => (
              <a
                key={item}
                href={sectionHref(item)}
                className="rounded-full px-4 py-2 text-sm text-[#efe8d0]/80 transition hover:bg-[#193e2f] hover:text-[#f2cf7d]"
              >
                {item}
              </a>
            ))}
          </div>
          <MobileNav items={navLinks} />
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:py-16 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8">
        <div>
          <p data-hero-reveal style={{ "--hero-delay": "40ms" } as CSSProperties} className="mb-5 inline-flex rounded-full border border-[#d8b45f]/35 bg-[#173d2d]/80 px-4 py-2 text-sm font-medium leading-5 text-[#f2cf7d]">
            Личный онлайн-музей монет и купюр
          </p>
          <h1 data-hero-reveal style={{ "--hero-delay": "120ms" } as CSSProperties} className="max-w-4xl text-4xl font-black leading-[1.06] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Деньги мира как маленькие артефакты истории
          </h1>
          <p data-hero-reveal style={{ "--hero-delay": "220ms" } as CSSProperties} className="mt-5 max-w-2xl text-base leading-7 text-[#efe8d0]/78 sm:mt-6 sm:text-lg sm:leading-8">
            World Money Collection — это мой личный цифровой архив монет и купюр
            из разных стран. Здесь каждая находка хранит свою историю: страну,
            время, символы и детали, которые делают деньги частью культуры.
          </p>
          <div data-hero-reveal style={{ "--hero-delay": "330ms" } as CSSProperties} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#coins"
              className="w-full rounded-full bg-[#d8b45f] px-5 py-4 text-center font-bold text-[#101311] shadow-[0_16px_45px_rgba(216,180,95,0.24)] transition hover:-translate-y-1 hover:bg-[#f2cf7d] sm:w-auto sm:px-7"
            >
              Смотреть коллекцию
            </a>
            <a
              href="#gallery"
              className="w-full rounded-full border border-[#efe8d0]/25 bg-[#efe8d0]/8 px-5 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-[#d8b45f] hover:text-[#f2cf7d] sm:w-auto sm:px-7"
            >
              Открыть музей монет
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
                  Banknote
                </p>
                <p className="mt-1 text-xl font-black sm:mt-2 sm:text-2xl">Collection</p>
              </div>
              <span className="rounded-full bg-[#d8b45f] px-2.5 py-1 text-xs font-bold sm:px-3 sm:text-sm">
                2026
              </span>
            </div>
            <div className="mt-6 h-12 rounded-xl bg-[repeating-linear-gradient(135deg,#173d2d_0_8px,#1f573f_8px_16px)] opacity-90 sm:mt-10 sm:h-16" />
            <p className="mt-4 text-xs leading-5 text-[#173d2d]/70 sm:mt-5 sm:text-sm sm:leading-6">
              Место для будущей купюры, страны, года выпуска и заметки о находке.
            </p>
          </div>

          <div className="relative z-20 order-2 w-32 justify-self-end rounded-xl border border-[#d8b45f]/30 bg-[#101311]/88 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.32)] backdrop-blur transition hover:-translate-y-1 sm:w-40 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f2cf7d] sm:text-xs sm:tracking-[0.22em]">
              Country
            </p>
            <p className="mt-1 text-lg font-black text-white sm:mt-2 sm:text-xl">France</p>
            <p className="mt-1 text-xs text-[#efe8d0]/62">Europe series</p>
          </div>

          <div className="relative z-20 order-4 w-28 justify-self-start rounded-xl border border-[#efe8d0]/18 bg-[#173d2d]/92 p-3 shadow-[0_18px_48px_rgba(0,0,0,0.34)] backdrop-blur transition hover:-translate-y-1 sm:w-36 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f2cf7d] sm:text-xs sm:tracking-[0.22em]">
              Year
            </p>
            <p className="mt-1 text-xl font-black text-white sm:mt-2 sm:text-2xl">2002</p>
          </div>

          <div className="relative z-20 order-5 w-36 justify-self-end rounded-xl border border-[#d8b45f]/35 bg-[#efe8d0] p-3 text-[#173d2d] shadow-[0_20px_50px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 sm:w-44 sm:p-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#173d2d]/60 sm:text-xs sm:tracking-[0.22em]">
              Nominal
            </p>
            <p className="mt-1 text-xl font-black sm:mt-2 sm:text-2xl">2 Euro</p>
          </div>

          <div className="absolute left-1/2 top-6 hidden w-40 -translate-x-1/2 rounded-xl border border-[#d8b45f]/20 bg-[#efe8d0]/10 p-3 text-center backdrop-blur md:block">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f2cf7d]">
              Curated item
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-[#d8b45f]/10 bg-[#173d2d]">
        <div data-reveal className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
              О коллекции
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Архив путешествий, стран и деталей
            </h2>
          </div>
          <p className="text-base leading-7 text-[#efe8d0]/82 sm:text-lg sm:leading-8">
            Коллекция объединяет монеты и купюры, которые хочется рассматривать
            как предметы культуры: металл, бумагу, портреты, гербы, защитные
            узоры и следы времени. Этот сайт станет витриной для любимых
            экземпляров и аккуратным каталогом будущих пополнений.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-12 sm:gap-4 sm:py-16 lg:grid-cols-4 lg:px-8">
        {stats.map((item, index) => (
          <div
            key={item.label}
            data-reveal
            data-reveal-delay={index * 80}
            className="rounded-lg border border-[#d8b45f]/18 bg-[#efe8d0]/7 p-4 transition hover:-translate-y-1 hover:border-[#d8b45f]/55 hover:bg-[#173d2d] sm:p-6"
          >
            <p className="text-3xl font-black text-[#f2cf7d] sm:text-4xl">{item.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#efe8d0]/65 sm:text-sm sm:tracking-[0.2em]">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section id="coins" className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div data-reveal className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
              Монеты
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Избранные экземпляры
            </h2>
          </div>
          <p className="max-w-xl text-[#efe8d0]/70">
            Карточки можно расширить фотографиями, редкостью, материалом и
            личными заметками.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coins.map((coin, index) => (
            <article
              key={coin.name}
              data-reveal
              data-reveal-delay={index * 110}
              className="group rounded-lg border border-[#d8b45f]/16 bg-[#173d2d] p-5 transition hover:-translate-y-2 hover:border-[#d8b45f]/60 hover:shadow-[0_24px_65px_rgba(0,0,0,0.28)] sm:p-6"
            >
              <div className="mb-8 grid size-24 place-items-center rounded-full border-[10px] border-[#d8b45f] bg-[#10251d] text-3xl font-black text-[#f2cf7d] transition group-hover:rotate-12">
                ¤
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#f2cf7d]">
                {coin.country} · {coin.year}
              </p>
              <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{coin.name}</h3>
              <p className="mt-4 leading-7 text-[#efe8d0]/72">{coin.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="banknotes" className="relative z-10 bg-[#efe8d0] px-5 py-14 text-[#101311] sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl py-4">
          <div data-reveal>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#173d2d]">
            Купюры
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Бумажные истории</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {banknotes.map((note, index) => (
              <article
                key={note.name}
                data-reveal
                data-reveal-delay={index * 110}
                className="rounded-lg border border-[#173d2d]/18 bg-white/58 p-5 transition hover:-translate-y-2 hover:bg-white sm:p-6"
              >
                <div className="mb-6 h-32 rounded-md border border-[#173d2d]/20 bg-[linear-gradient(135deg,#173d2d_0%,#173d2d_28%,#d8b45f_28%,#d8b45f_34%,#f8f5ea_34%,#f8f5ea_100%)]" />
                <p className="font-bold text-[#173d2d]">{note.country}</p>
                <h3 className="mt-2 text-xl font-black sm:text-2xl">{note.name}</h3>
                <p className="mt-3 leading-7 text-[#101311]/68">{note.tone}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            Факты
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Интересные истории о деньгах
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-10">
          {stories.map((story, index) => (
            <article
              key={story}
              data-reveal
              data-reveal-delay={index * 110}
              className="rounded-lg border border-[#d8b45f]/15 bg-[#173d2d]/72 p-5 transition hover:-translate-y-1 hover:border-[#d8b45f]/55 sm:p-6"
            >
              <span className="text-sm font-black text-[#f2cf7d]">
                0{index + 1}
              </span>
              <p className="mt-5 text-base leading-7 text-[#efe8d0]/82 sm:text-lg sm:leading-8">{story}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative z-10 border-y border-[#d8b45f]/10 bg-[#173d2d]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div data-reveal className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
                Галерея
              </p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Место для будущих фото
              </h2>
            </div>
            <p className="max-w-lg text-[#efe8d0]/72">
              Сетка уже готова для снимков монет, купюр, альбомов и деталей.
            </p>
          </div>
          <div className="grid auto-rows-[150px] gap-4 sm:grid-cols-2 sm:auto-rows-[170px] md:grid-cols-3 md:auto-rows-[180px]">
            {galleryTiles.map((tile, index) => (
              <div
                key={tile}
                data-reveal
                data-reveal-delay={index * 75}
                className={`group rounded-lg border border-[#d8b45f]/20 bg-[#101311]/58 p-5 transition hover:-translate-y-1 hover:border-[#d8b45f]/65 ${
                  index === 0 || index === 5 ? "md:row-span-2" : ""
                }`}
              >
                <div className="flex h-full items-end rounded-md bg-[linear-gradient(135deg,rgba(216,180,95,0.24),rgba(248,245,234,0.08),rgba(16,19,17,0.35))] p-5">
                  <p className="font-bold text-white transition group-hover:text-[#f2cf7d]">
                    {tile}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <div data-reveal>
          <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-[#f2cf7d]">
            FAQ
          </p>
          <h2 className="mt-4 text-center text-3xl font-black text-white sm:text-4xl">
            Частые вопросы
          </h2>
        </div>
        <div className="mt-8 space-y-4 sm:mt-10">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-reveal
              data-reveal-delay={index * 90}
              className="group rounded-lg border border-[#d8b45f]/16 bg-[#173d2d] p-5 open:border-[#d8b45f]/55 sm:p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-white sm:text-xl">
                {faq.question}
                <span className="float-right text-[#f2cf7d] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-[#efe8d0]/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-5 pb-12 sm:pb-16 lg:px-8">
        <div data-reveal className="mx-auto max-w-7xl rounded-lg border border-[#d8b45f]/25 bg-[#efe8d0] px-5 py-12 text-center text-[#101311] md:px-10 md:py-14">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#173d2d]">
            World Money Collection
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            Начни превращать коллекцию в настоящий цифровой музей
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#101311]/70">
            Добавляй фотографии, страны, годы выпуска, редкость и личные истории
            к каждому экспонату.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-[#173d2d] px-5 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#10251d] hover:text-[#f2cf7d] sm:w-auto sm:px-7"
          >
            Вернуться к коллекции
          </a>
        </div>
      </section>
    </main>
  );
}
