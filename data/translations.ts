import type { BlisterTheme, CollectionCategory, CollectionGroup, Continent } from "./collection";

export type Language = "ru" | "kz" | "en";

export type LocalizedText = Record<Language, string>;
export type LocalizedList = Record<Language, string[]>;

export const languages: { code: Language; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
];

export const translations = {
  nav: {
    menu: {
      ru: "Меню",
      kz: "Мәзір",
      en: "Menu",
    },
    about: {
      ru: "О коллекции",
      kz: "Коллекция туралы",
      en: "About",
    },
    coins: {
      ru: "Монеты",
      kz: "Монеталар",
      en: "Coins",
    },
    banknotes: {
      ru: "Банкноты",
      kz: "Банкноттар",
      en: "Banknotes",
    },
    blisters: {
      ru: "Блистеры",
      kz: "Блистерлер",
      en: "Blisters",
    },
    facts: {
      ru: "Интересные факты",
      kz: "Қызықты деректер",
      en: "Interesting Facts",
    },
    contacts: {
      ru: "Контакты",
      kz: "Байланыс",
      en: "Contacts",
    },
  },
  hero: {
    badge: {
      ru: "Личный онлайн-музей монет и купюр",
      kz: "Монеталар мен банкноттардың жеке онлайн-музейі",
      en: "Personal online museum of coins and banknotes",
    },
    title: {
      ru: "World Money Collection",
      kz: "World Money Collection",
      en: "World Money Collection",
    },
    lead: {
      ru: "World Money Collection — это мой личный цифровой архив монет и купюр из разных стран.",
      kz: "World Money Collection — әртүрлі елдердің монеталары мен банкноттарына арналған менің жеке цифрлық архивім.",
      en: "World Money Collection is my personal digital archive of coins and banknotes from different countries.",
    },
    description: {
      ru: "Здесь каждая находка хранит свою историю: страну, время, символы и детали, которые делают деньги частью культуры.",
      kz: "Мұндағы әрбір жәдігер өз тарихын сақтайды: елін, уақытын, белгілерін және ақшаны мәдениеттің бір бөлігіне айналдыратын бөлшектерін.",
      en: "Each item holds its own story: the country, time, symbols, and details that make money part of culture.",
    },
    cta: {
      ru: "Смотреть коллекцию",
      kz: "Коллекцияны көру",
      en: "View Collection",
    },
  },
  visual: {
    banknote: {
      ru: "Банкнота",
      kz: "Банкнот",
      en: "Banknote",
    },
    collection: {
      ru: "Коллекция",
      kz: "Коллекция",
      en: "Collection",
    },
    note: {
      ru: "Место для будущей банкноты, страны, года выпуска и заметки о находке.",
      kz: "Болашақ банкнот, ел, шығарылған жыл және жәдігер туралы жазба үшін орын.",
      en: "Space for a future banknote, country, year of issue, and item note.",
    },
    country: {
      ru: "Страна",
      kz: "Ел",
      en: "Country",
    },
    year: {
      ru: "Год",
      kz: "Жыл",
      en: "Year",
    },
    nominal: {
      ru: "Номинал",
      kz: "Номинал",
      en: "Nominal",
    },
    curated: {
      ru: "Экспонат",
      kz: "Жәдігер",
      en: "Curated item",
    },
  },
  about: {
    eyebrow: {
      ru: "О коллекции",
      kz: "Коллекция туралы",
      en: "About",
    },
    title: {
      ru: "О моей коллекции",
      kz: "Менің коллекциям туралы",
      en: "About My Collection",
    },
    description: {
      ru: "Я коллекционирую монеты и купюры из разных стран. Для меня это не просто предметы, а часть истории: дизайн, символы, год выпуска, страна и события, которые стоят за каждой денежной единицей.",
      kz: "Мен әртүрлі елдердің монеталары мен банкноттарын жинаймын. Мен үшін бұл жай ғана заттар емес, тарихтың бір бөлігі: дизайны, белгілері, шығарылған жылы, елі және әр ақша бірлігінің артындағы оқиғалар.",
      en: "I collect coins and banknotes from different countries. For me, they are not just objects, but pieces of history: design, symbols, year of issue, country, and the stories behind each monetary item.",
    },
  },
  stats: {
    total: { ru: "Общий итог", kz: "Жалпы қорытынды", en: "Total collection" },
    coinGeography: { ru: "География монет", kz: "Монеталар географиясы", en: "Coin geography" },
    banknoteGeography: { ru: "География банкнот", kz: "Банкноттар географиясы", en: "Banknote geography" },
    coins: { ru: "монет", kz: "монета", en: "coins" },
    banknotes: { ru: "банкнот", kz: "банкнот", en: "banknotes" },
    blisters: { ru: "блистеров", kz: "блистер", en: "blisters" },
    countries: { ru: "стран", kz: "ел", en: "countries" },
    specialTerritories: {
      ru: "особые территории",
      kz: "ерекше аумақ",
      en: "special territories",
    },
    historicalStates: {
      ru: "исторических государств",
      kz: "тарихи мемлекет",
      en: "historical states",
    },
  },
  collection: {
    eyebrow: { ru: "Коллекция", kz: "Коллекция", en: "Collection" },
    title: {
      ru: "Выберите раздел коллекции",
      kz: "Коллекция бөлімін таңдаңыз",
      en: "Choose a Collection Section",
    },
    banknotesTitle: { ru: "Банкноты", kz: "Банкноттар", en: "Banknotes" },
    banknotesDescription: {
      ru: "Бумажные деньги, страны, серии и детали дизайна.",
      kz: "Қағаз ақшалар, елдер, сериялар және дизайн бөлшектері.",
      en: "Paper money, countries, series, and design details.",
    },
    coinsTitle: { ru: "Монеты", kz: "Монеталар", en: "Coins" },
    coinsDescription: {
      ru: "Металлические экземпляры, номиналы, годы выпуска и страны.",
      kz: "Металл үлгілер, номиналдар, шығарылған жылдар және елдер.",
      en: "Metal pieces, denominations, years of issue, and countries.",
    },
    blistersTitle: { ru: "Блистеры", kz: "Блистерлер", en: "Blisters" },
    blistersDescription: {
      ru: "Тематические выпуски и коллекционные наборы.",
      kz: "Тақырыптық шығарылымдар және коллекциялық жинақтар.",
      en: "Thematic releases and collectible sets.",
    },
  },
  catalog: {
    coinsByContinent: {
      ru: "Монеты по континентам",
      kz: "Монеталар континенттер бойынша",
      en: "Coins by Continent",
    },
    banknotesByContinent: {
      ru: "Банкноты по континентам",
      kz: "Банкноттар континенттер бойынша",
      en: "Banknotes by Continent",
    },
    blistersByTheme: {
      ru: "Блистеры по тематикам",
      kz: "Блистерлер тақырыптар бойынша",
      en: "Blisters by Theme",
    },
    banknoteDescription: {
      ru: "Откройте каталог банкнот выбранного региона.",
      kz: "Таңдалған аймақтың банкноттар каталогын ашыңыз.",
      en: "Open the banknote catalog for the selected region.",
    },
    coinDescription: {
      ru: "Откройте каталог монет выбранного региона.",
      kz: "Таңдалған аймақтың монеталар каталогын ашыңыз.",
      en: "Open the coin catalog for the selected region.",
    },
    blisterDescription: {
      ru: "Откройте тематический каталог коллекционных наборов.",
      kz: "Коллекциялық жинақтардың тақырыптық каталогын ашыңыз.",
      en: "Open the themed catalog of collectible sets.",
    },
    catalog: { ru: "Каталог", kz: "Каталог", en: "Catalog" },
    search: { ru: "Поиск", kz: "Іздеу", en: "Search" },
    searchPlaceholder: {
      ru: "Поиск по коллекции",
      kz: "Коллекция бойынша іздеу",
      en: "Search the collection",
    },
    categorySearchPlaceholder: {
      ru: "Найти континент или категорию",
      kz: "Континентті немесе санатты табу",
      en: "Find a continent or category",
    },
    themeSearchPlaceholder: {
      ru: "Найти тему",
      kz: "Тақырыпты табу",
      en: "Find a theme",
    },
    searchResults: {
      ru: "Результаты поиска",
      kz: "Іздеу нәтижелері",
      en: "Search results",
    },
    coinsNotFound: {
      ru: "Монеты не найдены",
      kz: "Монеталар табылмады",
      en: "No coins found",
    },
    banknotesNotFound: {
      ru: "Банкноты не найдены",
      kz: "Банкноттар табылмады",
      en: "No banknotes found",
    },
    blistersNotFound: {
      ru: "Блистеры не найдены",
      kz: "Блистерлер табылмады",
      en: "No blisters found",
    },
    categoriesNotFound: {
      ru: "Категории не найдены",
      kz: "Санаттар табылмады",
      en: "No categories found",
    },
    themesNotFound: {
      ru: "Темы не найдены",
      kz: "Тақырыптар табылмады",
      en: "No themes found",
    },
    sort: { ru: "Сортировка", kz: "Сұрыптау", en: "Sort" },
    alpha: { ru: "По алфавиту", kz: "Әліпби бойынша", en: "Alphabetically" },
    alphaCountry: {
      ru: "По алфавиту страны",
      kz: "Ел бойынша әліпби ретімен",
      en: "By Country Alphabetically",
    },
    newest: { ru: "Сначала новые", kz: "Алдымен жаңалары", en: "Newest First" },
    updated: {
      ru: "Недавно обновлённые",
      kz: "Жақында жаңартылғандар",
      en: "Recently Updated",
    },
    nothingFound: {
      ru: "Ничего не найдено. Попробуйте изменить запрос.",
      kz: "Ештеңе табылмады. Сұрауды өзгертіп көріңіз.",
      en: "Nothing found. Try changing your search.",
    },
    empty: {
      ru: "В этом разделе пока нет добавленных экземпляров.",
      kz: "Бұл бөлімде әзірге қосылған жәдігерлер жоқ.",
      en: "There are no added items in this section yet.",
    },
    emptyHint: {
      ru: "Когда в data/collection.ts появятся предметы с этой категорией, они автоматически отобразятся здесь.",
      kz: "data/collection.ts ішінде осы санаттағы жәдігерлер пайда болғанда, олар осында автоматты түрде көрсетіледі.",
      en: "When items in this category are added to data/collection.ts, they will appear here automatically.",
    },
    banknotesSoon: {
      ru: "Банкноты скоро появятся",
      kz: "Банкноттар жақында қосылады",
      en: "Banknotes coming soon",
    },
    back: {
      ru: "Вернуться к выбору коллекции",
      kz: "Коллекция таңдауға оралу",
      en: "Back to Collection Selection",
    },
    backToCollection: {
      ru: "Назад к коллекции",
      kz: "Коллекцияға қайту",
      en: "Back to collection",
    },
    backToCategories: {
      ru: "Назад к категориям",
      kz: "Санаттарға қайту",
      en: "Back to categories",
    },
    backToCoinList: {
      ru: "Назад к списку монет",
      kz: "Монеталар тізіміне қайту",
      en: "Back to coin list",
    },
    backToBanknoteList: {
      ru: "Назад к списку банкнот",
      kz: "Банкноттар тізіміне қайту",
      en: "Back to banknote list",
    },
    collectionRoot: { ru: "Коллекция", kz: "Коллекция", en: "Collection" },
    photoSoon: { ru: "Фото скоро", kz: "Фото жақында", en: "Photo soon" },
    photoComingSoon: {
      ru: "Фото скоро",
      kz: "Фото жақында",
      en: "Photo coming soon",
    },
    itemDetails: {
      ru: "Детали экземпляра",
      kz: "Экземпляр туралы мәлімет",
      en: "Item details",
    },
    backToCatalog: {
      ru: "Вернуться к каталогу",
      kz: "Каталогқа оралу",
      en: "Back to catalog",
    },
    obverse: { ru: "Аверс", kz: "Аверс", en: "Obverse" },
    reverse: { ru: "Реверс", kz: "Реверс", en: "Reverse" },
    country: { ru: "Страна", kz: "Ел", en: "Country" },
    countries: { ru: "Страны", kz: "Елдер", en: "Countries" },
    historicalState: {
      ru: "Историческое государство",
      kz: "Тарихи мемлекет",
      en: "Historical state",
    },
    nominal: { ru: "Номинал", kz: "Номинал", en: "Nominal" },
    year: { ru: "Год", kz: "Жыл", en: "Year" },
  },
  category: {
    coin: { ru: "Монета", kz: "Монета", en: "Coin" },
    banknote: { ru: "Банкнота", kz: "Банкнот", en: "Banknote" },
    blister: { ru: "Блистер", kz: "Блистер", en: "Blister" },
  } satisfies Record<CollectionCategory, LocalizedText>,
  continent: {
    europe: { ru: "Европа", kz: "Еуропа", en: "Europe" },
    asia: { ru: "Азия", kz: "Азия", en: "Asia" },
    africa: { ru: "Африка", kz: "Африка", en: "Africa" },
    northAmerica: {
      ru: "Северная Америка",
      kz: "Солтүстік Америка",
      en: "North America",
    },
    southAmerica: {
      ru: "Южная Америка",
      kz: "Оңтүстік Америка",
      en: "South America",
    },
    oceania: { ru: "Океания", kz: "Океания", en: "Oceania" },
  } satisfies Record<Continent, LocalizedText>,
  collectionGroup: {
    regular: { ru: "Обычная коллекция", kz: "Негізгі коллекция", en: "Regular Collection" },
    specialTerritories: {
      ru: "Зависимые и особые территории",
      kz: "Тәуелді және ерекше аумақтар",
      en: "Dependent and Special Territories",
    },
    historicalStates: {
      ru: "Исторические государства",
      kz: "Тарихи мемлекеттер",
      en: "Historical States",
    },
  } satisfies Record<CollectionGroup, LocalizedText>,
  coinCatalogTitle: {
    europe: { ru: "Монеты Европы", kz: "Еуропа монеталары", en: "Coins of Europe" },
    asia: { ru: "Монеты Азии", kz: "Азия монеталары", en: "Coins of Asia" },
    africa: { ru: "Монеты Африки", kz: "Африка монеталары", en: "Coins of Africa" },
    northAmerica: {
      ru: "Монеты Северной Америки",
      kz: "Солтүстік Америка монеталары",
      en: "Coins of North America",
    },
    southAmerica: {
      ru: "Монеты Южной Америки",
      kz: "Оңтүстік Америка монеталары",
      en: "Coins of South America",
    },
    oceania: { ru: "Монеты Океании", kz: "Океания монеталары", en: "Coins of Oceania" },
  } satisfies Record<Continent, LocalizedText>,
  banknoteCatalogTitle: {
    europe: { ru: "Банкноты Европы", kz: "Еуропа банкноттары", en: "Banknotes of Europe" },
    asia: { ru: "Банкноты Азии", kz: "Азия банкноттары", en: "Banknotes of Asia" },
    africa: { ru: "Банкноты Африки", kz: "Африка банкноттары", en: "Banknotes of Africa" },
    northAmerica: {
      ru: "Банкноты Северной Америки",
      kz: "Солтүстік Америка банкноттары",
      en: "Banknotes of North America",
    },
    southAmerica: {
      ru: "Банкноты Южной Америки",
      kz: "Оңтүстік Америка банкноттары",
      en: "Banknotes of South America",
    },
    oceania: { ru: "Банкноты Океании", kz: "Океания банкноттары", en: "Banknotes of Oceania" },
  } satisfies Record<Continent, LocalizedText>,
  blisterTheme: {
    "Известные личности": {
      ru: "Известные личности",
      kz: "Танымал тұлғалар",
      en: "Famous People",
    },
    Традиции: { ru: "Традиции", kz: "Дәстүрлер", en: "Traditions" },
    Животные: { ru: "Животные", kz: "Жануарлар", en: "Animals" },
    Спорт: { ru: "Спорт", kz: "Спорт", en: "Sport" },
    "Знаменитые события": {
      ru: "Знаменитые события",
      kz: "Белгілі оқиғалар",
      en: "Famous Events",
    },
    Прочие: { ru: "Прочие", kz: "Басқалар", en: "Other" },
  } satisfies Record<BlisterTheme, LocalizedText>,
  facts: {
    eyebrow: {
      ru: "Интересные факты",
      kz: "Қызықты деректер",
      en: "Interesting Facts",
    },
    title: {
      ru: "Интересные истории о деньгах",
      kz: "Ақша туралы қызықты деректер",
      en: "Interesting Stories About Money",
    },
    cards: [
      {
        ru: "Самые маленькие номиналы часто рассказывают о повседневной жизни страны лучше редких юбилейных выпусков.",
        kz: "Ең кіші номиналдар елдің күнделікті өмірі туралы сирек мерейтойлық шығарылымдарға қарағанда көбірек айта алады.",
        en: "The smallest denominations often tell more about everyday life in a country than rare commemorative issues.",
      },
      {
        ru: "На банкнотах можно встретить скрытые элементы: микротекст, водяные знаки и орнаменты, видимые только под углом.",
        kz: "Банкноттарда жасырын элементтер кездеседі: микромәтін, сутаңбалар және тек белгілі бір бұрыштан көрінетін өрнектер.",
        en: "Banknotes can include hidden details: microtext, watermarks, and ornaments visible only from certain angles.",
      },
      {
        ru: "Монеты из путешествий сохраняют не только стоимость, но и момент: город, маршрут, разговор или случайную находку.",
        kz: "Саяхаттан әкелінген монеталар тек құнын ғана емес, бір сәтті де сақтайды: қаланы, бағытты, әңгімені немесе кездейсоқ табысты.",
        en: "Coins from trips preserve more than value: a city, a route, a conversation, or a lucky find.",
      },
    ] satisfies LocalizedText[],
  },
  contacts: {
    title: { ru: "Контакты", kz: "Байланыс", en: "Contacts" },
    description: {
      ru: "Есть монеты, банкноты или блистеры для обмена? Можно связаться со мной или посмотреть обновления коллекции.",
      kz: "Айырбастауға арналған монеталар, банкноттар немесе блистерлер бар ма? Маған хабарласуға немесе коллекция жаңартуларын көруге болады.",
      en: "Do you have coins, banknotes, or blisters for exchange? You can contact me or follow collection updates.",
    },
  },
};
