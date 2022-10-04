const COUNTRIES = ["Hong Kong", "USA", "Australia"];

const COUNTRY_CURRENCY = {
  "Hong Kong": "HDK",
  USA: "USD",
  Australia: "AUD",
};

const PACKAGE_OPTIONS = [
  { id: 1, name: 'Standard', label: "Standard", value: 500, percent: 100 },
  { id: 2, name: "Safe", label: "Safe", value: 250, percent: 50 },
  { id: 3, name: "Super Safe", label: "Super Safe", value: 375, percent: 75 },
];

const EXCHANGES_RATE_BASE_HKD = {
  HDK: 1,
  USD: 0.13,
  AUD: 0.5,
};

export {
  COUNTRIES,
  COUNTRY_CURRENCY,
  PACKAGE_OPTIONS,
  EXCHANGES_RATE_BASE_HKD,
};
