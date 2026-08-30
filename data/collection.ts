import type { Language, LocalizedList, LocalizedText } from "./translations";

export type CollectionCategory = "coin" | "banknote" | "blister";
export type CollectionGroup = "regular" | "specialTerritories" | "historicalStates";
export type KazakhstanCoinGroup =
  | "kazakhstanHistoricalFigures"
  | "kazakhstanAnniversaryDates"
  | "kazakhstanHistory"
  | "kazakhstanTraditions"
  | "kazakhstanSevenTreasures"
  | "kazakhstanSakaStyle"
  | "kazakhstanCities"
  | "kazakhstanFairyTales"
  | "kazakhstanAnimals"
  | "kazakhstanWildlife"
  | "kazakhstanCirculation";

export type Continent =
  | "europe"
  | "asia"
  | "africa"
  | "northAmerica"
  | "southAmerica"
  | "oceania";

export type BlisterTheme =
  | "figures"
  | "traditions"
  | "animals"
  | "sport"
  | "events"
  | "blister-sets";

export type CountryKey = string;

export type HistoricalEntityKey =
  | "weimarRepublic"
  | "russianEmpire"
  | "ussr"
  | "thirdReich"
  | "westGermany"
  | "eastGermany"
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
  previewImage?: string;
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
  coinGroup?: KazakhstanCoinGroup;
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
  "figures",
  "traditions",
  "animals",
  "sport",
  "events",
  "blister-sets",
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
  kuwait: { code: "KW", ru: "Кувейт", kz: "Кувейт", en: "Kuwait" },
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
  latvia: { code: "LV", ru: "Латвия", kz: "Латвия", en: "Latvia" },
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
  costaRica: { code: "CR", ru: "Коста-Рика", kz: "Коста-Рика", en: "Costa Rica" },
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
  bosniaAndHerzegovina: { code: "BA", ru: "Босния и Герцеговина", kz: "Босния және Герцеговина", en: "Bosnia and Herzegovina" },
  moldova: { code: "MD", ru: "Молдова", kz: "Молдова", en: "Moldova" },
  romania: { code: "RO", ru: "Румыния", kz: "Румыния", en: "Romania" },
  northMacedonia: { code: "MK", ru: "Северная Македония", kz: "Солтүстік Македония", en: "North Macedonia" },
  serbia: { code: "RS", ru: "Сербия", kz: "Сербия", en: "Serbia" },
  croatia: { code: "HR", ru: "Хорватия", kz: "Хорватия", en: "Croatia" },
  afghanistan: { code: "AF", ru: "Афганистан", kz: "Ауғанстан", en: "Afghanistan" },
  bangladesh: { code: "BD", ru: "Бангладеш", kz: "Бангладеш", en: "Bangladesh" },
  brunei: { code: "BN", ru: "Бруней", kz: "Бруней", en: "Brunei" },
  bhutan: { code: "BT", ru: "Бутан", kz: "Бутан", en: "Bhutan" },
  vietnam: { code: "VN", ru: "Вьетнам", kz: "Вьетнам", en: "Vietnam" },
  iraq: { code: "IQ", ru: "Ирак", kz: "Ирак", en: "Iraq" },
  iran: { code: "IR", ru: "Иран", kz: "Иран", en: "Iran" },
  yemen: { code: "YE", ru: "Йемен", kz: "Йемен", en: "Yemen" },
  cambodia: { code: "KH", ru: "Камбоджа", kz: "Камбоджа", en: "Cambodia" },
  northKorea: { code: "KP", ru: "КНДР", kz: "КХДР", en: "North Korea" },
  laos: { code: "LA", ru: "Лаос", kz: "Лаос", en: "Laos" },
  lebanon: { code: "LB", ru: "Ливан", kz: "Ливан", en: "Lebanon" },
  maldives: { code: "MV", ru: "Мальдивы", kz: "Мальдивтер", en: "Maldives" },
  myanmar: { code: "MM", ru: "Мьянма", kz: "Мьянма", en: "Myanmar" },
  nepal: { code: "NP", ru: "Непал", kz: "Непал", en: "Nepal" },
  oman: { code: "OM", ru: "Оман", kz: "Оман", en: "Oman" },
  pakistan: { code: "PK", ru: "Пакистан", kz: "Пәкістан", en: "Pakistan" },
  philippines: { code: "PH", ru: "Филиппины", kz: "Филиппин", en: "Philippines" },
  sriLanka: { code: "LK", ru: "Шри-Ланка", kz: "Шри-Ланка", en: "Sri Lanka" },
  eastTimor: { code: "TL", ru: "Восточный Тимор", kz: "Шығыс Тимор", en: "East Timor" },
  bahamas: { code: "BS", ru: "Багамы", kz: "Багам аралдары", en: "Bahamas" },
  barbados: { code: "BB", ru: "Барбадос", kz: "Барбадос", en: "Barbados" },
  haiti: { code: "HT", ru: "Гаити", kz: "Гаити", en: "Haiti" },
  guatemala: { code: "GT", ru: "Гватемала", kz: "Гватемала", en: "Guatemala" },
  cuba: { code: "CU", ru: "Куба", kz: "Куба", en: "Cuba" },
  nicaragua: { code: "NI", ru: "Никарагуа", kz: "Никарагуа", en: "Nicaragua" },
  trinidadAndTobago: { code: "TT", ru: "Тринидад и Тобаго", kz: "Тринидад және Тобаго", en: "Trinidad and Tobago" },
  jamaica: { code: "JM", ru: "Ямайка", kz: "Ямайка", en: "Jamaica" },
  elSalvador: { code: "SV", ru: "Сальвадор", kz: "Сальвадор", en: "El Salvador" },
  bolivia: { code: "BO", ru: "Боливия", kz: "Боливия", en: "Bolivia" },
  chile: { code: "CL", ru: "Чили", kz: "Чили", en: "Chile" },
  guyana: { code: "GY", ru: "Гайана", kz: "Гайана", en: "Guyana" },
  colombia: { code: "CO", ru: "Колумбия", kz: "Колумбия", en: "Colombia" },
  peru: { code: "PE", ru: "Перу", kz: "Перу", en: "Peru" },
  suriname: { code: "SR", ru: "Суринам", kz: "Суринам", en: "Suriname" },
  angola: { code: "AO", ru: "Ангола", kz: "Ангола", en: "Angola" },
  botswana: { code: "BW", ru: "Ботсвана", kz: "Ботсвана", en: "Botswana" },
  burundi: { code: "BI", ru: "Бурунди", kz: "Бурунди", en: "Burundi" },
  gambia: { code: "GM", ru: "Гамбия", kz: "Гамбия", en: "Gambia" },
  ghana: { code: "GH", ru: "Гана", kz: "Гана", en: "Ghana" },
  guinea: { code: "GN", ru: "Гвинея", kz: "Гвинея", en: "Guinea" },
  guineaBissau: { code: "GW", ru: "Гвинея-Бисау", kz: "Гвинея-Бисау", en: "Guinea-Bissau" },
  djibouti: { code: "DJ", ru: "Джибути", kz: "Джибути", en: "Djibouti" },
  zambia: { code: "ZM", ru: "Замбия", kz: "Замбия", en: "Zambia" },
  zimbabwe: { code: "ZW", ru: "Зимбабве", kz: "Зимбабве", en: "Zimbabwe" },
  kenya: { code: "KE", ru: "Кения", kz: "Кения", en: "Kenya" },
  congo: { code: "CG", ru: "Конго", kz: "Конго", en: "Congo" },
  lesotho: { code: "LS", ru: "Лесото", kz: "Лесото", en: "Lesotho" },
  liberia: { code: "LR", ru: "Либерия", kz: "Либерия", en: "Liberia" },
  libya: { code: "LY", ru: "Ливия", kz: "Ливия", en: "Libya" },
  mauritius: { code: "MU", ru: "Маврикий", kz: "Маврикий", en: "Mauritius" },
  mauritania: { code: "MR", ru: "Мавритания", kz: "Мавритания", en: "Mauritania" },
  madagascar: { code: "MG", ru: "Мадагаскар", kz: "Мадагаскар", en: "Madagascar" },
  namibia: { code: "NA", ru: "Намибия", kz: "Намибия", en: "Namibia" },
  mozambique: { code: "MZ", ru: "Мозамбик", kz: "Мозамбик", en: "Mozambique" },
  nigeria: { code: "NG", ru: "Нигерия", kz: "Нигерия", en: "Nigeria" },
  saoTomeAndPrincipe: { code: "ST", ru: "Сан-Томе и Принсипи", kz: "Сан-Томе және Принсипи", en: "Sao Tome and Principe" },
  seychelles: { code: "SC", ru: "Сейшелы", kz: "Сейшел аралдары", en: "Seychelles" },
  eswatini: { code: "SZ", ru: "Свазиленд", kz: "Эсватини", en: "Eswatini" },
  somalia: { code: "SO", ru: "Сомали", kz: "Сомали", en: "Somalia" },
  somaliland: { code: "", ru: "Сомалиленд", kz: "Сомалиленд", en: "Somaliland" },
  sudan: { code: "SD", ru: "Судан", kz: "Судан", en: "Sudan" },
  sierraLeone: { code: "SL", ru: "Сьерра-Леоне", kz: "Сьерра-Леоне", en: "Sierra Leone" },
  uganda: { code: "UG", ru: "Уганда", kz: "Уганда", en: "Uganda" },
  eritrea: { code: "ER", ru: "Эритрея", kz: "Эритрея", en: "Eritrea" },
  ethiopia: { code: "ET", ru: "Эфиопия", kz: "Эфиопия", en: "Ethiopia" },
  southSudan: { code: "SS", ru: "Южный Судан", kz: "Оңтүстік Судан", en: "South Sudan" },
  marshallIslands: { code: "MH", ru: "Маршалловы Острова", kz: "Маршалл аралдары", en: "Marshall Islands" },
  micronesia: { code: "FM", ru: "Микронезия", kz: "Микронезия", en: "Micronesia" },
  palau: { code: "PW", ru: "Палау", kz: "Палау", en: "Palau" },
  kiribati: { code: "KI", ru: "Кирибати", kz: "Кирибати", en: "Kiribati" },
  nauru: { code: "NR", ru: "Науру", kz: "Науру", en: "Nauru" },
  tuvalu: { code: "TV", ru: "Тувалу", kz: "Тувалу", en: "Tuvalu" },
  tonga: { code: "TO", ru: "Тонга", kz: "Тонга", en: "Tonga" },
  vanuatu: { code: "VU", ru: "Вануату", kz: "Вануату", en: "Vanuatu" },
  samoa: { code: "WS", ru: "Самоа", kz: "Самоа", en: "Samoa" },
  gibraltar: { code: "GI", ru: "Гибралтар", kz: "Гибралтар", en: "Gibraltar" },
  tokelau: { code: "TK", ru: "Токелау", kz: "Токелау", en: "Tokelau" },
  cookIslands: { code: "CK", ru: "Острова Кука", kz: "Кук аралдары", en: "Cook Islands" },
  macau: { code: "MO", ru: "Макао", kz: "Макао", en: "Macau" },
  turksAndCaicos: { code: "TC", ru: "Теркс и Кайкос", kz: "Теркс және Кайкос", en: "Turks and Caicos" },
  britishVirginIslands: { code: "VG", ru: "Британские Виргинские острова", kz: "Британдық Виргин аралдары", en: "British Virgin Islands" },
  americanSamoa: { code: "AS", ru: "Американское Самоа", kz: "Америкалық Самоа", en: "American Samoa" },
  guam: { code: "GU", ru: "Гуам", kz: "Гуам", en: "Guam" },
  northernMarianaIslands: { code: "MP", ru: "Северные Марианские острова", kz: "Солтүстік Мариан аралдары", en: "Northern Mariana Islands" },
  tajikistan: { code: "TJ", ru: "Таджикистан", kz: "Тәжікстан", en: "Tajikistan" },
  turkmenistan: { code: "TM", ru: "Туркменистан", kz: "Түрікменстан", en: "Turkmenistan" },
  fiji: { code: "FJ", ru: "Фиджи", kz: "Фиджи", en: "Fiji" },
};

export const historicalEntities: Record<HistoricalEntityKey, LocalizedText> = {
  weimarRepublic: { ru: "Веймарская Республика", kz: "Веймар Республикасы", en: "Weimar Republic" },
  russianEmpire: { ru: "Российская империя", kz: "Ресей империясы", en: "Russian Empire" },
  ussr: { ru: "СССР", kz: "КСРО", en: "USSR" },
  thirdReich: { ru: "Третий Рейх", kz: "Үшінші рейх", en: "Third Reich" },
  westGermany: { ru: "ФРГ", kz: "ФРГ", en: "West Germany" },
  eastGermany: { ru: "ГДР", kz: "ГДР", en: "East Germany" },
  czechoslovakia: { ru: "Чехословакия", kz: "Чехословакия", en: "Czechoslovakia" },
  yugoslavia: { ru: "Югославия", kz: "Югославия", en: "Yugoslavia" },
};

type CoinSeed = {
  category?: "coin" | "banknote";
  group?: CollectionGroup;
  continent?: Continent;
  coinGroup?: KazakhstanCoinGroup;
  countryKey?: CountryKey;
  historicalEntityKey?: HistoricalEntityKey;
  relatedCountries?: RelatedCountry[];
  title?: LocalizedText;
  nominalText?: LocalizedText;
  description?: LocalizedText;
  tags?: LocalizedList;
  previewImage?: string;
  imageFront?: string;
  imageBack?: string;
  nominal: string;
  years: string[];
};

function coinImages(basePath: string): Pick<CoinSeed, "previewImage" | "imageFront" | "imageBack"> {
  return {
    previewImage: `${basePath}-revers.jpg`,
    imageFront: `${basePath}-avers.jpg`,
    imageBack: `${basePath}-revers.jpg`,
  };
}

const continentLabels: Record<Continent, LocalizedText> = {
  asia: { ru: "Азия", kz: "Азия", en: "Asia" },
  europe: { ru: "Европа", kz: "Еуропа", en: "Europe" },
  africa: { ru: "Африка", kz: "Африка", en: "Africa" },
  northAmerica: { ru: "Северная Америка", kz: "Солтүстік Америка", en: "North America" },
  southAmerica: { ru: "Южная Америка", kz: "Оңтүстік Америка", en: "South America" },
  oceania: { ru: "Океания", kz: "Океания", en: "Oceania" },
};

function kazakhstanCoin(
  coinGroup: KazakhstanCoinGroup,
  title: LocalizedText,
  nominalText: LocalizedText,
  years: string[] = ["—"],
  imageBasePath?: string,
  extraTags?: Partial<Record<Language, string[]>>,
): CoinSeed {
  return {
    coinGroup,
    countryKey: "kazakhstan",
    nominal: nominalText.ru,
    nominalText,
    title,
    years,
    description: {
      ru: `Монета Казахстана из моей коллекции: ${title.ru}.`,
      kz: `Менің коллекциямдағы Қазақстан монетасы: ${title.kz}.`,
      en: `A Kazakh coin from my collection: ${title.en}.`,
    },
    tags: {
      ru: ["Казахстан", title.ru, nominalText.ru, "монета", ...(extraTags?.ru ?? [])],
      kz: ["Қазақстан", title.kz, nominalText.kz, "монета", ...(extraTags?.kz ?? [])],
      en: ["Kazakhstan", title.en, nominalText.en, "coin", ...(extraTags?.en ?? [])],
    },
    ...(imageBasePath ? coinImages(imageBasePath) : {}),
  };
}

function kazakhstanThemedCoin(
  coinGroup: KazakhstanCoinGroup,
  ruName: string,
  kzName: string,
  enName: string,
  ruNominal: string,
  kzNominal: string,
  enNominal: string,
  year?: string,
  imageBasePath?: string,
): CoinSeed {
  return kazakhstanCoin(
    coinGroup,
    localized(`${ruName} — ${ruNominal}`, `${kzName} — ${kzNominal}`, `${enName} — ${enNominal}`),
    localized(ruNominal, kzNominal, enNominal),
    year ? [year] : ["—"],
    imageBasePath,
  );
}

function kazakhstanCirculationCoin(ruNominal: string, kzNominal: string, enNominal: string, year: string, imageBasePath?: string): CoinSeed {
  return kazakhstanCoin(
    "kazakhstanCirculation",
    localized(ruNominal, kzNominal, enNominal),
    localized(ruNominal, kzNominal, enNominal),
    [year],
    imageBasePath,
  );
}

function coinLocalized(
  continent: Continent,
  countryKey: CountryKey,
  title: LocalizedText,
  nominalText: LocalizedText,
  years: string[],
): CoinSeed {
  const country = countries[countryKey];

  return {
    continent,
    countryKey,
    nominal: nominalText.ru,
    nominalText,
    title,
    years,
    description: {
      ru: `Монета ${country.ru} из моей коллекции: ${title.ru}.`,
      kz: `Менің коллекциямдағы ${country.kz} монетасы: ${title.kz}.`,
      en: `A coin from ${country.en} in my collection: ${title.en}.`,
    },
    tags: {
      ru: [country.ru, title.ru, nominalText.ru, "монета"],
      kz: [country.kz, title.kz, nominalText.kz, "монета"],
      en: [country.en, title.en, nominalText.en, "coin"],
    },
  };
}

function historicalCoinLocalized(
  historicalEntityKey: HistoricalEntityKey,
  title: LocalizedText,
  nominalText: LocalizedText,
  years: string[],
): CoinSeed {
  const entity = historicalEntities[historicalEntityKey];

  return {
    group: "historicalStates",
    historicalEntityKey,
    nominal: nominalText.ru,
    nominalText,
    title,
    years,
    description: {
      ru: `Историческая монета: ${entity.ru}. ${title.ru}.`,
      kz: `Тарихи монета: ${entity.kz}. ${title.kz}.`,
      en: `A historical coin from ${entity.en}: ${title.en}.`,
    },
    tags: {
      ru: [entity.ru, title.ru, nominalText.ru, "историческая монета"],
      kz: [entity.kz, title.kz, nominalText.kz, "тарихи монета"],
      en: [entity.en, title.en, nominalText.en, "historical coin"],
    },
  };
}

function specialTerritoryCoinLocalized(
  countryKey: CountryKey,
  title: LocalizedText,
  nominalText: LocalizedText,
  years: string[],
): CoinSeed {
  const country = countries[countryKey];

  return {
    group: "specialTerritories",
    countryKey,
    nominal: nominalText.ru,
    nominalText,
    title,
    years,
    description: {
      ru: `Монета особой территории: ${country.ru}. ${title.ru}.`,
      kz: `Ерекше аумақ монетасы: ${country.kz}. ${title.kz}.`,
      en: `A coin from the special territory of ${country.en}: ${title.en}.`,
    },
    tags: {
      ru: [country.ru, title.ru, nominalText.ru, "монета", "особая территория"],
      kz: [country.kz, title.kz, nominalText.kz, "монета", "ерекше аумақ"],
      en: [country.en, title.en, nominalText.en, "coin", "special territory"],
    },
  };
}

const coinSeeds: CoinSeed[] = [
  { ...coinLocalized("europe", "romania", localized("10 бани", "10 бани", "10 bani"), localized("10 бани", "10 бани", "10 bani"), ["2018"]), ...coinImages("/images/coins/romania/romania-10-bani-2018") },
  { ...coinLocalized("europe", "moldova", localized("50 бани", "50 бани", "50 bani"), localized("50 бани", "50 бани", "50 bani"), ["1997"]), ...coinImages("/images/coins/moldova/moldova-50-bani-1997") },
  { ...coinLocalized("europe", "moldova", localized("25 бани", "25 бани", "25 bani"), localized("25 бани", "25 бани", "25 bani"), ["2011"]), ...coinImages("/images/coins/moldova/moldova-25-bani-2011") },
  { ...coinLocalized("europe", "latvia", localized("5 сантимов", "5 сантим", "5 santimi"), localized("5 сантимов", "5 сантим", "5 santimi"), ["2009"]), ...coinImages("/images/coins/latvia/latvia-5-santimi-2009") },
  { ...coinLocalized("europe", "ukraine", localized("1 гривна", "1 гривна", "1 hryvnia"), localized("1 гривна", "1 гривна", "1 hryvnia"), ["2001"]), ...coinImages("/images/coins/ukraine/ukraine-1-hryvnia-2001") },
  { ...coinLocalized("europe", "france", localized("10 франков Ролан Гаррос", "10 франк Ролан Гаррос", "10 francs Roland Garros"), localized("10 франков", "10 франк", "10 francs"), ["1988"]), ...coinImages("/images/coins/france/france-10-francs-roland-garros-1988") },
  { ...coinLocalized("europe", "france", localized("1 франк", "1 франк", "1 franc"), localized("1 франк", "1 франк", "1 franc"), ["1923"]), ...coinImages("/images/coins/france/france-1-franc-1923") },
  { ...coinLocalized("europe", "luxembourg", localized("1 франк", "1 франк", "1 franc"), localized("1 франк", "1 франк", "1 franc"), ["1953"]), ...coinImages("/images/coins/luxembourg/luxembourg-1-franc-1953") },
  { ...coinLocalized("europe", "italy", localized("10 лир", "10 лира", "10 lire"), localized("10 лир", "10 лира", "10 lire"), ["1954"]), ...coinImages("/images/coins/italy/italy-10-lire-1954") },
  { ...coinLocalized("europe", "northMacedonia", localized("50 дени", "50 дени", "50 deni"), localized("50 дени", "50 дени", "50 deni"), ["1993"]), ...coinImages("/images/coins/north-macedonia/north-macedonia-50-deni-1993") },
  { ...coinLocalized("asia", "yemen", localized("20 риалов", "20 риал", "20 rials"), localized("20 риалов", "20 риал", "20 rials"), ["2003"]), ...coinImages("/images/coins/yemen/yemen-20-rials-2003") },
  { ...coinLocalized("asia", "sriLanka", localized("2 рупии", "2 рупия", "2 rupees"), localized("2 рупии", "2 рупия", "2 rupees"), ["2009"]), ...coinImages("/images/coins/sri-lanka/sri-lanka-2-rupees-2009") },
  { ...coinLocalized("asia", "turkmenistan", localized("1000 манат", "1000 манат", "1000 manat"), localized("1000 манат", "1000 манат", "1000 manat"), ["1999"]), ...coinImages("/images/coins/turkmenistan/turkmenistan-1000-manat-1999") },
  { ...coinLocalized("asia", "bangladesh", localized("10 пойш", "10 пойша", "10 poisha"), localized("10 пойш", "10 пойша", "10 poisha"), ["1994"]), ...coinImages("/images/coins/bangladesh/bangladesh-10-poisha-1994") },
  { ...coinLocalized("asia", "kuwait", localized("50 филсов", "50 филс", "50 fils"), localized("50 филсов", "50 филс", "50 fils"), ["1979"]), ...coinImages("/images/coins/kuwait/kuwait-50-fils-1979") },
  { ...coinLocalized("asia", "brunei", localized("1 сен", "1 сен", "1 sen"), localized("1 сен", "1 сен", "1 sen"), ["2017"]), ...coinImages("/images/coins/brunei/brunei-1-sen-2017") },
  { ...coinLocalized("asia", "lebanon", localized("50 ливров", "50 ливр", "50 livres"), localized("50 ливров", "50 ливр", "50 livres"), ["1996"]), ...coinImages("/images/coins/lebanon/lebanon-50-livres-1996") },
  { ...coinLocalized("asia", "nepal", localized("1 рупия", "1 рупия", "1 rupee"), localized("1 рупия", "1 рупия", "1 rupee"), ["—"]), ...coinImages("/images/coins/nepal/nepal-1-rupee") },
  { ...coinLocalized("asia", "maldives", localized("5 лаари", "5 лаари", "5 laari"), localized("5 лаари", "5 лаари", "5 laari"), ["2012"]), ...coinImages("/images/coins/maldives/maldives-5-laari-2012") },
  { ...coinLocalized("northAmerica", "cuba", localized("1 песо", "1 песо", "1 peso"), localized("1 песо", "1 песо", "1 peso"), ["2007"]), ...coinImages("/images/coins/cuba/cuba-1-peso-2007") },
  { ...coinLocalized("northAmerica", "bahamas", localized("5 центов", "5 цент", "5 cents"), localized("5 центов", "5 цент", "5 cents"), ["2005"]), ...coinImages("/images/coins/bahamas/bahamas-5-cents-2005") },
  { ...coinLocalized("northAmerica", "guatemala", localized("25 сентаво", "25 сентаво", "25 centavos"), localized("25 сентаво", "25 сентаво", "25 centavos"), ["2011"]), ...coinImages("/images/coins/guatemala/guatemala-25-centavos-2011") },
  { ...coinLocalized("northAmerica", "haiti", localized("20 сантимов", "20 сантим", "20 centimes"), localized("20 сантимов", "20 сантим", "20 centimes"), ["1995"]), ...coinImages("/images/coins/haiti/haiti-20-centimes-1995") },
  { ...coinLocalized("northAmerica", "trinidadAndTobago", localized("5 центов", "5 цент", "5 cents"), localized("5 центов", "5 цент", "5 cents"), ["2017"]), ...coinImages("/images/coins/trinidad-and-tobago/trinidad-and-tobago-5-cents-2017") },
  { ...coinLocalized("northAmerica", "costaRica", localized("10 колонов", "10 колон", "10 colones"), localized("10 колонов", "10 колон", "10 colones"), ["2012"]), ...coinImages("/images/coins/costa-rica/costa-rica-10-colones-2012") },
  { ...coinLocalized("southAmerica", "bolivia", localized("1 боливиано", "1 боливиано", "1 boliviano"), localized("1 боливиано", "1 боливиано", "1 boliviano"), ["2012"]), ...coinImages("/images/coins/bolivia/bolivia-1-boliviano-2012") },
  { ...coinLocalized("southAmerica", "chile", localized("1 песо", "1 песо", "1 peso"), localized("1 песо", "1 песо", "1 peso"), ["1990"]), ...coinImages("/images/coins/chile/chile-1-peso-1990") },
  { ...coinLocalized("southAmerica", "colombia", localized("50 песо", "50 песо", "50 pesos"), localized("50 песо", "50 песо", "50 pesos"), ["2017"]), ...coinImages("/images/coins/colombia/colombia-50-pesos-2017") },
  { ...coinLocalized("southAmerica", "argentina", localized("1 песо", "1 песо", "1 peso"), localized("1 песо", "1 песо", "1 peso"), ["2009"]), ...coinImages("/images/coins/argentina/argentina-1-peso-2009") },
  { ...coinLocalized("africa", "angola", localized("100 кванза", "100 кванза", "100 kwanza"), localized("100 кванза", "100 кванза", "100 kwanza"), ["2015"]), ...coinImages("/images/coins/angola/angola-100-kwanza-2015") },
  { ...coinLocalized("africa", "mozambique", localized("10 метикалов", "10 метикал", "10 meticais"), localized("10 метикалов", "10 метикал", "10 meticais"), ["2006"]), ...coinImages("/images/coins/mozambique/mozambique-10-meticais-2006") },
  { ...coinLocalized("africa", "mozambique", localized("5000 метикалов", "5000 метикал", "5000 meticais"), localized("5000 метикалов", "5000 метикал", "5000 meticais"), ["1998"]), ...coinImages("/images/coins/mozambique/mozambique-5000-meticais-1998") },
  { ...coinLocalized("africa", "botswana", localized("2 пулы", "2 пула", "2 pula"), localized("2 пулы", "2 пула", "2 pula"), ["2013"]), ...coinImages("/images/coins/botswana/botswana-2-pula-2013") },
  { ...coinLocalized("africa", "namibia", localized("50 центов", "50 цент", "50 cents"), localized("50 центов", "50 цент", "50 cents"), ["2010"]), ...coinImages("/images/coins/namibia/namibia-50-cents-2010") },
  { ...coinLocalized("africa", "southAfrica", localized("50 центов", "50 цент", "50 cents"), localized("50 центов", "50 цент", "50 cents"), ["2008"]), ...coinImages("/images/coins/south-africa/south-africa-50-cents-2008") },
  { ...coinLocalized("africa", "egypt", localized("1 фунт с фараоном", "1 фунт перғауынмен", "1 pound with pharaoh"), localized("1 фунт", "1 фунт", "1 pound"), ["—"]), ...coinImages("/images/coins/egypt/egypt-1-pound-pharaoh") },
  { ...coinLocalized("africa", "zambia", localized("50 нгве", "50 нгве", "50 ngwee"), localized("50 нгве", "50 нгве", "50 ngwee"), ["2012"]), ...coinImages("/images/coins/zambia/zambia-50-ngwee-2012") },
  { ...coinLocalized("africa", "kenya", localized("20 шиллингов", "20 шиллинг", "20 shillings"), localized("20 шиллингов", "20 шиллинг", "20 shillings"), ["1998"]), ...coinImages("/images/coins/kenya/kenya-20-shillings-1998") },
  { ...coinLocalized("africa", "uganda", localized("5 шиллингов", "5 шиллинг", "5 shillings"), localized("5 шиллингов", "5 шиллинг", "5 shillings"), ["1987"]), ...coinImages("/images/coins/uganda/uganda-5-shillings-1987") },
  { ...coinLocalized("africa", "malawi", localized("1 тамбала", "1 тамбала", "1 tambala"), localized("1 тамбала", "1 тамбала", "1 tambala"), ["1995"]), ...coinImages("/images/coins/malawi/malawi-1-tambala-1995") },
  { ...coinLocalized("africa", "eritrea", localized("1 цент", "1 цент", "1 cent"), localized("1 цент", "1 цент", "1 cent"), ["1997"]), ...coinImages("/images/coins/eritrea/eritrea-1-cent-1997") },
  { ...coinLocalized("africa", "seychelles", localized("1 цент", "1 цент", "1 cent"), localized("1 цент", "1 цент", "1 cent"), ["2014"]), ...coinImages("/images/coins/seychelles/seychelles-1-cent-2014") },
  { ...coinLocalized("oceania", "australia", localized("1 доллар", "1 доллар", "1 dollar"), localized("1 доллар", "1 доллар", "1 dollar"), ["2005"]), ...coinImages("/images/coins/australia/australia-1-dollar-2005") },
  { ...coinLocalized("oceania", "vanuatu", localized("10 вату", "10 вату", "10 vatu"), localized("10 вату", "10 вату", "10 vatu"), ["2004"]), ...coinImages("/images/coins/vanuatu/vanuatu-10-vatu-2004") },
  { ...coinLocalized("oceania", "samoa", localized("10 сене", "10 сене", "10 sene"), localized("10 сене", "10 сене", "10 sene"), ["2011"]), ...coinImages("/images/coins/samoa/samoa-10-sene-2011") },
  { ...coinLocalized("oceania", "tonga", localized("5 сенити", "5 сенити", "5 seniti"), localized("5 сенити", "5 сенити", "5 seniti"), ["2015"]), ...coinImages("/images/coins/tonga/tonga-5-seniti-2015") },
  { ...kazakhstanThemedCoin("kazakhstanHistory", "Полигон", "Полигон", "Polygon", "100 тенге", "100 теңге", "100 tenge", "2021"), ...coinImages("/images/coins/kazakhstan/kazakhstan-polygon-100-tenge-2021") },
  { ...historicalCoinLocalized("ussr", localized("1 копейка", "1 тиын", "1 kopeck"), localized("1 копейка", "1 тиын", "1 kopeck"), ["1968"]), ...coinImages("/images/coins/ussr/ussr-1-kopeck-1968") },
  { ...specialTerritoryCoinLocalized("gibraltar", localized("5 пенсов", "5 пенс", "5 pence"), localized("5 пенсов", "5 пенс", "5 pence"), ["2003"]), ...coinImages("/images/coins/gibraltar/gibraltar-5-pence-2003") },
  { ...specialTerritoryCoinLocalized("tokelau", localized("1 цент", "1 цент", "1 cent"), localized("1 цент", "1 цент", "1 cent"), ["2017"]), ...coinImages("/images/coins/tokelau/tokelau-1-cent-2017") },
  { ...specialTerritoryCoinLocalized("cookIslands", localized("1 цент", "1 цент", "1 cent"), localized("1 цент", "1 цент", "1 cent"), ["2017"]), ...coinImages("/images/coins/cook-islands/cook-islands-1-cent-2017") },
  { ...specialTerritoryCoinLocalized("macau", localized("50 авос", "50 авос", "50 avos"), localized("50 авос", "50 авос", "50 avos"), ["1993"]), ...coinImages("/images/coins/macau/macau-50-avos-1993") },
  { ...specialTerritoryCoinLocalized("somaliland", localized("1 шиллинг", "1 шиллинг", "1 shilling"), localized("1 шиллинг", "1 шиллинг", "1 shilling"), ["1994"]), ...coinImages("/images/coins/somaliland/somaliland-1-shilling-1994") },
  { continent: "asia", countryKey: "azerbaijan", nominal: "10 кэпик", years: ["—"], ...coinImages("/images/coins/azerbaijan/azerbaijan-10-qapik") },
  { continent: "asia", countryKey: "azerbaijan", nominal: "50 кәпик", years: ["—"], ...coinImages("/images/coins/azerbaijan/azerbaijan-50-qapik") },
  { continent: "asia", countryKey: "azerbaijan", nominal: "5 кәпик", years: ["—"], ...coinImages("/images/coins/azerbaijan/azerbaijan-5-qapik") },
  { continent: "asia", countryKey: "azerbaijan", nominal: "20 кэпик", years: ["—"], ...coinImages("/images/coins/azerbaijan/azerbaijan-20-qapik") },
  { continent: "asia", countryKey: "armenia", nominal: "100 драм", years: ["2003"], ...coinImages("/images/coins/armenia/armenia-100-dram-2003") },
  {
    ...coinLocalized("asia", "georgia", localized("1 лари 2006", "1 лари 2006", "1 lari 2006"), localized("1 лари", "1 лари", "1 lari"), ["2006"]),
    description: {
      ru: "Монета Грузии из моей коллекции.",
      kz: "Менің коллекциямдағы Грузия монетасы.",
      en: "A coin from Georgia in my collection.",
    },
    tags: {
      ru: ["Грузия", "Азия", "1 лари", "лари", "2006", "монета"],
      kz: ["Грузия", "Азия", "1 лари", "лари", "2006", "монета"],
      en: ["Georgia", "Asia", "1 lari", "lari", "2006", "coin"],
    },
    ...coinImages("/images/coins/georgia/georgia-1-lari-2006"),
  },
  { continent: "asia", countryKey: "georgia", nominal: "2 лари", years: ["2006"], ...coinImages("/images/coins/georgia/georgia-2-lari-2006") },
  { continent: "asia", countryKey: "georgia", nominal: "5 тетри", years: ["1993"], ...coinImages("/images/coins/georgia/georgia-5-tetri-1993") },
  { continent: "asia", countryKey: "georgia", nominal: "10 тетри", years: ["1993"], ...coinImages("/images/coins/georgia/georgia-10-tetri-1993") },
  { continent: "asia", countryKey: "georgia", nominal: "20 тетри", years: ["1993"], ...coinImages("/images/coins/georgia/georgia-20-tetri-1993") },
  { continent: "asia", countryKey: "georgia", nominal: "50 тетри", years: ["2006"], ...coinImages("/images/coins/georgia/georgia-50-tetri-2006") },
  { continent: "asia", countryKey: "israel", nominal: "10 агорот", years: ["—"], ...coinImages("/images/coins/israel/israel-10-agorot") },
  { continent: "asia", countryKey: "india", nominal: "1 рупия", years: ["2002"], ...coinImages("/images/coins/india/india-1-rupee-2002") },
  { continent: "asia", countryKey: "india", nominal: "2 рупии", years: ["2010"], ...coinImages("/images/coins/india/india-2-rupees-2010") },
  { continent: "asia", countryKey: "india", nominal: "2 рупии", years: ["2012"], ...coinImages("/images/coins/india/india-2-rupees-2012") },
  { continent: "asia", countryKey: "indonesia", nominal: "100 рупий", years: ["2016"], ...coinImages("/images/coins/indonesia/indonesia-100-rupiah-2016") },
  { continent: "asia", countryKey: "jordan", nominal: "1 кирш", years: ["1994"], ...coinImages("/images/coins/jordan/jordan-1-qirsh-1994") },
  { continent: "asia", countryKey: "qatar", nominal: "50 дирхам", years: ["2020"], ...coinImages("/images/coins/qatar/qatar-50-dirhams-2020") },
  { continent: "asia", countryKey: "china", nominal: "1 фынь", years: ["2011"], ...coinImages("/images/coins/china/china-1-fen-2011") },
  { continent: "asia", countryKey: "china", nominal: "1 юань", years: ["1997"], ...coinImages("/images/coins/china/china-1-yuan-1997") },
  { continent: "asia", countryKey: "china", nominal: "1 юань", years: ["1999"], ...coinImages("/images/coins/china/china-1-yuan-1999") },
  { continent: "asia", countryKey: "china", nominal: "1 дзяо", years: ["2005"], ...coinImages("/images/coins/china/china-1-jiao-2005") },
  { continent: "asia", countryKey: "kyrgyzstan", nominal: "1 сом", years: ["2008"], ...coinImages("/images/coins/kyrgyzstan/kyrgyzstan-1-som-2008") },
  { continent: "asia", countryKey: "kyrgyzstan", nominal: "10 сом", years: ["2009"], ...coinImages("/images/coins/kyrgyzstan/kyrgyzstan-10-som-2009") },
  { continent: "asia", countryKey: "malaysia", nominal: "10 сен", years: ["2011"], ...coinImages("/images/coins/malaysia/malaysia-10-sen-2011") },
  { continent: "asia", countryKey: "mongolia", nominal: "20 мөнгө", years: ["1981"], ...coinImages("/images/coins/mongolia/mongolia-20-mongo-1981") },
  { continent: "asia", countryKey: "unitedArabEmirates", nominal: "1 дирхам", years: ["—"], ...coinImages("/images/coins/united-arab-emirates/united-arab-emirates-1-dirham") },
  { continent: "asia", countryKey: "singapore", nominal: "50 центов", years: ["2019"], ...coinImages("/images/coins/singapore/singapore-50-cents-2019") },
  { continent: "asia", countryKey: "singapore", nominal: "10 центов", years: ["2013"], ...coinImages("/images/coins/singapore/singapore-10-cents-2013") },
  { continent: "asia", countryKey: "singapore", nominal: "20 центов", years: ["2016"], ...coinImages("/images/coins/singapore/singapore-20-cents-2016") },
  { continent: "asia", countryKey: "syria", nominal: "50 пиастров", years: ["1979"], ...coinImages("/images/coins/syria/syria-50-piastres-1979") },
  { continent: "asia", countryKey: "thailand", nominal: "50 сатанг", years: ["2008"], ...coinImages("/images/coins/thailand/thailand-50-satang-2008") },
  { continent: "asia", countryKey: "thailand", nominal: "1 бат", years: ["—"], ...coinImages("/images/coins/thailand/thailand-1-baht") },
  { continent: "asia", countryKey: "thailand", nominal: "5 бат", years: ["—"], ...coinImages("/images/coins/thailand/thailand-5-baht") },
  { continent: "asia", countryKey: "thailand", nominal: "10 бат", years: ["—"], ...coinImages("/images/coins/thailand/thailand-10-baht") },
  { continent: "asia", countryKey: "turkey", nominal: "1 лира", years: ["2022"], ...coinImages("/images/coins/turkey/turkey-1-lira-2022") },
  { continent: "asia", countryKey: "turkey", nominal: "5 куруш", years: ["2020"], ...coinImages("/images/coins/turkey/turkey-5-kurus-2020") },
  { continent: "asia", countryKey: "turkey", nominal: "10 куруш", years: ["2006"], ...coinImages("/images/coins/turkey/turkey-10-kurus-2006") },
  { continent: "asia", countryKey: "turkey", nominal: "10 куруш", years: ["2011"], ...coinImages("/images/coins/turkey/turkey-10-kurus-2011") },
  { continent: "asia", countryKey: "turkey", nominal: "50 куруш", years: ["2022"], ...coinImages("/images/coins/turkey/turkey-50-kurus-2022") },
  { ...coinLocalized("asia", "turkey", localized("1000 лир", "1000 лира", "1,000 lira"), localized("1000 лир", "1000 лира", "1,000 lira"), ["1990"]), ...coinImages("/images/coins/turkey/turkey-1000-lira-1990") },
  { ...coinLocalized("asia", "tajikistan", localized("3 сомони", "3 сомони", "3 somoni"), localized("3 сомони", "3 сомони", "3 somoni"), ["2019"]), ...coinImages("/images/coins/tajikistan/tajikistan-3-somoni-2019") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "5 сум", years: ["1997"], ...coinImages("/images/coins/uzbekistan/uzbekistan-5-som-1997") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "1 сум", years: ["2000"], ...coinImages("/images/coins/uzbekistan/uzbekistan-1-som-2000") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "50 сум", years: ["2018"], ...coinImages("/images/coins/uzbekistan/uzbekistan-50-som-2018") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "100 сум", years: ["2018"], ...coinImages("/images/coins/uzbekistan/uzbekistan-100-som-2018") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "200 сум", years: ["2018"], ...coinImages("/images/coins/uzbekistan/uzbekistan-200-som-2018") },
  { continent: "asia", countryKey: "uzbekistan", nominal: "500 сум", years: ["2018"], ...coinImages("/images/coins/uzbekistan/uzbekistan-500-som-2018") },
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Магжан Жумабаев", "Мағжан Жұмабаев", "Magzhan Zhumabayev", "50 тенге", "50 теңге", "50 tenge", "2013", "/images/coins/kazakhstan/kazakhstan-magzhan-zhumabayev-50-tenge-2013"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Ильяс Есенберлин", "Ілияс Есенберлин", "Ilyas Esenberlin", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-ilyas-yesenberlin-50-tenge-2015"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Абай Кунанбаев", "Абай Құнанбаев", "Abai Qunanbaiuly", "100 тенге", "100 теңге", "100 tenge", "2020", "/images/coins/kazakhstan/kazakhstan-abai-qunanbayev-100-tenge-2020"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Суюнбай", "Сүйінбай", "Suyinbai", "200 тенге", "200 теңге", "200 tenge", "2023", "/images/coins/kazakhstan/kazakhstan-suyinbay-200-tenge-2023"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Курмангазы", "Құрманғазы", "Kurmangazy", "200 тенге", "200 теңге", "200 tenge", "2023", "/images/coins/kazakhstan/kazakhstan-qurmangazy-200-tenge-2023"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Аль-Фараби", "Әл-Фараби", "Al-Farabi", "200 тенге", "200 теңге", "200 tenge", "2023", "/images/coins/kazakhstan/kazakhstan-al-farabi-200-tenge-2023"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Динмухамед Кунаев", "Дінмұхаммед Қонаев", "Dinmukhamed Kunayev", "50 тенге", "50 теңге", "50 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-dinmukhamed-qonayev-50-tenge-2012"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Жумабек Ташенов", "Жұмабек Ташенов", "Zhumabek Tashenov", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-zhumabek-tashenov-50-tenge-2015"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Жамбыл Жабаев", "Жамбыл Жабаев", "Zhambyl Zhabayev", "20 тенге", "20 теңге", "20 tenge", "1996", "/images/coins/kazakhstan/kazakhstan-zhambyl-zhabayev-20-tenge-1996"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Махамбет Утемисулы", "Махамбет Өтемісұлы", "Makhambet Utemisuly", "50 тенге", "50 теңге", "50 tenge", "2003", "/images/coins/kazakhstan/kazakhstan-makhambet-utemisuly-50-tenge-2003"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Шокан Уалиханов", "Шоқан Уәлиханов", "Shoqan Walikhanov", "50 тенге", "50 теңге", "50 tenge", "2014", "/images/coins/kazakhstan/kazakhstan-shokan-ualikhanov-50-tenge-2014"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Алихан Бокейханов", "Алихан Бөкейханов", "Alikhan Bokeikhanov", "100 тенге", "100 теңге", "100 tenge", "2016", "/images/coins/kazakhstan/kazakhstan-alikhan-bokeykhanov-100-tenge-2016"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Абулхаир", "Әбілхайыр", "Abulkhair", "100 тенге", "100 теңге", "100 tenge", "2016", "/images/coins/kazakhstan/kazakhstan-abulkhair-100-tenge-2016"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Малик Габдуллин", "Мәлік Ғабдуллин", "Malik Gabdullin", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-malik-gabdullin-50-tenge-2015"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Алькей Маргулан", "Әлкей Марғұлан", "Alkey Margulan", "50 тенге", "50 теңге", "50 tenge", "2004", "/images/coins/kazakhstan/kazakhstan-alkey-margulan-50-tenge-2004"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Тарас Шевченко", "Тарас Шевченко", "Taras Shevchenko", "50 тенге", "50 теңге", "50 tenge", "2014", "/images/coins/kazakhstan/kazakhstan-taras-shevchenko-50-tenge-2014"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Хамит Ергали", "Хамит Ерғали", "Khamit Yergali", "100 тенге", "100 теңге", "100 tenge", "2016", "/images/coins/kazakhstan/kazakhstan-khamit-ergali-100-tenge-2016"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Токтагали Жангелдин", "Тоқтағали Жангелдин", "Toktagali Zhangeldin", "100 тенге", "100 теңге", "100 tenge", "2016", "/images/coins/kazakhstan/kazakhstan-toqtagali-zhangeldin-100-tenge-2016"),
  kazakhstanThemedCoin("kazakhstanHistoricalFigures", "Ермукан Бекмаханов", "Ермұқан Бекмаханов", "Yermukhan Bekmakhanov", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-ermukhan-bekmakhanov-50-tenge-2015"),
  kazakhstanCoin("kazakhstanHistoricalFigures", localized("20 тенге Каныш Сатпаев 100 лет 1999", "20 теңге Қаныш Сәтбаев 100 жыл 1999", "20 tenge Kanysh Satbayev 100 years 1999"), localized("20 тенге", "20 теңге", "20 tenge"), ["1999"], "/images/coins/kazakhstan/kazakhstan-20-tenge-kanysh-satbayev-100-years-1999", { ru: ["Каныш Сатпаев", "100 лет", "Исторические личности", "1999"], kz: ["Қаныш Сәтбаев", "100 жыл", "Тарихи тұлғалар", "1999"], en: ["Kanysh Satbayev", "100 years", "Historical figures", "1999"] }),

  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "70 лет Великой Победе", "Ұлы жеңіске 70 жыл", "70th anniversary of the Great Victory", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-victory-70-years-50-tenge-2015"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "75 лет Великой Победе", "Ұлы жеңіске 75 жыл", "75th anniversary of the Great Victory", "100 тенге", "100 теңге", "100 tenge", "2020", "/images/coins/kazakhstan/kazakhstan-victory-75-years-100-tenge-2020"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "30 лет Конституции", "30 жыл Конституция", "30th anniversary of the Constitution", "100 тенге", "100 теңге", "100 tenge", "2025", "/images/coins/kazakhstan/kazakhstan-constitution-30-years-100-tenge-2025"),
  kazakhstanCoin("kazakhstanAnniversaryDates", localized("100 тенге Ассамблея народа Казахстана 25 лет 2020", "100 теңге Қазақстан халқы Ассамблеясына 25 жыл 2020", "100 tenge Assembly of the People of Kazakhstan 25 years 2020"), localized("100 тенге", "100 теңге", "100 tenge"), ["2020"], "/images/coins/kazakhstan/kazakhstan-100-tenge-assembly-25-years-2020", { ru: ["Ассамблея народа Казахстана", "25 лет", "Памятные даты", "2020"], kz: ["Қазақстан халқы Ассамблеясы", "25 жыл", "Атаулы даталар", "2020"], en: ["Assembly of the People of Kazakhstan", "25 years", "Commemorative dates", "2020"] }),
  kazakhstanCoin("kazakhstanAnniversaryDates", localized("100 тенге Конституция 25 лет 2020", "100 теңге Конституцияға 25 жыл 2020", "100 tenge Constitution 25 years 2020"), localized("100 тенге", "100 теңге", "100 tenge"), ["2020"], "/images/coins/kazakhstan/kazakhstan-100-tenge-constitution-25-years-2020", { ru: ["Конституция", "25 лет", "Памятные даты", "2020"], kz: ["Конституция", "25 жыл", "Атаулы даталар", "2020"], en: ["Constitution", "25 years", "Commemorative dates", "2020"] }),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "80 лет Победы", "80 жыл Жеңіс", "80th anniversary of Victory", "200 тенге", "200 теңге", "200 tenge", "2025", "/images/coins/kazakhstan/kazakhstan-victory-80-years-200-tenge-2025"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "50 лет ООН", "БҰҰ-ға 50 жыл", "50th anniversary of the UN", "20 тенге", "20 теңге", "20 tenge", "1995", "/images/coins/kazakhstan/kazakhstan-un-50-years-20-tenge-1995"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "Казахское ханство", "Қазақ хандығы", "Kazakh Khanate", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-kazakh-khanate-50-tenge-2015"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "1500 лет Туркестану", "Түркістан 1500 жыл", "1500th anniversary of Turkistan", "50 тенге", "50 теңге", "50 tenge", "2000", "/images/coins/kazakhstan/kazakhstan-turkistan-1500-years-50-tenge-2000"),
  kazakhstanThemedCoin("kazakhstanAnniversaryDates", "20 лет Желтоксану", "Желтоқсан 20 жыл", "20th anniversary of Jeltoqsan", "50 тенге", "50 теңге", "50 tenge", "2006", "/images/coins/kazakhstan/kazakhstan-zheltoksan-20-years-50-tenge-2006"),

  kazakhstanThemedCoin("kazakhstanHistory", "Тайказан", "Тайқазан", "Taikazan", "50 тенге", "50 теңге", "50 tenge", "2014", "/images/coins/kazakhstan/kazakhstan-taikazan-50-tenge-2014"),
  kazakhstanThemedCoin("kazakhstanHistory", "Аполлон-Союз", "Аполлон-Союз", "Apollo-Soyuz", "50 тенге", "50 теңге", "50 tenge", "2009", "/images/coins/kazakhstan/kazakhstan-50-tenge-apollo-soyuz-2009"),
  kazakhstanThemedCoin("kazakhstanHistory", "Луноход", "Луноход", "Lunokhod", "50 тенге", "50 теңге", "50 tenge", "2010", "/images/coins/kazakhstan/kazakhstan-lunokhod-50-tenge-2010"),
  kazakhstanCoin("kazakhstanHistory", localized("100 тенге Белка и Стрелка 2020", "100 теңге Белка мен Стрелка 2020", "100 tenge Belka and Strelka 2020"), localized("100 тенге", "100 теңге", "100 tenge"), ["2020"], "/images/coins/kazakhstan/kazakhstan-100-tenge-belka-strelka-2020", { ru: ["Белка", "Стрелка", "История", "2020"], kz: ["Белка", "Стрелка", "Тарих", "2020"], en: ["Belka", "Strelka", "History", "2020"] }),

  kazakhstanThemedCoin("kazakhstanTraditions", "Жар-жар", "Жар-жар", "Zhar-zhar", "200 тенге", "200 теңге", "200 tenge", "2023", "/images/coins/kazakhstan/kazakhstan-zhar-zhar-200-tenge-2023"),
  kazakhstanThemedCoin("kazakhstanTraditions", "Тусау кесу", "Тұсау кесу", "Tusau kesu", "50 тенге", "50 теңге", "50 tenge", "2007", "/images/coins/kazakhstan/kazakhstan-tusau-kesu-50-tenge-2007"),
  kazakhstanThemedCoin("kazakhstanTraditions", "Наурыз мейрамы", "Наурыз мейрамы", "Nauryz holiday", "50 тенге", "50 теңге", "50 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-nauryz-50-tenge-2012"),
  kazakhstanThemedCoin("kazakhstanTraditions", "Суйиндир", "Сүйіндір", "Suyindir", "50 тенге", "50 теңге", "50 tenge", "2013", "/images/coins/kazakhstan/kazakhstan-50-tenge-suyindir-2013"),
  kazakhstanThemedCoin("kazakhstanTraditions", "Ерулик", "Ерулік", "Yerulik", "200 тенге", "200 теңге", "200 tenge", "2024", "/images/coins/kazakhstan/kazakhstan-erulik-200-tenge-2024"),
  kazakhstanThemedCoin("kazakhstanTraditions", "Казах куреси", "Қазақ күресі", "Kazakh kuresi", "200 тенге", "200 теңге", "200 tenge", "2025", "/images/coins/kazakhstan/kazakhstan-kazakh-kuresi-200-tenge-2025"),

  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Ер жигит", "Ер жігіт", "Er zhigit", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-er-zhigit-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Сулу айел", "Сұлу әйел", "Sulu ayel", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-sulu-ayel-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Кумай тазы", "Құмай тазы", "Kumai tazy", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-qumai-tazy-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Жуйрик ат", "Жүйрік ат", "Zhuyrik at", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-zhuyrik-at-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Акылы билим", "Ақыл білім", "Akyl bilim", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-aqyl-bilim-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Берен мылтык", "Берен мылтық", "Beren myltyk", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-beren-myltyq-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSevenTreasures", "Кыран буркит", "Қыран бүркіт", "Kyran burkit", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-qyran-burkit-100-tenge"),

  kazakhstanThemedCoin("kazakhstanSakaStyle", "Крылатый барс", "Қанатты барыс", "Winged snow leopard", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-winged-snow-leopard-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSakaStyle", "Маска", "Маска", "Mask", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-mask-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSakaStyle", "Свернувшийся барс", "Бүктетілген барыс", "Curled snow leopard", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-curled-snow-leopard-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSakaStyle", "Золотое украшение в виде оленя", "Бұғы түріндегі алтын әшекей", "Gold deer-shaped ornament", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-golden-deer-decoration-100-tenge"),
  kazakhstanThemedCoin("kazakhstanSakaStyle", "Олень", "Бұғы", "Deer", "100 тенге", "100 теңге", "100 tenge", undefined, "/images/coins/kazakhstan/kazakhstan-deer-100-tenge"),

  kazakhstanThemedCoin("kazakhstanCities", "Атырау", "Атырау", "Atyrau", "50 тенге", "50 теңге", "50 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-atyrau-50-tenge-2012"),
  kazakhstanThemedCoin("kazakhstanCities", "Актау", "Ақтау", "Aktau", "50 тенге", "50 теңге", "50 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-aktau-50-tenge-2012"),
  kazakhstanThemedCoin("kazakhstanCities", "Павлодар", "Павлодар", "Pavlodar", "50 тенге", "50 теңге", "50 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-pavlodar-50-tenge-2012"),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Орал 2014", "50 теңге Орал 2014", "50 tenge Oral 2014"), localized("50 тенге", "50 теңге", "50 tenge"), ["2014"], "/images/coins/kazakhstan/kazakhstan-50-tenge-oral-2014", { ru: ["Орал", "Города Казахстана", "2014"], kz: ["Орал", "Қазақстан қалалары", "2014"], en: ["Oral", "Cities of Kazakhstan", "2014"] }),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Кызылорда 2014", "50 теңге Қызылорда 2014", "50 tenge Kyzylorda 2014"), localized("50 тенге", "50 теңге", "50 tenge"), ["2014"], "/images/coins/kazakhstan/kazakhstan-50-tenge-kyzylorda-2014", { ru: ["Кызылорда", "Города Казахстана", "2014"], kz: ["Қызылорда", "Қазақстан қалалары", "2014"], en: ["Kyzylorda", "Cities of Kazakhstan", "2014"] }),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Кокшетау 2015", "50 теңге Көкшетау 2015", "50 tenge Kokshetau 2015"), localized("50 тенге", "50 теңге", "50 tenge"), ["2015"], "/images/coins/kazakhstan/kazakhstan-50-tenge-kokshetau-2015", { ru: ["Кокшетау", "Города Казахстана", "2015"], kz: ["Көкшетау", "Қазақстан қалалары", "2015"], en: ["Kokshetau", "Cities of Kazakhstan", "2015"] }),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Алматы 2015", "50 теңге Алматы 2015", "50 tenge Almaty 2015"), localized("50 тенге", "50 теңге", "50 tenge"), ["2015"], "/images/coins/kazakhstan/kazakhstan-50-tenge-almaty-2015", { ru: ["Алматы", "Города Казахстана", "2015"], kz: ["Алматы", "Қазақстан қалалары", "2015"], en: ["Almaty", "Cities of Kazakhstan", "2015"] }),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Шымкент 2015", "50 теңге Шымкент 2015", "50 tenge Shymkent 2015"), localized("50 тенге", "50 теңге", "50 tenge"), ["2015"], "/images/coins/kazakhstan/kazakhstan-50-tenge-shymkent-2015", { ru: ["Шымкент", "Города Казахстана", "2015"], kz: ["Шымкент", "Қазақстан қалалары", "2015"], en: ["Shymkent", "Cities of Kazakhstan", "2015"] }),
  kazakhstanCoin("kazakhstanCities", localized("50 тенге Усть-Каменогорск 2011", "50 теңге Өскемен 2011", "50 tenge Oskemen 2011"), localized("50 тенге", "50 теңге", "50 tenge"), ["2011"], "/images/coins/kazakhstan/kazakhstan-50-tenge-oskemen-2011", { ru: ["Усть-Каменогорск", "Оскемен", "Города Казахстана", "2011"], kz: ["Өскемен", "Қазақстан қалалары", "2011"], en: ["Oskemen", "Ust-Kamenogorsk", "Cities of Kazakhstan", "2011"] }),

  kazakhstanThemedCoin("kazakhstanFairyTales", "Кегоглан — турецкая сказка", "Кегоглан — түрік ертегісі", "Kegoglan — Turkish fairy tale", "200 тенге", "200 теңге", "200 tenge", "2023", "/images/coins/kazakhstan/kazakhstan-200-tenge-kegoglan-turkish-fairy-tale-2023"),
  kazakhstanCoin("kazakhstanFairyTales", localized("200 тенге Тангун — корейская сказка 2016", "200 теңге Тангун — корей ертегісі 2016", "200 tenge Tangun — Korean fairy tale 2016"), localized("200 тенге", "200 теңге", "200 tenge"), ["2016"], "/images/coins/kazakhstan/kazakhstan-200-tenge-tangun-korean-fairy-tale-2016", { ru: ["Тангун", "корейская сказка", "Сказки", "2016"], kz: ["Тангун", "корей ертегісі", "Ертегілер", "2016"], en: ["Tangun", "Korean fairy tale", "Fairy tales", "2016"] }),
  kazakhstanThemedCoin("kazakhstanFairyTales", "Кожанасыр", "Қожанасыр", "Kozhanasyr", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-qozhanasyr-50-tenge-2015"),

  kazakhstanCoin(
    "kazakhstanAnimals",
    localized("50 тенге Манул 2014", "50 теңге Сабаншы 2014", "50 tenge Pallas's cat 2014"),
    localized("50 тенге", "50 теңге", "50 tenge"),
    ["2014"],
    "/images/coins/kazakhstan/kazakhstan-50-tenge-sabanshy-2014",
    {
      ru: ["Сабаншы", "Манул", "Животные", "50 тенге", "2014"],
      kz: ["Сабаншы", "Жануарлар", "50 теңге", "2014"],
      en: ["Pallas's cat", "Pallas cat", "Sabanshy", "Animals", "50 tenge", "2014"],
    },
  ),
  kazakhstanThemedCoin("kazakhstanAnimals", "Устюрт муфлоны", "Үстірт муфлоны", "Ustyurt mouflon", "50 тенге", "50 теңге", "50 tenge", "2015", "/images/coins/kazakhstan/kazakhstan-50-tenge-ustyurt-mouflon-2015"),

  kazakhstanCoin(
    "kazakhstanWildlife",
    localized("100 тенге AQBOKEN — Сайгак 2025", "100 теңге AQBOKEN — Ақбөкен 2025", "100 tenge AQBOKEN — Saiga 2025"),
    localized("100 тенге", "100 теңге", "100 tenge"),
    ["2025"],
    "/images/coins/kazakhstan/kazakhstan-100-tenge-aqboken-saiga-2025",
  ),
  kazakhstanCoin(
    "kazakhstanWildlife",
    localized("100 тенге ARQAR — Архар 2025", "100 теңге ARQAR — Арқар 2025", "100 tenge ARQAR — Argali 2025"),
    localized("100 тенге", "100 теңге", "100 tenge"),
    ["2025"],
    "/images/coins/kazakhstan/kazakhstan-100-tenge-arqar-argali-2025",
  ),
  kazakhstanCoin(
    "kazakhstanWildlife",
    localized("100 тенге BARYS — Снежный барс 2025", "100 теңге BARYS — Барыс 2025", "100 tenge BARYS — Snow leopard 2025"),
    localized("100 тенге", "100 теңге", "100 tenge"),
    ["2025"],
    "/images/coins/kazakhstan/kazakhstan-100-tenge-barys-snow-leopard-2025",
  ),
  kazakhstanCoin(
    "kazakhstanWildlife",
    localized("100 тенге DYADAQ — Дрофа 2025", "100 теңге DYADAQ — Дуадақ 2025", "100 tenge DYADAQ — Bustard 2025"),
    localized("100 тенге", "100 теңге", "100 tenge"),
    ["2025"],
    "/images/coins/kazakhstan/kazakhstan-100-tenge-dyadaq-bustard-2025",
  ),
  kazakhstanCoin(
    "kazakhstanWildlife",
    localized("100 тенге SUNQAR — Сокол 2025", "100 теңге SUNQAR — Сұңқар 2025", "100 tenge SUNQAR — Falcon 2025"),
    localized("100 тенге", "100 теңге", "100 tenge"),
    ["2025"],
    "/images/coins/kazakhstan/kazakhstan-100-tenge-sunqar-falcon-2025",
  ),

  kazakhstanCirculationCoin("200 тенге", "200 теңге", "200 tenge", "2020", "/images/coins/kazakhstan/kazakhstan-200-tenge-2020"),
  kazakhstanCirculationCoin("100 тенге", "100 теңге", "100 tenge", "2005", "/images/coins/kazakhstan/kazakhstan-100-tenge-2005"),
  kazakhstanCirculationCoin("50 тенге", "50 теңге", "50 tenge", "2006", "/images/coins/kazakhstan/kazakhstan-50-tenge-2006"),
  kazakhstanCirculationCoin("20 тенге", "20 теңге", "20 tenge", "1997", "/images/coins/kazakhstan/kazakhstan-20-tenge-1997"),
  kazakhstanCirculationCoin("10 тенге", "10 теңге", "10 tenge", "2012", "/images/coins/kazakhstan/kazakhstan-10-tenge-2012"),
  kazakhstanCirculationCoin("5 тенге", "5 теңге", "5 tenge", "2002", "/images/coins/kazakhstan/kazakhstan-5-tenge-2002"),
  kazakhstanCirculationCoin("2 тенге", "2 теңге", "2 tenge", "2006", "/images/coins/kazakhstan/kazakhstan-2-tenge-2006"),
  kazakhstanCirculationCoin("1 тенге", "1 теңге", "1 tenge", "2004", "/images/coins/kazakhstan/kazakhstan-1-tenge-2004"),
  kazakhstanCirculationCoin("1 тенге", "1 теңге", "1 tenge", "1993", "/images/coins/kazakhstan/kazakhstan-1-tenge-1993"),
  kazakhstanCirculationCoin("3 тенге", "3 теңге", "3 tenge", "1993", "/images/coins/kazakhstan/kazakhstan-3-tenge-1993"),
  kazakhstanCirculationCoin("5 тенге", "5 теңге", "5 tenge", "1993", "/images/coins/kazakhstan/kazakhstan-5-tenge-1993"),
  kazakhstanCirculationCoin("20 тенге", "20 теңге", "20 tenge", "1993", "/images/coins/kazakhstan/kazakhstan-20-tenge-1993"),
  kazakhstanCirculationCoin("2 тиын", "2 тиын", "2 tiyn", "1993", "/images/coins/kazakhstan/kazakhstan-2-tiin-1993"),
  kazakhstanCirculationCoin("5 тиын", "5 тиын", "5 tiyn", "1993", "/images/coins/kazakhstan/kazakhstan-5-tiin-1993"),
  kazakhstanCirculationCoin("10 тенге", "10 теңге", "10 tenge", "1993", "/images/coins/kazakhstan/kazakhstan-10-tenge-1993"),
  kazakhstanCirculationCoin("10 тиын", "10 тиын", "10 tiyn", "1993", "/images/coins/kazakhstan/kazakhstan-10-tiin-1993"),
  kazakhstanCirculationCoin("20 тиын", "20 тиын", "20 tiyn", "1993", "/images/coins/kazakhstan/kazakhstan-20-tiin-1993"),
  kazakhstanCirculationCoin("50 тиын", "50 тиын", "50 tiyn", "1993", "/images/coins/kazakhstan/kazakhstan-50-tiin-1993"),
  {
    continent: "asia",
    countryKey: "southKorea",
    nominal: "10 вона",
    years: ["2010"],
    previewImage: "/images/coins/south-korea/south-korea-10-won-2010-revers.png",
    imageFront: "/images/coins/south-korea/south-korea-10-won-2010-avers.jpg",
    imageBack: "/images/coins/south-korea/south-korea-10-won-2010-revers.png",
  },
  { continent: "asia", countryKey: "southKorea", nominal: "50 вона", years: ["2011"], ...coinImages("/images/coins/south-korea/south-korea-50-won-2011") },
  { continent: "asia", countryKey: "southKorea", nominal: "100 вона", years: ["1991"], ...coinImages("/images/coins/south-korea/south-korea-100-won-1991") },
  { continent: "asia", countryKey: "southKorea", nominal: "500 вона", years: ["1991"], ...coinImages("/images/coins/south-korea/south-korea-500-won-1991") },
  { continent: "asia", countryKey: "japan", nominal: "10 йен", years: ["1955"], ...coinImages("/images/coins/japan/japan-10-yen-1955") },
  { continent: "asia", countryKey: "japan", nominal: "1 йена", years: ["1977"], ...coinImages("/images/coins/japan/japan-1-yen-1977") },

  {
    continent: "europe",
    countryKey: "austria",
    nominal: "10 грошей",
    years: ["1972"],
    previewImage: "/images/coins/austria/austria-10-groschen-1972-revers.jpg",
    imageFront: "/images/coins/austria/austria-10-groschen-1972-avers.jpg",
    imageBack: "/images/coins/austria/austria-10-groschen-1972-revers.jpg",
  },
  { continent: "europe", countryKey: "belarus", nominal: "1 рубль", years: ["2009"], ...coinImages("/images/coins/belarus/belarus-1-ruble-2009") },
  { continent: "europe", countryKey: "belarus", nominal: "1 копейка", years: ["2009"], ...coinImages("/images/coins/belarus/belarus-1-kopeck-2009") },
  { continent: "europe", countryKey: "belgium", nominal: "20 франков", years: ["1981"], ...coinImages("/images/coins/belgium/belgium-20-francs-1981") },
  { continent: "europe", countryKey: "belgium", nominal: "5 франков", years: ["1986"], ...coinImages("/images/coins/belgium/belgium-5-francs-1986") },
  { continent: "europe", countryKey: "belgium", nominal: "25 сантимов", years: ["1938"], ...coinImages("/images/coins/belgium/belgium-25-centimes-1938") },
  { continent: "europe", countryKey: "belgium", nominal: "1 франк", years: ["1952"], ...coinImages("/images/coins/belgium/belgium-1-franc-1952") },
  { continent: "europe", countryKey: "belgium", nominal: "1 франк", years: ["1975"], ...coinImages("/images/coins/belgium/belgium-1-franc-1975") },
  { continent: "europe", countryKey: "bulgaria", nominal: "2 стотинки", years: ["1974"], ...coinImages("/images/coins/bulgaria/bulgaria-2-stotinki-1974") },
  { continent: "europe", countryKey: "bulgaria", nominal: "1 лев", years: ["2002"], ...coinImages("/images/coins/bulgaria/bulgaria-1-lev-2002") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "1 фунт", years: ["1985"], ...coinImages("/images/coins/united-kingdom/united-kingdom-1-pound-1985") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "1 фунт", years: ["1992"], ...coinImages("/images/coins/united-kingdom/united-kingdom-1-pound-1992") },
  {
    ...coinLocalized(
      "europe",
      "unitedKingdom",
      localized("1 фунт 2003", "1 фунт 2003", "1 pound 2003"),
      localized("1 фунт", "1 фунт", "1 pound"),
      ["2003"],
    ),
    tags: {
      ru: ["Великобритания", "Британия", "1 фунт", "2003", "монета"],
      kz: ["Ұлыбритания", "1 фунт", "2003", "монета"],
      en: ["United Kingdom", "Britain", "1 pound", "2003", "coin"],
    },
    ...coinImages("/images/coins/united-kingdom/united-kingdom-1-pound-2003"),
  },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "1 пенни", years: ["2006"], ...coinImages("/images/coins/united-kingdom/united-kingdom-1-penny-2006") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "2 пенни", years: ["1997"], ...coinImages("/images/coins/united-kingdom/united-kingdom-2-pence-1997") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "5 пенни", years: ["2004"], ...coinImages("/images/coins/united-kingdom/united-kingdom-5-pence-2004") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "5 пенни", years: ["2013"], ...coinImages("/images/coins/united-kingdom/united-kingdom-5-pence-2013") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "10 пенни", years: ["1996"], ...coinImages("/images/coins/united-kingdom/united-kingdom-10-pence-1996") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "20 пенни", years: ["2000"], ...coinImages("/images/coins/united-kingdom/united-kingdom-20-pence-2000") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "20 пенни", years: ["2001"], ...coinImages("/images/coins/united-kingdom/united-kingdom-20-pence-2001") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "50 пенни", years: ["1999"], ...coinImages("/images/coins/united-kingdom/united-kingdom-50-pence-1999") },
  { continent: "europe", countryKey: "unitedKingdom", nominal: "50 пенни", years: ["1997"], ...coinImages("/images/coins/united-kingdom/united-kingdom-50-pence-1997") },
  { continent: "europe", countryKey: "hungary", nominal: "5 форинтов", years: ["1993"], ...coinImages("/images/coins/hungary/hungary-5-forints-1993") },
  { continent: "europe", countryKey: "germany", nominal: "1 пфенниг", years: ["1995"], ...coinImages("/images/coins/germany/germany-1-pfennig-1995") },
  { continent: "europe", countryKey: "germany", nominal: "10 пфеннигов", years: ["1995"], ...coinImages("/images/coins/germany/germany-10-pfennigs-1995") },
  { continent: "europe", countryKey: "germany", nominal: "5 пфеннигов", years: ["1991"], ...coinImages("/images/coins/germany/germany-5-pfennigs-1991") },
  { continent: "europe", countryKey: "greece", nominal: "10 драхм", years: ["1976"], ...coinImages("/images/coins/greece/greece-10-drachmas-1976") },
  { continent: "europe", countryKey: "greece", nominal: "50 лепт", years: ["1976"], ...coinImages("/images/coins/greece/greece-50-lepta-1976") },
  { continent: "europe", countryKey: "denmark", nominal: "25 эре", years: ["1971"], ...coinImages("/images/coins/denmark/denmark-25-ore-1971") },
  { ...coinLocalized("europe", "europeanUnion", localized("1 цент", "1 цент", "1 cent"), localized("1 цент", "1 цент", "1 cent"), ["2007"]), ...coinImages("/images/coins/european-union/euro-union-1-cent-2007") },
  { ...coinLocalized("europe", "europeanUnion", localized("50 цент Берлин", "50 цент Берлин", "50 cents Berlin"), localized("50 цент", "50 цент", "50 cents"), ["2002"]), ...coinImages("/images/coins/european-union/euro-union-50-cents-berlin-2002") },
  { ...coinLocalized("europe", "europeanUnion", localized("1 евро Да Винчи", "1 еуро Да Винчи", "1 euro Da Vinci"), localized("1 евро", "1 еуро", "1 euro"), ["2002"]), ...coinImages("/images/coins/european-union/euro-union-1-euro-da-vinci-2002") },
  { ...coinLocalized("europe", "europeanUnion", localized("1 евро Моцарт", "1 еуро Моцарт", "1 euro Mozart"), localized("1 евро", "1 еуро", "1 euro"), ["2002"]), ...coinImages("/images/coins/european-union/euro-union-1-euro-mozart-2002") },
  { ...coinLocalized("europe", "europeanUnion", localized("20 цент / 20 лепта", "20 цент / 20 лепта", "20 cents / 20 lepta"), localized("20 цент", "20 цент", "20 cents"), ["2002"]), ...coinImages("/images/coins/european-union/euro-union-20-cents-20-lepta-2002") },
  { ...coinLocalized("europe", "europeanUnion", localized("10 цент", "10 цент", "10 cents"), localized("10 цент", "10 цент", "10 cents"), ["2004"]), ...coinImages("/images/coins/european-union/euro-union-10-cents-2004") },
  { ...coinLocalized("europe", "europeanUnion", localized("5 цент Рим", "5 цент Рим", "5 cents Rome"), localized("5 цент", "5 цент", "5 cents"), ["2011"]), ...coinImages("/images/coins/european-union/euro-union-5-cents-rome-2011") },
  { ...coinLocalized("europe", "europeanUnion", localized("2 евро Данте Алигьери", "2 еуро Данте Алигьери", "2 euros Dante Alighieri"), localized("2 евро", "2 еуро", "2 euros"), ["2023"]), ...coinImages("/images/coins/european-union/euro-union-2-euros-dante-alighieri-2023") },
  { ...coinLocalized("europe", "europeanUnion", localized("2 цент Марианна", "2 цент Марианна", "2 cents Marianne"), localized("2 цент", "2 цент", "2 cents"), ["2012"]), ...coinImages("/images/coins/european-union/euro-union-2-cents-marianne-2012") },
  { continent: "europe", countryKey: "iceland", nominal: "10 аурар", years: ["1981"], ...coinImages("/images/coins/iceland/iceland-10-aurar-1981") },
  { continent: "europe", countryKey: "spain", nominal: "1 песета", years: ["1963"], ...coinImages("/images/coins/spain/spain-1-peseta-1963") },
  { continent: "europe", countryKey: "spain", nominal: "25 песет", years: ["1994"], ...coinImages("/images/coins/spain/spain-25-pesetas-1994") },
  { continent: "europe", countryKey: "italy", nominal: "50 лир", years: ["1969"], ...coinImages("/images/coins/italy/italy-50-lire-1969") },
  { continent: "europe", countryKey: "italy", nominal: "20 лир", years: ["1959"], ...coinImages("/images/coins/italy/italy-20-lire-1959") },
  { continent: "europe", countryKey: "ireland", nominal: "1/2 пенни", years: ["1971"], ...coinImages("/images/coins/ireland/ireland-half-penny-1971") },
  { continent: "europe", countryKey: "lithuania", nominal: "2 цента", years: ["1991"], ...coinImages("/images/coins/lithuania/lithuania-2-cents-1991") },
  { continent: "europe", countryKey: "luxembourg", nominal: "1 франк", years: ["1989"], ...coinImages("/images/coins/luxembourg/luxembourg-1-franc-1989") },
  { continent: "europe", countryKey: "malta", nominal: "1 цент", years: ["1975"], ...coinImages("/images/coins/malta/malta-1-cent-1975") },
  { continent: "europe", countryKey: "netherlands", nominal: "1 гульден", years: ["1980"], ...coinImages("/images/coins/netherlands/netherlands-1-guilder-1980") },
  { continent: "europe", countryKey: "norway", nominal: "1 крона", years: ["1976"], ...coinImages("/images/coins/norway/norway-1-krone-1976") },
  { continent: "europe", countryKey: "norway", nominal: "1 крона", years: ["2002"], ...coinImages("/images/coins/norway/norway-1-krone-2002") },
  { continent: "europe", countryKey: "norway", nominal: "50 эре", years: ["1980"], ...coinImages("/images/coins/norway/norway-50-ore-1980") },
  { continent: "europe", countryKey: "poland", nominal: "20 злотых", years: ["1990"], ...coinImages("/images/coins/poland/poland-20-zloty-1990") },
  { continent: "europe", countryKey: "poland", nominal: "10 злотых", years: ["1976"], ...coinImages("/images/coins/poland/poland-10-zloty-1976") },
  { continent: "europe", countryKey: "poland", nominal: "2 злотых", years: ["1982"], ...coinImages("/images/coins/poland/poland-2-zloty-1982") },
  { continent: "europe", countryKey: "poland", nominal: "2 злотых", years: ["2020"], ...coinImages("/images/coins/poland/poland-2-zloty-2020") },
  { continent: "europe", countryKey: "poland", nominal: "1 злотый", years: ["2015"], ...coinImages("/images/coins/poland/poland-1-zloty-2015") },
  { continent: "europe", countryKey: "poland", nominal: "1 грош", years: ["2018"], ...coinImages("/images/coins/poland/poland-1-grosz-2018") },
  { continent: "europe", countryKey: "poland", nominal: "2 гроша", years: ["2020"], ...coinImages("/images/coins/poland/poland-2-grosze-2020") },
  { continent: "europe", countryKey: "poland", nominal: "5 грошей", years: ["2019"], ...coinImages("/images/coins/poland/poland-5-groszy-2019") },
  { continent: "europe", countryKey: "poland", nominal: "10 грошей", years: ["2017"], ...coinImages("/images/coins/poland/poland-10-groszy-2017") },
  { continent: "europe", countryKey: "poland", nominal: "20 грошей", years: ["2018"], ...coinImages("/images/coins/poland/poland-20-groszy-2018") },
  { continent: "europe", countryKey: "poland", nominal: "20 грошей", years: ["1965"], ...coinImages("/images/coins/poland/poland-20-groszy-1965") },
  { continent: "europe", countryKey: "portugal", nominal: "25 эскудо", years: ["1978"], ...coinImages("/images/coins/portugal/portugal-25-escudos-1978") },
  { ...coinLocalized("europe", "romania", localized("100 лей", "100 лей", "100 lei"), localized("100 лей", "100 лей", "100 lei"), ["1943"]), ...coinImages("/images/coins/romania/romania-100-lei-1943") },
  { continent: "europe", countryKey: "russia", nominal: "50 рублей", years: ["1993"], ...coinImages("/images/coins/russia/russia-50-rubles-1993") },
  { continent: "europe", countryKey: "russia", nominal: "10 рублей", years: ["1992"], ...coinImages("/images/coins/russia/russia-10-rubles-1992") },
  { ...coinLocalized("europe", "russia", localized("10 рублей Тверская область 2005", "10 рубль Тверь облысы 2005", "10 rubles Tver Region 2005"), localized("10 рублей", "10 рубль", "10 rubles"), ["2005"]), tags: { ru: ["Россия", "10 рублей", "2005", "Тверская область", "Тверь", "монета"], kz: ["Ресей", "10 рубль", "2005", "Тверь облысы", "Тверь", "монета"], en: ["Russia", "10 rubles", "2005", "Tver Region", "Tver", "coin"] }, ...coinImages("/images/coins/russia/russia-10-rubles-2005") },
  { continent: "europe", countryKey: "russia", nominal: "10 рублей", years: ["2011"], ...coinImages("/images/coins/russia/russia-10-rubles-2011") },
  { ...coinLocalized("europe", "russia", localized("10 рублей Казань Универсиада 2013", "10 рубль Қазан Универсиадасы 2013", "10 rubles Kazan Universiade 2013"), localized("10 рублей", "10 рубль", "10 rubles"), ["2013"]), tags: { ru: ["Россия", "10 рублей", "2013", "Казань", "Универсиада", "монета"], kz: ["Ресей", "10 рубль", "2013", "Қазан", "Универсиада", "монета"], en: ["Russia", "10 rubles", "2013", "Kazan", "Universiade", "coin"] }, ...coinImages("/images/coins/russia/russia-10-rubles-2013") },
  { continent: "europe", countryKey: "russia", nominal: "10 рублей", years: ["2022"], ...coinImages("/images/coins/russia/russia-10-rubles-2022") },
  { continent: "europe", countryKey: "russia", nominal: "5 рублей", years: ["1992"], ...coinImages("/images/coins/russia/russia-5-rubles-1992") },
  { continent: "europe", countryKey: "russia", nominal: "5 рублей", years: ["1998"], ...coinImages("/images/coins/russia/russia-5-rubles-1998") },
  { continent: "europe", countryKey: "russia", nominal: "5 рублей", years: ["2020"], ...coinImages("/images/coins/russia/russia-5-rubles-2020") },
  { continent: "europe", countryKey: "russia", nominal: "20 рублей", years: ["1992"], ...coinImages("/images/coins/russia/russia-20-rubles-1992") },
  { ...coinLocalized("europe", "russia", localized("25 рублей Олимпиада в Сочи", "25 рубль Сочи Олимпиадасы", "25 rubles Sochi Olympics"), localized("25 рублей", "25 рубль", "25 rubles"), ["2011"]), ...coinImages("/images/coins/russia/russia-25-rubles-sochi-2011") },
  { ...coinLocalized("europe", "russia", localized("25 рублей ЧМ по футболу", "25 рубль футболдан әлем чемпионаты", "25 rubles FIFA World Cup"), localized("25 рублей", "25 рубль", "25 rubles"), ["2018"]), ...coinImages("/images/coins/russia/russia-25-rubles-world-cup-2018") },
  { ...coinLocalized("europe", "russia", localized("25 рублей Маша и Медведь 2021", "25 рубль Маша мен Аю 2021", "25 rubles Masha and the Bear 2021"), localized("25 рублей", "25 рубль", "25 rubles"), ["2021"]), tags: { ru: ["Россия", "25 рублей", "Маша и Медведь", "2021", "монета"], kz: ["Ресей", "25 рубль", "Маша мен Аю", "2021", "монета"], en: ["Russia", "25 rubles", "Masha and the Bear", "2021", "coin"] }, ...coinImages("/images/coins/russia/russia-25-rubles-masha-and-bear-2021") },
  { ...coinLocalized("europe", "russia", localized("25 рублей Иван Царевич и Серый Волк 2022", "25 рубль Иван Царевич және сұр қасқыр 2022", "25 rubles Ivan Tsarevich and the Grey Wolf 2022"), localized("25 рублей", "25 рубль", "25 rubles"), ["2022"]), tags: { ru: ["Россия", "25 рублей", "Иван Царевич", "Серый Волк", "2022", "монета"], kz: ["Ресей", "25 рубль", "Иван Царевич", "сұр қасқыр", "2022", "монета"], en: ["Russia", "25 rubles", "Ivan Tsarevich", "Grey Wolf", "2022", "coin"] }, ...coinImages("/images/coins/russia/russia-25-rubles-ivan-tsarevich-grey-wolf-2022") },
  { ...coinLocalized("europe", "russia", localized("25 рублей Юрий Никулин 2021", "25 рубль Юрий Никулин 2021", "25 rubles Yuri Nikulin 2021"), localized("25 рублей", "25 рубль", "25 rubles"), ["2021"]), tags: { ru: ["Россия", "25 рублей", "Юрий Никулин", "2021", "монета"], kz: ["Ресей", "25 рубль", "Юрий Никулин", "2021", "монета"], en: ["Russia", "25 rubles", "Yuri Nikulin", "2021", "coin"] }, ...coinImages("/images/coins/russia/russia-25-rubles-yuri-nikulin-2021") },
  { ...coinLocalized("europe", "russia", localized("10 рублей Выборг", "10 рубль Выборг", "10 rubles Vyborg"), localized("10 рублей", "10 рубль", "10 rubles"), ["2014"]), ...coinImages("/images/coins/russia/russia-10-rubles-vyborg-2014") },
  { continent: "europe", countryKey: "russia", nominal: "5 копеек", years: ["1998"], ...coinImages("/images/coins/russia/russia-5-kopecks-1998") },
  { continent: "europe", countryKey: "russia", nominal: "50 копеек", years: ["2010"], ...coinImages("/images/coins/russia/russia-50-kopecks-2010") },
  { continent: "europe", countryKey: "russia", nominal: "1 рубль", years: ["1998"], ...coinImages("/images/coins/russia/russia-1-ruble-1998") },
  { continent: "europe", countryKey: "russia", nominal: "2 рубля", years: ["1997"], ...coinImages("/images/coins/russia/russia-2-rubles-1997") },
  { continent: "europe", countryKey: "russia", nominal: "2 рубля", years: ["2020"], ...coinImages("/images/coins/russia/russia-2-rubles-2020") },
  { continent: "europe", countryKey: "slovakia", nominal: "5 крон", years: ["1993"], ...coinImages("/images/coins/slovakia/slovakia-5-koruna-1993") },
  { continent: "europe", countryKey: "slovakia", nominal: "10 геллеров", years: ["1999"], ...coinImages("/images/coins/slovakia/slovakia-10-halerov-1999") },
  { continent: "europe", countryKey: "ukraine", nominal: "25 копеек", years: ["1992"], ...coinImages("/images/coins/ukraine/ukraine-25-kopecks-1992") },
  { continent: "europe", countryKey: "ukraine", nominal: "50 копеек", years: ["2009"], ...coinImages("/images/coins/ukraine/ukraine-50-kopiyok-2009") },
  { continent: "europe", countryKey: "ukraine", nominal: "2 копейки", years: ["2008"], ...coinImages("/images/coins/ukraine/ukraine-2-kopiyky-2008") },
  { continent: "europe", countryKey: "ukraine", nominal: "1 гривна", years: ["2005"], ...coinImages("/images/coins/ukraine/ukraine-1-hryvnia-2005") },
  { continent: "europe", countryKey: "finland", nominal: "10 пенни", years: ["1999"], ...coinImages("/images/coins/finland/finland-10-penni-1999") },
  { continent: "europe", countryKey: "finland", nominal: "5 пенни", years: ["1982"], ...coinImages("/images/coins/finland/finland-5-penni-1982") },
  { continent: "europe", countryKey: "france", nominal: "10 франков", years: ["1979"], ...coinImages("/images/coins/france/france-10-francs-1979") },
  { continent: "europe", countryKey: "france", nominal: "10 франков", years: ["1988"], ...coinImages("/images/coins/france/france-10-francs-1988") },
  { continent: "europe", countryKey: "france", nominal: "20 сантимов", years: ["1978"], ...coinImages("/images/coins/france/france-20-centimes-1978") },
  { continent: "europe", countryKey: "czechia", nominal: "10 крон", years: ["2008"], ...coinImages("/images/coins/czechia/czechia-10-koruna-2008") },
  { continent: "europe", countryKey: "czechia", nominal: "1 крона", years: ["2006"], ...coinImages("/images/coins/czechia/czechia-1-koruna-2006") },
  { continent: "europe", countryKey: "switzerland", nominal: "2 франка", years: ["1981"], ...coinImages("/images/coins/switzerland/switzerland-2-francs-1981") },
  { continent: "europe", countryKey: "switzerland", nominal: "1/2 франка", years: ["2012"], ...coinImages("/images/coins/switzerland/switzerland-half-franc-2012") },
  { continent: "europe", countryKey: "switzerland", nominal: "20 раппенов", years: ["1958"], ...coinImages("/images/coins/switzerland/switzerland-20-rappen-1958") },
  { continent: "europe", countryKey: "sweden", nominal: "1 крона", years: ["1970"], ...coinImages("/images/coins/sweden/sweden-1-krona-1970") },
  { continent: "europe", countryKey: "estonia", nominal: "5 центов", years: ["1992"], ...coinImages("/images/coins/estonia/estonia-5-cents-1992") },
  { continent: "europe", countryKey: "estonia", nominal: "1 крона", years: ["1993"], ...coinImages("/images/coins/estonia/estonia-1-kroon-1993") },

  { group: "specialTerritories", countryKey: "isleOfMan", nominal: "2 пенса", years: ["1998"], ...coinImages("/images/coins/isle-of-man/isle-of-man-2-pence-1998") },
  { group: "specialTerritories", countryKey: "transnistria", nominal: "5 копеек", years: ["2005"], ...coinImages("/images/coins/transnistria/transnistria-5-kopecks-2005") },
  { group: "specialTerritories", countryKey: "hongKong", nominal: "5 долларов", years: ["1993"], ...coinImages("/images/coins/hong-kong/hong-kong-5-dollars-1993") },
  { group: "specialTerritories", countryKey: "hongKong", nominal: "20 центов", years: ["1997"], ...coinImages("/images/coins/hong-kong/hong-kong-20-cents-1997") },
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
    ...coinImages("/images/coins/anguilla-montserrat/anguilla-montserrat-1-east-caribbean-cent"),
  },

  { group: "historicalStates", historicalEntityKey: "weimarRepublic", nominal: "50 пфеннигов", years: ["1920"], ...coinImages("/images/coins/weimar-republic/weimar-republic-50-pfennigs-1920") },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "деньга", years: ["1749"], ...coinImages("/images/coins/russian-empire/russian-empire-denga-1749") },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1 копейка", years: ["1898"], ...coinImages("/images/coins/russian-empire/russian-empire-1-kopeck-1898") },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1 копейка", years: ["1908"], ...coinImages("/images/coins/russian-empire/russian-empire-1-kopeck-1908") },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1 копейка", years: ["1916"], ...coinImages("/images/coins/russian-empire/russian-empire-1-kopeck-1916") },
  { group: "historicalStates", historicalEntityKey: "russianEmpire", nominal: "1/2 копейки", years: ["1915"], ...coinImages("/images/coins/russian-empire/russian-empire-half-kopeck-1915") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "50 копеек", years: ["1977"], ...coinImages("/images/coins/ussr/ussr-50-kopecks-1977") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 копейка", years: ["1927"], ...coinImages("/images/coins/ussr/ussr-1-kopeck-1927") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 копейка", years: ["1982"], ...coinImages("/images/coins/ussr/ussr-1-kopeck-1982") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 копейка", years: ["1991"], ...coinImages("/images/coins/ussr/ussr-1-kopeck-1991") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "2 копейки", years: ["1926"], ...coinImages("/images/coins/ussr/ussr-2-kopecks-1926") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "3 копейки", years: ["1928"], ...coinImages("/images/coins/ussr/ussr-3-kopecks-1928") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "3 копейки", years: ["1987"], ...coinImages("/images/coins/ussr/ussr-3-kopecks-1987") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "5 копеек", years: ["1930"], ...coinImages("/images/coins/ussr/ussr-5-kopecks-1930") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "5 копеек", years: ["1984"], ...coinImages("/images/coins/ussr/ussr-5-kopecks-1984") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1933"], ...coinImages("/images/coins/ussr/ussr-10-kopecks-1933") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1953"], ...coinImages("/images/coins/ussr/ussr-10-kopecks-1953") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1961"], ...coinImages("/images/coins/ussr/ussr-10-kopecks-1961") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1983"], ...coinImages("/images/coins/ussr/ussr-10-kopecks-1983") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "10 копеек", years: ["1985"], ...coinImages("/images/coins/ussr/ussr-10-kopecks-1985") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "15 копеек", years: ["1931"], ...coinImages("/images/coins/ussr/ussr-15-kopecks-1931") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "15 копеек", years: ["1946"], ...coinImages("/images/coins/ussr/ussr-15-kopecks-1946") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "15 копеек", years: ["1981"], ...coinImages("/images/coins/ussr/ussr-15-kopecks-1981") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "15 копеек", years: ["1991"], ...coinImages("/images/coins/ussr/ussr-15-kopecks-1991") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "20 копеек", years: ["1932"], ...coinImages("/images/coins/ussr/ussr-20-kopecks-1932") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "20 копеек", years: ["1936"], ...coinImages("/images/coins/ussr/ussr-20-kopecks-1936") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "20 копеек", years: ["1981"], ...coinImages("/images/coins/ussr/ussr-20-kopecks-1981") },
  { group: "historicalStates", historicalEntityKey: "ussr", nominal: "1 рубль Ленин", years: ["1970"], ...coinImages("/images/coins/ussr/ussr-1-ruble-lenin-1970") },
  { ...historicalCoinLocalized("ussr", localized("1 рубль 20 лет Победы 1965", "1 рубль Жеңіске 20 жыл 1965", "1 ruble 20 years of Victory 1965"), localized("1 рубль", "1 рубль", "1 ruble"), ["1965"]), ...coinImages("/images/coins/ussr/ussr-1-ruble-20-years-victory-1965") },
  { ...historicalCoinLocalized("ussr", localized("30 лет Победы — 1 рубль", "Жеңіске 30 жыл — 1 рубль", "30 years of Victory — 1 ruble"), localized("1 рубль", "1 рубль", "1 ruble"), ["1975"]), ...coinImages("/images/coins/ussr/ussr-1-ruble-30-years-victory-1975") },
  { ...historicalCoinLocalized("ussr", localized("40 лет Победы — 1 рубль", "Жеңіске 40 жыл — 1 рубль", "40 years of Victory — 1 ruble"), localized("1 рубль", "1 рубль", "1 ruble"), ["1985"]), ...coinImages("/images/coins/ussr/ussr-1-ruble-40-years-victory-1985") },
  { ...historicalCoinLocalized("ussr", localized("50 лет советской власти — 1 рубль", "Кеңес өкіметіне 50 жыл — 1 рубль", "50 years of Soviet power — 1 ruble"), localized("1 рубль", "1 рубль", "1 ruble"), ["1972"]), ...coinImages("/images/coins/ussr/ussr-1-ruble-50-years-soviet-power-1972") },
  { ...historicalCoinLocalized("ussr", localized("70 лет Октябрю — 3 рубля", "Қазан төңкерісіне 70 жыл — 3 рубль", "70 years of October — 3 rubles"), localized("3 рубля", "3 рубль", "3 rubles"), ["1987"]), ...coinImages("/images/coins/ussr/ussr-3-rubles-70-years-october-1987") },
  { ...historicalCoinLocalized("ussr", localized("Алишер Навои — 1 рубль", "Әлішер Науаи — 1 рубль", "Alisher Navoi — 1 ruble"), localized("1 рубль", "1 рубль", "1 ruble"), ["1991"]), ...coinImages("/images/coins/ussr/ussr-1-ruble-alisher-navoi-1991") },
  { ...historicalCoinLocalized("ussr", localized("10 рублей", "10 рубль", "10 rubles"), localized("10 рублей", "10 рубль", "10 rubles"), ["1991"]), ...coinImages("/images/coins/ussr/ussr-10-rubles-1991") },
  { group: "historicalStates", historicalEntityKey: "thirdReich", nominal: "1 пфенниг", years: ["1939"], ...coinImages("/images/coins/third-reich/third-reich-1-pfennig-1939") },
  { ...historicalCoinLocalized("thirdReich", localized("5 рейхсмарок", "5 рейхсмарка", "5 reichsmarks"), localized("5 рейхсмарок", "5 рейхсмарка", "5 reichsmarks"), ["1935"]), ...coinImages("/images/coins/third-reich/third-reich-5-reichsmarks-1935") },
  { group: "historicalStates", historicalEntityKey: "westGermany", nominal: "1 марка", years: ["1971"], ...coinImages("/images/coins/west-east-germany/west-east-germany-1-mark-1971") },
  { group: "historicalStates", historicalEntityKey: "westGermany", nominal: "2 марки", years: ["1974"], ...coinImages("/images/coins/west-east-germany/west-east-germany-2-marks-1974") },
  { group: "historicalStates", historicalEntityKey: "westGermany", nominal: "10 пфеннигов", years: ["1966"], ...coinImages("/images/coins/west-east-germany/west-east-germany-10-pfennigs-1966") },
  { group: "historicalStates", historicalEntityKey: "westGermany", nominal: "50 пфеннигов", years: ["1988"], ...coinImages("/images/coins/west-east-germany/west-east-germany-50-pfennigs-1988") },
  { group: "historicalStates", historicalEntityKey: "eastGermany", nominal: "1 пфенниг", years: ["1988"], ...coinImages("/images/coins/west-east-germany/west-east-germany-1-pfennig-1988") },
  { group: "historicalStates", historicalEntityKey: "eastGermany", nominal: "5 пфеннигов", years: ["1983"], ...coinImages("/images/coins/west-east-germany/west-east-germany-5-pfennigs-1983") },
  { group: "historicalStates", historicalEntityKey: "eastGermany", nominal: "10 пфеннигов", years: ["1978"], ...coinImages("/images/coins/west-east-germany/west-east-germany-10-pfennigs-1978") },
  { group: "historicalStates", historicalEntityKey: "czechoslovakia", nominal: "20 геллеров", years: ["1977"], ...coinImages("/images/coins/czechoslovakia/czechoslovakia-20-haleru-1977") },
  { group: "historicalStates", historicalEntityKey: "yugoslavia", nominal: "1 динар", years: ["1965"], ...coinImages("/images/coins/yugoslavia/yugoslavia-1-dinar-1965") },

  { continent: "northAmerica", countryKey: "canada", nominal: "1 цент", years: ["1986"], ...coinImages("/images/coins/canada/canada-1-cent-1986") },
  { continent: "northAmerica", countryKey: "canada", nominal: "25 центов", years: ["2012"], ...coinImages("/images/coins/canada/canada-25-cents-2012") },
  { continent: "northAmerica", countryKey: "honduras", nominal: "5 сентаво", years: ["1998"], ...coinImages("/images/coins/honduras/honduras-5-centavo-1998") },
  { continent: "northAmerica", countryKey: "dominicanRepublic", nominal: "10 песо", years: ["2007"], ...coinImages("/images/coins/dominican-republic/dominican-republic-10-pesos-2007") },
  { continent: "northAmerica", countryKey: "dominicanRepublic", nominal: "25 сентаво", years: ["1991"], ...coinImages("/images/coins/dominican-republic/dominican-republic-25-centavo-1991") },
  { continent: "northAmerica", countryKey: "mexico", nominal: "1 песо", years: ["1985"], ...coinImages("/images/coins/mexico/mexico-1-peso-1985") },
  { continent: "northAmerica", countryKey: "mexico", nominal: "10 сентаво", years: ["2002"], ...coinImages("/images/coins/mexico/mexico-10-centavo-2002") },
  { continent: "northAmerica", countryKey: "mexico", nominal: "5 сентаво", years: ["1970"], ...coinImages("/images/coins/mexico/mexico-5-centavo-1970") },
  { continent: "northAmerica", countryKey: "mexico", nominal: "1 сентаво", years: ["1958"], ...coinImages("/images/coins/mexico/mexico-1-centavo-1958") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "25 центов", years: ["2012"], ...coinImages("/images/coins/usa/usa-25-cents-2012") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "25 центов", years: ["1981"], ...coinImages("/images/coins/usa/usa-25-cents-1981") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "25 центов", years: ["2000"], ...coinImages("/images/coins/usa/usa-25-cents-2000") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "5 центов", years: ["1964"], ...coinImages("/images/coins/usa/usa-5-cents-1964") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "10 центов", years: ["1983"], ...coinImages("/images/coins/usa/usa-10-cents-1983") },
  { continent: "northAmerica", countryKey: "unitedStates", nominal: "1 цент", years: ["1994"], ...coinImages("/images/coins/usa/usa-1-cent-1994") },
  {
    ...coinLocalized("northAmerica", "unitedStates", localized("1/2 доллара Кеннеди", "1/2 доллар Кеннеди", "Kennedy half dollar"), localized("1/2 доллара", "1/2 доллар", "half dollar"), ["1970"]),
    tags: {
      ru: ["США", "Америка", "Кеннеди", "1/2 доллара", "1970", "монета"],
      kz: ["АҚШ", "Америка", "Кеннеди", "1/2 доллар", "1970", "монета"],
      en: ["United States", "USA", "America", "Kennedy", "half dollar", "1970", "coin"],
    },
    ...coinImages("/images/coins/usa/usa-half-dollar-kennedy-1970"),
  },
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
    ...coinImages("/images/coins/east-caribbean-states/east-caribbean-states-1-cent"),
  },

  { continent: "southAmerica", countryKey: "argentina", nominal: "10 аустралей", years: ["1989"], ...coinImages("/images/coins/argentina/argentina-10-australes-1989") },
  { continent: "southAmerica", countryKey: "brazil", nominal: "50 сентаво", years: ["1948"], ...coinImages("/images/coins/brazil/brazil-50-centavo-1948") },
  { continent: "southAmerica", countryKey: "venezuela", nominal: "50 сентимо", years: ["1990"], ...coinImages("/images/coins/venezuela/venezuela-50-centimo-1990") },
  { continent: "southAmerica", countryKey: "paraguay", nominal: "1 гуарани", years: ["1993"], ...coinImages("/images/coins/paraguay/paraguay-1-guarani-1993") },
  {
    ...coinLocalized(
      "southAmerica",
      "uruguay",
      localized("20 сентаво 1965", "20 сентаво 1965", "20 centésimos 1965"),
      localized("20 сентаво", "20 сентаво", "20 centésimos"),
      ["1965"],
    ),
    tags: {
      ru: ["Уругвай", "Южная Америка", "20 сентаво", "1965", "монета"],
      kz: ["Уругвай", "Оңтүстік Америка", "20 сентаво", "1965", "монета"],
      en: ["Uruguay", "South America", "20 centavo", "20 centésimos", "1965", "coin"],
    },
    ...coinImages("/images/coins/uruguay/uruguay-20-centavo-1965"),
  },
  { continent: "southAmerica", countryKey: "ecuador", nominal: "1000 сукре", years: ["1996"], ...coinImages("/images/coins/ecuador/ecuador-1000-sucre-1996") },
  { continent: "southAmerica", countryKey: "ecuador", nominal: "1000 сукре", years: ["1997"], ...coinImages("/images/coins/ecuador/ecuador-1000-sucre-1997") },

  { continent: "africa", countryKey: "egypt", nominal: "1 фунт", years: ["—"], ...coinImages("/images/coins/egypt/egypt-1-pound") },
  { continent: "africa", countryKey: "malawi", nominal: "2 тамбала", years: ["1995"], ...coinImages("/images/coins/malawi/malawi-2-tambala-1995") },
  { continent: "africa", countryKey: "rwanda", nominal: "1 франк", years: ["1985"], ...coinImages("/images/coins/rwanda/rwanda-1-franc-1985") },
  { continent: "africa", countryKey: "tanzania", nominal: "20 сенти", years: ["1976"], ...coinImages("/images/coins/tanzania/tanzania-20-senti-1976") },
  { continent: "africa", countryKey: "southAfrica", nominal: "1 ранд", years: ["2012"], ...coinImages("/images/coins/south-africa/south-africa-1-rand-2012") },

  { continent: "oceania", countryKey: "australia", nominal: "10 центов", years: ["1982"], ...coinImages("/images/coins/australia/australia-10-cents-1982") },
  { continent: "oceania", countryKey: "australia", nominal: "1 доллар", years: ["1985"], ...coinImages("/images/coins/australia/australia-1-dollar-1985") },
  { continent: "oceania", countryKey: "newZealand", nominal: "1 цент", years: ["1974"], ...coinImages("/images/coins/new-zealand/new-zealand-1-cent-1974") },
  { continent: "oceania", countryKey: "papuaNewGuinea", nominal: "1 тоя", years: ["2004"], ...coinImages("/images/coins/papua-new-guinea/papua-new-guinea-1-toea-2004") },
  { continent: "oceania", countryKey: "solomonIslands", nominal: "2 цента", years: ["2005"], ...coinImages("/images/coins/solomon-islands/solomon-islands-2-cents-2005") },
  { continent: "oceania", countryKey: "fiji", nominal: "1 цент", years: ["1999"], ...coinImages("/images/coins/fiji/fiji-1-cent-1999") },
];

function localized(ru: string, kz: string, en: string): LocalizedText {
  return { ru, kz, en };
}

function relatedCountries(keys: CountryKey[]): RelatedCountry[] {
  return keys.map((countryKey) => ({ countryKey, countryCode: countries[countryKey].code }));
}

function banknote(continent: Continent, countryKey: CountryKey, nominal: string, years: string[] = ["—"]): CoinSeed {
  return { category: "banknote", continent, countryKey, nominal, years };
}

function banknoteLocalized(continent: Continent, countryKey: CountryKey, title: LocalizedText, years: string[] = ["—"]): CoinSeed {
  return { category: "banknote", continent, countryKey, nominal: title.ru, nominalText: title, title, years };
}

function banknoteGroup(group: CollectionGroup, nominal: string, years: string[] = ["—"], extra: Partial<CoinSeed> = {}): CoinSeed {
  return { category: "banknote", group, nominal, years, ...extra };
}

function banknoteGroupLocalized(group: CollectionGroup, title: LocalizedText, years: string[] = ["—"], extra: Partial<CoinSeed> = {}): CoinSeed {
  return { category: "banknote", group, nominal: title.ru, nominalText: title, title, years, ...extra };
}

function sharedBanknote(
  group: CollectionGroup,
  related: CountryKey[],
  title: LocalizedText,
  years: string[] = ["—"],
  continent?: Continent,
): CoinSeed {
  return {
    category: "banknote",
    group,
    continent,
    nominal: title.ru,
    nominalText: title,
    title,
    years,
    relatedCountries: relatedCountries(related),
  };
}

const eastCaribbeanBanknote = localized("2 Восточно-Карибских доллара", "2 Шығыс Кариб доллары", "2 Eastern Caribbean dollars");

const banknoteSeeds: CoinSeed[] = [
  {
    ...banknoteLocalized("europe", "belarus", localized("50 рублей", "50 рубль", "50 rubles"), ["2000"]),
    imageFront: "/images/banknotes/belarus/belarus-50-rubles-avers.jpg",
    imageBack: "/images/banknotes/belarus/belarus-50-rubles-revers.jpg",
  },
  banknoteLocalized("europe", "belarus", localized("100 рублей", "100 рубль", "100 rubles"), ["2000"]),
  banknote("europe", "bulgaria", "20 лева", ["1991"]),
  banknoteLocalized("europe", "bosniaAndHerzegovina", localized("50 динара", "50 динар", "50 dinars")),
  banknote("europe", "greece", "200 драхма", ["1996"]),
  banknote("europe", "italy", "1000 лира", ["1990"]),
  banknote("europe", "moldova", "1 лей"),
  banknote("europe", "poland", "20 злотых"),
  banknoteLocalized("europe", "russia", localized("5 рублей", "5 рубль", "5 rubles"), ["1997"]),
  banknoteLocalized("europe", "russia", localized("100 рублей", "100 рубль", "100 rubles"), ["2022"]),
  banknoteLocalized("europe", "russia", localized("100 рублей ЧМ 2018", "100 рубль ӘЧ 2018", "100 rubles World Cup 2018"), ["2018"]),
  banknote("europe", "romania", "2000 лей", ["2000"]),
  banknote("europe", "northMacedonia", "10 денари"),
  banknote("europe", "serbia", "10 динар"),
  banknoteLocalized("europe", "ukraine", localized("1 гривна", "1 гривна", "1 hryvnia"), ["2014"]),
  banknoteLocalized("europe", "ukraine", localized("2 гривны", "2 гривна", "2 hryvnias"), ["2013"]),
  banknote("europe", "croatia", "100 000 динар"),

  banknoteLocalized("asia", "azerbaijan", localized("1 манат", "1 манат", "1 manat"), ["2017"]),
  banknoteLocalized("asia", "azerbaijan", localized("1 манат", "1 манат", "1 manat"), ["2020"]),
  banknoteLocalized("asia", "azerbaijan", localized("10 манат", "10 манат", "10 manats"), ["2021"]),
  banknote("asia", "afghanistan", "1000 афгани"),
  banknote("asia", "bangladesh", "2 така"),
  banknote("asia", "brunei", "1 ринггит / доллар", ["2013"]),
  banknote("asia", "bhutan", "5 нгултрум"),
  banknote("asia", "vietnam", "1000 донг"),
  banknote("asia", "georgia", "10 лари"),
  banknote("asia", "india", "1 рупия"),
  banknote("asia", "india", "50 рупия"),
  banknote("asia", "indonesia", "1000 рупия"),
  banknote("asia", "iraq", "25 динар"),
  banknote("asia", "iraq", "25 динар Саддам Хусейн"),
  banknote("asia", "iran", "1 туман / 10 тыс. риал"),
  banknote("asia", "iran", "2 туман / 20 тыс. риал"),
  banknote("asia", "iran", "20 риал", ["1974"]),
  banknote("asia", "yemen", "100 риал", ["2018"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 000 тенге Назарбаев / 25-летие Казахстана", "10 000 теңге Назарбаев / Қазақстанның 25 жылдығы", "10,000 tenge Nazarbayev / 25th anniversary of Kazakhstan"), ["2016"]),
  banknoteLocalized("asia", "kazakhstan", localized("1 тенге", "1 теңге", "1 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("3 тенге", "3 теңге", "3 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("5 тенге", "5 теңге", "5 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 тенге", "10 теңге", "10 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("50 тенге", "50 теңге", "50 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("100 тенге", "100 теңге", "100 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("200 тенге", "200 теңге", "200 tenge"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("500 тенге", "500 теңге", "500 tenge"), ["1999"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге", "1000 теңге", "1,000 tenge"), ["1994"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге", "1000 теңге", "1,000 tenge"), ["2000"]),
  banknoteLocalized("asia", "kazakhstan", localized("2000 тенге", "2000 теңге", "2,000 tenge"), ["2000"]),
  banknoteLocalized("asia", "kazakhstan", localized("5000 тенге", "5000 теңге", "5,000 tenge"), ["1998"]),
  banknoteLocalized("asia", "kazakhstan", localized("200 тенге", "200 теңге", "200 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("500 тенге", "500 теңге", "500 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге", "1000 теңге", "1,000 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("2000 тенге", "2000 теңге", "2,000 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("5000 тенге", "5000 теңге", "5,000 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 000 тенге", "10 000 теңге", "10,000 tenge"), ["2006"]),
  banknoteLocalized("asia", "kazakhstan", localized("500 тенге", "500 теңге", "500 tenge"), ["2017"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге", "1000 теңге", "1,000 tenge"), ["2014"]),
  banknoteLocalized("asia", "kazakhstan", localized("2000 тенге", "2000 теңге", "2,000 tenge"), ["2012"]),
  banknoteLocalized("asia", "kazakhstan", localized("5000 тенге", "5000 теңге", "5,000 tenge"), ["2011"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 000 тенге", "10 000 теңге", "10,000 tenge"), ["2012"]),
  banknoteLocalized("asia", "kazakhstan", localized("20 000 тенге", "20 000 теңге", "20,000 tenge"), ["2022"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге ОБСЕ", "1000 теңге ЕҚЫҰ", "1,000 tenge OSCE"), ["2010"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге Исламская конференция", "1000 теңге Ислам конференциясы", "1,000 tenge Islamic Conference"), ["2011"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге Култегин", "1000 теңге Күлтегін", "1,000 tenge Kultegin"), ["2013"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге 80-летие Победы ВОВ", "1000 теңге ҰОС Жеңісінің 80 жылдығы", "1,000 tenge 80th anniversary of Victory in WWII"), ["2025"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 000 тенге 30-летие тенге", "10 000 теңге теңгенің 30 жылдығы", "10,000 tenge 30th anniversary of the tenge"), ["2023"]),
  banknoteLocalized("asia", "kazakhstan", localized("500 тенге", "500 теңге", "500 tenge"), ["2024"]),
  banknoteLocalized("asia", "kazakhstan", localized("1000 тенге", "1000 теңге", "1,000 tenge"), ["2024"]),
  banknoteLocalized("asia", "kazakhstan", localized("2000 тенге", "2000 теңге", "2,000 tenge"), ["2024"]),
  banknoteLocalized("asia", "kazakhstan", localized("5000 тенге", "5000 теңге", "5,000 tenge"), ["2023"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 000 тенге", "10 000 теңге", "10,000 tenge"), ["2024"]),
  banknoteLocalized("asia", "kazakhstan", localized("1 тиын", "1 тиын", "1 tiyn"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("2 тиын", "2 тиын", "2 tiyn"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("10 тиын", "10 тиын", "10 tiyn"), ["1993"]),
  banknoteLocalized("asia", "kazakhstan", localized("20 тиын", "20 тиын", "20 tiyn"), ["1993"]),
  banknote("asia", "cambodia", "500 риель"),
  banknote("asia", "qatar", "1 риал"),
  banknote("asia", "china", "10 юань"),
  banknote("asia", "china", "5 дзяо"),
  banknote("asia", "china", "10 фынь"),
  banknote("asia", "northKorea", "100 вона"),
  banknoteLocalized("asia", "kyrgyzstan", localized("50 тиын", "50 тыйын", "50 tyiyn")),
  banknoteLocalized("asia", "kyrgyzstan", localized("1 сом", "1 сом", "1 som"), ["1999"]),
  banknoteLocalized("asia", "kyrgyzstan", localized("5 сом", "5 сом", "5 som"), ["1999"]),
  banknoteLocalized("asia", "kyrgyzstan", localized("20 сом", "20 сом", "20 som"), ["2002"]),
  banknoteLocalized("asia", "kyrgyzstan", localized("20 сом", "20 сом", "20 som"), ["2009"]),
  banknote("asia", "laos", "500 кип"),
  banknote("asia", "lebanon", "5000 ливр"),
  banknote("asia", "malaysia", "1000 ринггит"),
  banknote("asia", "maldives", "5 руфия", ["2011"]),
  banknote("asia", "mongolia", "100 тугрик"),
  banknote("asia", "mongolia", "500 тугрик Чингисхан"),
  banknote("asia", "myanmar", "20 кьят"),
  banknote("asia", "nepal", "5 рупи"),
  banknote("asia", "oman", "100 байса", ["1995"]),
  banknote("asia", "pakistan", "75 рупия", ["2022"]),
  banknote("asia", "saudiArabia", "1 риал"),
  banknote("asia", "singapore", "1 доллар", ["1987"]),
  banknoteLocalized("asia", "syria", localized("50 фунт", "50 фунт", "50 pounds"), ["2021"]),
  banknoteLocalized("asia", "syria", localized("100 фунт", "100 фунт", "100 pounds"), ["2021"]),
  banknoteLocalized("asia", "syria", localized("200 фунт", "200 фунт", "200 pounds"), ["2021"]),
  banknoteLocalized("asia", "syria", localized("500 фунт", "500 фунт", "500 pounds"), ["2013"]),
  banknoteLocalized("asia", "syria", localized("1000 фунт", "1000 фунт", "1,000 pounds"), ["2013"]),
  banknoteLocalized("asia", "syria", localized("10 фунт", "10 фунт", "10 pounds"), ["2025"]),
  banknoteLocalized("asia", "syria", localized("25 фунт", "25 фунт", "25 pounds"), ["2021"]),
  banknote("asia", "tajikistan", "3 сомони", ["2010"]),
  banknote("asia", "thailand", "100 бат"),
  banknote("asia", "turkmenistan", "1000 манат"),
  banknote("asia", "turkmenistan", "1 манат", ["2009"]),
  banknoteLocalized("asia", "turkey", localized("5 лира", "5 лира", "5 lira"), ["2009"]),
  banknoteLocalized("asia", "turkey", localized("10 лира", "10 лира", "10 lira"), ["2009"]),
  banknoteLocalized("asia", "turkey", localized("20 лира", "20 лира", "20 lira"), ["2009"]),
  banknoteLocalized("asia", "turkey", localized("500 000 лира", "500 000 лира", "500,000 lira"), ["1994"]),
  banknoteLocalized("asia", "turkey", localized("1 000 000 лира", "1 000 000 лира", "1,000,000 lira"), ["2002"]),
  banknote("asia", "uzbekistan", "5000 сум"),
  banknote("asia", "philippines", "20 писо", ["2023"]),
  banknote("asia", "sriLanka", "20 рупии"),
  banknote("asia", "southKorea", "1000 вона"),
  banknote("asia", "southKorea", "5000 вона"),
  banknote("asia", "eastTimor", "100 доллар США"),

  banknote("northAmerica", "bahamas", "1/2 доллар", ["2019"]),
  banknote("northAmerica", "barbados", "2 доллар"),
  banknote("northAmerica", "haiti", "10 гурд"),
  banknote("northAmerica", "guatemala", "1 кетсаль"),
  banknote("northAmerica", "honduras", "1 лемпира"),
  banknote("northAmerica", "dominica", "50 песо", ["2023"]),
  banknote("northAmerica", "cuba", "1 песо"),
  banknote("northAmerica", "cuba", "3 песо Че Гевара"),
  banknote("northAmerica", "mexico", "20 песо", ["2021"]),
  banknote("northAmerica", "nicaragua", "5 кордоба"),
  banknote("northAmerica", "trinidadAndTobago", "1 доллар"),
  banknote("northAmerica", "jamaica", "50 доллар", ["2022"]),
  banknote("northAmerica", "unitedStates", "50 доллар"),
  banknote("northAmerica", "unitedStates", "100 доллар"),
  sharedBanknote(
    "regular",
    ["antiguaAndBarbuda", "dominica", "grenada", "saintKittsAndNevis", "saintLucia", "saintVincentAndTheGrenadines"],
    eastCaribbeanBanknote,
    ["2023"],
    "northAmerica",
  ),

  {
    ...banknote("southAmerica", "argentina", "20 песо", ["1999-2013"]),
    previewImage: "/images/banknotes/argentina/argentina-20-pesos-avers.jpg",
    imageFront: "/images/banknotes/argentina/argentina-20-pesos-revers.jpg",
    imageBack: "/images/banknotes/argentina/argentina-20-pesos-avers.jpg",
  },
  {
    ...banknote("southAmerica", "argentina", "50 песо", ["2015"]),
    previewImage: "/images/banknotes/argentina/argentina-50-pesos-2015-avers.jpg",
    imageFront: "/images/banknotes/argentina/argentina-50-pesos-2015-revers.jpg",
    imageBack: "/images/banknotes/argentina/argentina-50-pesos-2015-avers.jpg",
  },
  {
    ...banknote("southAmerica", "bolivia", "10 боливиано", ["2018"]),
    previewImage: "/images/banknotes/bolivia/bolivia-10-bolivianos-2018-avers.jpg",
    imageFront: "/images/banknotes/bolivia/bolivia-10-bolivianos-2018-revers.jpg",
    imageBack: "/images/banknotes/bolivia/bolivia-10-bolivianos-2018-avers.jpg",
  },
  {
    ...banknote("southAmerica", "brazil", "50 реал новос"),
    previewImage: "/images/banknotes/brazil/brazil-50-cruzados-novos-avers.jpg",
    imageFront: "/images/banknotes/brazil/brazil-50-cruzados-novos-revers.jpg",
    imageBack: "/images/banknotes/brazil/brazil-50-cruzados-novos-avers.jpg",
  },
  {
    ...banknote("southAmerica", "venezuela", "20000 боливар"),
    previewImage: "/images/banknotes/venezuela/venezuela-20000-bolivares-avers.jpg",
    imageFront: "/images/banknotes/venezuela/venezuela-20000-bolivares-revers.jpg",
    imageBack: "/images/banknotes/venezuela/venezuela-20000-bolivares-avers.jpg",
  },
  {
    ...banknote("southAmerica", "venezuela", "2000 боливар"),
    previewImage: "/images/banknotes/venezuela/venezuela-2000-bolivares-avers.jpg",
    imageFront: "/images/banknotes/venezuela/venezuela-2000-bolivares-revers.jpg",
    imageBack: "/images/banknotes/venezuela/venezuela-2000-bolivares-avers.jpg",
  },
  {
    ...banknote("southAmerica", "venezuela", "5 боливар"),
    previewImage: "/images/banknotes/venezuela/venezuela-5-bolivares-avers.jpg",
    imageFront: "/images/banknotes/venezuela/venezuela-5-bolivares-revers.jpg",
    imageBack: "/images/banknotes/venezuela/venezuela-5-bolivares-avers.jpg",
  },
  {
    ...banknote("southAmerica", "guyana", "20 доллар"),
    previewImage: "/images/banknotes/guyana/guyana-20-dollars-avers.jpg",
    imageFront: "/images/banknotes/guyana/guyana-20-dollars-revers.jpg",
    imageBack: "/images/banknotes/guyana/guyana-20-dollars-avers.jpg",
  },
  {
    ...banknote("southAmerica", "colombia", "2000 песо"),
    previewImage: "/images/banknotes/colombia/colombia-2000-pesos-avers.jpg",
    imageFront: "/images/banknotes/colombia/colombia-2000-pesos-revers.jpg",
    imageBack: "/images/banknotes/colombia/colombia-2000-pesos-avers.jpg",
  },
  {
    ...banknote("southAmerica", "paraguay", "2000 гуарани", ["2023"]),
    previewImage: "/images/banknotes/paraguay/paraguay-2000-guaranies-2023-avers.jpg",
    imageFront: "/images/banknotes/paraguay/paraguay-2000-guaranies-2023-revers.jpg",
    imageBack: "/images/banknotes/paraguay/paraguay-2000-guaranies-2023-avers.jpg",
  },
  {
    ...banknote("southAmerica", "peru", "500 инти"),
    previewImage: "/images/banknotes/peru/peru-500-intis-avers.jpg",
    imageFront: "/images/banknotes/peru/peru-500-intis-revers.jpg",
    imageBack: "/images/banknotes/peru/peru-500-intis-avers.jpg",
  },
  {
    ...banknote("southAmerica", "suriname", "100 гульден"),
    previewImage: "/images/banknotes/suriname/suriname-100-gulden-avers.jpg",
    imageFront: "/images/banknotes/suriname/suriname-100-gulden-revers.jpg",
    imageBack: "/images/banknotes/suriname/suriname-100-gulden-avers.jpg",
  },

  banknote("africa", "angola", "10 кванза"),
  banknote("africa", "burundi", "1000 франк", ["2019"]),
  banknote("africa", "gambia", "5 даласи"),
  banknote("africa", "ghana", "20 седи"),
  banknote("africa", "guinea", "100 цент"),
  banknote("africa", "guineaBissau", "50 песо"),
  banknote("africa", "djibouti", "40 франк"),
  banknote("africa", "egypt", "50 пиастр"),
  banknote("africa", "zambia", "100 квача"),
  banknote("africa", "zimbabwe", "100 доллар", ["2020"]),
  banknote("africa", "kenya", "10 шиллинг", ["2019"]),
  banknote("africa", "congo", "50 франков"),
  banknote("africa", "lesotho", "10 малоти", ["2021"]),
  banknote("africa", "liberia", "5 доллар", ["2016"]),
  banknote("africa", "libya", "1 динар"),
  banknote("africa", "mauritius", "25", ["2021"]),
  banknote("africa", "mauritania", "1000 угия", ["2014"]),
  banknote("africa", "madagascar", "200 ариари"),
  banknote("africa", "malawi", "20 квача"),
  banknoteLocalized("africa", "mozambique", localized("100 000 метикал", "100 000 метикал", "100,000 meticals")),
  banknote("africa", "nigeria", "10 найра"),
  banknote("africa", "rwanda", "500 франк"),
  banknote("africa", "saoTomeAndPrincipe", "10 000 добр", ["1996"]),
  banknote("africa", "eswatini", "10 эмалангені", ["2015"]),
  banknote("africa", "somalia", "50 шиллинг"),
  banknote("africa", "somaliland", "1000 шиллинг"),
  banknote("africa", "sudan", "10 фунт", ["2017"]),
  banknote("africa", "sierraLeone", "1 леоне"),
  banknote("africa", "tanzania", "500 шиллингов", ["2010"]),
  banknote("africa", "uganda", "1000 шиллинг"),
  banknote("africa", "eritrea", "10 накфа", ["1997"]),
  banknote("africa", "ethiopia", "10 быр"),
  banknote("africa", "southSudan", "1 фунт"),
  banknote("africa", "southAfrica", "10 ранд", ["2013"]),

  {
    ...banknoteLocalized("oceania", "australia", localized("5 австралийский доллар", "5 аустралиялық доллар", "5 Australian dollars")),
    previewImage: "/images/banknotes/australia/australia-5-australian-dollars-avers.jpg",
    imageFront: "/images/banknotes/australia/australia-5-australian-dollars-revers.jpg",
    imageBack: "/images/banknotes/australia/australia-5-australian-dollars-avers.jpg",
  },
  {
    ...banknote("oceania", "papuaNewGuinea", "20 кина"),
    previewImage: "/images/banknotes/papua-new-guinea/papua-new-guinea-20-kina-avers.jpg",
    imageFront: "/images/banknotes/papua-new-guinea/papua-new-guinea-20-kina-revers.jpg",
    imageBack: "/images/banknotes/papua-new-guinea/papua-new-guinea-20-kina-avers.jpg",
  },
  {
    ...banknote("oceania", "solomonIslands", "5 доллар", ["2019"]),
    previewImage: "/images/banknotes/solomon-islands/solomon-islands-5-dollars-2019-avers.jpg",
    imageFront: "/images/banknotes/solomon-islands/solomon-islands-5-dollars-2019-revers.jpg",
    imageBack: "/images/banknotes/solomon-islands/solomon-islands-5-dollars-2019-avers.jpg",
  },
  {
    ...banknote("oceania", "solomonIslands", "10 доллар", ["2023"]),
    previewImage: "/images/banknotes/solomon-islands/solomon-islands-10-dollars-2023-avers.jpg",
    imageFront: "/images/banknotes/solomon-islands/solomon-islands-10-dollars-2023-revers.jpg",
    imageBack: "/images/banknotes/solomon-islands/solomon-islands-10-dollars-2023-avers.jpg",
  },
  {
    ...banknote("oceania", "tonga", "1 доллар", ["2009"]),
    previewImage: "/images/banknotes/tonga/tonga-1-dollar-2009-avers.jpg",
    imageFront: "/images/banknotes/tonga/tonga-1-dollar-2009-revers.jpg",
    imageBack: "/images/banknotes/tonga/tonga-1-dollar-2009-avers.jpg",
  },
  {
    ...sharedBanknote("regular", ["marshallIslands", "micronesia", "palau"], localized("100 долларов США", "100 АҚШ доллары", "100 US dollars"), ["—"], "oceania"),
    previewImage: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-avers.jpg",
    imageFront: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-revers.jpg",
    imageBack: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-avers.jpg",
  },
  {
    ...sharedBanknote("regular", ["kiribati", "nauru", "tuvalu"], localized("5 австралийский доллар", "5 аустралиялық доллар", "5 Australian dollars"), ["—"], "oceania"),
    previewImage: "/images/banknotes/kiribati-nauru-tuvalu/kiribati-nauru-tuvalu-5-australian-dollars-avers.jpg",
    imageFront: "/images/banknotes/kiribati-nauru-tuvalu/kiribati-nauru-tuvalu-5-australian-dollars-revers.jpg",
    imageBack: "/images/banknotes/kiribati-nauru-tuvalu/kiribati-nauru-tuvalu-5-australian-dollars-avers.jpg",
  },

  banknoteGroup("historicalStates", "1 рубль", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "3 рубля", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "5 рублей", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "10 рублей", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "25 рублей", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "50 рублей", ["1991"], { historicalEntityKey: "ussr" }),
  banknoteGroup("historicalStates", "100 рублей", ["1961"], { historicalEntityKey: "ussr" }),
  banknoteGroupLocalized("historicalStates", localized("1000 рублей", "1000 рубль", "1,000 rubles"), ["1991"], { historicalEntityKey: "ussr" }),
  banknoteGroupLocalized("historicalStates", localized("3 рубля", "3 рубль", "3 rubles"), ["1947"], { historicalEntityKey: "ussr" }),
  banknoteGroupLocalized("historicalStates", localized("5 млрд динара", "5 млрд динар", "5 billion dinars"), ["1993"], { historicalEntityKey: "yugoslavia" }),
  banknoteGroupLocalized("historicalStates", localized("5 млн динара", "5 млн динар", "5 million dinars"), ["1993"], { historicalEntityKey: "yugoslavia" }),
  banknoteGroupLocalized("historicalStates", localized("50 млрд динара", "50 млрд динар", "50 billion dinars"), ["1993"], { historicalEntityKey: "yugoslavia" }),

  banknoteGroup("specialTerritories", "1 рубль", ["—"], { countryKey: "transnistria" }),
  banknoteGroupLocalized("specialTerritories", localized("20 евро", "20 еуро", "20 euros"), ["2002"], { countryKey: "europeanUnion" }),
  banknoteGroupLocalized("specialTerritories", localized("20 евро", "20 еуро", "20 euros"), ["2015"], { countryKey: "europeanUnion" }),
  sharedBanknote("specialTerritories", ["anguilla", "montserrat"], eastCaribbeanBanknote, ["2023"]),
  {
    ...sharedBanknote(
      "specialTerritories",
      ["turksAndCaicos", "britishVirginIslands", "americanSamoa", "guam", "northernMarianaIslands"],
      localized("100 долларов США", "100 АҚШ доллары", "100 US dollars"),
    ),
    previewImage: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-avers.jpg",
    imageFront: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-revers.jpg",
    imageBack: "/images/banknotes/us-dollar-territories/us-dollar-territories-100-us-dollars-avers.jpg",
  },
];

const moneySeeds: CoinSeed[] = [...coinSeeds, ...banknoteSeeds];

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
  const category = seed.category ?? "coin";
  const itemRu = category === "banknote" ? "банкнота" : "монета";
  const itemRuCapital = category === "banknote" ? "Банкнота" : "Монета";
  const itemKz = category === "banknote" ? "банкнот" : "монета";
  const itemEn = category === "banknote" ? "banknote" : "coin";
  const name = itemName(seed, "ru");
  const nameKz = itemName(seed, "kz");
  const nameEn = itemName(seed, "en");

  if (seed.group === "historicalStates") {
    return {
      ru: `Историческая ${itemRu}: ${name}.`,
      kz: `Тарихи ${itemKz}: ${nameKz}.`,
      en: `A historical ${itemEn} from ${nameEn}.`,
    };
  }

  return {
    ru: `${itemRuCapital} ${name} из моей коллекции.`,
    kz: `Менің коллекциямдағы ${nameKz} ${itemKz}ы.`,
    en: `A ${itemEn} from ${nameEn} in my collection.`,
  };
}

function tagsFor(seed: CoinSeed): LocalizedList {
  const category = seed.category ?? "coin";
  const group = seed.group ?? "regular";
  const locationRu = seed.continent ? continentLabels[seed.continent].ru : group === "historicalStates" ? "Исторические государства" : "Зависимые и особые территории";
  const locationKz = seed.continent ? continentLabels[seed.continent].kz : group === "historicalStates" ? "Тарихи мемлекеттер" : "Тәуелді және ерекше аумақтар";
  const locationEn = seed.continent ? continentLabels[seed.continent].en : group === "historicalStates" ? "Historical States" : "Dependent and Special Territories";

  return {
    ru: [itemName(seed, "ru"), locationRu, category === "banknote" ? "банкнота" : "монета"],
    kz: [itemName(seed, "kz"), locationKz, category === "banknote" ? "банкнот" : "монета"],
    en: [itemName(seed, "en"), locationEn, category === "banknote" ? "banknote" : "coin"],
  };
}

type BlisterSeed = {
  theme: BlisterTheme;
  title: LocalizedText;
  imageFront?: string;
  imageBack?: string;
};

function blisterSeed(theme: BlisterTheme, ru: string, kz: string, en: string, imageFront = "", imageBack = ""): BlisterSeed {
  return {
    theme,
    title: localized(ru, kz, en),
    imageFront,
    imageBack,
  };
}

function blisterDescription(seed: BlisterSeed): LocalizedText {
  return {
    ru: `Блистер из моей коллекции: ${seed.title.ru}.`,
    kz: `Менің коллекциямдағы блистер: ${seed.title.kz}.`,
    en: `A blister from my collection: ${seed.title.en}.`,
  };
}

function blisterTags(seed: BlisterSeed): LocalizedList {
  const theme = {
    ru:
      seed.theme === "figures"
        ? "Известные личности"
        : seed.theme === "traditions"
          ? "Традиции"
          : seed.theme === "animals"
            ? "Животные"
            : seed.theme === "sport"
              ? "Спорт"
              : seed.theme === "events"
                ? "Знаменательные события"
                : "Набор блистеров",
    kz:
      seed.theme === "figures"
        ? "Танымал тұлғалар"
        : seed.theme === "traditions"
          ? "Дәстүрлер"
          : seed.theme === "animals"
            ? "Жануарлар"
            : seed.theme === "sport"
              ? "Спорт"
              : seed.theme === "events"
                ? "Атаулы оқиғалар"
                : "Блистер жиынтықтары",
    en:
      seed.theme === "figures"
        ? "Famous figures"
        : seed.theme === "traditions"
          ? "Traditions"
          : seed.theme === "animals"
            ? "Animals"
            : seed.theme === "sport"
              ? "Sport"
              : seed.theme === "events"
                ? "Notable events"
                : "Blister sets",
  };

  return {
    ru: [seed.title.ru, theme.ru, "блистер", "коллекция"],
    kz: [seed.title.kz, theme.kz, "блистер", "жиынтық", "коллекция"],
    en: [seed.title.en, theme.en, "blister", "collection"],
  };
}

const blisterSeeds: BlisterSeed[] = [
  blisterSeed("figures", "Абылай хан", "Абылай хан", "Abylai Khan"),
  blisterSeed("figures", "Айша Галимбаева", "Айша Ғалымбаева", "Aisha Galimbayeva"),
  blisterSeed("figures", "Бейимбет Майлин", "Бейімбет Майлин", "Beimbet Mailin"),
  blisterSeed("figures", "Ильяс Жансугуров", "Ілияс Жансүгіров", "Ilyas Zhansugirov"),
  blisterSeed("figures", "Сакен Сейфуллин", "Сәкен Сейфуллин", "Saken Seifullin"),
  blisterSeed("figures", "Турар Рыскулов", "Тұрар Рысқұлов", "Turar Ryskulov"),
  blisterSeed(
    "figures",
    "Абай Кунанбаев",
    "Абай Құнанбайұлы",
    "Abai Qunanbaiuly",
    "/images/blisters/figures/abai-qunanbaiuly-blister-avers.jpg",
    "/images/blisters/figures/abai-qunanbaiuly-blister-revers.png",
  ),
  blisterSeed("figures", "Жубан Молдагалиев", "Жұбан Молдағалиев", "Zhuban Moldagaliyev"),
  blisterSeed("figures", "Жамбыл Жабаев", "Жамбыл Жабаев", "Zhambyl Zhabayev"),
  blisterSeed("figures", "Темирбек Жургенов", "Темірбек Жүргенов", "Temirbek Zhurgenov"),
  blisterSeed("figures", "Каныш Сатпаев", "Қаныш Сәтбаев", "Kanysh Satbayev"),
  blisterSeed("figures", "Кемел Акишев", "Кемел Ақышев", "Kemel Akishev"),
  blisterSeed("figures", "Рахымжан Кошкарбаев", "Рақымжан Қошқарбаев", "Rakhimzhan Koshkarbayev"),
  blisterSeed("figures", "Сагадат Нурмагамбетов", "Сағадат Нұрмағамбетов", "Sagadat Nurmagambetov"),
  blisterSeed("figures", "Джучи хан", "Жошы хан", "Jochi Khan"),
  blisterSeed("figures", "Евней Букетов", "Евней Бөкетов", "Evnei Buketov"),
  blisterSeed("figures", "Алия Молдагулова", "Әлия Молдағұлова", "Aliya Moldagulova"),
  blisterSeed("figures", "Ермек Серкебаев", "Ермек Серкебаев", "Yermek Serkebayev"),
  blisterSeed("figures", "Кажымукан", "Қажымұқан", "Kazhymukan"),
  blisterSeed("figures", "Роза Багланова", "Роза Бағланова", "Roza Baglanova"),
  blisterSeed("figures", "Ахмет Байтурсынов", "Ахмет Байтұрсынұлы", "Akhmet Baitursynuly"),
  blisterSeed("figures", "Талгат Бегельдинов", "Талғат Бигелдинов", "Talgat Bigeldinov"),
  blisterSeed("figures", "Мухтар Ауэзов", "Мұхтар Әуезов", "Mukhtar Auezov"),
  blisterSeed("figures", "Маншук Маметова", "Мәншүк Мәметова", "Manshuk Mametova"),

  blisterSeed("traditions", "Сүйінші", "Сүйінші", "Suyinshi"),
  blisterSeed("traditions", "Кыз узату", "Қыз ұзату", "Kyz uzatu"),
  blisterSeed("traditions", "Сундет той", "Сүндет той", "Sundet toi"),
  blisterSeed("traditions", "Тилашар", "Тілашар", "Tilashar"),
  blisterSeed("traditions", "Жар-жар", "Жар-жар", "Zhar-zhar"),
  blisterSeed("traditions", "Ерулик", "Ерулік", "Erulik"),
  blisterSeed("traditions", "Айналайын", "Айналайын", "Ainalayin"),

  blisterSeed("animals", "Соболь", "Бұлғын", "Sable"),
  blisterSeed("animals", "Кокбори", "Көкбөрі", "Kokbori"),
  blisterSeed("animals", "Филин", "Үкі", "Eagle owl"),
  blisterSeed("animals", "Бабочка", "Көбелек", "Butterfly"),
  blisterSeed("animals", "Олень", "Бұғы", "Deer"),
  blisterSeed("animals", "Кулан", "Құлан", "Kulan"),
  blisterSeed("animals", "Лебедь", "Аққу", "Swan"),
  blisterSeed("animals", "Беркут", "Бүркіт", "Golden eagle"),
  blisterSeed("animals", "Балхашский окунь", "Балқаш алабұғасы", "Balkhash perch"),
  blisterSeed("animals", "Келоағлан", "Келоағлан", "Keloaglan"),
  blisterSeed("animals", "Верблюд", "Түйе", "Camel"),
  blisterSeed("animals", "Медведь", "Аю", "Bear"),
  blisterSeed("animals", "Белая кувшинка", "Ақтұңғиық", "White water lily"),
  blisterSeed("animals", "Аргамак", "Арғымақ", "Argamak horse"),

  blisterSeed("sport", "Тогызкумалак", "Тоғызқұмалақ", "Togyzkumalak"),
  blisterSeed("sport", "Казахская борьба", "Қазақ күресі", "Kazakh kures"),
  blisterSeed("sport", "Кайрат (Алматы)", "Қайрат (Алматы)", "Kairat (Almaty)"),
  blisterSeed("sport", "Астана (Астана)", "Астана (Астана)", "Astana (Astana)"),
  blisterSeed("sport", "Актобе (Актобе)", "Ақтөбе (Ақтөбе)", "Aktobe (Aktobe)"),
  blisterSeed("sport", "Ордабасы (Шымкент)", "Ордабасы (Шымкент)", "Ordabasy (Shymkent)"),
  blisterSeed("sport", "Тобол (Костанай)", "Тобыл (Қостанай)", "Tobol (Kostanay)"),
  blisterSeed("sport", "Елимай (Семей)", "Елімай (Семей)", "Elimai (Semey)"),
  blisterSeed("sport", "Кайсар (Кызылорда)", "Қайсар (Қызылорда)", "Kaisar (Kyzylorda)"),
  blisterSeed("sport", "Жетысу (Талдыкорган)", "Жетісу (Талдықорған)", "Zhetysu (Taldykorgan)"),
  blisterSeed("sport", "Атырау (Атырау)", "Атырау (Атырау)", "Atyrau (Atyrau)"),
  blisterSeed("sport", "Женис (Астана)", "Жеңіс (Астана)", "Zhenis (Astana)"),
  blisterSeed("sport", "Туран (Туркестан)", "Тұран (Түркістан)", "Turan (Turkistan)"),
  blisterSeed("sport", "Шахтер (Караганда)", "Шахтер (Қарағанды)", "Shakhter (Karaganda)"),
  blisterSeed("sport", "Кызылжар (Петропавловск)", "Қызылжар (Петропавл)", "Kyzylzhar (Petropavl)"),

  blisterSeed("events", "20 лет Астане", "Астанаға 20 жыл", "20 years of Astana"),
  blisterSeed("events", "25 лет тенге", "Теңгеге 25 жыл", "25 years of the tenge"),
  blisterSeed("events", "25 лет Астане", "Астанаға 25 жыл", "25 years of Astana"),
  blisterSeed("events", "Картина мира", "Әлем бейнесі", "Picture of the World"),

  blisterSeed("blister-sets", "Сакский стиль", "Сақ стилі", "Saka style"),
  blisterSeed(
    "blister-sets",
    "Сувенирный блистерный набор оборотных монет",
    "Айналыстағы монеталардың кәдесый блистер жиынтығы",
    "Souvenir blister set of circulation coins",
  ),
  blisterSeed("blister-sets", "JETI QAZYNA", "JETI QAZYNA", "JETI QAZYNA"),
  blisterSeed("blister-sets", "Футбольные команды Казахстана", "Қазақстанның футбол командалары", "Football teams of Kazakhstan"),
];

function blisterImageSet(theme: BlisterTheme, fileSlug: string): Pick<BlisterSeed, "imageFront" | "imageBack"> {
  return {
    imageFront: `/images/blisters/${theme}/${fileSlug}-blister-avers.jpg`,
    imageBack: `/images/blisters/${theme}/${fileSlug}-blister-revers.jpg`,
  };
}

const blisterImageOverrides: Record<string, Pick<BlisterSeed, "imageFront" | "imageBack">> = {
  "aisha-galimbayeva": blisterImageSet("figures", "aisha-galimbayeva"),
  "beimbet-mailin": blisterImageSet("figures", "beimbet-mailin"),
  "ilyas-zhansugirov": blisterImageSet("figures", "ilyas-zhansugirov"),
  "saken-seifullin": blisterImageSet("figures", "saken-seifullin"),
  "turar-ryskulov": blisterImageSet("figures", "turar-ryskulov"),
  "suyinshi": blisterImageSet("traditions", "suyinshi"),
  "kokbori": blisterImageSet("animals", "kokbori"),
  "butterfly": blisterImageSet("animals", "butterfly"),
  "deer": blisterImageSet("animals", "deer"),
  "kulan": blisterImageSet("animals", "kulan"),
  "abylai-khan": blisterImageSet("figures", "abylai-khan"),
  "abai-qunanbaiuly": blisterImageSet("figures", "abai-qunanbaiuly"),
  "zhuban-moldagaliyev": blisterImageSet("figures", "zhuban-moldagaliyev"),
  "zhambyl-zhabayev": blisterImageSet("figures", "zhambyl-zhabayev"),
  "temirbek-zhurgenov": blisterImageSet("figures", "temirbek-zhurgenov"),
  "kanysh-satbayev": blisterImageSet("figures", "kanysh-satbayev"),
  "kemel-akishev": blisterImageSet("figures", "kemel-akishev"),
  "rakhimzhan-koshkarbayev": blisterImageSet("figures", "rakhimzhan-koshkarbayev"),
  "sagadat-nurmagambetov": blisterImageSet("figures", "sagadat-nurmagambetov"),
  "jochi-khan": blisterImageSet("figures", "jochi-khan"),
  "evnei-buketov": blisterImageSet("figures", "evnei-buketov"),
  "aliya-moldagulova": blisterImageSet("figures", "aliya-moldagulova"),
  "yermek-serkebayev": blisterImageSet("figures", "yermek-serkebayev"),
  "kazhymukan": blisterImageSet("figures", "kazhymukan"),
  "roza-baglanova": blisterImageSet("figures", "roza-baglanova"),
  "akhmet-baitursynuly": blisterImageSet("figures", "akhmet-baitursynuly"),
  "talgat-bigeldinov": blisterImageSet("figures", "talgat-bigeldinov"),
  "mukhtar-auezov": blisterImageSet("figures", "mukhtar-auezov"),
  "manshuk-mametova": blisterImageSet("figures", "manshuk-mametova"),
  "kyz-uzatu": blisterImageSet("traditions", "kyz-uzatu"),
  "sundet-toi": blisterImageSet("traditions", "sundet-toi"),
  "tilashar": blisterImageSet("traditions", "tilashar"),
  "zhar-zhar": blisterImageSet("traditions", "zhar-zhar"),
  "erulik": blisterImageSet("traditions", "erulik"),
  "ainalayin": blisterImageSet("traditions", "ainalayin"),
  "sable": blisterImageSet("animals", "sable"),
  "eagle-owl": blisterImageSet("animals", "eagle-owl"),
  "swan": blisterImageSet("animals", "swan"),
  "golden-eagle": blisterImageSet("animals", "golden-eagle"),
  "balkhash-perch": blisterImageSet("animals", "balkhash-perch"),
  "keloaglan": blisterImageSet("animals", "keloaglan"),
  "camel": blisterImageSet("animals", "camel"),
  "bear": blisterImageSet("animals", "bear"),
  "white-water-lily": blisterImageSet("animals", "white-water-lily"),
  "argamak-horse": blisterImageSet("animals", "argamak-horse"),
  "togyzkumalak": blisterImageSet("sport", "togyzkumalak"),
  "kazakh-kures": blisterImageSet("sport", "kazakh-kures"),
  "kairat-almaty": blisterImageSet("sport", "kairat-almaty"),
  "astana-astana": blisterImageSet("sport", "astana-astana"),
  "aktobe-aktobe": blisterImageSet("sport", "aktobe-aktobe"),
  "ordabasy-shymkent": blisterImageSet("sport", "ordabasy-shymkent"),
  "tobol-kostanay": blisterImageSet("sport", "tobol-kostanay"),
  "elimai-semey": blisterImageSet("sport", "elimai-semey"),
  "kaisar-kyzylorda": blisterImageSet("sport", "kaisar-kyzylorda"),
  "zhetysu-taldykorgan": blisterImageSet("sport", "zhetysu-taldykorgan"),
  "atyrau-atyrau": blisterImageSet("sport", "atyrau-atyrau"),
  "zhenis-astana": blisterImageSet("sport", "zhenis-astana"),
  "turan-turkistan": blisterImageSet("sport", "turan-turkistan"),
  "shakhter-karaganda": blisterImageSet("sport", "shakhter-karaganda"),
  "kyzylzhar-petropavl": blisterImageSet("sport", "kyzylzhar-petropavl"),
  "20-years-of-astana": blisterImageSet("events", "astana-20-years"),
  "25-years-of-the-tenge": blisterImageSet("events", "tenge-25-years"),
  "25-years-of-astana": blisterImageSet("events", "astana-25-years"),
  "picture-of-the-world": blisterImageSet("events", "picture-of-the-world"),
};

const blisterItems: BlisterItem[] = blisterSeeds.map((seed, index) => {
  const blisterImages = blisterImageOverrides[slug(seed.title.en)];
  const imageFront = blisterImages?.imageFront ?? seed.imageFront ?? "";
  const imageBack = blisterImages?.imageBack ?? seed.imageBack ?? "";

  return {
    id: `blister-${seed.theme}-${slug(seed.title.en)}-${index + 1}`,
    category: "blister",
    collectionGroup: "regular",
    theme: seed.theme,
    title: seed.title,
    description: blisterDescription(seed),
    image: imageBack || imageFront,
    imageFront,
    imageBack,
    addedAt: "2026-07-19",
    updatedAt: "2026-07-19",
    tags: blisterTags(seed),
  };
});


type BanknoteImageOverride = Pick<CoinSeed, "previewImage" | "imageFront" | "imageBack">;

function banknoteImageSet(basePath: string): BanknoteImageOverride {
  return {
    previewImage: `${basePath}-avers.jpg`,
    imageFront: `${basePath}-revers.jpg`,
    imageBack: `${basePath}-avers.jpg`,
  };
}

function banknoteOverrideKey(countryKey: string | undefined, nominal: string, year: string) {
  return `banknote|${countryKey ?? ""}|${nominal}|${year}`;
}

const banknoteImageOverrides: Record<string, BanknoteImageOverride> = {
  "banknote|kazakhstan|500 тенге|2024": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-500-tenge-2024"),
  "banknote|kazakhstan|10 000 тенге 30-летие тенге|2023": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-000-tenge-30-years-tenge-2023"),
  "banknote|ussr|1 рубль|1961": banknoteImageSet("/images/banknotes/ussr/ussr-1-ruble"),
  "banknote|ussr|3 рубля|1961": banknoteImageSet("/images/banknotes/ussr/ussr-3-rubles"),
  "banknote|ussr|5 рублей|1961": banknoteImageSet("/images/banknotes/ussr/ussr-5-rubles"),
  "banknote|ussr|10 рублей|1961": banknoteImageSet("/images/banknotes/ussr/ussr-10-rubles-1961"),
  "banknote|ussr|25 рублей|1961": banknoteImageSet("/images/banknotes/ussr/ussr-25-rubles"),
  "banknote|ussr|50 рублей|1991": banknoteImageSet("/images/banknotes/ussr/ussr-50-rubles"),
  "banknote|ussr|100 рублей|1961": banknoteImageSet("/images/banknotes/ussr/ussr-100-rubles"),
  "banknote|ussr|1000 рублей|1991": banknoteImageSet("/images/banknotes/ussr/ussr-1000-rubles-1991"),
  "banknote|ussr|3 рубля|1947": banknoteImageSet("/images/banknotes/ussr/ussr-3-rubles-1947"),
  "banknote|yugoslavia|5 млрд динара|1993": banknoteImageSet("/images/banknotes/yugoslavia/yugoslavia-5-billion-dinars-1993"),
  "banknote|yugoslavia|5 млн динара|1993": banknoteImageSet("/images/banknotes/yugoslavia/yugoslavia-5-million-dinars-1993"),
  "banknote|yugoslavia|50 млрд динара|1993": banknoteImageSet("/images/banknotes/yugoslavia/yugoslavia-50-billion-dinars-1993"),
  "banknote|europeanUnion|20 евро|2002": banknoteImageSet("/images/banknotes/european-union/european-union-20-euros-2002"),
  "banknote|europeanUnion|20 евро|2015": banknoteImageSet("/images/banknotes/european-union/european-union-20-euros-2015"),
  "banknote|antiguaAndBarbuda-dominica-grenada-saintKittsAndNevis-saintLucia-saintVincentAndTheGrenadines|2 Восточно-Карибских доллара|2023": banknoteImageSet("/images/banknotes/east-caribbean-states/east-caribbean-states-2-dollars-2023"),
  "banknote|anguilla-montserrat|2 Восточно-Карибских доллара|2023": banknoteImageSet("/images/banknotes/east-caribbean-states/east-caribbean-states-2-dollars-2023"),
  "banknote|eastTimor|100 доллар США|—": banknoteImageSet("/images/banknotes/united-states/united-states-100-dollar"),
  "banknote|belarus|100 рублей|2000": {
    previewImage: "/images/banknotes/belarus/belarus-100-rubles-2000-revers.jpg",
    imageFront: "/images/banknotes/belarus/belarus-100-rubles-2000-avers.jpg",
    imageBack: "/images/banknotes/belarus/belarus-100-rubles-2000-revers.jpg",
  },
  "banknote|russia|100 рублей ЧМ 2018|2018": banknoteImageSet("/images/banknotes/russia/russia-100-rubles-world-cup-2018"),
  "banknote|burundi|1000 франк|2019": banknoteImageSet("/images/banknotes/burundi/burundi-1000-francs-2019"),
  "banknote|azerbaijan|1 манат|2020": banknoteImageSet("/images/banknotes/azerbaijan/azerbaijan-1-manat-2020"),
  "banknote|afghanistan|1000 афгани|—": banknoteImageSet("/images/banknotes/afghanistan/afghanistan-1000-afghanis"),
  "banknote|angola|10 кванза|—": banknoteImageSet("/images/banknotes/angola/angola-10-kwanzas"),
  "banknote|azerbaijan|1 манат|2017": banknoteImageSet("/images/banknotes/azerbaijan/azerbaijan-1-manat-2017"),
  "banknote|azerbaijan|10 манат|2021": banknoteImageSet("/images/banknotes/azerbaijan/azerbaijan-10-manat-2021"),
  "banknote|bahamas|1/2 доллар|2019": banknoteImageSet("/images/banknotes/bahamas/bahamas-1-2-dollar-2019"),
  "banknote|bangladesh|2 така|—": banknoteImageSet("/images/banknotes/bangladesh/bangladesh-2-taka"),
  "banknote|barbados|2 доллар|—": banknoteImageSet("/images/banknotes/barbados/barbados-2-dollar"),
  "banknote|bhutan|5 нгултрум|—": banknoteImageSet("/images/banknotes/bhutan/bhutan-5-ngultrum"),
  "banknote|bosniaAndHerzegovina|50 динара|—": banknoteImageSet("/images/banknotes/bosnia-and-herzegovina/bosnia-and-herzegovina-50-dinars"),
  "banknote|brunei|1 ринггит / доллар|2013": banknoteImageSet("/images/banknotes/brunei/brunei-1-ringgit-dollar-2013"),
  "banknote|bulgaria|20 лева|1991": banknoteImageSet("/images/banknotes/bulgaria/bulgaria-20-leva-1991"),
  "banknote|cambodia|500 риель|—": banknoteImageSet("/images/banknotes/cambodia/cambodia-500-riel"),
  "banknote|china|10 фынь|—": banknoteImageSet("/images/banknotes/china/china-10-fen"),
  "banknote|china|10 юань|—": banknoteImageSet("/images/banknotes/china/china-10-yuan"),
  "banknote|china|5 дзяо|—": banknoteImageSet("/images/banknotes/china/china-5-jiao"),
  "banknote|congo|50 франков|—": banknoteImageSet("/images/banknotes/congo/congo-50-francs"),
  "banknote|croatia|100 000 динар|—": banknoteImageSet("/images/banknotes/croatia/croatia-100-000-dinars"),
  "banknote|cuba|1 песо|—": banknoteImageSet("/images/banknotes/cuba/cuba-1-pesos"),
  "banknote|cuba|3 песо Че Гевара|—": banknoteImageSet("/images/banknotes/cuba/cuba-3-pesos-che-guevara"),
  "banknote|djibouti|40 франк|—": banknoteImageSet("/images/banknotes/djibouti/djibouti-40-francs"),
  "banknote|dominica|50 песо|2023": banknoteImageSet("/images/banknotes/dominica/dominica-50-pesos-2023"),
  "banknote|egypt|50 пиастр|—": banknoteImageSet("/images/banknotes/egypt/egypt-50-piastre"),
  "banknote|eritrea|10 накфа|1997": banknoteImageSet("/images/banknotes/eritrea/eritrea-10-nakfa-1997"),
  "banknote|eswatini|10 эмалангені|2015": banknoteImageSet("/images/banknotes/eswatini/eswatini-10-emalangeni-2015"),
  "banknote|ethiopia|10 быр|—": banknoteImageSet("/images/banknotes/ethiopia/ethiopia-10-birr"),
  "banknote|gambia|5 даласи|—": banknoteImageSet("/images/banknotes/gambia/gambia-5-dalasi"),
  "banknote|georgia|10 лари|—": banknoteImageSet("/images/banknotes/georgia/georgia-10-lari"),
  "banknote|ghana|20 седи|—": banknoteImageSet("/images/banknotes/ghana/ghana-20-sedi"),
  "banknote|greece|200 драхма|1996": banknoteImageSet("/images/banknotes/greece/greece-200-drachmas-1996"),
  "banknote|guatemala|1 кетсаль|—": banknoteImageSet("/images/banknotes/guatemala/guatemala-1-quetzal"),
  "banknote|guineaBissau|50 песо|—": banknoteImageSet("/images/banknotes/guinea-bissau/guinea-bissau-50-pesos"),
  "banknote|guinea|100 цент|—": banknoteImageSet("/images/banknotes/guinea/guinea-100-tsent"),
  "banknote|haiti|10 гурд|—": banknoteImageSet("/images/banknotes/haiti/haiti-10-gourdes"),
  "banknote|honduras|1 лемпира|—": banknoteImageSet("/images/banknotes/honduras/honduras-1-lempira"),
  "banknote|india|1 рупия|—": banknoteImageSet("/images/banknotes/india/india-1-rupees"),
  "banknote|india|50 рупия|—": banknoteImageSet("/images/banknotes/india/india-50-rupees"),
  "banknote|indonesia|1000 рупия|—": banknoteImageSet("/images/banknotes/indonesia/indonesia-1000-rupees"),
  "banknote|iran|1 туман / 10 тыс. риал|—": banknoteImageSet("/images/banknotes/iran/iran-1-tuman-10-thousand-rial"),
  "banknote|iran|2 туман / 20 тыс. риал|—": banknoteImageSet("/images/banknotes/iran/iran-2-tuman-20-thousand-rial"),
  "banknote|iran|20 риал|1974": banknoteImageSet("/images/banknotes/iran/iran-20-rial-1974"),
  "banknote|iraq|25 динар Саддам Хусейн|—": banknoteImageSet("/images/banknotes/iraq/iraq-25-dinars-saddam-hussein"),
  "banknote|iraq|25 динар|—": banknoteImageSet("/images/banknotes/iraq/iraq-25-dinars"),
  "banknote|italy|1000 лира|1990": banknoteImageSet("/images/banknotes/italy/italy-1000-lira-1990"),
  "banknote|jamaica|50 доллар|2022": banknoteImageSet("/images/banknotes/jamaica/jamaica-50-dollar-2022"),
  "banknote|kazakhstan|1 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1-tenge-1993"),
  "banknote|kazakhstan|1 тиын|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1-tiyn-1993"),
  "banknote|kazakhstan|10 000 тенге Назарбаев / 25-летие Казахстана|2016": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-000-tenge-nazarbayev-25-years-kazakhstan-2016"),
  "banknote|kazakhstan|10 000 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-000-tenge-2006"),
  "banknote|kazakhstan|10 000 тенге|2012": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-000-tenge-2012"),
  "banknote|kazakhstan|10 000 тенге|2024": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-000-tenge-2024"),
  "banknote|kazakhstan|10 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-tenge-1993"),
  "banknote|kazakhstan|10 тиын|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-10-tiyn-1993"),
  "banknote|kazakhstan|100 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-100-tenge-1993"),
  "banknote|kazakhstan|1000 тенге 80-летие Победы ВОВ|2025": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-80-years-victory-wwii-2025"),
  "banknote|kazakhstan|1000 тенге Исламская конференция|2011": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-islamic-conference-2011"),
  "banknote|kazakhstan|1000 тенге Култегин|2013": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-kultegin-2013"),
  "banknote|kazakhstan|1000 тенге ОБСЕ|2010": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-osce-2010"),
  "banknote|kazakhstan|1000 тенге|1994": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-1994"),
  "banknote|kazakhstan|1000 тенге|2000": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-2000"),
  "banknote|kazakhstan|1000 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-2006"),
  "banknote|kazakhstan|1000 тенге|2014": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-2014"),
  "banknote|kazakhstan|1000 тенге|2024": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-1000-tenge-2024"),
  "banknote|kazakhstan|2 тиын|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-2-tiyn-1993"),
  "banknote|kazakhstan|20 000 тенге|2022": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-20-000-tenge-2022"),
  "banknote|kazakhstan|20 тиын|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-20-tiyn-1993"),
  "banknote|kazakhstan|200 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-200-tenge-1993"),
  "banknote|kazakhstan|200 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-200-tenge-2006"),
  "banknote|kazakhstan|2000 тенге|2000": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-2000-tenge-2000"),
  "banknote|kazakhstan|2000 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-2000-tenge-2006"),
  "banknote|kazakhstan|2000 тенге|2012": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-2000-tenge-2012"),
  "banknote|kazakhstan|2000 тенге|2024": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-2000-tenge-2024"),
  "banknote|kazakhstan|3 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-3-tenge-1993"),
  "banknote|kazakhstan|5 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-5-tenge-1993"),
  "banknote|kazakhstan|50 тенге|1993": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-50-tenge-1993"),
  "banknote|kazakhstan|500 тенге|1999": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-500-tenge-1999"),
  "banknote|kazakhstan|500 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-500-tenge-2006"),
  "banknote|kazakhstan|500 тенге|2017": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-500-tenge-2017"),
  "banknote|kazakhstan|5000 тенге|1998": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-5000-tenge-1998"),
  "banknote|kazakhstan|5000 тенге|2006": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-5000-tenge-2006"),
  "banknote|kazakhstan|5000 тенге|2011": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-5000-tenge-2011"),
  "banknote|kazakhstan|5000 тенге|2023": banknoteImageSet("/images/banknotes/kazakhstan/kazakhstan-5000-tenge-2023"),
  "banknote|kenya|10 шиллинг|2019": banknoteImageSet("/images/banknotes/kenya/kenya-10-shillings-2019"),
  "banknote|kyrgyzstan|1 сом|1999": banknoteImageSet("/images/banknotes/kyrgyzstan/kyrgyzstan-1-som-1999"),
  "banknote|kyrgyzstan|5 сом|1999": banknoteImageSet("/images/banknotes/kyrgyzstan/kyrgyzstan-5-som-1999"),
  "banknote|kyrgyzstan|20 сом|2002": banknoteImageSet("/images/banknotes/kyrgyzstan/kyrgyzstan-20-som-2002"),
  "banknote|kyrgyzstan|20 сом|2009": banknoteImageSet("/images/banknotes/kyrgyzstan/kyrgyzstan-20-som-2009"),
  "banknote|kyrgyzstan|50 тиын|—": banknoteImageSet("/images/banknotes/kyrgyzstan/kyrgyzstan-50-tiyn"),
  "banknote|laos|500 кип|—": banknoteImageSet("/images/banknotes/laos/laos-500-kip"),
  "banknote|lebanon|5000 ливр|—": banknoteImageSet("/images/banknotes/lebanon/lebanon-5000-livr"),
  "banknote|lesotho|10 малоти|2021": banknoteImageSet("/images/banknotes/lesotho/lesotho-10-maloti-2021"),
  "banknote|liberia|5 доллар|2016": banknoteImageSet("/images/banknotes/liberia/liberia-5-dollar-2016"),
  "banknote|libya|1 динар|—": banknoteImageSet("/images/banknotes/libya/libya-1-dinars"),
  "banknote|madagascar|200 ариари|—": banknoteImageSet("/images/banknotes/madagascar/madagascar-200-ariary"),
  "banknote|malawi|20 квача|—": banknoteImageSet("/images/banknotes/malawi/malawi-20-kwacha"),
  "banknote|malaysia|1000 ринггит|—": banknoteImageSet("/images/banknotes/malaysia/malaysia-1000-ringgit"),
  "banknote|maldives|5 руфия|2011": banknoteImageSet("/images/banknotes/maldives/maldives-5-rufiyaa-2011"),
  "banknote|mauritania|1000 угия|2014": banknoteImageSet("/images/banknotes/mauritania/mauritania-1000-ouguiya-2014"),
  "banknote|mauritius|25|2021": banknoteImageSet("/images/banknotes/mauritius/mauritius-25-2021"),
  "banknote|mexico|20 песо|2021": banknoteImageSet("/images/banknotes/mexico/mexico-20-pesos-2021"),
  "banknote|moldova|1 лей|—": banknoteImageSet("/images/banknotes/moldova/moldova-1-lei"),
  "banknote|mongolia|100 тугрик|—": banknoteImageSet("/images/banknotes/mongolia/mongolia-100-tugrik"),
  "banknote|mongolia|500 тугрик Чингисхан|—": banknoteImageSet("/images/banknotes/mongolia/mongolia-500-tugrik-chingiskhan"),
  "banknote|mozambique|100 000 метикал|—": banknoteImageSet("/images/banknotes/mozambique/mozambique-100-000-meticals"),
  "banknote|myanmar|20 кьят|—": banknoteImageSet("/images/banknotes/myanmar/myanmar-20-kyat"),
  "banknote|nepal|5 рупи|—": banknoteImageSet("/images/banknotes/nepal/nepal-5-rupees"),
  "banknote|nicaragua|5 кордоба|—": banknoteImageSet("/images/banknotes/nicaragua/nicaragua-5-cordobas"),
  "banknote|nigeria|10 найра|—": banknoteImageSet("/images/banknotes/nigeria/nigeria-10-naira"),
  "banknote|northKorea|100 вона|—": banknoteImageSet("/images/banknotes/north-korea/north-korea-100-won"),
  "banknote|northMacedonia|10 денари|—": banknoteImageSet("/images/banknotes/north-macedonia/north-macedonia-10-denari"),
  "banknote|oman|100 байса|1995": banknoteImageSet("/images/banknotes/oman/oman-100-baisa-1995"),
  "banknote|pakistan|75 рупия|2022": banknoteImageSet("/images/banknotes/pakistan/pakistan-75-rupees-2022"),
  "banknote|philippines|20 писо|2023": banknoteImageSet("/images/banknotes/philippines/philippines-20-piso-2023"),
  "banknote|poland|20 злотых|—": banknoteImageSet("/images/banknotes/poland/poland-20-zlotych"),
  "banknote|qatar|1 риал|—": banknoteImageSet("/images/banknotes/qatar/qatar-1-rial"),
  "banknote|romania|2000 лей|2000": banknoteImageSet("/images/banknotes/romania/romania-2000-lei-2000"),
  "banknote|russia|100 рублей|2022": banknoteImageSet("/images/banknotes/russia/russia-100-rubles-2022"),
  "banknote|russia|5 рублей|1997": banknoteImageSet("/images/banknotes/russia/russia-5-rubles-1997"),
  "banknote|rwanda|500 франк|—": banknoteImageSet("/images/banknotes/rwanda/rwanda-500-francs"),
  "banknote|saoTomeAndPrincipe|10 000 добр|1996": banknoteImageSet("/images/banknotes/sao-tome-and-principe/sao-tome-and-principe-10-000-dobras-1996"),
  "banknote|saudiArabia|1 риал|—": banknoteImageSet("/images/banknotes/saudi-arabia/saudi-arabia-1-rial"),
  "banknote|serbia|10 динар|—": banknoteImageSet("/images/banknotes/serbia/serbia-10-dinars"),
  "banknote|sierraLeone|1 леоне|—": banknoteImageSet("/images/banknotes/sierra-leone/sierra-leone-1-leone"),
  "banknote|singapore|1 доллар|1987": banknoteImageSet("/images/banknotes/singapore/singapore-1-dollar-1987"),
  "banknote|somalia|50 шиллинг|—": banknoteImageSet("/images/banknotes/somalia/somalia-50-shillings"),
  "banknote|somaliland|1000 шиллинг|—": banknoteImageSet("/images/banknotes/somaliland/somaliland-1000-shillings"),
  "banknote|southAfrica|10 ранд|2013": banknoteImageSet("/images/banknotes/south-africa/south-africa-10-rand-2013"),
  "banknote|southKorea|1000 вона|—": banknoteImageSet("/images/banknotes/south-korea/south-korea-1000-won"),
  "banknote|southKorea|5000 вона|—": banknoteImageSet("/images/banknotes/south-korea/south-korea-5000-won"),
  "banknote|southSudan|1 фунт|—": banknoteImageSet("/images/banknotes/south-sudan/south-sudan-1-pounds"),
  "banknote|sriLanka|20 рупии|—": banknoteImageSet("/images/banknotes/sri-lanka/sri-lanka-20-rupees"),
  "banknote|sudan|10 фунт|2017": banknoteImageSet("/images/banknotes/sudan/sudan-10-pounds-2017"),
  "banknote|syria|10 фунт|2025": banknoteImageSet("/images/banknotes/syria/syria-10-pounds-2025"),
  "banknote|syria|100 фунт|2021": banknoteImageSet("/images/banknotes/syria/syria-100-pounds-2021"),
  "banknote|syria|1000 фунт|2013": banknoteImageSet("/images/banknotes/syria/syria-1000-pounds-2013"),
  "banknote|syria|200 фунт|2021": banknoteImageSet("/images/banknotes/syria/syria-200-pounds-2021"),
  "banknote|syria|25 фунт|2021": banknoteImageSet("/images/banknotes/syria/syria-25-pounds-2021"),
  "banknote|syria|50 фунт|2021": banknoteImageSet("/images/banknotes/syria/syria-50-pounds-2021"),
  "banknote|syria|500 фунт|2013": banknoteImageSet("/images/banknotes/syria/syria-500-pounds-2013"),
  "banknote|tajikistan|3 сомони|2010": banknoteImageSet("/images/banknotes/tajikistan/tajikistan-3-somoni-2010"),
  "banknote|tanzania|500 шиллингов|2010": banknoteImageSet("/images/banknotes/tanzania/tanzania-500-shillings-2010"),
  "banknote|thailand|100 бат|—": banknoteImageSet("/images/banknotes/thailand/thailand-100-baht"),
  "banknote|trinidadAndTobago|1 доллар|—": banknoteImageSet("/images/banknotes/trinidad-and-tobago/trinidad-and-tobago-1-dollar"),
  "banknote|transnistria|1 рубль|—": banknoteImageSet("/images/banknotes/transnistria/transnistria-1-ruble"),
  "banknote|turkey|1 000 000 лира|2002": banknoteImageSet("/images/banknotes/turkey/turkey-1-000-000-lira-2002"),
  "banknote|turkey|10 лира|2009": banknoteImageSet("/images/banknotes/turkey/turkey-10-lira-2009"),
  "banknote|turkey|20 лира|2009": banknoteImageSet("/images/banknotes/turkey/turkey-20-lira-2009"),
  "banknote|turkey|5 лира|2009": banknoteImageSet("/images/banknotes/turkey/turkey-5-lira-2009"),
  "banknote|turkey|500 000 лира|1994": banknoteImageSet("/images/banknotes/turkey/turkey-500-000-lira-1994"),
  "banknote|turkmenistan|1 манат|2009": banknoteImageSet("/images/banknotes/turkmenistan/turkmenistan-1-manat-2009"),
  "banknote|turkmenistan|1000 манат|—": banknoteImageSet("/images/banknotes/turkmenistan/turkmenistan-1000-manat"),
  "banknote|uganda|1000 шиллинг|—": banknoteImageSet("/images/banknotes/uganda/uganda-1000-shillings"),
  "banknote|ukraine|1 гривна|2014": banknoteImageSet("/images/banknotes/ukraine/ukraine-1-hryvnia-2014"),
  "banknote|ukraine|2 гривны|2013": banknoteImageSet("/images/banknotes/ukraine/ukraine-2-hryvnias-2013"),
  "banknote|unitedStates|100 доллар|—": banknoteImageSet("/images/banknotes/united-states/united-states-100-dollar"),
  "banknote|unitedStates|50 доллар|—": banknoteImageSet("/images/banknotes/united-states/united-states-50-dollar"),
  "banknote|uzbekistan|5000 сум|—": banknoteImageSet("/images/banknotes/uzbekistan/uzbekistan-5000-sum"),
  "banknote|vietnam|1000 донг|—": banknoteImageSet("/images/banknotes/vietnam/vietnam-1000-dong"),
  "banknote|yemen|100 риал|2018": banknoteImageSet("/images/banknotes/yemen/yemen-100-rial-2018"),
  "banknote|zambia|100 квача|—": banknoteImageSet("/images/banknotes/zambia/zambia-100-kwacha"),
  "banknote|zimbabwe|100 доллар|2020": banknoteImageSet("/images/banknotes/zimbabwe/zimbabwe-100-dollar-2020"),
};

const moneyItems: MoneyItem[] = moneySeeds.flatMap((seed, seedIndex) =>
  seed.years.map((year, yearIndex) => {
    const category = seed.category ?? "coin";
    const group = seed.group ?? "regular";
    const countryCode = seed.countryKey ? countries[seed.countryKey].code : "";
    const uniqueIndex = `${seedIndex + 1}-${yearIndex + 1}`;
    const locationKey = seed.countryKey ?? seed.historicalEntityKey ?? seed.relatedCountries?.map((country) => country.countryKey).join("-");

    const banknoteImages = category === "banknote" ? banknoteImageOverrides[banknoteOverrideKey(locationKey, seed.nominal, year)] : undefined;
    return {
      id: `${category}-${group}-${locationKey}-${slug(seed.nominal)}-${slug(year)}-${uniqueIndex}`,
      category,
      collectionGroup: group,
      continent: seed.continent,
      coinGroup: seed.coinGroup,
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
      previewImage: banknoteImages?.previewImage ?? seed.previewImage ?? "",
      imageFront: banknoteImages?.imageFront ?? seed.imageFront ?? "",
      imageBack: banknoteImages?.imageBack ?? seed.imageBack ?? "",
      addedAt: "2026-07-10",
      updatedAt: "2026-07-10",
      tags: seed.tags ?? tagsFor(seed),
    } satisfies MoneyItem;
  }),
);

export const collection: CollectionItem[] = [...moneyItems, ...blisterItems];



