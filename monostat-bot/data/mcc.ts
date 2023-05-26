export interface mccObject {
  mcc: string;
  group: {
    type: string;
    description: string;
  };
  shortDescription: string;
  fullDescription: string;
}
export const mccs: Record<string, mccObject> = {
  "1520": {
    mcc: "1520",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Будівництво. Підрядники",
    fullDescription:
      "Генеральні підрядники - житлове та комерційне будівництво",
  },
  "1711": {
    mcc: "1711",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Кондиціонери. Встановлення",
    fullDescription:
      "Генеральні підрядники з вентиляції, теплопостачання та водопроводу",
  },
  "1731": {
    mcc: "1731",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Електрики",
    fullDescription: "Підрядники по електриці",
  },
  "1740": {
    mcc: "1740",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Будівники. Облицювання",
    fullDescription:
      "Ізоляція, мозаїка, штукатурні роботи, кам'яна кладка, облицювання плиткою, кахлем",
  },
  "1750": {
    mcc: "1750",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Столярні роботи",
    fullDescription: "Столярні роботи",
  },
  "1761": {
    mcc: "1761",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Будівники. Облицювання",
    fullDescription:
      "Покрівельні і сайдингові роботи, обробка листового металу",
  },
  "1771": {
    mcc: "1771",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Будівництво. Бетон",
    fullDescription: "Підрядчики бетонних робіт",
  },
  "1799": {
    mcc: "1799",
    group: {
      type: "CS",
      description: "Послуги за контрактом",
    },
    shortDescription: "Спеціалізовані підрядники",
    fullDescription: "Спеціалізовані підрядники",
  },
  "2741": {
    mcc: "2741",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Друкарська справа",
    fullDescription: "Різні видавництва / друкарська справа",
  },
  "2744": {
    mcc: "2744",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Друкарська справа",
    fullDescription: "Різні видавництва / друкарська справа",
  },
  "2791": {
    mcc: "2791",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Набір текстів та друк",
    fullDescription:
      "Набір текстів, виготовлення друкованих форм та пов'язані послуги",
  },
  "2842": {
    mcc: "2842",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Спеціалізоване прибирання",
    fullDescription:
      "Санітарна обробка, полірування і спеціалізована підготовка",
  },
  "3000": {
    mcc: "3000",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Сполучені авіалінії (США)",
  },
  "3001": {
    mcc: "3001",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Американські авіалінії (США)",
  },
  "3002": {
    mcc: "3002",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Панамериканські світові авіалінії (США)",
  },
  "3003": {
    mcc: "3003",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Eurofly",
  },
  "3004": {
    mcc: "3004",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Драгон Ейрлайнз",
  },
  "3005": {
    mcc: "3005",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "British Airways",
  },
  "3006": {
    mcc: "3006",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Японські авіалінії",
  },
  "3007": {
    mcc: "3007",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ер Франс",
  },
  "3008": {
    mcc: "3008",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Люфтганза",
  },
  "3009": {
    mcc: "3009",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Канада",
  },
  "3010": {
    mcc: "3010",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "KLM (Королівські Голландські Авіалінії)",
  },
  "3011": {
    mcc: "3011",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аерофлот - Російські авіалінії",
  },
  "3012": {
    mcc: "3012",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Квантас",
  },
  "3013": {
    mcc: "3013",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аліталія",
  },
  "3014": {
    mcc: "3014",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Саудівської Аравії",
  },
  "3015": {
    mcc: "3015",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Швейцарські Міжнародні авіалінії",
  },
  "3016": {
    mcc: "3016",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Скандинавська система авіаліній",
  },
  "3017": {
    mcc: "3017",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Південноафриканські авіалінії",
  },
  "3018": {
    mcc: "3018",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Varig (Бразилія)",
  },
  "3019": {
    mcc: "3019",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії, авіакомпанії",
  },
  "3020": {
    mcc: "3020",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Індія",
  },
  "3021": {
    mcc: "3021",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Алжир",
  },
  "3022": {
    mcc: "3022",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Філіппінські авіалінії",
  },
  "3023": {
    mcc: "3023",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Мексиканська Авіація",
  },
  "3024": {
    mcc: "3024",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Пакистанські міжнародні авіалінії",
  },
  "3025": {
    mcc: "3025",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Air New Zealand Limited International",
  },
  "3026": {
    mcc: "3026",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Еміратські авіалінії",
  },
  "3027": {
    mcc: "3027",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Союз повітряного транспорту",
  },
  "3028": {
    mcc: "3028",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Мальта",
  },
  "3029": {
    mcc: "3029",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "SN Брюссельські авіалінії",
  },
  "3030": {
    mcc: "3030",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аргентинські авіалінії",
  },
  "3031": {
    mcc: "3031",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Олімпійські авіалінії",
  },
  "3032": {
    mcc: "3032",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ель Аль",
  },
  "3033": {
    mcc: "3033",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ansett Airlines",
  },
  "3034": {
    mcc: "3034",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Etihad Airways",
  },
  "3035": {
    mcc: "3035",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Tap (Португалія)",
  },
  "3036": {
    mcc: "3036",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "VASP (Бразилія)",
  },
  "3037": {
    mcc: "3037",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "EgyptAir",
  },
  "3038": {
    mcc: "3038",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Kuwait Airways",
  },
  "3039": {
    mcc: "3039",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Avianca",
  },
  "3040": {
    mcc: "3040",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Gulf Air (Бахрейн)",
  },
  "3041": {
    mcc: "3041",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Балкано-Болгарські авіалінії",
  },
  "3042": {
    mcc: "3042",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Finnair",
  },
  "3043": {
    mcc: "3043",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Aer Lingus (Ірландія)",
  },
  "3044": {
    mcc: "3044",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Ланка",
  },
  "3045": {
    mcc: "3045",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Нігерійські авіалінії",
  },
  "3046": {
    mcc: "3046",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Cruzeiro do Sul (Brazil)",
  },
  "3047": {
    mcc: "3047",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Турецькі авіалінії",
  },
  "3048": {
    mcc: "3048",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Royal Air Maroc",
  },
  "3049": {
    mcc: "3049",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Туніс Ейр",
  },
  "3050": {
    mcc: "3050",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Icelandair",
  },
  "3051": {
    mcc: "3051",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Австрійські авіалінії",
  },
  "3052": {
    mcc: "3052",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії LATAM Chile Airlines",
  },
  "3053": {
    mcc: "3053",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "AVIACO (Іспанія)",
  },
  "3054": {
    mcc: "3054",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "LADECO (Чилі)",
  },
  "3055": {
    mcc: "3055",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "LAB (Болівія)",
  },
  "3056": {
    mcc: "3056",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Реактивні авіалінії (Індія)",
  },
  "3057": {
    mcc: "3057",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Virgin America",
  },
  "3058": {
    mcc: "3058",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Дельта Ейрлайнз",
  },
  "3059": {
    mcc: "3059",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "DBA Ейрлайнз",
  },
  "3060": {
    mcc: "3060",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Північно-Західні авіалінії (США)",
  },
  "3061": {
    mcc: "3061",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Континентальні авіалінії",
  },
  "3062": {
    mcc: "3062",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Hapag-Lloyd Express",
  },
  "3063": {
    mcc: "3063",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "U.S. Airways",
  },
  "3064": {
    mcc: "3064",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Adria Airways",
  },
  "3065": {
    mcc: "3065",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Інтер",
  },
  "3066": {
    mcc: "3066",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Південно-західні авіалінії (США)",
  },
  "3067": {
    mcc: "3067",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Vanguard Airlines (США)",
  },
  "3068": {
    mcc: "3068",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Астана",
  },
  "3069": {
    mcc: "3069",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Сан Кантрі Ейрлайнз",
  },
  "3070": {
    mcc: "3070",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Pacific Southwest Airlines",
  },
  "3071": {
    mcc: "3071",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Брітіш Колумбія (Канада)",
  },
  "3072": {
    mcc: "3072",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Себу Пасіфік (Філіппіни)",
  },
  "3073": {
    mcc: "3073",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Каліфорнія",
  },
  "3074": {
    mcc: "3074",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3075": {
    mcc: "3075",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Сінгапурські авіалінії",
  },
  "3076": {
    mcc: "3076",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Aeromexico",
  },
  "3077": {
    mcc: "3077",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Тайські міжнародні авіалінії",
  },
  "3078": {
    mcc: "3078",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Китайські авіалінії",
  },
  "3079": {
    mcc: "3079",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Jetstar Airways (Австралія)",
  },
  "3080": {
    mcc: "3080",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3081": {
    mcc: "3081",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Nordair (Канада)",
  },
  "3082": {
    mcc: "3082",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Корейські авіалінії",
  },
  "3083": {
    mcc: "3083",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Африка",
  },
  "3084": {
    mcc: "3084",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Eva Airways (Тайвань)",
  },
  "3085": {
    mcc: "3085",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Мідвест Експрес Ейрлайнз",
  },
  "3086": {
    mcc: "3086",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Carnival Airlines (США)",
  },
  "3087": {
    mcc: "3087",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Метро Ейрлайнз",
  },
  "3088": {
    mcc: "3088",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Хорватія Ейр",
  },
  "3089": {
    mcc: "3089",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Трансаеро (Росія)",
  },
  "3090": {
    mcc: "3090",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Uni Airways (Тайвань)",
  },
  "3091": {
    mcc: "3091",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3092": {
    mcc: "3092",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Мідвей Ейрлайнз (США)",
  },
  "3093": {
    mcc: "3093",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3094": {
    mcc: "3094",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Замбійські авіалінії",
  },
  "3095": {
    mcc: "3095",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3096": {
    mcc: "3096",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Зімбабве",
  },
  "3097": {
    mcc: "3097",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Spanair",
  },
  "3098": {
    mcc: "3098",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Азіана Ейрлайнз",
  },
  "3099": {
    mcc: "3099",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Cathay Pacific (Гонконг)",
  },
  "3100": {
    mcc: "3100",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Система малайзійських авіаліній",
  },
  "3101": {
    mcc: "3101",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3102": {
    mcc: "3102",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Іберія (Іспанія)",
  },
  "3103": {
    mcc: "3103",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Garuda (Індонезія)",
  },
  "3104": {
    mcc: "3104",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3105": {
    mcc: "3105",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3106": {
    mcc: "3106",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Braathens S.A.F.E. (Норвегія)",
  },
  "3107": {
    mcc: "3107",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3108": {
    mcc: "3108",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3109": {
    mcc: "3109",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3110": {
    mcc: "3110",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3111": {
    mcc: "3111",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "British Midland Airways",
  },
  "3112": {
    mcc: "3112",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Навітряний острів",
  },
  "3113": {
    mcc: "3113",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3114": {
    mcc: "3114",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3115": {
    mcc: "3115",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3116": {
    mcc: "3116",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3117": {
    mcc: "3117",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Венесуельська міжнародна авіація",
  },
  "3118": {
    mcc: "3118",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Міжнародний аеропорт Валлі",
  },
  "3119": {
    mcc: "3119",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3120": {
    mcc: "3120",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3121": {
    mcc: "3121",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3122": {
    mcc: "3122",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3123": {
    mcc: "3123",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3124": {
    mcc: "3124",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3125": {
    mcc: "3125",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Tan Airlines",
  },
  "3126": {
    mcc: "3126",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Talair (Папуа-Нова Гвінея)",
  },
  "3127": {
    mcc: "3127",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "TACA International",
  },
  "3128": {
    mcc: "3128",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3129": {
    mcc: "3129",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Суринам Ейрвейс",
  },
  "3130": {
    mcc: "3130",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Sunworld International Airways",
  },
  "3131": {
    mcc: "3131",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "VLM Airlines (Бельгія)",
  },
  "3132": {
    mcc: "3132",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Фронтир Ейрлайнз",
  },
  "3133": {
    mcc: "3133",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Санбелт Ейрлайнз",
  },
  "3134": {
    mcc: "3134",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3135": {
    mcc: "3135",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Суданські авіалінії",
  },
  "3136": {
    mcc: "3136",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Катару",
  },
  "3137": {
    mcc: "3137",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Singleton",
  },
  "3138": {
    mcc: "3138",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Сіммонс Ейрлайнз (США)",
  },
  "3139": {
    mcc: "3139",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3140": {
    mcc: "3140",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3141": {
    mcc: "3141",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3142": {
    mcc: "3142",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3143": {
    mcc: "3143",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Мальовничі авіалінії (США)",
  },
  "3144": {
    mcc: "3144",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Virgin Atlantic (США)",
  },
  "3145": {
    mcc: "3145",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Сан-Хуана",
  },
  "3146": {
    mcc: "3146",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Luxair (Люксембург)",
  },
  "3147": {
    mcc: "3147",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3148": {
    mcc: "3148",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Літораль (Франція)",
  },
  "3149": {
    mcc: "3149",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3150": {
    mcc: "3150",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3151": {
    mcc: "3151",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Заїр",
  },
  "3152": {
    mcc: "3152",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3153": {
    mcc: "3153",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3154": {
    mcc: "3154",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Принсвілл",
  },
  "3155": {
    mcc: "3155",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3156": {
    mcc: "3156",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінія GO FLY",
  },
  "3157": {
    mcc: "3157",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3158": {
    mcc: "3158",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3159": {
    mcc: "3159",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Провінстаун-Бостон Ейрвейс",
  },
  "3160": {
    mcc: "3160",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3161": {
    mcc: "3161",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "All Nippon Airways (Японія)",
  },
  "3162": {
    mcc: "3162",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3163": {
    mcc: "3163",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3164": {
    mcc: "3164",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Norontair (Канада)",
  },
  "3165": {
    mcc: "3165",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3166": {
    mcc: "3166",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3167": {
    mcc: "3167",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аеро Континент (Перу)",
  },
  "3168": {
    mcc: "3168",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3169": {
    mcc: "3169",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3170": {
    mcc: "3170",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Гора Кука",
  },
  "3171": {
    mcc: "3171",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Канадські авіалінії",
  },
  "3172": {
    mcc: "3172",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Національні авіалінії (США)",
  },
  "3173": {
    mcc: "3173",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3174": {
    mcc: "3174",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "JetBlue Airways (США)",
  },
  "3175": {
    mcc: "3175",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Мідл Іст Ейр (Ліван)",
  },
  "3176": {
    mcc: "3176",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Metroflight airlines (США)",
  },
  "3177": {
    mcc: "3177",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "AirTran Airways (США)",
  },
  "3178": {
    mcc: "3178",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Меса Ейр (США)",
  },
  "3179": {
    mcc: "3179",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3180": {
    mcc: "3180",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Westjet (Канада)",
  },
  "3181": {
    mcc: "3181",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Малєв Угорські Авіалінії",
  },
  "3182": {
    mcc: "3182",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Польські авіалінії LOT",
  },
  "3183": {
    mcc: "3183",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіаційні служби Оману",
  },
  "3184": {
    mcc: "3184",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "LIAT (Антигуа и Барбуда)",
  },
  "3185": {
    mcc: "3185",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "LAV (Венесуела)",
  },
  "3186": {
    mcc: "3186",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "LAP (Парагвай)",
  },
  "3187": {
    mcc: "3187",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Avianca Costa Rica",
  },
  "3188": {
    mcc: "3188",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Virgin Express (Бельгія)",
  },
  "3189": {
    mcc: "3189",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3190": {
    mcc: "3190",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Югослав Ейр (Сербія)",
  },
  "3191": {
    mcc: "3191",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Острівні авіалінії (США)",
  },
  "3192": {
    mcc: "3192",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Іран Ейр",
  },
  "3193": {
    mcc: "3193",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Індійські авіалінії",
  },
  "3194": {
    mcc: "3194",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3195": {
    mcc: "3195",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3196": {
    mcc: "3196",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Гавайські авіалінії",
  },
  "3197": {
    mcc: "3197",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Лейк-Гавасу-Сіті",
  },
  "3198": {
    mcc: "3198",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3199": {
    mcc: "3199",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Військові авіаційні служби",
  },
  "3200": {
    mcc: "3200",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Гайанські авіалінії",
  },
  "3201": {
    mcc: "3201",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3202": {
    mcc: "3202",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3203": {
    mcc: "3203",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Голден Пасифік Ейрлайнз (США)",
  },
  "3204": {
    mcc: "3204",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: 'Експрес "Вільні авіалінії" (Кенія)',
  },
  "3205": {
    mcc: "3205",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3206": {
    mcc: "3206",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Китайські східні авіалінії",
  },
  "3207": {
    mcc: "3207",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3208": {
    mcc: "3208",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3209": {
    mcc: "3209",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3210": {
    mcc: "3210",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3211": {
    mcc: "3211",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Норвезький повітряний шаттл",
  },
  "3212": {
    mcc: "3212",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Домініканська авіація",
  },
  "3213": {
    mcc: "3213",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Braathens Regional Airlines (Швеція)",
  },
  "3214": {
    mcc: "3214",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3215": {
    mcc: "3215",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Дан-Ейр (Великобританія)",
  },
  "3216": {
    mcc: "3216",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Великий регіональний аеропорт Камберленда",
  },
  "3217": {
    mcc: "3217",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "CSA Чехословацькі авіалінії",
  },
  "3218": {
    mcc: "3218",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Crown Airways (США)",
  },
  "3219": {
    mcc: "3219",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Панамська авіаційна компанія",
  },
  "3220": {
    mcc: "3220",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Компанія Faucett (Перу)",
  },
  "3221": {
    mcc: "3221",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Еквадорський військовий повітряний транспорт",
  },
  "3222": {
    mcc: "3222",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Command Airways (США)",
  },
  "3223": {
    mcc: "3223",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Comair (Південна Африка)",
  },
  "3224": {
    mcc: "3224",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3225": {
    mcc: "3225",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3226": {
    mcc: "3226",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Skyways Express (Швеція)",
  },
  "3227": {
    mcc: "3227",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3228": {
    mcc: "3228",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Кайман Ейрвейз",
  },
  "3229": {
    mcc: "3229",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Еквадорське товариство повітряного транспорту",
  },
  "3230": {
    mcc: "3230",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3231": {
    mcc: "3231",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аеросервіс Гондурасу",
  },
  "3232": {
    mcc: "3232",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3233": {
    mcc: "3233",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Капітол Ейр",
  },
  "3234": {
    mcc: "3234",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Карибські авіалінії / Вест-Індські авіалінії",
  },
  "3235": {
    mcc: "3235",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Броквей Ейр",
  },
  "3236": {
    mcc: "3236",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Арабія Ейрлайнз (Об'єднані Арабські Емірати)",
  },
  "3237": {
    mcc: "3237",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3238": {
    mcc: "3238",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Беміджі Ейрлайнз (США)",
  },
  "3239": {
    mcc: "3239",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Бар-Харбор Ейрлайнз (США)",
  },
  "3240": {
    mcc: "3240",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Bahamasair (Багамські острови)",
  },
  "3241": {
    mcc: "3241",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіанка (Гватемала)",
  },
  "3242": {
    mcc: "3242",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авенса (Венесуела)",
  },
  "3243": {
    mcc: "3243",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Австрійські авіалінії",
  },
  "3244": {
    mcc: "3244",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3245": {
    mcc: "3245",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "EasyJet (Великобританія)",
  },
  "3246": {
    mcc: "3246",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ryanair",
  },
  "3247": {
    mcc: "3247",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Гол Ейрлайнз (Бразилія)",
  },
  "3248": {
    mcc: "3248",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Тем Ейрлайнз (Бразилія)",
  },
  "3249": {
    mcc: "3249",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3250": {
    mcc: "3250",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3251": {
    mcc: "3251",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Алоха Ейрлайнз (США)",
  },
  "3252": {
    mcc: "3252",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "ALM Антильські авіалінії",
  },
  "3253": {
    mcc: "3253",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Західноамериканські авіалінії",
  },
  "3254": {
    mcc: "3254",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Трампа",
  },
  "3255": {
    mcc: "3255",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3256": {
    mcc: "3256",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії Аляски",
  },
  "3257": {
    mcc: "3257",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3258": {
    mcc: "3258",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3259": {
    mcc: "3259",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Американ Транс Ейр",
  },
  "3260": {
    mcc: "3260",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Спіріт Ейрлайнз (США)",
  },
  "3261": {
    mcc: "3261",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Чайна",
  },
  "3262": {
    mcc: "3262",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Reno Air, Inc. / Американські авіалінії",
  },
  "3263": {
    mcc: "3263",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Aserca Airlines / Aero Servicio Carabobo (Венесуела)",
  },
  "3264": {
    mcc: "3264",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3265": {
    mcc: "3265",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3266": {
    mcc: "3266",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Сейшели",
  },
  "3267": {
    mcc: "3267",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Панама Інтернешнл",
  },
  "3268": {
    mcc: "3268",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3269": {
    mcc: "3269",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3270": {
    mcc: "3270",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3271": {
    mcc: "3271",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3272": {
    mcc: "3272",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3273": {
    mcc: "3273",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3274": {
    mcc: "3274",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3275": {
    mcc: "3275",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3276": {
    mcc: "3276",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3277": {
    mcc: "3277",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3278": {
    mcc: "3278",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3279": {
    mcc: "3279",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3280": {
    mcc: "3280",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Ямайка",
  },
  "3281": {
    mcc: "3281",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Джибуті",
  },
  "3282": {
    mcc: "3282",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Джибуті",
  },
  "3283": {
    mcc: "3283",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3284": {
    mcc: "3284",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аеро Вірґінські Острови",
  },
  "3285": {
    mcc: "3285",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аеро Перу",
  },
  "3286": {
    mcc: "3286",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Аеро Нікарагуенс",
  },
  "3287": {
    mcc: "3287",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Aero Coach Aviation",
  },
  "3288": {
    mcc: "3288",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3289": {
    mcc: "3289",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3290": {
    mcc: "3290",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії",
  },
  "3291": {
    mcc: "3291",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: '"Аріана" Афганські авіалінії',
  },
  "3292": {
    mcc: "3292",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Кіпрські авіалінії",
  },
  "3293": {
    mcc: "3293",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Еквадорська авіація",
  },
  "3294": {
    mcc: "3294",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ефіопські авіалінії",
  },
  "3295": {
    mcc: "3295",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Кенія Ейрвейз",
  },
  "3296": {
    mcc: "3296",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Берлін",
  },
  "3297": {
    mcc: "3297",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "TAROM / Повітряний транспорт Румунії",
  },
  "3298": {
    mcc: "3298",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Ейр Маврикій",
  },
  "3299": {
    mcc: "3299",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Wideroes Flyveselskap (Норвеґія)",
  },
  "3300": {
    mcc: "3300",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Азул Ейрлайнз (Бразилія)",
  },
  "3301": {
    mcc: "3301",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Візз Ейр (Угорщина)",
  },
  "3302": {
    mcc: "3302",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Флайбі Ейр (Великобританія)",
  },
  "3351": {
    mcc: "3351",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Афілійований прокат автомобілів",
  },
  "3352": {
    mcc: "3352",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "American Intl"',
  },
  "3353": {
    mcc: "3353",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Брукс Прокат автомобілів",
  },
  "3354": {
    mcc: "3354",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Екшн Автопрокат",
  },
  "3355": {
    mcc: "3355",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3356": {
    mcc: "3356",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3357": {
    mcc: "3357",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Прокат автомобілів, компанія "Hertz"',
  },
  "3358": {
    mcc: "3358",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3359": {
    mcc: "3359",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Прокат автомобілів, компанія "Payless Car"',
  },
  "3360": {
    mcc: "3360",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Прокат автомобілів, компанія "Snappy"',
  },
  "3361": {
    mcc: "3361",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Оренда автомобілів в аеропортах",
  },
  "3362": {
    mcc: "3362",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Altra"',
  },
  "3363": {
    mcc: "3363",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3364": {
    mcc: "3364",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Агентство "Rent-a-car"',
  },
  "3365": {
    mcc: "3365",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3366": {
    mcc: "3366",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Бюджет"',
  },
  "3367": {
    mcc: "3367",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3368": {
    mcc: "3368",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Rent-a-wreck" (для свят)',
  },
  "3369": {
    mcc: "3369",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3370": {
    mcc: "3370",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Компанія "Rent-a-wreck"',
  },
  "3371": {
    mcc: "3371",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3372": {
    mcc: "3372",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3373": {
    mcc: "3373",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3374": {
    mcc: "3374",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3375": {
    mcc: "3375",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3376": {
    mcc: "3376",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Ajax"',
  },
  "3377": {
    mcc: "3377",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3378": {
    mcc: "3378",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3379": {
    mcc: "3379",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3380": {
    mcc: "3380",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3381": {
    mcc: "3381",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Europ Car"',
  },
  "3382": {
    mcc: "3382",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3383": {
    mcc: "3383",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3384": {
    mcc: "3384",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3385": {
    mcc: "3385",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Tropical Rent-a-car"',
  },
  "3386": {
    mcc: "3386",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Showcase Rental Cars"',
  },
  "3387": {
    mcc: "3387",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Alamo Rent-a-car"',
  },
  "3388": {
    mcc: "3388",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3389": {
    mcc: "3389",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Avis"',
  },
  "3390": {
    mcc: "3390",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Dollar"',
  },
  "3391": {
    mcc: "3391",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Europe By Car"',
  },
  "3392": {
    mcc: "3392",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3393": {
    mcc: "3393",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "National Car Rental"',
  },
  "3394": {
    mcc: "3394",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Kemwell Group"',
  },
  "3395": {
    mcc: "3395",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Thrifty"',
  },
  "3396": {
    mcc: "3396",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Tilden"',
  },
  "3397": {
    mcc: "3397",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3398": {
    mcc: "3398",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Econo-car"',
  },
  "3399": {
    mcc: "3399",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Amerex"',
  },
  "3400": {
    mcc: "3400",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Auto Host Cost Car Rentals",
  },
  "3401": {
    mcc: "3401",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3402": {
    mcc: "3402",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3403": {
    mcc: "3403",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3404": {
    mcc: "3404",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3405": {
    mcc: "3405",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Enterprise"',
  },
  "3406": {
    mcc: "3406",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3407": {
    mcc: "3407",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3408": {
    mcc: "3408",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3409": {
    mcc: "3409",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "General Rent-a-car"',
  },
  "3410": {
    mcc: "3410",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3411": {
    mcc: "3411",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3412": {
    mcc: "3412",
    group: {
      type: "CR",
      description: 'Оренда автомобілів, компанія "A-1"',
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3413": {
    mcc: "3413",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3414": {
    mcc: "3414",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Godfrey Natl"',
  },
  "3415": {
    mcc: "3415",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3416": {
    mcc: "3416",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3417": {
    mcc: "3417",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3418": {
    mcc: "3418",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3419": {
    mcc: "3419",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Alpha"',
  },
  "3420": {
    mcc: "3420",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Ansa"',
  },
  "3421": {
    mcc: "3421",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Allstae"',
  },
  "3422": {
    mcc: "3422",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3423": {
    mcc: "3423",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Avcar"',
  },
  "3424": {
    mcc: "3424",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3425": {
    mcc: "3425",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Automate"',
  },
  "3426": {
    mcc: "3426",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3427": {
    mcc: "3427",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Avon"',
  },
  "3428": {
    mcc: "3428",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Carey"',
  },
  "3429": {
    mcc: "3429",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Insurance"',
  },
  "3430": {
    mcc: "3430",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Major"',
  },
  "3431": {
    mcc: "3431",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Replacement"',
  },
  "3432": {
    mcc: "3432",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Reserve"',
  },
  "3433": {
    mcc: "3433",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Ugly Duckling"',
  },
  "3434": {
    mcc: "3434",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "USA Rent-a-car"',
  },
  "3435": {
    mcc: "3435",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Value Rent-a-car"',
  },
  "3436": {
    mcc: "3436",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Autohansa"',
  },
  "3437": {
    mcc: "3437",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Cite Rent-a-car"',
  },
  "3438": {
    mcc: "3438",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Interent"',
  },
  "3439": {
    mcc: "3439",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Milleville"',
  },
  "3440": {
    mcc: "3440",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: 'Оренда автомобілів, компанія "Via Route Rent-a-Car"',
  },
  "3441": {
    mcc: "3441",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "3501": {
    mcc: "3501",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Holiday"',
  },
  "3502": {
    mcc: "3502",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Best Western Hotels & Resorts",
  },
  "3503": {
    mcc: "3503",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Шератон"',
  },
  "3504": {
    mcc: "3504",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Hilton"',
  },
  "3505": {
    mcc: "3505",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Forte"',
  },
  "3506": {
    mcc: "3506",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Golden Tulip"',
  },
  "3507": {
    mcc: "3507",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Friendship"',
  },
  "3508": {
    mcc: "3508",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Quality"',
  },
  "3509": {
    mcc: "3509",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Marriott"',
  },
  "3510": {
    mcc: "3510",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Days"',
  },
  "3511": {
    mcc: "3511",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Arabella"',
  },
  "3512": {
    mcc: "3512",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Inter-continental"',
  },
  "3513": {
    mcc: "3513",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Westin"',
  },
  "3514": {
    mcc: "3514",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "AmeriSuites"',
  },
  "3515": {
    mcc: "3515",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Rodeway"',
  },
  "3516": {
    mcc: "3516",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "La Quinta Motor"',
  },
  "3517": {
    mcc: "3517",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Americana"',
  },
  "3518": {
    mcc: "3518",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sol"',
  },
  "3519": {
    mcc: "3519",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Міжнародні готелі Пульмана",
  },
  "3520": {
    mcc: "3520",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Meridien"',
  },
  "3521": {
    mcc: "3521",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Forte Crest"',
  },
  "3522": {
    mcc: "3522",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Tokyo"',
  },
  "3523": {
    mcc: "3523",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Peninsula"',
  },
  "3524": {
    mcc: "3524",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Welcomgroup"',
  },
  "3525": {
    mcc: "3525",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Dunfey"',
  },
  "3526": {
    mcc: "3526",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Prince"',
  },
  "3527": {
    mcc: "3527",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Downtowner-passport"',
  },
  "3528": {
    mcc: "3528",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Red Lion"',
  },
  "3529": {
    mcc: "3529",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Canadian Pacific"',
  },
  "3530": {
    mcc: "3530",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Renaissance"',
  },
  "3531": {
    mcc: "3531",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Astir"',
  },
  "3532": {
    mcc: "3532",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sun Route"',
  },
  "3533": {
    mcc: "3533",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ibis"',
  },
  "3534": {
    mcc: "3534",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Southern Pacific"',
  },
  "3535": {
    mcc: "3535",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hilton International"',
  },
  "3536": {
    mcc: "3536",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Amfac"',
  },
  "3537": {
    mcc: "3537",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "ANA"',
  },
  "3538": {
    mcc: "3538",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Concorde"',
  },
  "3539": {
    mcc: "3539",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Summerfield Suites"',
  },
  "3540": {
    mcc: "3540",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Iberotel"',
  },
  "3541": {
    mcc: "3541",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Okura"',
  },
  "3542": {
    mcc: "3542",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Royal"',
  },
  "3543": {
    mcc: "3543",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Four Seasons"',
  },
  "3544": {
    mcc: "3544",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ciga"',
  },
  "3545": {
    mcc: "3545",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Shangri-La"',
  },
  "3546": {
    mcc: "3546",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Sierra"',
  },
  "3547": {
    mcc: "3547",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Breakers Resort"',
  },
  "3548": {
    mcc: "3548",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Melia International"',
  },
  "3549": {
    mcc: "3549",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Auberge Des Governeurs"',
  },
  "3550": {
    mcc: "3550",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Regal 8"',
  },
  "3551": {
    mcc: "3551",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Міраж" і казино',
  },
  "3552": {
    mcc: "3552",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Coast"',
  },
  "3553": {
    mcc: "3553",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Park International"',
  },
  "3554": {
    mcc: "3554",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Pinehurst"',
  },
  "3555": {
    mcc: "3555",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Острів скарбів" і казино',
  },
  "3556": {
    mcc: "3556",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Barton Creek"',
  },
  "3557": {
    mcc: "3557",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Manhattan East Suite"',
  },
  "3558": {
    mcc: "3558",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Jolly"',
  },
  "3559": {
    mcc: "3559",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Candleood Suites"',
  },
  "3560": {
    mcc: "3560",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Алладін" і казино',
  },
  "3561": {
    mcc: "3561",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Золотий самородок" і казино',
  },
  "3562": {
    mcc: "3562",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Comfort"',
  },
  "3563": {
    mcc: "3563",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Мотелі "Journey’s End"',
  },
  "3564": {
    mcc: "3564",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Сем Таун" і казино',
  },
  "3565": {
    mcc: "3565",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Relax"',
  },
  "3566": {
    mcc: "3566",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Garden Place"',
  },
  "3567": {
    mcc: "3567",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Soho Grand"',
  },
  "3568": {
    mcc: "3568",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ladbroke"',
  },
  "3569": {
    mcc: "3569",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Tribeca Grand"',
  },
  "3570": {
    mcc: "3570",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Grand Met Forum"',
  },
  "3571": {
    mcc: "3571",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Grand Wailea"',
  },
  "3572": {
    mcc: "3572",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Miyako"',
  },
  "3573": {
    mcc: "3573",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sandman"',
  },
  "3574": {
    mcc: "3574",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Venture"',
  },
  "3575": {
    mcc: "3575",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Vagabond"',
  },
  "3576": {
    mcc: "3576",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "La Quinta"',
  },
  "3577": {
    mcc: "3577",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Mandarin Oriental"',
  },
  "3578": {
    mcc: "3578",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Frankenmuth Bavarian"',
  },
  "3579": {
    mcc: "3579",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Меркурій"',
  },
  "3580": {
    mcc: "3580",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Del Coronado"',
  },
  "3581": {
    mcc: "3581",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Delta"',
  },
  "3582": {
    mcc: "3582",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Каліфорнія" і казино',
  },
  "3583": {
    mcc: "3583",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Radisson Blue"',
  },
  "3584": {
    mcc: "3584",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Міжнародний готель "Принцеса"',
  },
  "3585": {
    mcc: "3585",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі Угорщини",
  },
  "3586": {
    mcc: "3586",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sokos"',
  },
  "3587": {
    mcc: "3587",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі міста Дорал",
  },
  "3588": {
    mcc: "3588",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі Гельмслі",
  },
  "3589": {
    mcc: "3589",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Гольф-курорт Дорал",
  },
  "3590": {
    mcc: "3590",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Fairmont"',
  },
  "3591": {
    mcc: "3591",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sonesta"',
  },
  "3592": {
    mcc: "3592",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Omni"',
  },
  "3593": {
    mcc: "3593",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Cunard"',
  },
  "3594": {
    mcc: "3594",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Arizona Biltmore"',
  },
  "3595": {
    mcc: "3595",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hospitality International"',
  },
  "3596": {
    mcc: "3596",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Wynn Las Vegas"',
  },
  "3597": {
    mcc: "3597",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Ріверсайд" і казино',
  },
  "3598": {
    mcc: "3598",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Regent"',
  },
  "3599": {
    mcc: "3599",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі Паннонії",
  },
  "3600": {
    mcc: "3600",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Saddlebrook"',
  },
  "3601": {
    mcc: "3601",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "TradeWinds Island"',
  },
  "3602": {
    mcc: "3602",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Нью-Йоркський готель "Хадсон"',
  },
  "3603": {
    mcc: "3603",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Noah\'s Ark"',
  },
  "3604": {
    mcc: "3604",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hilton Garden"',
  },
  "3605": {
    mcc: "3605",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Jurys"',
  },
  "3606": {
    mcc: "3606",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Джефферсон"',
  },
  "3607": {
    mcc: "3607",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Fontainebleau"',
  },
  "3608": {
    mcc: "3608",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Gaylord Opryland"',
  },
  "3609": {
    mcc: "3609",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Gaylord Palms"',
  },
  "3610": {
    mcc: "3610",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Gaylord Texan"',
  },
  "3611": {
    mcc: "3611",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "C\'mon"',
  },
  "3612": {
    mcc: "3612",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Movenpick"',
  },
  "3613": {
    mcc: "3613",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Microtel"',
  },
  "3614": {
    mcc: "3614",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "AmericInn"',
  },
  "3615": {
    mcc: "3615",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Travelodge Hotels"',
  },
  "3616": {
    mcc: "3616",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hermitage"',
  },
  "3617": {
    mcc: "3617",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "America’s Best Value Inn",
  },
  "3618": {
    mcc: "3618",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорти "Великий вовк"',
  },
  "3619": {
    mcc: "3619",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Aloft"',
  },
  "3620": {
    mcc: "3620",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Binions Horseshoe Club" і казино',
  },
  "3621": {
    mcc: "3621",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Extended Stay",
  },
  "3622": {
    mcc: "3622",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Merlin" (Перт)',
  },
  "3623": {
    mcc: "3623",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Dorint"',
  },
  "3624": {
    mcc: "3624",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Леді Удача" і казино',
  },
  "3625": {
    mcc: "3625",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Universal"',
  },
  "3626": {
    mcc: "3626",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Принц" / Готелі "Studio Plus"',
  },
  "3627": {
    mcc: "3627",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Extended Stay America",
  },
  "3628": {
    mcc: "3628",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Екскалібур" і казино',
  },
  "3629": {
    mcc: "3629",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Dan"',
  },
  "3630": {
    mcc: "3630",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Extended Stay Deluxe",
  },
  "3631": {
    mcc: "3631",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sleep"',
  },
  "3632": {
    mcc: "3632",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Фінікійський"',
  },
  "3633": {
    mcc: "3633",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Rank"',
  },
  "3634": {
    mcc: "3634",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорти "Swissôtel"',
  },
  "3635": {
    mcc: "3635",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Reso"',
  },
  "3636": {
    mcc: "3636",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sarova"',
  },
  "3637": {
    mcc: "3637",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ramada"',
  },
  "3638": {
    mcc: "3638",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Говард Джонсон"',
  },
  "3639": {
    mcc: "3639",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Mount Charlotte"',
  },
  "3640": {
    mcc: "3640",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hyatt" (Міжнародні)',
  },
  "3641": {
    mcc: "3641",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Sofitel"',
  },
  "3642": {
    mcc: "3642",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Novotel Sieh (Accor)"',
  },
  "3643": {
    mcc: "3643",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Steigenberger"',
  },
  "3644": {
    mcc: "3644",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Econo-Travel Motor"',
  },
  "3645": {
    mcc: "3645",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Queens Moat Houses",
  },
  "3646": {
    mcc: "3646",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Swallow"',
  },
  "3647": {
    mcc: "3647",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "HUSA"',
  },
  "3648": {
    mcc: "3648",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "De Vere"',
  },
  "3649": {
    mcc: "3649",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Radisson"',
  },
  "3650": {
    mcc: "3650",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Red Roof"',
  },
  "3651": {
    mcc: "3651",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Лондонський готель "Імперський"',
  },
  "3652": {
    mcc: "3652",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Embassy" від "Hilton"',
  },
  "3653": {
    mcc: "3653",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Penta"',
  },
  "3654": {
    mcc: "3654",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Loews"',
  },
  "3655": {
    mcc: "3655",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Scandic"',
  },
  "3656": {
    mcc: "3656",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Сара"',
  },
  "3657": {
    mcc: "3657",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Oberoi"',
  },
  "3658": {
    mcc: "3658",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "New Otani"',
  },
  "3659": {
    mcc: "3659",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Taj"',
  },
  "3660": {
    mcc: "3660",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Knights"',
  },
  "3661": {
    mcc: "3661",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Metropole" і СПА',
  },
  "3662": {
    mcc: "3662",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Circus Circus" і казино',
  },
  "3663": {
    mcc: "3663",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "El Presidente"',
  },
  "3664": {
    mcc: "3664",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Flag"',
  },
  "3665": {
    mcc: "3665",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hampton" від "Hilton"',
  },
  "3666": {
    mcc: "3666",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Stakis"',
  },
  "3667": {
    mcc: "3667",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Luxor" і казино',
  },
  "3668": {
    mcc: "3668",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі, курорти "Maritim" і казино',
  },
  "3669": {
    mcc: "3669",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Ельдорадо" і казино',
  },
  "3670": {
    mcc: "3670",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Аркада"',
  },
  "3671": {
    mcc: "3671",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Arctia"',
  },
  "3672": {
    mcc: "3672",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Campanile"',
  },
  "3673": {
    mcc: "3673",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ibusz"',
  },
  "3674": {
    mcc: "3674",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Rantasipi"',
  },
  "3675": {
    mcc: "3675",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Cedok"',
  },
  "3676": {
    mcc: "3676",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Monte Carlo" і казино',
  },
  "3677": {
    mcc: "3677",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Climat De France"',
  },
  "3678": {
    mcc: "3678",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Cumulus"',
  },
  "3679": {
    mcc: "3679",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Срібна спадщина" і казино',
  },
  "3680": {
    mcc: "3680",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Othan"',
  },
  "3681": {
    mcc: "3681",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Adams Mark"',
  },
  "3682": {
    mcc: "3682",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Сахара" і казино',
  },
  "3683": {
    mcc: "3683",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Бредбері"',
  },
  "3684": {
    mcc: "3684",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Budget Host"',
  },
  "3685": {
    mcc: "3685",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Budgetel"',
  },
  "3686": {
    mcc: "3686",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Suisse Chalet"',
  },
  "3687": {
    mcc: "3687",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Clarion"',
  },
  "3688": {
    mcc: "3688",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Compri Hotel Bucks County",
  },
  "3689": {
    mcc: "3689",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Консорт"',
  },
  "3690": {
    mcc: "3690",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Courtyard" від "Marriott"',
  },
  "3691": {
    mcc: "3691",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Dillon"',
  },
  "3692": {
    mcc: "3692",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "DoubleTree" від "Hilton"',
  },
  "3693": {
    mcc: "3693",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Drury Hotels"',
  },
  "3694": {
    mcc: "3694",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Economy Inns Of America"',
  },
  "3695": {
    mcc: "3695",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Embassy" від "Hilton"',
  },
  "3696": {
    mcc: "3696",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Excel Inn"',
  },
  "3697": {
    mcc: "3697",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Fairfield" від "Marriott"',
  },
  "3698": {
    mcc: "3698",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Хартлі"',
  },
  "3699": {
    mcc: "3699",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Мотелі "Midway Motor Lodge"',
  },
  "3700": {
    mcc: "3700",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Мотелі "6"',
  },
  "3701": {
    mcc: "3701",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "La Mansion Del Rio",
  },
  "3702": {
    mcc: "3702",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Реєстр"',
  },
  "3703": {
    mcc: "3703",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Residence Inn" від "Marriott"',
  },
  "3704": {
    mcc: "3704",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Royce"',
  },
  "3705": {
    mcc: "3705",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Sandman"',
  },
  "3706": {
    mcc: "3706",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Shilo"',
  },
  "3707": {
    mcc: "3707",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Shoneys"',
  },
  "3708": {
    mcc: "3708",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Virgin River" і казино',
  },
  "3709": {
    mcc: "3709",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Мотелі "Super 8"',
  },
  "3710": {
    mcc: "3710",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ritz-Carlton"',
  },
  "3711": {
    mcc: "3711",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Flag" (Австралія)',
  },
  "3712": {
    mcc: "3712",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Buffalo Bills" і казино',
  },
  "3713": {
    mcc: "3713",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Quality Pacific"',
  },
  "3714": {
    mcc: "3714",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Four Seasons" (Австралія)',
  },
  "3715": {
    mcc: "3715",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Fairfield"',
  },
  "3716": {
    mcc: "3716",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Carlton"',
  },
  "3717": {
    mcc: "3717",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "City Lodge"',
  },
  "3718": {
    mcc: "3718",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Karos"',
  },
  "3719": {
    mcc: "3719",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Protea" від "Marriott"',
  },
  "3720": {
    mcc: "3720",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Southern Sun"',
  },
  "3721": {
    mcc: "3721",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Conrad"',
  },
  "3722": {
    mcc: "3722",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Wyndham"',
  },
  "3723": {
    mcc: "3723",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Rica"',
  },
  "3724": {
    mcc: "3724",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Inter Nor"',
  },
  "3725": {
    mcc: "3725",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Sea Pines"',
  },
  "3726": {
    mcc: "3726",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Rio"',
  },
  "3727": {
    mcc: "3727",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Broadmoor"',
  },
  "3728": {
    mcc: "3728",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Ballys" і казино',
  },
  "3729": {
    mcc: "3729",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Самородок" і казино',
  },
  "3730": {
    mcc: "3730",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "MGM Grand"',
  },
  "3731": {
    mcc: "3731",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Harrah" і казино',
  },
  "3732": {
    mcc: "3732",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Opryland"',
  },
  "3733": {
    mcc: "3733",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Boca Raton" і клуб',
  },
  "3734": {
    mcc: "3734",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Harvey Bristol"',
  },
  "3735": {
    mcc: "3735",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Masters Economy"',
  },
  "3736": {
    mcc: "3736",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Colorado Belle" і казино',
  },
  "3737": {
    mcc: "3737",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Рів’єра" і казино',
  },
  "3738": {
    mcc: "3738",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Tropicana" і казино',
  },
  "3739": {
    mcc: "3739",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Woodside"',
  },
  "3740": {
    mcc: "3740",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Towneplace"',
  },
  "3741": {
    mcc: "3741",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Millennium Times Square" (Нью-Йорк)',
  },
  "3742": {
    mcc: "3742",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Club Med"',
  },
  "3743": {
    mcc: "3743",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Biltmore" і апартаменти "Biltmore" в Атланті',
  },
  "3744": {
    mcc: "3744",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Carefree"',
  },
  "3745": {
    mcc: "3745",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "St. Regis"',
  },
  "3746": {
    mcc: "3746",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "The Eliot"',
  },
  "3747": {
    mcc: "3747",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Клубна корпорація / Клубні курорти",
  },
  "3748": {
    mcc: "3748",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Wellesley"',
  },
  "3749": {
    mcc: "3749",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі міста Беверлі Хіллс",
  },
  "3750": {
    mcc: "3750",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Crowne Plaza"',
  },
  "3751": {
    mcc: "3751",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Homewood" від "Hilton"',
  },
  "3752": {
    mcc: "3752",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "The Peabody" в місті Мемфіс (США)',
  },
  "3753": {
    mcc: "3753",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Greenbriar"',
  },
  "3754": {
    mcc: "3754",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Плантація "Amelia Island"',
  },
  "3755": {
    mcc: "3755",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі міста Гомстед",
  },
  "3756": {
    mcc: "3756",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "South Seas Island"',
  },
  "3757": {
    mcc: "3757",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Canyon Ranch"',
  },
  "3758": {
    mcc: "3758",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "The Kahala"',
  },
  "3759": {
    mcc: "3759",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Orchid At Mauna Lani"',
  },
  "3760": {
    mcc: "3760",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Halekulani" / Парк Waikiki',
  },
  "3761": {
    mcc: "3761",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Примадонна" і казино',
  },
  "3762": {
    mcc: "3762",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Віскі Піта" і казино',
  },
  "3763": {
    mcc: "3763",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Виноробня та курорт Шато Елан",
  },
  "3764": {
    mcc: "3764",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Beau Rivage" і казино',
  },
  "3765": {
    mcc: "3765",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі, курорти "Bellagio" і казино',
  },
  "3766": {
    mcc: "3766",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Fremont" і казино',
  },
  "3767": {
    mcc: "3767",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі, пивоварня "Main Street Station" і казино',
  },
  "3768": {
    mcc: "3768",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Срібна зірка" і казино',
  },
  "3769": {
    mcc: "3769",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Стратосфера" і казино',
  },
  "3770": {
    mcc: "3770",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Springhill"',
  },
  "3771": {
    mcc: "3771",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Цезар" і казино',
  },
  "3772": {
    mcc: "3772",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Nemacolin Woodlands"',
  },
  "3773": {
    mcc: "3773",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі, курорти "Venetian" і казино',
  },
  "3774": {
    mcc: "3774",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "New York-New York" і казино',
  },
  "3775": {
    mcc: "3775",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Sands"',
  },
  "3776": {
    mcc: "3776",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Nevele Grande" і заміський клуб',
  },
  "3777": {
    mcc: "3777",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Mandalay Bay"',
  },
  "3778": {
    mcc: "3778",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Four Points"',
  },
  "3779": {
    mcc: "3779",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "W"',
  },
  "3780": {
    mcc: "3780",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Діснейленд"',
  },
  "3781": {
    mcc: "3781",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Patricia Grand"',
  },
  "3782": {
    mcc: "3782",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Rosen"',
  },
  "3783": {
    mcc: "3783",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Міський та заміський курорт і конференц-центр",
  },
  "3784": {
    mcc: "3784",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "First Hospitality"',
  },
  "3785": {
    mcc: "3785",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Outrigger"',
  },
  "3786": {
    mcc: "3786",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Ohana" на Гаваях',
  },
  "3787": {
    mcc: "3787",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курортний люкс та вілли "Caribe Royale Orlando"',
  },
  "3788": {
    mcc: "3788",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Ala Moana" від "Mantra"',
  },
  "3789": {
    mcc: "3789",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Smugglers Notch"',
  },
  "3790": {
    mcc: "3790",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Raffles"',
  },
  "3791": {
    mcc: "3791",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Staybridge"',
  },
  "3792": {
    mcc: "3792",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Claridge" і казино',
  },
  "3793": {
    mcc: "3793",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Фламінго"',
  },
  "3794": {
    mcc: "3794",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі, курорти "Grand" і казино',
  },
  "3795": {
    mcc: "3795",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Paris Las Vegas" і казино',
  },
  "3796": {
    mcc: "3796",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Peppermill" і казино',
  },
  "3797": {
    mcc: "3797",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "The Atlantic" і казино',
  },
  "3798": {
    mcc: "3798",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Embassy Vacation"',
  },
  "3799": {
    mcc: "3799",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Hale Koa"',
  },
  "3800": {
    mcc: "3800",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Апартаменти міста Гомстед",
  },
  "3801": {
    mcc: "3801",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Wilderness"',
  },
  "3802": {
    mcc: "3802",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Палац"',
  },
  "3803": {
    mcc: "3803",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Гольф-курорт "Вігвам" і СПА',
  },
  "3804": {
    mcc: "3804",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Заміський клуб "Дипломат" і СПА',
  },
  "3805": {
    mcc: "3805",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "The Atlantic"',
  },
  "3806": {
    mcc: "3806",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Princeville"',
  },
  "3807": {
    mcc: "3807",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Елемент"',
  },
  "3808": {
    mcc: "3808",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курортні готелі "LXR"',
  },
  "3809": {
    mcc: "3809",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Settle"',
  },
  "3810": {
    mcc: "3810",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "La Costa"',
  },
  "3811": {
    mcc: "3811",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Premier Travel"',
  },
  "3812": {
    mcc: "3812",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Hyatt"',
  },
  "3813": {
    mcc: "3813",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Indigo"',
  },
  "3814": {
    mcc: "3814",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Рузвельт" (Нью-Йорк)',
  },
  "3815": {
    mcc: "3815",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Сімейні апартаменти "Nickelodeon" від "Holiday"',
  },
  "3816": {
    mcc: "3816",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Home2" від "Hilton"',
  },
  "3817": {
    mcc: "3817",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Affinia"',
  },
  "3818": {
    mcc: "3818",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Mainstay"',
  },
  "3819": {
    mcc: "3819",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Апартаменти "Oxford"',
  },
  "3820": {
    mcc: "3820",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Jumeirah Essex House"',
  },
  "3821": {
    mcc: "3821",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курортний люкс та вілли "Caribe Royale Orlando"',
  },
  "3822": {
    mcc: "3822",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Crossland"',
  },
  "3823": {
    mcc: "3823",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Grand Sierra"',
  },
  "3824": {
    mcc: "3824",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Aria"',
  },
  "3825": {
    mcc: "3825",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Vdara" і СПА',
  },
  "3826": {
    mcc: "3826",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Steinplatz"',
  },
  "3827": {
    mcc: "3827",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Будинок Гальта" від Wyndham',
  },
  "3828": {
    mcc: "3828",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Космополітен Лас-Вегаса" і казино',
  },
  "3829": {
    mcc: "3829",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Заміський готель від "Carlson"',
  },
  "3830": {
    mcc: "3830",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Park Plaza"',
  },
  "3831": {
    mcc: "3831",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Waldorf Astoria"',
  },
  "3832": {
    mcc: "3832",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Curio" від "Hilton"',
  },
  "3833": {
    mcc: "3833",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Canopy" від "Hilton"',
  },
  "3834": {
    mcc: "3834",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Baymont"',
  },
  "3835": {
    mcc: "3835",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі і курорти "Dolce"',
  },
  "3836": {
    mcc: "3836",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готель "Hawthorn" від Wyndham',
  },
  "3837": {
    mcc: "3837",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Курорт "Hoshino"',
  },
  "3838": {
    mcc: "3838",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: 'Готелі "Kimpton"',
  },
  "3882": {
    mcc: "3882",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Переведення в готівку",
    fullDescription: "Інкасація чека (переведення в готівку)",
  },
  "4011": {
    mcc: "4011",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Залізниця",
    fullDescription: "Залізниці - перевезення вантажів",
  },
  "4111": {
    mcc: "4111",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Пасажирські перевезення",
    fullDescription:
      "Пасажирські перевезення - приміські та місцеві приміські рейси, включаючи пороми",
  },
  "4112": {
    mcc: "4112",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Пасажирські залізничні перевезення",
    fullDescription: "Пасажирські залізничні перевезення",
  },
  "4119": {
    mcc: "4119",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Швидка допомога",
    fullDescription: "Послуги швидкої допомоги",
  },
  "4121": {
    mcc: "4121",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Таксі",
    fullDescription: "Лімузини і таксі",
  },
  "4131": {
    mcc: "4131",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Перевезення. Автобус",
    fullDescription: "Автобусні лінії",
  },
  "4214": {
    mcc: "4214",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Транспортування. Доставка",
    fullDescription:
      "Агентства з автотранспортних перевезень, місцеві / віддалені автовантажоперевезення, компанії по переїзду і зберіганню, місцева доставка",
  },
  "4215": {
    mcc: "4215",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Кур'єрська служба",
    fullDescription:
      "Послуги кур'єра - по повітрю і на землі, агентство по відправці вантажів",
  },
  "4225": {
    mcc: "4225",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Сховище",
    fullDescription:
      "Складське зберігання громадського користування - сільськогосподарські продукти, продукти що охолоджуються, зберігання предметів домашнього вжитку",
  },
  "4304": {
    mcc: "4304",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "4411": {
    mcc: "4411",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Круїзні лінії",
    fullDescription: "Круїзні лінії",
  },
  "4457": {
    mcc: "4457",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Оренда суден",
    fullDescription: "Оренда та лізинг суден",
  },
  "4468": {
    mcc: "4468",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Яхтинговий сервіс",
    fullDescription:
      "Пристані для яхт, їх обслуговування та постачання витратних матеріалів",
  },
  "4511": {
    mcc: "4511",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Авіалінії",
    fullDescription: "Авіалінії, авіакомпанії",
  },
  "4582": {
    mcc: "4582",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Аеропорти",
    fullDescription: "Аеропорти, термінали аеропортів, льотні поля",
  },
  "4722": {
    mcc: "4722",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Туризм",
    fullDescription: "Туристичні агентства та організатори екскурсій",
  },
  "4723": {
    mcc: "4723",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Туроператори",
    fullDescription: "Пакетні туроператори - тільки Німеччина",
  },
  "4729": {
    mcc: "4729",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Транспортні послуги",
    fullDescription: "Послуги пасажирських перевезень",
  },
  "4761": {
    mcc: "4761",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Телемаркетинг",
    fullDescription: "Телемаркетинг туристичних послуг та вітамінів",
  },
  "4784": {
    mcc: "4784",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Платні дороги",
    fullDescription: "Платні дороги і мости",
  },
  "4785": {
    mcc: "4785",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "4789": {
    mcc: "4789",
    group: {
      type: "TS",
      description: "Транспортні послуги",
    },
    shortDescription: "Залізниця",
    fullDescription: "Послуги залізничих перевезень",
  },
  "4812": {
    mcc: "4812",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Телекомунікаційне обладнання",
    fullDescription: "Телекомунікаційне обладнання, включаючи продаж телефонів",
  },
  "4813": {
    mcc: "4813",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Торгові точки з телефонією",
    fullDescription:
      "Торгові точки телеком клавішного введення, що пропонують поодинокі локальні і далекі телефонні дзвінки, використовуючи центральний номер доступу без розмови з оператором і використовуючи код доступу",
  },
  "4814": {
    mcc: "4814",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Мобільний зв'язок",
    fullDescription: "Телекомунікаційні послуги",
  },
  "4815": {
    mcc: "4815",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Телефонні послуги",
    fullDescription: "Телефонні послуги",
  },
  "4816": {
    mcc: "4816",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Інформаційні послуги",
    fullDescription: "Комп'ютерні мережі, інформаційні послуги",
  },
  "4821": {
    mcc: "4821",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Телеграф",
    fullDescription: "Послуги телеграфу",
  },
  "4829": {
    mcc: "4829",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Банківський переказ грошових доручень / Грошові перекази",
  },
  "4899": {
    mcc: "4899",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Телебачення",
    fullDescription: "Кабельні та інші платні телевізійні послуги",
  },
  "4900": {
    mcc: "4900",
    group: {
      type: "US",
      description: "Комунальні послуги",
    },
    shortDescription: "Комунальні послуги",
    fullDescription:
      "Комунальні послуги - електрика, газ, мазут, санітарія, вода",
  },
  "5013": {
    mcc: "5013",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Автозапчастини",
    fullDescription: "Постачання автотранспортних засобів та нові запчастини",
  },
  "5021": {
    mcc: "5021",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Меблі",
    fullDescription: "Офісні та комерційні меблі",
  },
  "5039": {
    mcc: "5039",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Будматеріали",
    fullDescription: "Будівельні матеріали",
  },
  "5044": {
    mcc: "5044",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Офісне приладдя",
    fullDescription:
      "Офісне фотографічне, фотокопіювальне, і мікрофільмуюче обладнання",
  },
  "5045": {
    mcc: "5045",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Комп'ютери та програмне забезпечення",
    fullDescription:
      "Комп'ютери, комп'ютерна периферія, програмне забезпечення",
  },
  "5046": {
    mcc: "5046",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Обладнання",
    fullDescription: "Комерційне обладнання",
  },
  "5047": {
    mcc: "5047",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Медичне обладнання",
    fullDescription:
      "Стоматологічне / лабораторне / медичне / офтальмологічне обладнання та матеріали для лікарень",
  },
  "5051": {
    mcc: "5051",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Обробка металу",
    fullDescription: "Центри і офіси робіт по металу",
  },
  "5065": {
    mcc: "5065",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Електроніка",
    fullDescription: "Електричні частини та обладнання",
  },
  "5072": {
    mcc: "5072",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Апаратура",
    fullDescription:
      "Устаткування і супутні матеріали для технічного забезпечення",
  },
  "5074": {
    mcc: "5074",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Сантехніка",
    fullDescription: "Устаткування для водопроводу і опалювальної системи",
  },
  "5085": {
    mcc: "5085",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Промисловість",
    fullDescription: "Промислове обладнання",
  },
  "5094": {
    mcc: "5094",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Дорогоцінності",
    fullDescription: "Коштовне каміння та метали, годинники і ювелірні вироби",
  },
  "5099": {
    mcc: "5099",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Товари",
    fullDescription: "Товари довготривалого користування",
  },
  "5111": {
    mcc: "5111",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Канцелярія",
    fullDescription:
      "Канцелярія, офісні супутні товари, папір для друкування і листування",
  },
  "5122": {
    mcc: "5122",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Ліки",
    fullDescription: "Ліки, їх розповсюджувачі, аптеки",
  },
  "5131": {
    mcc: "5131",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Галантерея",
    fullDescription: "Штучні товари, галантерея та інші текстильні товари",
  },
  "5137": {
    mcc: "5137",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Одяг",
    fullDescription: "Чоловічий, жіночий і дитячий спецодяг",
  },
  "5139": {
    mcc: "5139",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Взуття",
    fullDescription: "Комерційне взуття",
  },
  "5169": {
    mcc: "5169",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Хімія",
    fullDescription: "Хімікалії і суміжні речовини",
  },
  "5172": {
    mcc: "5172",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Бензин",
    fullDescription: "Нафта і нафтопродукти",
  },
  "5192": {
    mcc: "5192",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Книги. Преса",
    fullDescription: "Книги, періодичні видання та газети",
  },
  "5193": {
    mcc: "5193",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Квіти",
    fullDescription: "Приналежності для флористів, розсадники і квіти",
  },
  "5198": {
    mcc: "5198",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Фарби",
    fullDescription: "Лакофарбова продукція та супутні товари",
  },
  "5199": {
    mcc: "5199",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Товари",
    fullDescription: "Товари нетривалого користування",
  },
  "5200": {
    mcc: "5200",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Товари для дому",
    fullDescription: "Магазини товарів для дому",
  },
  "5211": {
    mcc: "5211",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Будматеріали",
    fullDescription: "Будівельні матеріали, магазини пиломатеріалів",
  },
  "5231": {
    mcc: "5231",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Ремонт",
    fullDescription: "Магазини скла, фарби, шпалер",
  },
  "5251": {
    mcc: "5251",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Господарських товари",
    fullDescription: "Магазини господарських товарів",
  },
  "5261": {
    mcc: "5261",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Садове приладдя",
    fullDescription: "Магазини товарів для саду та городу",
  },
  "5262": {
    mcc: "5262",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Маркетплейси",
    fullDescription: "Маркетплейси",
  },
  "5271": {
    mcc: "5271",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Будинки на колесах",
    fullDescription: "Дилери мобільних будинків",
  },
  "5292": {
    mcc: "5292",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "5295": {
    mcc: "5295",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "5297": {
    mcc: "5297",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Роздрібні магазини",
    fullDescription: "Онлайн магазини роздрібної торгівлі",
  },
  "5298": {
    mcc: "5298",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Роздрібні магазини",
    fullDescription: "Продуктові інтернет магазини",
  },
  "5299": {
    mcc: "5299",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Продаж газу",
    fullDescription: "Продаж газу",
  },
  "5300": {
    mcc: "5300",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Оптовики",
    fullDescription: "Оптові магазини",
  },
  "5309": {
    mcc: "5309",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Duty Free",
    fullDescription: "Безмитні магазини",
  },
  "5310": {
    mcc: "5310",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Дискаунтери",
    fullDescription: "Дисконтні магазини",
  },
  "5311": {
    mcc: "5311",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Універмаги",
    fullDescription: "Універмаги",
  },
  "5331": {
    mcc: "5331",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Універсальні магазини",
    fullDescription: "Універсальний магазин",
  },
  "5399": {
    mcc: "5399",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Універсальні магазини",
    fullDescription: "Інші магазини загальних товарів",
  },
  "5411": {
    mcc: "5411",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Продукти",
    fullDescription: "Продуктові магазини, супермаркети",
  },
  "5415": {
    mcc: "5415",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "5422": {
    mcc: "5422",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "М'ясо",
    fullDescription: "Продаж свіжого та замороженого м'яса",
  },
  "5441": {
    mcc: "5441",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Солодощі",
    fullDescription: "Магазини цукерок, горіхів та кондитерських виробів",
  },
  "5451": {
    mcc: "5451",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Фермерські товари",
    fullDescription: "Магазини молочних продуктів",
  },
  "5462": {
    mcc: "5462",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Пекарні",
    fullDescription: "Пекарні",
  },
  "5499": {
    mcc: "5499",
    group: {
      type: "ROS",
      description: "Послуги роздрібної торгівлі",
    },
    shortDescription: "Продукти",
    fullDescription:
      "Інші продовольчі магазини - цілодобові магазини, ринки, спеціалізовані магазини та торгові автомати",
  },
  "5511": {
    mcc: "5511",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription:
      "Легковий і вантажний транспорт - продаж, сервіс, ремонт, запчастини та лізинг",
  },
  "5521": {
    mcc: "5521",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription: "Продавці автомобілів та вантажівок (тільки вживані)",
  },
  "5531": {
    mcc: "5531",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автозапчастини",
    fullDescription: "Автомагазини і товари для дому",
  },
  "5532": {
    mcc: "5532",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Шини",
    fullDescription: "Магазини автомобільних шин",
  },
  "5533": {
    mcc: "5533",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автомагазини",
    fullDescription: "Магазини автозапчастин та аксесуарів",
  },
  "5541": {
    mcc: "5541",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "СТО",
    fullDescription:
      "Станції технічного обслуговування (з або без допоміжних послуг)",
  },
  "5542": {
    mcc: "5542",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "АЗС",
    fullDescription: "Автоматичні заправні станції",
  },
  "5551": {
    mcc: "5551",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Човни",
    fullDescription: "Продавці човнів",
  },
  "5552": {
    mcc: "5552",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Зарядка електромобілів",
    fullDescription: "Станції зарядки електромобілів",
  },
  "5561": {
    mcc: "5561",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription:
      "Будинки-автопричепи, житлові нерозбірні і вантажні причепи",
  },
  "5571": {
    mcc: "5571",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription: "Магазини мотоциклів та дилери",
  },
  "5592": {
    mcc: "5592",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription: "Дилери будинків на колесах",
  },
  "5598": {
    mcc: "5598",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription: "Дилери снігоходів",
  },
  "5599": {
    mcc: "5599",
    group: {
      type: "CV",
      description: "Автомобілі та транспортні засоби",
    },
    shortDescription: "Автосалони",
    fullDescription:
      "Продавці різного автомобільного, авіаційного та сільськогосподарського обладнання",
  },
  "5611": {
    mcc: "5611",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Чоловічий одяг",
    fullDescription: "Магазини одягу та аксесуарів для чоловіків та хлопців",
  },
  "5621": {
    mcc: "5621",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Жіночий одяг",
    fullDescription: "Магазини жіночого одягу",
  },
  "5631": {
    mcc: "5631",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Жіночий одяг",
    fullDescription: "Жіночі аксесуари та спеціалізовані магазини",
  },
  "5641": {
    mcc: "5641",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Дитячий одяг",
    fullDescription: "Магазини одягу для дітей та немовлят",
  },
  "5651": {
    mcc: "5651",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Одяг",
    fullDescription: "Магазини сімейного одягу",
  },
  "5655": {
    mcc: "5655",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Спортивний одяг",
    fullDescription: "Магазини спортивного одягу та одягу для верхової їзди",
  },
  "5661": {
    mcc: "5661",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Взуття",
    fullDescription: "Взуттєві магазини",
  },
  "5681": {
    mcc: "5681",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Хутро",
    fullDescription: "Хутряні магазини",
  },
  "5691": {
    mcc: "5691",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Одяг",
    fullDescription: "Магазини чоловічого та жіночого одягу",
  },
  "5697": {
    mcc: "5697",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Ательє",
    fullDescription: "Переробки, ремонт, швачки, кравці",
  },
  "5698": {
    mcc: "5698",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Перуки",
    fullDescription: "Перуки і накладки з штучного волосся",
  },
  "5699": {
    mcc: "5699",
    group: {
      type: "CLS",
      description: "Магазини одягу",
    },
    shortDescription: "Аксесуари",
    fullDescription: "Магазини аксесуарів та одягу - Різне",
  },
  "5712": {
    mcc: "5712",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Фурнітура",
    fullDescription:
      "Магазини обладнання, меблів та побутових предметів (крім побутової техніки)",
  },
  "5713": {
    mcc: "5713",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Покриття для підлоги",
    fullDescription: "Магазини підлогових покриттів",
  },
  "5714": {
    mcc: "5714",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Штори. Фіранки",
    fullDescription: "Тканини, оббивний матеріал, гардини і портьєри, жалюзі",
  },
  "5715": {
    mcc: "5715",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Спиртні напої",
    fullDescription: "Оптові продавці алкоголю",
  },
  "5718": {
    mcc: "5718",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Каміни",
    fullDescription: "Магазини камінів, камінних екранів і аксесуарів",
  },
  "5719": {
    mcc: "5719",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Фурнітура",
    fullDescription: "Різні спеціалізовані магазини меблів для дому",
  },
  "5722": {
    mcc: "5722",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Побутова техніка",
    fullDescription: "Магазини побутової техніки",
  },
  "5732": {
    mcc: "5732",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Побутова техніка",
    fullDescription: "Продаж електроніки",
  },
  "5733": {
    mcc: "5733",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Музичні інструменти",
    fullDescription:
      "Музичні магазини - музичні інструменти, фортепіано та ноти",
  },
  "5734": {
    mcc: "5734",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Комп'ютерне ПЗ",
    fullDescription: "Магазини комп'ютерного програмного забезпечення",
  },
  "5735": {
    mcc: "5735",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Магазини звукозапису",
    fullDescription: "Магазини звукозапису",
  },
  "5811": {
    mcc: "5811",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Доставка їжі",
    fullDescription: "Доставка їжі",
  },
  "5812": {
    mcc: "5812",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Кафе. Ресторани",
    fullDescription: "Місця харчування і ресторани",
  },
  "5813": {
    mcc: "5813",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Бари",
    fullDescription:
      "Бари, коктейль-бари, дискотеки, нічні клуби і таверни - місця продажу алкогольних напоїв",
  },
  "5814": {
    mcc: "5814",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Фаст-фуд",
    fullDescription: "Ресторани швидкого харчування",
  },
  "5815": {
    mcc: "5815",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Цифрові товари",
    fullDescription: "Цифрові товари: книги, фільми, музика",
  },
  "5816": {
    mcc: "5816",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Ігри",
    fullDescription: "Цифрові товари: Ігри",
  },
  "5817": {
    mcc: "5817",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Програмне забезпечення",
    fullDescription: "Цифрові товари: додатки (крім ігор)",
  },
  "5818": {
    mcc: "5818",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Цифрові товари",
    fullDescription: "Цифрові товари: мультикатегорія",
  },
  "5832": {
    mcc: "5832",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Антикваріат",
    fullDescription:
      "Антикварні магазини - послуги з продажу, ремонту та реставрації",
  },
  "5912": {
    mcc: "5912",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Аптеки",
    fullDescription: "Аптеки",
  },
  "5921": {
    mcc: "5921",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Спиртні напої",
    fullDescription: "Магазини з продажем спиртних напоїв на винос",
  },
  "5931": {
    mcc: "5931",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Секонд-хенд",
    fullDescription: "Секонд-хенди, магазини б/в товарів, комісійні магазини",
  },
  "5932": {
    mcc: "5932",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Антикваріат",
    fullDescription:
      "Антикварні магазини - послуги з продажу, ремонту та реставрації",
  },
  "5933": {
    mcc: "5933",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Ломбарди",
    fullDescription: "Ломбарди",
  },
  "5935": {
    mcc: "5935",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Автозвалище",
    fullDescription: "Знищення і збір залишків",
  },
  "5937": {
    mcc: "5937",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Магазини репродукцій",
    fullDescription: "Магазини антикварних репродукцій",
  },
  "5940": {
    mcc: "5940",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Велосипеди",
    fullDescription: "Магазини велосипедів - Продажі та обслуговування",
  },
  "5941": {
    mcc: "5941",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Товари для спорту",
    fullDescription: "Магазини спортивних товарів",
  },
  "5942": {
    mcc: "5942",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Книгарні",
    fullDescription: "Книгарні",
  },
  "5943": {
    mcc: "5943",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Канцтовари",
    fullDescription:
      "Магазини офісного, шкільного та канцелярського призначення",
  },
  "5944": {
    mcc: "5944",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Годинники",
    fullDescription: "Годинники, ювелірні та срібні вироби",
  },
  "5945": {
    mcc: "5945",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Іграшки",
    fullDescription: "Магазини ігор, іграшок та хобі",
  },
  "5946": {
    mcc: "5946",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Фототовари",
    fullDescription: "Магазини фотокамер та фотографій",
  },
  "5947": {
    mcc: "5947",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Сувеніри",
    fullDescription: "Магазини карт, подарунків, новинок і сувенірів",
  },
  "5948": {
    mcc: "5948",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Шкіряні вироби",
    fullDescription: "Магазини шкіряних виробів, дорожніх речей",
  },
  "5949": {
    mcc: "5949",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Товари для шиття",
    fullDescription: "Тканина, рукоділля, штучні вироби та швейні магазини",
  },
  "5950": {
    mcc: "5950",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Кришталь / посуд",
    fullDescription: "Магазини кришталю та скляного посуду",
  },
  "5960": {
    mcc: "5960",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Страхування",
    fullDescription: "Прямий маркетинг - страхові послуги",
  },
  "5961": {
    mcc: "5961",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Товари поштою",
    fullDescription: "Замовлення поштою, включаючи замовлення по каталогу",
  },
  "5962": {
    mcc: "5962",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Подорожі",
    fullDescription: "Прямий маркетинг - послуги, що пов'язані з туризмом",
  },
  "5963": {
    mcc: "5963",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Комівояжери",
    fullDescription: 'Продаж "від дверей до дверей"',
  },
  "5964": {
    mcc: "5964",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Товари поштою",
    fullDescription: "Прямий маркетинг - торгівля за каталогами",
  },
  "5965": {
    mcc: "5965",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Товари поштою",
    fullDescription:
      "Прямий маркетинг - комбінований каталог та роздрібна торгівля",
  },
  "5966": {
    mcc: "5966",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Товари поштою",
    fullDescription: "маркетинг - вихідний телемаркетинг",
  },
  "5967": {
    mcc: "5967",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Інформаційні послуги",
    fullDescription: "Прямий маркетинг - вхідний телемаркетинг",
  },
  "5968": {
    mcc: "5968",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Підписки",
    fullDescription: "Прямий маркетинг - Продаж по підписці",
  },
  "5969": {
    mcc: "5969",
    group: {
      type: "MTS",
      description: "Продажі поштою / телефоном",
    },
    shortDescription: "Товари поштою",
    fullDescription: "Прямий маркетинг - інші торгові точки прямого маркетингу",
  },
  "5970": {
    mcc: "5970",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Художні товари",
    fullDescription: "Магазини товарів для художників, ремісничі магазини",
  },
  "5971": {
    mcc: "5971",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Галереї",
    fullDescription: "Дилери та галереї мистецтв",
  },
  "5972": {
    mcc: "5972",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Філателістика",
    fullDescription:
      "Магазини марок та монет - Філателія та нумізматичні приладдя",
  },
  "5973": {
    mcc: "5973",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Церковні лавки",
    fullDescription: "Магазини релігійних товарів",
  },
  "5974": {
    mcc: "5974",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Штампи",
    fullDescription: "Магазини гумових штампів",
  },
  "5975": {
    mcc: "5975",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Слухові апарати",
    fullDescription: "Слухові апарати - продаж, сервіс, постачання",
  },
  "5976": {
    mcc: "5976",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Протези",
    fullDescription: "Ортопедичні товари - магазини протезів",
  },
  "5977": {
    mcc: "5977",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Косметика",
    fullDescription: "Магазини косметики",
  },
  "5978": {
    mcc: "5978",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Друкарські машини",
    fullDescription: "Магазини друкуючих пристроїв - оренда, продаж, послуги",
  },
  "5983": {
    mcc: "5983",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Паливо",
    fullDescription:
      "Постачальники палива - вугілля, мазут, зріджена нафта, деревина",
  },
  "5992": {
    mcc: "5992",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Флористика",
    fullDescription: "Флористика",
  },
  "5993": {
    mcc: "5993",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Тютюнові вироби",
    fullDescription: "Магазини та стенди для сигар",
  },
  "5994": {
    mcc: "5994",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Газети. Журнали",
    fullDescription: "Дилери з продажу друкованої продукції",
  },
  "5995": {
    mcc: "5995",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Зоотовари",
    fullDescription: "Зоомагазини, корм і товари для домашніх тварин",
  },
  "5996": {
    mcc: "5996",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Басейни",
    fullDescription: "Басейни - продаж та постачання",
  },
  "5997": {
    mcc: "5997",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Бритви",
    fullDescription: "Магазини електричних бритв - продаж та обслуговування",
  },
  "5998": {
    mcc: "5998",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Тенти",
    fullDescription: "Наметові та тентові магазини",
  },
  "5999": {
    mcc: "5999",
    group: {
      type: "MS",
      description: "Інші магазини",
    },
    shortDescription: "Різне",
    fullDescription: "Різні та спеціалізовані роздрібні магазини",
  },
  "6010": {
    mcc: "6010",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Каси",
    fullDescription: "Фінансові установи - видача готівки в касі",
  },
  "6011": {
    mcc: "6011",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Каси",
    fullDescription: "Фінансові установи - зняття готівки автоматично",
  },
  "6012": {
    mcc: "6012",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Фінансові послуги",
    fullDescription: "Фінансові установи - торгівля та послуги",
  },
  "6022": {
    mcc: "6022",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Банки",
    fullDescription:
      "Фінансова установа (внутрішня відновлювана кредитна лінія)",
  },
  "6023": {
    mcc: "6023",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Банки",
    fullDescription: "Державні банки (внутрішня відновлювана кредитна лінія)",
  },
  "6025": {
    mcc: "6025",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Банки",
    fullDescription:
      "Національні банки (внутрішня відновлювана кредитна лінія)",
  },
  "6026": {
    mcc: "6026",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Банки",
    fullDescription:
      "Національні банки, не федеральні (внутрішня відновлювана кредитна лінія)",
  },
  "6028": {
    mcc: "6028",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Банки",
    fullDescription:
      "Некорпоративні приватні банки (внутрішня відновлювана кредитна лінія)",
  },
  "6050": {
    mcc: "6050",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Квазі-кеш",
    fullDescription: "Квазі-кеш - Фінансові установи",
  },
  "6051": {
    mcc: "6051",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Квазі-кеш",
    fullDescription: "Квазі-Кеш - Нефінансові установи",
  },
  "6211": {
    mcc: "6211",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Цінні папери",
    fullDescription: "Послуги брокерів на ринку цінних паперів",
  },
  "6236": {
    mcc: "6236",
    group: {
      type: "AL",
      description: "Авіалінії, авіакомпанії",
    },
    shortDescription: "Цінні папери",
    fullDescription: "Aserca Airlines / Aero Servicio Carabobo (Венесуела)",
  },
  "6300": {
    mcc: "6300",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Страхування",
    fullDescription: "Послуги страхових компаній",
  },
  "6381": {
    mcc: "6381",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Страхування",
    fullDescription: "Страхування - премії",
  },
  "6399": {
    mcc: "6399",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Страхування",
    fullDescription: "Страхування",
  },
  "6513": {
    mcc: "6513",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Оренда нерухомості",
    fullDescription: "Агенти та менеджери з нерухомості - оренда",
  },
  "6529": {
    mcc: "6529",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Поповнення картки",
    fullDescription:
      "Віддалене поповнення передплаченої карти - Фінансові організації",
  },
  "6530": {
    mcc: "6530",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Поповнення картки",
    fullDescription:
      "Віддалене поповнення передоплаченої карти - Торгова точка",
  },
  "6531": {
    mcc: "6531",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Оплата послуг - грошові перекази",
  },
  "6532": {
    mcc: "6532",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Платіжна операція - фінансова установа",
  },
  "6533": {
    mcc: "6533",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Платіжна операція - продавець",
  },
  "6534": {
    mcc: "6534",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Грошовий переказ - фінансова установа",
  },
  "6535": {
    mcc: "6535",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Права вимоги на цінності - Фінансові організації",
  },
  "6536": {
    mcc: "6536",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription:
      "Грошові перекази з картки на картку - зарахування (всередині країни)",
  },
  "6537": {
    mcc: "6537",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription:
      "Грошові перекази з картки на картку - зарахування (між країнами)",
  },
  "6538": {
    mcc: "6538",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Грошові перекази з картки на картку - списання",
  },
  "6539": {
    mcc: "6539",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Транзакція по фінансуванню (виключаючи MoneySend)",
  },
  "6540": {
    mcc: "6540",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Поповнення небанківських передплачених карт та рахунків",
  },
  "6611": {
    mcc: "6611",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Переказ коштів",
    fullDescription: "Переплата (авансові платежі)",
  },
  "6760": {
    mcc: "6760",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Облігації",
    fullDescription: "Ощадні облігації",
  },
  "7011": {
    mcc: "7011",
    group: {
      type: "HR",
      description: "Готелі / Курорти",
    },
    shortDescription: "Готелі та курорти",
    fullDescription: "Готелі та курорти",
  },
  "7012": {
    mcc: "7012",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Тайм-шери",
    fullDescription: "Тайм-шери",
  },
  "7032": {
    mcc: "7032",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Рекреація",
    fullDescription: "Спортивно-оздоровчі табори",
  },
  "7033": {
    mcc: "7033",
    group: {
      type: "SP",
      description: "Постачальник послуг",
    },
    shortDescription: "Кемпінг",
    fullDescription: "Наметові табори та причіпні парки",
  },
  "7210": {
    mcc: "7210",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Прання й прибирання",
    fullDescription: "Послуги з прибирання та пральні",
  },
  "7211": {
    mcc: "7211",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Прання",
    fullDescription: "Послуги пральні - сімейні та комерційні",
  },
  "7216": {
    mcc: "7216",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Хімчистка",
    fullDescription: "Хімчистка",
  },
  "7217": {
    mcc: "7217",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Чистка",
    fullDescription: "Чистка килимів та оббивки",
  },
  "7221": {
    mcc: "7221",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Фотостудія",
    fullDescription: "Фотостудія",
  },
  "7230": {
    mcc: "7230",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Краса",
    fullDescription: "Перукарні та салони краси",
  },
  "7251": {
    mcc: "7251",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Ремонт одягу",
    fullDescription: "Чистка капелюхів, ремонт і полірування взуття",
  },
  "7261": {
    mcc: "7261",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Ритуальні послуги",
    fullDescription: "Похоронні служби та крематорії",
  },
  "7272": {
    mcc: "7272",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Ескорт",
    fullDescription: "Послуги ескорту",
  },
  "7273": {
    mcc: "7273",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Знайомства. Ескорт",
    fullDescription: "Послуги знайомств",
  },
  "7276": {
    mcc: "7276",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Податки",
    fullDescription: "Служба підготовки податків",
  },
  "7277": {
    mcc: "7277",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Консультація",
    fullDescription: "Борги, шлюб, особисті питання - консультування",
  },
  "7278": {
    mcc: "7278",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Покупки",
    fullDescription: "Послуги покупок / шопінгу",
  },
  "7280": {
    mcc: "7280",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Лікарні",
    fullDescription: "Пацієнт лікарні - виведення особистих коштів",
  },
  "7295": {
    mcc: "7295",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Няні",
    fullDescription: "Послуги няні",
  },
  "7296": {
    mcc: "7296",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Прокат одягу",
    fullDescription: "Здача в оренду костюмів, уніформи, простий одягу",
  },
  "7297": {
    mcc: "7297",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Масаж",
    fullDescription: "Салони масажу",
  },
  "7298": {
    mcc: "7298",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Здоров'я й краса",
    fullDescription: "Салони краси та здоров'я",
  },
  "7299": {
    mcc: "7299",
    group: {
      type: "PS",
      description: "Особисті послуги",
    },
    shortDescription: "Різне",
    fullDescription: "Інші послуги",
  },
  "7311": {
    mcc: "7311",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Реклама",
    fullDescription: "Рекламні послуги",
  },
  "7321": {
    mcc: "7321",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "БКІ",
    fullDescription: "Бюро кредитних історій",
  },
  "7322": {
    mcc: "7322",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Колектори",
    fullDescription: "Агентства стягнення боргів",
  },
  "7332": {
    mcc: "7332",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Копі-центри",
    fullDescription: "Креслярські і копіювальні послуги",
  },
  "7333": {
    mcc: "7333",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Фотографія й мистецтво",
    fullDescription: "Комерційне мистецтво, графіка, фотографія",
  },
  "7338": {
    mcc: "7338",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Копі-центри",
    fullDescription: "Послуги швидкого копіювання, відтворення та друку",
  },
  "7339": {
    mcc: "7339",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Стенографія",
    fullDescription: "Служби стенографічної та секретарської підтримки",
  },
  "7342": {
    mcc: "7342",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Дезінфекція",
    fullDescription: "Дезінсекція, дезінфекція та дератизація",
  },
  "7349": {
    mcc: "7349",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Чистка й обслуговування",
    fullDescription:
      "Прибирання і технічне обслуговування будівель і приміщень",
  },
  "7361": {
    mcc: "7361",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Працевлаштування",
    fullDescription: "Агенції зайнятості та служби тимчасової допомоги",
  },
  "7372": {
    mcc: "7372",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Програмування",
    fullDescription:
      "Комп'ютерне програмування, обробка даних і послуги з проектування інтегрованих систем",
  },
  "7375": {
    mcc: "7375",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Інформаційні послуги",
    fullDescription: "Служби пошуку інформації",
  },
  "7379": {
    mcc: "7379",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Ремонт комп'ютерів",
    fullDescription: "Комп'ютерне обслуговування, ремонт і послуги",
  },
  "7389": {
    mcc: "7389",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Бізнес послуги",
    fullDescription: "Бізнес послуги",
  },
  "7392": {
    mcc: "7392",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Консультації, PR",
    fullDescription:
      "Послуги з консалтингу, управління та зв’язків з громадськістю",
  },
  "7393": {
    mcc: "7393",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Детективні агентства",
    fullDescription:
      "Детективні агентства, охоронні агентства, служби безпеки, включаючи броньовані автомобілі і сторожових собак",
  },
  "7394": {
    mcc: "7394",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Оренда спорядження",
    fullDescription:
      "Оренда обладнання та лізингові послуги, оренда меблів, прокат інструментів",
  },
  "7395": {
    mcc: "7395",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Фотодрук",
    fullDescription: "Фотостудії, фотолабораторії",
  },
  "7399": {
    mcc: "7399",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Бізнес послуги",
    fullDescription: "Бізнес послуги",
  },
  "7511": {
    mcc: "7511",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Паркування",
    fullDescription: "Стоянка вантажного транспорту",
  },
  "7512": {
    mcc: "7512",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Агентства по оренді автомобілів",
  },
  "7513": {
    mcc: "7513",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда вантажівок",
    fullDescription: "Оренда вантажівок",
  },
  "7519": {
    mcc: "7519",
    group: {
      type: "CR",
      description: "Оренда автомобілів",
    },
    shortDescription: "Оренда автомобілів",
    fullDescription: "Прокат будинків на колесах та автомобілів для відпочинку",
  },
  "7523": {
    mcc: "7523",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Паркування",
    fullDescription: "Автомобільні стоянки і гаражі",
  },
  "7524": {
    mcc: "7524",
    group: {
      type: "BS",
      description: "Бізнес послуги",
    },
    shortDescription: "Паркування",
    fullDescription:
      "Постачальники послуг експрес-оплати автостоянок і гаражів",
  },
  "7531": {
    mcc: "7531",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт авто",
    fullDescription: "Майстерні з кузовного ремонту автомобілів",
  },
  "7534": {
    mcc: "7534",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Шиномонтаж",
    fullDescription: "Шиномонтаж та вулканізація",
  },
  "7535": {
    mcc: "7535",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Автомобільні фарби",
    fullDescription: "Магазини фарб для автомобілів",
  },
  "7538": {
    mcc: "7538",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "СТО",
    fullDescription: "Автосервіси",
  },
  "7542": {
    mcc: "7542",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Автомийки",
    fullDescription: "Автомийки",
  },
  "7549": {
    mcc: "7549",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Евакуатор",
    fullDescription: "Послуги буксирування та евакуації",
  },
  "7622": {
    mcc: "7622",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт техніки",
    fullDescription: "Майстерні по ремонту електроніки",
  },
  "7623": {
    mcc: "7623",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт кліматичної техніки",
    fullDescription:
      "Майстерні по ремонту систем кондиціонування та охолодження",
  },
  "7629": {
    mcc: "7629",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт техніки",
    fullDescription: "Ремонт електрообладнання та малої побутової техніки",
  },
  "7631": {
    mcc: "7631",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт годинників й ювелірних виробів",
    fullDescription: "Центри ремонту годинників та чищення ювелірних виробів",
  },
  "7641": {
    mcc: "7641",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт меблів",
    fullDescription: "Оббивка, ремонт та оздоблення меблів",
  },
  "7692": {
    mcc: "7692",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Зравювальні роботи",
    fullDescription: "Зварювання та ремонт",
  },
  "7699": {
    mcc: "7699",
    group: {
      type: "RS",
      description: "Ремонтні послуги",
    },
    shortDescription: "Ремонт",
    fullDescription: "Різні ремонтні магазини та супутні послуги",
  },
  "7800": {
    mcc: "7800",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Державна лотерея",
    fullDescription: "Державні лотереї (тільки США)",
  },
  "7801": {
    mcc: "7801",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Онлайн-казино",
    fullDescription: "Азартні ігри в інтернеті (тільки США)",
  },
  "7802": {
    mcc: "7802",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Скачки",
    fullDescription: "Кінські / собачі перегони (тільки США)",
  },
  "7829": {
    mcc: "7829",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Прокат відео",
    fullDescription: "Виробництво та розповсюдження кінофільмів та відеокасет",
  },
  "7832": {
    mcc: "7832",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Кінотеатри",
    fullDescription: "Кінотеатри",
  },
  "7833": {
    mcc: "7833",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Кінотеатри",
    fullDescription: "Експрес-оплата - Кінотеатр",
  },
  "7841": {
    mcc: "7841",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Прокат відео",
    fullDescription: "Прокат DVD / Відео касет",
  },
  "7911": {
    mcc: "7911",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Танцювальні студії. Школи танцю",
    fullDescription: "Танцювальні зали, школи та студії",
  },
  "7922": {
    mcc: "7922",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Квитки",
    fullDescription:
      "Театральні продюсери (крім кінофільмів), квиткові агентства",
  },
  "7929": {
    mcc: "7929",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Музичні групи. Оркестри",
    fullDescription: "Групи, оркестри та різноманітні артисти",
  },
  "7932": {
    mcc: "7932",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Більярд",
    fullDescription: "Більярд-клуби",
  },
  "7933": {
    mcc: "7933",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Боулінг-клуби",
    fullDescription: "Боулінг-клуби",
  },
  "7941": {
    mcc: "7941",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Спортклуби",
    fullDescription:
      "Атлетичні поля, комерційні види спорту, професійні спортивні клуби, промоутери спорту",
  },
  "7991": {
    mcc: "7991",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Туризм",
    fullDescription: "Туристичні пам'ятки та експонати",
  },
  "7992": {
    mcc: "7992",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Гольф",
    fullDescription: "Публічні поля для гольфу",
  },
  "7993": {
    mcc: "7993",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Відеоігри",
    fullDescription: "Аксесуари для відеоігор",
  },
  "7994": {
    mcc: "7994",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Відеоігри",
    fullDescription: "Клуби відеоігор",
  },
  "7995": {
    mcc: "7995",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Азартні ігри",
    fullDescription: "Азартні ігри, ставки",
  },
  "7996": {
    mcc: "7996",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Розваги",
    fullDescription: "Парки атракціонів, карнавали, цирки, ворожки",
  },
  "7997": {
    mcc: "7997",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Розваги та спорт",
    fullDescription:
      "Клуби - заміські клуби, членство (відпочинок, спорт), приватні поля для гольфу",
  },
  "7998": {
    mcc: "7998",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Акваріуми. Дельфінарії",
    fullDescription: "Акваріуми, дельфінарії, зоопарки і морські парки",
  },
  "7999": {
    mcc: "7999",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Розваги та спорт",
    fullDescription: "Послуги з відпочинку",
  },
  "8011": {
    mcc: "8011",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Медецина",
    fullDescription: "Лікарі",
  },
  "8021": {
    mcc: "8021",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Стоматологія",
    fullDescription: "Стоматологи та ортодонти",
  },
  "8031": {
    mcc: "8031",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Медецина",
    fullDescription: "Лікарі-остеопати",
  },
  "8041": {
    mcc: "8041",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Хіропрактики",
    fullDescription: "Хіропрактики",
  },
  "8042": {
    mcc: "8042",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Оптика",
    fullDescription: "Оптометристи та офтальмологи",
  },
  "8043": {
    mcc: "8043",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Оптика",
    fullDescription: "Оптики, оптичні товари та окуляри",
  },
  "8044": {
    mcc: "8044",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Оптика",
    fullDescription: "Оптичні товари та окуляри",
  },
  "8049": {
    mcc: "8049",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Ортопеди",
    fullDescription: "Ортопеди",
  },
  "8050": {
    mcc: "8050",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Доглядальниці",
    fullDescription: "Послуги по догляду та особистої гігієни",
  },
  "8062": {
    mcc: "8062",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Лікарні",
    fullDescription: "Лікарні",
  },
  "8071": {
    mcc: "8071",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Медицина та стоматологія",
    fullDescription: "Стоматологічна та медична лабораторії",
  },
  "8099": {
    mcc: "8099",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Медичні послуги",
    fullDescription: "Медичні працівники, медичні послуги",
  },
  "8110": {
    mcc: "8110",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Юристи. Адвокати",
    fullDescription: "Адвокати, юридичні послуги",
  },
  "8111": {
    mcc: "8111",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Юристи. Адвокати",
    fullDescription: "Адвокати, юридичні послуги",
  },
  "8211": {
    mcc: "8211",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Школа",
    fullDescription: "Початкові та середні школи",
  },
  "8220": {
    mcc: "8220",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Освіта. Університет",
    fullDescription: "Коледжі, університети, професійні училища та технікуми",
  },
  "8241": {
    mcc: "8241",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Дистанційна освіта",
    fullDescription: "Школи, заочна / дистанційна освіта",
  },
  "8244": {
    mcc: "8244",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Освіта. Бізнес",
    fullDescription: "Бізнес / секретарські школи",
  },
  "8249": {
    mcc: "8249",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Освіта",
    fullDescription: "Професійні школи і училища",
  },
  "8299": {
    mcc: "8299",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Освіта",
    fullDescription: "Школи та освітні послуги",
  },
  "8351": {
    mcc: "8351",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Дитячий садок",
    fullDescription: "Послуги з догляду за дітьми",
  },
  "8398": {
    mcc: "8398",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Благодійність",
    fullDescription: "Організації, благодійні та соціальні служби",
  },
  "8641": {
    mcc: "8641",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Громадські організації",
    fullDescription: "Цивільні, соціальні та братські асоціації",
  },
  "8651": {
    mcc: "8651",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Політичні організації",
    fullDescription: "Політичні організації",
  },
  "8661": {
    mcc: "8661",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Релігійні організації",
    fullDescription: "Релігійні організації",
  },
  "8664": {
    mcc: "8664",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "8675": {
    mcc: "8675",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Автоклуб",
    fullDescription: "Автомобільні асоціації",
  },
  "8699": {
    mcc: "8699",
    group: {
      type: "MO",
      description: "Членські організації",
    },
    shortDescription: "Членські організації",
    fullDescription: "Членські організації",
  },
  "8734": {
    mcc: "8734",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Випробувальні лабораторії",
    fullDescription: "Випробувальні лабораторії (немедичні)",
  },
  "8743": {
    mcc: "8743",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Випробувальні лабораторії",
    fullDescription: "Випробувальні лабораторії (немедичні)",
  },
  "8911": {
    mcc: "8911",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Архітектори",
    fullDescription: "Архітектурні, інженерні та геодезичні послуги",
  },
  "8931": {
    mcc: "8931",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Бухгалтерія. Аудит",
    fullDescription: "Аудит і бухгалтерський облік",
  },
  "8999": {
    mcc: "8999",
    group: {
      type: "PFS",
      description: "Професійні послуги",
    },
    shortDescription: "Професійні послуги",
    fullDescription: "Професійні послуги",
  },
  "9034": {
    mcc: "9034",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "I-Purchasing Pilot",
    fullDescription: "I-Purchasing Pilot",
  },
  "9211": {
    mcc: "9211",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Суд",
    fullDescription: "Судові виплати, включаючи аліменти і дитячу підтримку",
  },
  "9222": {
    mcc: "9222",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Штрафи",
    fullDescription: "Штрафи",
  },
  "9223": {
    mcc: "9223",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Виплати. Облігації",
    fullDescription: "Сплата застави та облігацій",
  },
  "9311": {
    mcc: "9311",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Податки",
    fullDescription: "Податкові платежі",
  },
  "9399": {
    mcc: "9399",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Державні послуги",
    fullDescription: "Державні послуги",
  },
  "9401": {
    mcc: "9401",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "I-Purchasing Pilot",
    fullDescription: "I-Purchasing Pilot",
  },
  "9402": {
    mcc: "9402",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Пошта",
    fullDescription: "Поштові послуги - тільки уряд",
  },
  "9405": {
    mcc: "9405",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Урядові закупівлі",
    fullDescription: "Внутрішньодержавні закупівлі - тільки уряд",
  },
  "9406": {
    mcc: "9406",
    group: {
      type: "ES",
      description: "Послуги в сфері розваг",
    },
    shortDescription: "Державна лотерея",
    fullDescription: "Державні лотереї (крім США)",
  },
  "9411": {
    mcc: "9411",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Державні послуги",
    fullDescription: "Платежі по державному займу",
  },
  "9700": {
    mcc: "9700",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Кешбек",
    fullDescription: "Автоматизована реферальна служба",
  },
  "9701": {
    mcc: "9701",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "VISA",
    fullDescription: "Служба перевірки облікових даних Visa (тільки VISA)",
  },
  "9702": {
    mcc: "9702",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Аварійні служби",
    fullDescription: "Аварійні служби GCAS (тільки VISA)",
  },
  "9751": {
    mcc: "9751",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Документообіг",
    fullDescription: "Супермаркети (Великобританія)",
  },
  "9752": {
    mcc: "9752",
    group: {
      type: "WSM",
      description: "Оптові постачальники і виробники",
    },
    shortDescription: "Документообіг",
    fullDescription: "Автозаправні станції (Великобританія)",
  },
  "9754": {
    mcc: "9754",
    group: {
      type: "GS",
      description: "Державні послуги",
    },
    shortDescription: "Скачки",
    fullDescription: "Кінські / собачі перегони",
  },
  "9950": {
    mcc: "9950",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Купівлі всередині компанії",
    fullDescription: "Покупки всередині компанії",
  },
  "9999": {
    mcc: "9999",
    group: {
      type: "NC",
      description: "Не категоризовано",
    },
    shortDescription: "Різне",
    fullDescription: "Різне",
  },
  "0742": {
    mcc: "0742",
    group: {
      type: "AS",
      description: "Сільськогосподарські послуги",
    },
    shortDescription: "Ветеринарні послуги",
    fullDescription: "Ветеринарні послуги",
  },
  "0743": {
    mcc: "0743",
    group: {
      type: "AS",
      description: "Сільськогосподарські послуги",
    },
    shortDescription: "Виноробники",
    fullDescription: "Виноробники",
  },
  "0744": {
    mcc: "0744",
    group: {
      type: "AS",
      description: "Сільськогосподарські послуги",
    },
    shortDescription: "Виробники шампанського",
    fullDescription: "Виробники шампанського",
  },
  "0763": {
    mcc: "0763",
    group: {
      type: "AS",
      description: "Сільськогосподарські послуги",
    },
    shortDescription: "Сільскогосподарські кооперативи",
    fullDescription: "Сільскогосподарські кооперативи",
  },
  "0780": {
    mcc: "0780",
    group: {
      type: "AS",
      description: "Сільськогосподарські послуги",
    },
    shortDescription: "Садівництво. Ландшафтний дизайн",
    fullDescription: "Послуги садівництва та ландшафтного дизайну",
  },
};
