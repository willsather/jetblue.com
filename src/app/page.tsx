import BookFlight from "@/app/book-flight";
import CreditCardPromo from "@/app/credit-card-promo";
import PartnersSection from "@/app/partners-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BookFlight />

        <CreditCardPromo />

        <PartnersSection />
      </main>
    </div>
  );
}
