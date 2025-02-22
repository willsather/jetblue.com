import { flag } from "@vercel/flags/next";

export const creditCardPromoFlag = flag<boolean>({
  key: "credit-card-promo-flag",
  defaultValue: true,
  description: "enable displaying new credit card promotion",
  decide() {
    return true;
  },
});
