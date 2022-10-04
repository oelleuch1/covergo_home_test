const COUNTRIES = ["Hong Kong", "USA", "Australia"];

const COUNTRY_CURRENCY = {
  "Hong Kong": "HDK",
  USA: "USD",
  Australia: "AUD",
};

const PREMIUM_OPTIONS = [
  { id: 1, label: "Standard", value: 500, percent: 100 },
  { id: 2, label: "Safe", value: 250, percent: 50 },
  { id: 3, label: "Super Safe", value: 375, percent: 75 },
];

const STANDARD_PERCENT = 100;

const EXCHANGES_RATE_BASE_HKD = {
  HDK: 1,
  USD: 0.13,
  AUD: 0.5,
};

export {
  COUNTRIES,
  COUNTRY_CURRENCY,
  PREMIUM_OPTIONS,
  STANDARD_PERCENT,
  EXCHANGES_RATE_BASE_HKD,
};
