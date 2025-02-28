import BookHero from "@/app/(home)/book-hero";
import CreditCardPromo from "@/app/(home)/credit-card-promo";
import PartnersSection from "@/app/(home)/partners-section";
import TravelServices from "@/app/(home)/travel-services";
import VacationSection from "@/app/(home)/vacation-section";
import {
  creditCardPromoFlag,
  heroTextFlag,
  homeFlags,
  travelServicesFlag,
} from "@/lib/flags";

export default async function Home({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;

  const creditCardPromotionEnabled = await creditCardPromoFlag(code, homeFlags);
  const travelServicesEnabled = await travelServicesFlag(code, homeFlags);
  const heroText = await heroTextFlag(code, homeFlags);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BookHero title={heroText} />

        {creditCardPromotionEnabled ? <CreditCardPromo /> : null}

        <VacationSection />

        {travelServicesEnabled ? <TravelServices /> : null}

        <PartnersSection />
      </main>
    </div>
  );
}
