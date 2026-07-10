import type { LocalizedList, LocalizedText } from "./translations";

export type CollectionCategory = "coin" | "banknote" | "blister";

export type Continent =
  | "Европа"
  | "Азия"
  | "Африка"
  | "Северная Америка"
  | "Южная Америка"
  | "Океания";

export type BlisterTheme =
  | "Известные личности"
  | "Традиции"
  | "Животные"
  | "Спорт"
  | "Знаменитые события"
  | "Прочие";

type BaseItem = {
  id: string;
  category: CollectionCategory;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  addedAt: string;
  updatedAt: string;
  tags: LocalizedList;
};

export type MoneyItem = BaseItem & {
  category: "coin" | "banknote";
  country: string;
  continent: Continent;
  nominal: string;
  year: string;
};

export type BlisterItem = BaseItem & {
  category: "blister";
  theme: BlisterTheme;
  country?: string;
  year?: string;
};

export type CollectionItem = MoneyItem | BlisterItem;

export const continents: Continent[] = [
  "Европа",
  "Азия",
  "Африка",
  "Северная Америка",
  "Южная Америка",
  "Океания",
];

export const blisterThemes: BlisterTheme[] = [
  "Известные личности",
  "Традиции",
  "Животные",
  "Спорт",
  "Знаменитые события",
  "Прочие",
];

export const collection: CollectionItem[] = [
  {
    id: "coin-solomon-islands-2-cents-2005",
    category: "coin",
    title: {
      ru: "2 цента",
      kz: "2 цент",
      en: "2 cents",
    },
    description: {
      ru: "Монета из моей коллекции, выпущенная на Соломоновых островах.",
      kz: "Менің коллекциямдағы Соломон аралдарында шығарылған монета.",
      en: "A coin from my collection issued in the Solomon Islands.",
    },
    image: "",
    addedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    tags: {
      ru: ["Соломоновы острова", "Океания", "монета"],
      kz: ["Соломон аралдары", "Океания", "монета"],
      en: ["Solomon Islands", "Oceania", "coin"],
    },
    country: "Соломоновы острова",
    continent: "Океания",
    nominal: "2 цента",
    year: "2005",
  },
  {
    id: "coin-finland-10-penni-1999",
    category: "coin",
    title: {
      ru: "10 пенни",
      kz: "10 пенни",
      en: "10 penni",
    },
    description: {
      ru: "Монета Финляндии из моей коллекции.",
      kz: "Менің коллекциямдағы Финляндия монетасы.",
      en: "A Finnish coin from my collection.",
    },
    image: "",
    addedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    tags: {
      ru: ["Финляндия", "Европа", "монета"],
      kz: ["Финляндия", "Еуропа", "монета"],
      en: ["Finland", "Europe", "coin"],
    },
    country: "Финляндия",
    continent: "Европа",
    nominal: "10 пенни",
    year: "1999",
  },
  {
    id: "coin-finland-5-penni-1982",
    category: "coin",
    title: {
      ru: "5 пенни",
      kz: "5 пенни",
      en: "5 penni",
    },
    description: {
      ru: "Небольшая монета Финляндии из моей коллекции.",
      kz: "Менің коллекциямдағы Финляндияның шағын монетасы.",
      en: "A small Finnish coin from my collection.",
    },
    image: "",
    addedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    tags: {
      ru: ["Финляндия", "Европа", "монета"],
      kz: ["Финляндия", "Еуропа", "монета"],
      en: ["Finland", "Europe", "coin"],
    },
    country: "Финляндия",
    continent: "Европа",
    nominal: "5 пенни",
    year: "1982",
  },
];
