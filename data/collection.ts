import type { LocalizedList, LocalizedText } from "./translations";

export type CollectionCategory = "coin" | "banknote" | "blister";
export type CollectionGroup = "regular" | "specialTerritories" | "historicalStates";

export type Continent =
  | "europe"
  | "asia"
  | "africa"
  | "northAmerica"
  | "southAmerica"
  | "oceania";

export type BlisterTheme =
  | "Известные личности"
  | "Традиции"
  | "Животные"
  | "Спорт"
  | "Знаменитые события"
  | "Прочие";

export type CountryKey =
  | "azerbaijan"
  | "armenia"
  | "georgia"
  | "israel"
  | "india"
  | "indonesia"
  | "jordan"
  | "qatar"
  | "china"
  | "kyrgyzstan"
  | "malaysia"
  | "mongolia"
  | "unitedArabEmirates"
  | "saudiArabia"
  | "singapore"
  | "syria"
  | "thailand"
  | "turkey"
  | "uzbekistan"
  | "hongKong"
  | "kazakhstan"
  | "southKorea"
  | "japan"
  | "austria"
  | "belarus"
  | "belgium"
  | "bulgaria"
  | "unitedKingdom"
  | "hungary"
  | "germany"
  | "greece"
  | "denmark"
  | "europeanUnion"
  | "iceland"
  | "spain"
  | "italy"
  | "ireland"
  | "lithuania"
  | "luxembourg"
  | "malta"
  | "netherlands"
  | "norway"
  | "poland"
  | "portugal"
  | "russia"
  | "slovakia"
  | "ukraine"
  | "finland"
  | "france"
  | "czechia"
  | "switzerland"
  | "sweden"
  | "estonia"
  | "isleOfMan"
  | "transnistria"
  | "anguilla"
  | "montserrat"
  | "canada"
  | "honduras"
  | "dominicanRepublic"
  | "mexico"
  | "unitedStates"
  | "eastCaribbeanStates"
  | "antiguaAndBarbuda"
  | "dominica"
  | "grenada"
  | "saintKittsAndNevis"
  | "saintLucia"
  | "saintVincentAndTheGrenadines"
  | "argentina"
  | "brazil"
  | "venezuela"
  | "paraguay"
  | "uruguay"
  | "ecuador"
  | "egypt"
  | "malawi"
  | "rwanda"
  | "tanzania"
  | "southAfrica"
  | "australia"
  | "newZealand"
  | "papuaNewGuinea"
  | "solomonIslands"
  | "fiji";

export type HistoricalEntityKey =
  | "weimarRepublic"
  | "russianEmpire"
  | "ussr"
  | "thirdReich"
  | "westEastGermany"
  | "czechoslovakia"
  | "yugoslavia";

export type CountryInfo = LocalizedText & {
  code: string;
};

export type RelatedCountry = {
  countryKey: CountryKey;
  countryCode: string;
};

type BaseItem = {
  id: string;
  category: CollectionCategory;
  collectionGroup: CollectionGroup;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageFront: string;
  imageBack: string;
  addedAt: string;
  updatedAt: string;
  tags: LocalizedList;
  relatedCountries?: RelatedCountry[];
};

export type MoneyItem = BaseItem & {
  category: "coin" | "banknote";
  continent?: Continent;
  countryKey?: CountryKey;
  countryCode?: string;
  historicalEntityKey?: HistoricalEntityKey;
  nominal: string;
  nominalText?: LocalizedText;
  year: string;
};

export type BlisterItem = BaseItem & {
  category: "blister";
  theme: BlisterTheme;
  countryKey?: CountryKey;
  countryCode?: string;
  historicalEntityKey?: never;
  year?: string;
};

export type CollectionItem = MoneyItem | BlisterItem;

export const continents: Continent[] = [
  "europe",
  "asia",
  "africa",
  "northAmerica",
  "southAmerica",
  "oceania",
];

export const collectionGroups: CollectionGroup[] = [
  "specialTerritories",
  "historicalStates",
];

export const blisterThemes: BlisterTheme[] = [
  "Известные личности",
  "Традиции",
  "Животные",
  "Спорт",
  "Знаменитые события",
  "Прочие",
];

export const countries: Record<CountryKey, CountryInfo> = {
  azerbaijan: { code: "AZ", ru: "Азербайджан", kz: "Әзербайжан", en: "Azerbaijan" },
  armenia: { code: "AM", ru: "Армения", kz: "Армения", en: "Armenia" },
  georgia: { code: "GE", ru: "Грузия", kz: "Грузия", en: "Georgia" },
  israel: { code: "IL", ru: "Израиль", kz: "Израиль", en: "Israel" },
  india: { code: "IN", ru: "Индия", kz: "Үндістан", en: "India" },
  indonesia: { code: "ID", ru: "Индонезия", kz: "Индонезия", en: "Indonesia" },
  jordan: { code: "JO", ru: "Иордания", kz: "Иордания", en: "Jordan" },
  qatar: { code: "QA", ru: "Катар", kz: "Катар", en: "Qatar" },
  china: { code: "CN", ru: "Китай", kz: "Қытай", en: "China" },
  kyrgyzstan: { code: "KG", ru: "Кыргызстан", kz: "Қырғызстан", en: "Kyrgyzstan" },
  malaysia: { code: "MY", ru: "Малайзия", kz: "Малайзия", en: "Malaysia" },
  mongolia: { code: "MN", ru: "Монголия", kz: "Моңғолия", en: "Mongolia" },
  unitedArabEmirates: { code: "AE", ru: "ОАЭ", kz: "БАӘ", en: "United Arab Emirates" },
  saudiArabia: { code: "SA", ru: "Саудовская Аравия", kz: "Сауд Арабиясы", en: "Saudi Arabia" },
  singapore: { code: "SG", ru: "Сингапур", kz: "Сингапур", en: "Singapore" },
  syria: { code: "SY", ru: "Сирия", kz: "Сирия", en: "Syria" },
  thailand: { code: "TH", ru: "Таиланд", kz: "Таиланд", en: "Thailand" },
  turkey: { code: "TR", ru: "Турция", kz: "Түркия", en: "Turkey" },
  uzbekistan: { code: "UZ", ru: "Узбекистан", kz: "Өзбекстан", en: "Uzbekistan" },
  hongKong: { code: "HK", ru: "Гонконг", kz: "Гонконг", en: "Hong Kong" },
  kazakhstan: { code: "KZ", ru: "Казахстан", kz: "Қазақстан", en: "Kazakhstan" },
  southKorea: { code: "KR", ru: "Южная Корея", kz: "Оңтүстік Корея", en: "South Korea" },
  japan: { code: "JP", ru: "Япония", kz: "Жапония", en: "Japan" },
  austria: { code: "AT", ru: "Австрия", kz: "Аустрия", en: "Austria" },
  belarus: { code: "BY", ru: "Беларусь", kz: "Беларусь", en: "Belarus" },
  belgium: { code: "BE", ru: "Бельгия", kz: "Бельгия", en: "Belgium" },
  bulgaria: { code: "BG", ru: "Болгария", kz: "Болгария", en: "Bulgaria" },
  unitedKingdom: { code: "GB", ru: "Великобритания", kz: "Ұлыбритания", en: "United Kingdom" },
  hungary: { code: "HU", ru: "Венгрия", kz: "Венгрия", en: "Hungary" },
  germany: { code: "DE", ru: "Германия", kz: "Германия", en: "Germany" },
  greece: { code: "GR", ru: "Греция", kz: "Греция", en: "Greece" },
  denmark: { code: "DK", ru: "Дания", kz: "Дания", en: "Denmark" },
  europeanUnion: { code: "EU", ru: "Евросоюз", kz: "Еуроодақ", en: "European Union" },
  iceland: { code: "IS", ru: "Исландия", kz: "Исландия", en: "Iceland" },
  spain: { code: "ES", ru: "Испания", kz: "Испания", en: "Spain" },
  italy: { code: "IT", ru: "Италия", kz: "Италия", en: "Italy" },
  ireland: { code: "IE", ru: "Ирландия", kz: "Ирландия", en: "Ireland" },
  lithuania: { code: "LT", ru: "Литва", kz: "Литва", en: "Lithuania" },
  luxembourg: { code: "LU", ru: "Люксембург", kz: "Люксембург", en: "Luxembourg" },
  malta: { code: "MT", ru: "Мальта", kz: "Мальта", en: "Malta" },
  netherlands: { code: "NL", ru: "Нидерланды", kz: "Нидерланд", en: "Netherlands" },
  norway: { code: "NO", ru: "Норвегия", kz: "Норвегия", en: "Norway" },
  poland: { code: "PL", ru: "Польша", kz: "Польша", en: "Poland" },
  portugal: { code: "PT", ru: "Португалия", kz: "Португалия", en: "Portugal" },
  russia: { code: "RU", ru: "Россия", kz: "Ресей", en: "Russia" },
  slovakia: { code: "SK", ru: "Словакия", kz: "Словакия", en: "Slovakia" },
  ukraine: { code: "UA", ru: "Украина", kz: "Украина", en: "Ukraine" },
  finland: { code: "FI", ru: "Финляндия", kz: "Финляндия", en: "Finland" },
  france: { code: "FR", ru: "Франция", kz: "Франция", en: "France" },
  czechia: { code: "CZ", ru: "Чехия", kz: "Чехия", en: "Czechia" },
  switzerland: { code: "CH", ru: "Швейцария", kz: "Швейцария", en: "Switzerland" },
  sweden: { code: "SE", ru: "Швеция", kz: "Швеция", en: "Sweden" },
  estonia: { code: "EE", ru: "Эстония", kz: "Эстония", en: "Estonia" },
  isleOfMan: { code: "IM", ru: "Остров Мэн", kz: "Мэн аралы", en: "Isle of Man" },
  transnistria: { code: "", ru: "Приднестровье", kz: "Приднестровье", en: "Transnistria" },
  anguilla: { code: "AI", ru: "Ангилья", kz: "Ангилья", en: "Anguilla" },
  montserrat: { code: "MS", ru: "Монтсеррат", kz: "Монтсеррат", en: "Montserrat" },
  canada: { code: "CA", ru: "Канада", kz: "Канада", en: "Canada" },
  honduras: { code: "HN", ru: "Гондурас", kz: "Гондурас", en: "Honduras" },
  dominicanRepublic: { code: "DO", ru: "Доминиканская Республика", kz: "Доминикан Республикасы", en: "Dominican Republic" },
  mexico: { code: "MX", ru: "Мексика", kz: "Мексика", en: "Mexico" },
  unitedStates: { code: "US", ru: "США", kz: "АҚШ", en: "United States" },
  eastCaribbeanStates: { code: "", ru: "Восточно-карибские штаты", kz: "Шығыс Кариб мемлекеттері", en: "East Caribbean States" },
  antiguaAndBarbuda: { code: "AG", ru: "Антигуа и Барбуда", kz: "Антигуа және Барбуда", en: "Antigua and Barbuda" },
  dominica: { code: "DM", ru: "Доминика", kz: "Доминика", en: "Dominica" },
  grenada: { code: "GD", ru: "Гренада", kz: "Гренада", en: "Grenada" },
  saintKittsAndNevis: { code: "KN", ru: "Сент-Китс и Невис", kz: "Сент-Китс және Невис", en: "Saint Kitts and Nevis" },
  saintLucia: { code: "LC", ru: "Сент-Люсия", kz: "Сент-Люсия", en: "Saint Lucia" },
  saintVincentAndTheGrenadines: { code: "VC", ru: "Сент-Винсент и Гренадины", kz: "Сент-Винсент және Гренадиндер", en: "Saint Vincent and the Grenadines" },
  argentina: { code: "AR", ru: "Аргентина", kz: "Аргентина", en: "Argentina" },
  brazil: { code: "BR", ru: "Бразилия", kz: "Бразилия", en: "Brazil" },
  venezuela: { code: "VE", ru: "Венесуэла", kz: "Венесуэла", en: "Venezuela" },
  paraguay: { code: "PY", ru: "Парагвай", kz: "Парагвай", en: "Paraguay" },
  uruguay: { code: "UY", ru: "Уругвай", kz: "Уругвай", en: "Uruguay" },
  ecuador: { code: "EC", ru: "Эквадор", kz: "Эквадор", en: "Ecuador" },
  egypt: { code: "EG", ru: "Египет", kz: "Мысыр", en: "Egypt" },
  malawi: { code: "MW", ru: "Малави", kz: "Малави", en: "Malawi" },
  rwanda: { code: "RW", ru: "Руанда", kz: "Руанда", en: "Rwanda" },
  tanzania: { code: "TZ", ru: "Танзания", kz: "Танзания", en: "Tanzania" },
  southAfrica: { code: "ZA", ru: "ЮАР", kz: "ОАР", en: "South Africa" },
  australia: { code: "AU", ru: "Австралия", kz: "Аустралия", en: "Australia" },
  newZealand: { code: "NZ", ru: "Новая Зеландия", kz: "Жаңа Зеландия", en: "New Zealand" },
  papuaNewGuinea: { code: "PG", ru: "Папуа — Новая Гвинея", kz: "Папуа — Жаңа Гвинея", en: "Papua New Guinea" },
  solomonIslands: { code: "SB", ru: "Соломоновы острова", kz: "Соломон аралдары", en: "Solomon Islands" },
  fiji: { code: "FJ", ru: "Фиджи", kz: "Фиджи", en: "Fiji" },
};

export const historicalEntities: Record<HistoricalEntityKey, LocalizedText> = {
  weimarRepublic: { ru: "Веймарская Республика", kz: "Веймар Республикасы", en: "Weimar Republic" },
  russianEmpire: { ru: "Российская империя", kz: "Ресей империясы", en: "Russian Empire" },
  ussr: { ru: "СССР", kz: "КСРО", en: "USSR" },
  thirdReich: { ru: "Третий Рейх", kz: "Үшінші рейх", en: "Third Reich" },
  westEastGermany: { ru: "ФРГ / ГДР", kz: "ГФР / ГДР", en: "West / East Germany" },
  czechoslovakia: { ru: "Чехословакия", kz: "Чехословакия", en: "Czechoslovakia" },
  yugoslavia: { ru: "Югославия", kz: "Югославия", en: "Yugoslavia" },
};

type CoinSeed = {
  group?: CollectionGroup;
  continent?: Continent;
  countryKey?: CountryKey;
  historicalEntityKey?: HistoricalEntityKey;
  relatedCountries?: RelatedCountry[];
  title?: LocalizedText;
  nominalText?: LocalizedText;
  description?: LocalizedText;
  tags?: LocalizedList;
  nominal: string;
  years: string[];
};

const continentLabels: Record<Continent, LocalizedText> = {
  asia: { ru: "Азия", kz: "Азия", en: "Asia" },
  europe: { ru: "Европа", kz: "Еуропа", en: "Europe" },
  africa: { ru: "Африка", kz: "Африка", en: "Africa" },
  northAmerica: { ru: "Северная Америка", kz: "Солтүстік Америка", en: "North America" },
  southAmerica: { ru: "Южная Америка", kz: "Оңтүстік Америка", en: "South America" },
  oceania: { ru: "Океания", kz: "Океания", en: "Oceania" },
};

const coinSeeds: CoinSeed[] = [
  { continent: "asia", countryKey: "azerbaijan", nominal: "10 кэпик", years: ["—"] },
  { continent: "asia", countryKey: "azerbaijan", nominal: "50 кәпик", years: ["—"] },
  { continent: "asia", countryKey: "azerbaijan", nominal: "5 кәпик", years: ["—"] },
  { continent: "asia", countryKey: "azerbaijan", nominal: "20 кэпик", years: ["—"] },
  { continent: "asia", countryKey: "armenia", nominal: "100 драм", years: ["2003"] },
  { continent: "asia", countryKey: "georgia", nominal: "2 лари", years: ["2006"] },
  { continent: "asia", countryKey: "georgia", nominal: "5 тетри", years: ["1993"] },
  { continent: "asia", countryKey: "georgia", nominal: "10 тетри", years: ["1993"] },
  { continent: "asia", countryKey: "georgia", nominal: "20 тетри", years: ["1993"] },
  { continent: "asia", countryKey: "georgia", nominal: "50 тетри", years: ["2006"] },
  { continent: "asia", countryKey: "israel", nominal: "10 агорот", years: ["—"] },
  { continent: "asia", countryKey: "india", nominal: "1 рупия", years: ["2002"] },
  { continent: "asia", countryKey: "india", nominal: "2 рупии", years: ["2010", "2012"] },
  { continent: "asia", countryKey: "indonesia", nominal: "100 рупий", years: ["2016"] },
  { continent: "asia", countryKey: "jordan", nominal: "1 кирш", years: ["1994"] },
  { continent: "asia", countryKey: "qatar", nominal: "50 дирхам", years: ["2020"] },
  { continent: "asia", countryKey: "china", nominal: "1 фынь", years: ["2011"] },
  { continent: "asia", countryKey: "china", nominal: "1 юань", years: ["1997", "1999"] },
  { continent: "asia", countryKey: "china", nominal: "1 дзяо", years: ["2005"] },
  { continent: "asia", countryKey: "kyrgyzstan", nominal: "1 сом", years: ["2008"] },
  { continent: "asia", countryKey: "kyrgyzstan", nominal: "10 сом", years: ["2009"] },
  { continent: "asia", countryKey: "malaysia", nominal: "10 сен", years: ["2011"] },
  { continent: "asia", countryKey: "mongolia", nominal: "20 мөнгө", years: ["1981"] },
  { continent: "asia", countryKey: "unitedArabEmirates", nominal: "1 дирхам", years: ["—"] },
  { continent: "asia", countryKey: "saudiArabia", nominal: "10 халала", years: ["—"] },
  { continent: "asia", countryKey: "singapore", nominal: "50 центов", years: ["2019"] },
  { continent: "asia", countryKey: "singapore", nominal: "10 центов", years: ["2013"] },
  { continent: "asia", countryKey: "singapore", nominal: "20 центов", years: ["2016"] },
  { continent: "asia", countryKey: "syria", nominal: "50 пиастров", years: ["1979"] },
  { continent: "asia", countryKey: "thailand", nominal: "50 сатанг", years: ["2008"] },
  { continent: "asia", countryKey: "thailand", nominal: "1 бат", years: ["—"] },
  { continent: "asia", countryKey: "thailand", nominal: "5 бат", years: ["—"] },
  { continent: "asia", countryKey: "thailand", nominal: "10 бат", years: ["—"] },
  { continent: "asia", countryKey: "turkey", nominal: "1 лира", years: ["2022"] },
  { continent: "asia", countryKey: "turkey", nominal: "5 куруш", years: ["2020"] },
  { continent: "asia", countryKey: "turkey", nominal: "10 куруш", years: ["2006", "2011"] },
  { continent: "asia", countryKey: "turkey", nominal: "50 куруш", years: ["2022"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "5 сум", years: ["1997"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "1 сум", years: ["2000"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "50 сум", years: ["2013"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "100 сум", years: ["2018"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "200 сум", years: ["2018"] },
  { continent: "asia", countryKey: "uzbekistan", nominal: "500 сум", years: ["2018"] },
  { continent: "asia", countryKey: "hongKong", nominal: "5 долларов", years: ["1993"] },
  { continent: "asia", countryKey: "hongKong", nominal: "20 центов", years: ["1997"] },
  { continent: "asia", countryKey: "kazakhstan", nominal: "5 тиын", years: ["1993"] },
  { continent: "asia", countryKey: "southKorea", nominal: "10 вона", years: ["2010"] },
  { continent: "asia", countryKey: "southKorea", nominal: "50 вона", years: ["2011"] },
  { continent: "asia", countryKey: "southKorea", nominal: "100 вона", years: ["1991"] },
  { continent: "asia", countryKey: "southKorea", nominal: "500 вона", years: ["1991"] },
  { continent: "asia", countryKey: "japan", nominal: "10 йен", years: ["1955"] },
  { continent: "asia", countryKey: "japan", nominal: "1 йена", years: ["1977"] },

  { continent: "europe", countryKey: "austria", nominal: "10 грошей", years: ["1972"] },
  { continent: "europe", countryKey: "belarus", nominal: "1 рубль", years: ["2009"] },
  { continent: "europe", countryKey: "belarus", nominal: "1 копейка", years: ["2009"] },
  { continent: "europe", countryKey: "belgium", nominal: "20 франков", years: ["1981"] },
  { continent: "europe", countryKey: "belgium", nominal: "5 франков", years: ["1986"] },
  { continent: "europe", countryKey: "belgium", nominal: "25 сантимов", years: ["1938"] },
  { continent: "europe", countryKey: "belgium", nominal: "1 франк", years: ["1952"] },
  { continent: "europe", countryKey: "bulgaria", nominal: "2 стотинки", years: ["1974"] },
  { continent: "europe", countryKey: "bulgaria", nominal: "1 лев", years: ["2002"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "1 фунт", years: ["1985", "1992"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "1 пенни", years: ["2006"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "2 пенни", years: ["1997"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "5 пенни", years: ["2004", "2013"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "10 пенни", years: ["1996"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "20 пенни", years: ["2000", "2001"] },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "50 пенни", years: ["1999", "1997"] },
  { continent: "europe", countryKey: "hungary", nominal: "5 форинтов", years: ["1993"] },
  { continent: "europe", countryKey: "germany", nominal: "1 пфенниг", years: ["1995"] },
  { continent: "europe", countryKey: "germany", nominal: "10 пфеннигов", years: ["1995"] },
  { continent: "europe", countryKey: "germany", nominal: "5 пфеннигов", years: ["1991"] },
  { continent: "europe", countryKey: "greece", nominal: "10 драхм", years: ["1976"] },
  { continent: "europe", countryKey: "greece", nominal: "50 лепт", years: ["1970"] },
  { continent: "europe", countryKey: "denmark", nominal: "25 эре", years: ["1971"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "1 евро", years: ["2002", "2002"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "1 цент", years: ["2010"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "2 цента", years: ["2012"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "5 центов", years: ["2011"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "10 центов", years: ["2000"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "20 центов", years: ["2002"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "50 центов", years: ["2002"] },
  { continent: "europe", countryKey: "europeanUnion", nominal: "2 евро", years: ["2023"] },
  { continent: "europe", countryKey: "iceland", nominal: "10 аурар", years: ["1981"] },
  { continent: "europe", countryKey: "spain", nominal: "1 песета", years: ["1963"] },
  { continent: "europe", countryKey: "spain", nominal: "25 песет", years: ["1994"] },
  { continent: "europe", countryKey: "italy", nominal: "50 лир", years: ["1969"] },
  { continent: "europe", countryKey: "italy", nominal: "20 лир", years: ["1959"] },
  { continent: "europe", countryKey: "ireland", nominal: "1/2 пенни", years: ["—"] },
  { continent: "europe", countryKey: "lithuania", nominal: "2 цента", years: ["1991"] },
  { continent: "europe", countryKey: "luxembourg", nominal: "1 франк", years: ["1989"] },
  { continent: "europe", countryKey: "malta", nominal: "1 цент", years: ["1975"] },
  { continent: "europe", countryKey: "netherlands", nominal: "1 гульден", years: ["1980"] },
  { continent: "europe", countryKey: "norway", nominal: "1 крона", years: ["1976", "2002"] },
  { continent: "europe", countryKey: "norway", nominal: "50 эре", years: ["1980"] },
  { continent: "europe", countryKey: "poland", nominal: "20 злотых", years: ["1990"] },
  { continent: "europe", countryKey: "poland", nominal: "10 злотых", years: ["1976"] },
  { continent: "europe", countryKey: "poland", nominal: "2 злотых", years: ["1982", "2020"] },
  { continent: "europe", countryKey: "poland", nominal: "1 злотый", years: ["2015"] },
  { continent: "europe", countryKey: "poland", nominal: "1 грош", years: ["2018", "2019"] },
  { continent: "europe", countryKey: "poland", nominal: "2 гроша", years: ["2020"] },
  { continent: "europe", countryKey: "poland", nominal: "5 грошей", years: ["2019"] },
  { continent: "europe", countryKey: "poland", nominal: "10 грошей", years: ["2017"] },
  { continent: "europe", countryKey: "poland", nominal: "20 грошей", years: ["2018", "1965"] },
  { continent: "europe", countryKey: "portugal", nominal: "25 эскудо", years: ["1978"] },
  { continent: "europe", countryKey: "russia", nominal: "50 рублей", years: ["1993"] },
  { continent: "europe", countryKey: "russia", nominal: "10 рублей", years: ["1992", "2005", "2011", "2013", "2022"] },
  { continent: "europe", countryKey: "russia", nominal: "5 рублей", years: ["1992"] },
  { continent: "europe", countryKey: "russia", nominal: "20 рублей", years: ["1992"] },
  { continent: "europe", countryKey: "russia", nominal: "25 рублей", years: ["2011", "2018"] },
  { continent: "europe", countryKey: "russia", nominal: "5 копеек", years: ["1998"] },
  { continent: "europe", countryKey: "russia", nominal: "50 копеек", years: ["2010"] },
  { continent: "europe", countryKey: "russia", nominal: "1 рубль", years: ["1998"] },
  { continent: "europe", countryKey: "russia", nominal: "2 рубля", years: ["1997", "2020"] },
  { continent: "europe", countryKey: "slovakia", nominal: "5 крон", years: ["1993"] },
  { continent: "europe", countryKey: "slovakia", nominal: "10 геллеров", years: ["1999"] },
  { continent: "europe", countryKey: "ukraine", nominal: "25 копеек", years: ["1992"] },
  { continent: "europe", countryKey: "ukraine", nominal: "50 копеек", years: ["2009"] },
  { continent: "europe", countryKey: "ukraine", nominal: "2 копейки", years: ["2008"] },
  { continent: "europe", countryKey: "ukraine", nominal: "1 гривна", years: ["2005"] },
  { continent: "europe", countryKey: "finland", nominal: "10 пенни", years: ["1999"] },
  { continent: "europe", countryKey: "finland", nominal: "5 пенни", years: ["1982"] },
  { continent: "europe", countryKey: "france", nominal: "10 франков", years: ["1979", "1988"] },
  { continent: "europe", countryKey: "france", nominal: "20 сантимов", years: ["1978"] },
  { continent: "europe", countryKey: "czechia", nominal: "10 крон", years: ["2008"] },
  { continent: "europe", countryKey: "czechia", nominal: "1 крона", years: ["—"] },
  { continent: "europe", countryKey: "switzerland", nominal: "2 франка", years: ["1981"] },
  { continent: "europe", countryKey: "switzerland", nominal: "1/2 франка", years: ["2012"] },
  { continent: "europe", countryKey: "switzerland", nominal: "20 раппенов", years: ["1958"] },
  { continent: "europe", countryKey: "sweden", nominal: "1 крона", years: ["1970"] },
  { continent: "europe", countryKey: "estonia", nominal: "5 центов", years: ["1992"] },
  { continent: "europe", countryKey: "estonia", nominal: "1 крона", years: ["1993"] },

  { group: "specialTerritories", countryKey: "isleOfMan", nominal: "2 пенса", years: ["1998"] },
  { group: "specialTerritories", countryKey: "transnistria", nominal: "5 копеек", years: ["2005"] },
  {
    group: "specialTerritories",
    nominal: "1 Восточно-Карибский цент",
    years: ["2000"],
    title: {
      ru: "1 Восточно-Карибский цент",
      kz: "1 Шығыс Кариб центі",
      en: "1 Eastern Caribbean cent",
    },
    nominalText: {
      ru: "1 Восточно-Карибский цент",
      kz: "1 Шығыс Кариб центі",
      en: "1 Eastern Caribbean cent",
    },
    relatedCountries: [
      { countryKey: "anguilla", countryCode: "AI" },
      { countryKey: "montserrat", countryCode: "MS" },
    ],
  },

  { group: "historicalStates", historicalEntityKey: "weimarRepublic", nominal: "50 пфеннигов", years: ["1920"] },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "деньга", years: ["1749"] },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1 копейка", years: ["1898", "1908", "1916"] },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1/2 копейки", years: ["1915"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "50 копеек", years: ["1977"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 копейка", years: ["1927", "1982", "1991"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "2 копейки", years: ["1926"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "3 копейки", years: ["1928", "1987"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "5 копеек", years: ["1930", "1984"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1933", "1953", "1961", "1983"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "15 копеек", years: ["1931", "1946", "1981", "1991"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "20 копеек", years: ["1932", "1936", "1981"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 рубль Ленин", years: ["1970"] },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 рубль ХХ", years: ["1965", "1991"] },
  { group: "historicalStates", historicalEntityKey: "thirdReich", nominal: "1 пфенниг", years: ["1939"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "1 марка", years: ["1971"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "2 марки", years: ["1974"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "1 пфенниг", years: ["1988"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "5 пфеннигов", years: ["1983"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "10 пфеннигов", years: ["1966", "1978"] },
  { group: "historicalStates", historicalEntityKey: "westEastGermany", nominal: "50 пфеннигов", years: ["1988"] },
  { group: "historicalStates", historicalEntityKey: "czechoslovakia", nominal: "20 геллеров", years: ["1977"] },
  { group: "historicalStates", historicalEntityKey: "yugoslavia", nominal: "1 динар", years: ["1965"] },

  { continent: "northAmerica", countryKey: "canada", nominal: "1 цент", years: ["1986"] },
  { continent: "northAmerica", countryKey: "canada", nominal: "25 центов", years: ["2012"] },
  { continent: "northAmerica", countryKey: "honduras", nominal: "5 сентаво", years: ["1998"] },
  { continent: "northAmerica", countryKey: "dominicanRepublic", nominal: "10 песо", years: ["2007"] },
  { continent: "northAmerica", countryKey: "dominicanRepublic", nominal: "25 сентаво", years: ["1991"] },
  { continent: "northAmerica", countryKey: "mexico", nominal: "1 песо", years: ["1985"] },
  { continent: "northAmerica", countryKey: "mexico", nominal: "10 сентаво", years: ["2002"] },
  { continent: "northAmerica", countryKey: "mexico", nominal: "5 сентаво", years: ["1970"] },
  { continent: "northAmerica", countryKey: "mexico", nominal: "1 сентаво", years: ["1958"] },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "25 центов", years: ["2012", "1981", "2000"] },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "5 центов", years: ["1964"] },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "10 центов", years: ["1983"] },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "1 цент", years: ["1994"] },
  {
    continent: "northAmerica",
    nominal: "1 Восточно-Карибский цент",
    years: ["2000"],
    title: {
      ru: "1 Восточно-Карибский цент",
      kz: "1 Шығыс Кариб центі",
      en: "1 Eastern Caribbean cent",
    },
    nominalText: {
      ru: "1 Восточно-Карибский цент",
      kz: "1 Шығыс Кариб центі",
      en: "1 Eastern Caribbean cent",
    },
    description: {
      ru: "Монета Восточно-карибских государств из моей коллекции.",
      kz: "Менің коллекциямдағы Шығыс Кариб мемлекеттерінің монетасы.",
      en: "A coin from the Eastern Caribbean states in my collection.",
    },
    tags: {
      ru: ["Восточно-карибские государства", "Северная Америка", "монета"],
      kz: ["Шығыс Кариб мемлекеттері", "Солтүстік Америка", "монета"],
      en: ["Eastern Caribbean states", "North America", "coin"],
    },
    relatedCountries: [
      { countryKey: "antiguaAndBarbuda", countryCode: "AG" },
      { countryKey: "dominica", countryCode: "DM" },
      { countryKey: "grenada", countryCode: "GD" },
      { countryKey: "saintKittsAndNevis", countryCode: "KN" },
      { countryKey: "saintLucia", countryCode: "LC" },
      { countryKey: "saintVincentAndTheGrenadines", countryCode: "VC" },
    ],
  },

  { continent: "southAmerica", countryKey: "argentina", nominal: "10 аустралей", years: ["1989"] },
  { continent: "southAmerica", countryKey: "brazil", nominal: "50 сентаво", years: ["1948"] },
  { continent: "southAmerica", countryKey: "venezuela", nominal: "50 сентимо", years: ["1990"] },
  { continent: "southAmerica", countryKey: "paraguay", nominal: "1 гуарани", years: ["1993"] },
  { continent: "southAmerica", countryKey: "uruguay", nominal: "50 сентаво", years: ["1965"] },
  { continent: "southAmerica", countryKey: "ecuador", nominal: "1000 сукре", years: ["1996", "1997"] },

  { continent: "africa", countryKey: "egypt", nominal: "1 фунт", years: ["—"] },
  { continent: "africa", countryKey: "malawi", nominal: "2 тамбала", years: ["1995"] },
  { continent: "africa", countryKey: "rwanda", nominal: "1 франк", years: ["1985"] },
  { continent: "africa", countryKey: "tanzania", nominal: "20 сенти", years: ["1976"] },
  { continent: "africa", countryKey: "southAfrica", nominal: "1 ранд", years: ["2012"] },

  { continent: "oceania", countryKey: "australia", nominal: "10 центов", years: ["1982"] },
  { continent: "oceania", countryKey: "australia", nominal: "1 доллар", years: ["1985"] },
  { continent: "oceania", countryKey: "newZealand", nominal: "1 цент", years: ["1974"] },
  { continent: "oceania", countryKey: "papuaNewGuinea", nominal: "1 тоя", years: ["2004"] },
  { continent: "oceania", countryKey: "solomonIslands", nominal: "2 цента", years: ["2005"] },
  { continent: "oceania", countryKey: "fiji", nominal: "1 цент", years: ["1999"] },
];

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/—/g, "unknown")
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFor(nominal: string): LocalizedText {
  return { ru: nominal, kz: nominal, en: nominal };
}

function itemName(seed: CoinSeed, language: keyof LocalizedText) {
  if (seed.historicalEntityKey) return historicalEntities[seed.historicalEntityKey][language];
  if (seed.relatedCountries) return seed.relatedCountries.map((country) => countries[country.countryKey][language]).join(", ");
  if (seed.countryKey) return countries[seed.countryKey][language];
  return "";
}

function descriptionFor(seed: CoinSeed): LocalizedText {
  const name = itemName(seed, "ru");
  const nameKz = itemName(seed, "kz");
  const nameEn = itemName(seed, "en");

  if (seed.group === "historicalStates") {
    return {
      ru: `Историческая монета: ${name}.`,
      kz: `Тарихи монета: ${nameKz}.`,
      en: `A historical coin from ${nameEn}.`,
    };
  }

  return {
    ru: `Монета ${name} из моей коллекции.`,
    kz: `Менің коллекциямдағы ${nameKz} монетасы.`,
    en: `A coin from ${nameEn} in my collection.`,
  };
}

function tagsFor(seed: CoinSeed): LocalizedList {
  const group = seed.group ?? "regular";
  const locationRu = seed.continent ? continentLabels[seed.continent].ru : group === "historicalStates" ? "Исторические государства" : "Зависимые и особые территории";
  const locationKz = seed.continent ? continentLabels[seed.continent].kz : group === "historicalStates" ? "Тарихи мемлекеттер" : "Тәуелді және ерекше аумақтар";
  const locationEn = seed.continent ? continentLabels[seed.continent].en : group === "historicalStates" ? "Historical States" : "Dependent and Special Territories";

  return {
    ru: [itemName(seed, "ru"), locationRu, "монета"],
    kz: [itemName(seed, "kz"), locationKz, "монета"],
    en: [itemName(seed, "en"), locationEn, "coin"],
  };
}

export const collection: CollectionItem[] = coinSeeds.flatMap((seed, seedIndex) =>
  seed.years.map((year, yearIndex) => {
    const group = seed.group ?? "regular";
    const countryCode = seed.countryKey ? countries[seed.countryKey].code : "";
    const uniqueIndex = `${seedIndex + 1}-${yearIndex + 1}`;
    const locationKey = seed.countryKey ?? seed.historicalEntityKey ?? seed.relatedCountries?.map((country) => country.countryKey).join("-");

    return {
      id: `coin-${group}-${locationKey}-${slug(seed.nominal)}-${slug(year)}-${uniqueIndex}`,
      category: "coin",
      collectionGroup: group,
      continent: seed.continent,
      countryKey: seed.countryKey,
      countryCode,
      relatedCountries: seed.relatedCountries,
      historicalEntityKey: seed.historicalEntityKey,
      title: seed.title ?? titleFor(seed.nominal),
      nominal: seed.nominal,
      nominalText: seed.nominalText,
      year,
      description: seed.description ?? descriptionFor(seed),
      image: "",
      imageFront: "",
      imageBack: "",
      addedAt: "2026-07-10",
      updatedAt: "2026-07-10",
      tags: seed.tags ?? tagsFor(seed),
    } satisfies MoneyItem;
  }),
);
