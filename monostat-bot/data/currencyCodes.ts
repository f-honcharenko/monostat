export interface Currency {
  name: string;
  code: string;
  symbol: string;
  [x: string]: unknown;
}

export const currencyCodes: Record<number, Currency> = {
  840: {
    name: "United States Dollar",
    demonym: "US",
    majorSingle: "Dollar",
    majorPlural: "Dollars",
    code: "USD",
    symbol: "$",
    symbolNative: "$",
    minorSingle: "Cent",
    minorPlural: "Cents",
    ISOdigits: 2,
    decimals: 2,
    numToBasic: 100,
  },
  978: {
    name: "Euro",
    demonym: "",
    majorSingle: "Euro",
    majorPlural: "Euros",
    code: "EUR",
    symbol: "€",
    symbolNative: "€",
    minorSingle: "Cent",
    minorPlural: "Cents",
    ISOdigits: 2,
    decimals: 2,
    numToBasic: 100,
  },
  980: {
    name: "Ukrainian Hryvnia",
    demonym: "Ukrainian",
    majorSingle: "Hryvnia",
    majorPlural: "Hryvnias",
    code: "UAH",
    symbol: "₴",
    symbolNative: "грн",
    minorSingle: "Kopiyka",
    minorPlural: "kopiyky",
    ISOdigits: 2,
    decimals: 2,
    numToBasic: 100,
  },
};
