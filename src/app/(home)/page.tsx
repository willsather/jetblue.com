import BookHero from "@/app/(home)/book-hero";
import CreditCardPromo from "@/app/(home)/credit-card-promo";
import PartnersSection from "@/app/(home)/partners-section";
import VacationSection from "@/app/(home)/vacation-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BookHero />

        <CreditCardPromo />

        <VacationSection />

        <PartnersSection />
      </main>
    </div>
  );
}
