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

export const collection: CollectionItem[] = [];
