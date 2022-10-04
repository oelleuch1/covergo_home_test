import { EXCHANGES_RATE_BASE_HKD } from "@/constants";

function convertFromHDK(amount, currencyCode) {
  return Math.floor(EXCHANGES_RATE_BASE_HKD[currencyCode] * amount);
}

export { convertFromHDK };