import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface TravelCard {
  title: string;
  description: string;
  image: string;
}

export interface TabItem {
  value: string;
  label: string;
}

export interface TabContent {
  paisly: TravelCard[];
  packages: TravelCard[];
  insurance: TravelCard[];
}

export const tabs: TabItem[] = [
  {
    value: "paisly",
    label: "Paisly",
  },
  {
    value: "packages",
    label: "Packages",
  },
  {
    value: "insurance",
    label: "Travel Insurance",
  },
];

export const tabContent: TabContent = {
  paisly: [
    {
      title: "Car Rentals",
      description:
        "Get rolling with TrueBlue points & free cancellations on car rentals. Plus, save up to 35% if you have a JetBlue flight.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Car_Pod_Paisly_Homepage.jpg?width=764",
    },
    {
      title: "Hotels",
      description:
        "Save on stays & earn points as a TrueBlue member. Plus, enjoy up to 20% off if you have a JetBlue flight.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Hotel_Pod_Paisly_Homepage.jpg?width=764",
    },
    {
      title: "Travel Bags",
      description:
        "From recycled materials to a Lifetime Guarantee, shop travel bags as fly as you. Plus, earn TrueBlue points on every purchase.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Paisly_Travel_Bags.jpg?width=764",
    },
    {
      title: "Vacation Rentals",
      description:
        "Make yourself at home with up to 20% off stays—all while earning TrueBlue points.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Vacation_Rentals_Paisly_Homepage.jpg?width=764",
    },
    {
      title: "Activities",
      description:
        "From surf lessons in Cancún to a cannoli crawl in NYC, explore thousands of activities you can earn TrueBlue points on.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Activities_Pod_Paisly_Homepage.jpg?width=764",
    },
    {
      title: "Theme Park Tickets",
      description:
        "Get a thrill out of saving money on theme park tickets and earning points as a TrueBlue member.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/Theme_Park_Tickets.jpg?width=764",
    },
  ],
  packages: [
    {
      title: "Flights + hotel = savings.",
      description:
        "Want to get more vacay for less? Save on flights, hotel, car and more by booking them together and enjoy perks you won't find anywhere else.",
      image:
        "https://jetblue.com/magnoliapublic/dam/vacations/packages-pod-1.jpg?width=764",
    },
    {
      title: "Meet the Best Vacation Finder.",
      description:
        "Want to get away but not sure where to start? Our Best Vacation Finder will help you (and your wallet) find the best destination & vacation package for your budget.",
      image:
        "https://jetblue.com/magnoliapublic/dam/vacations/packages-pod-2.jpg?width=764",
    },
    {
      title: "Seas the savings with flights + cruise.",
      description:
        "Bundle flights + cruise (and even hotel) all in one place. Plus, earn TrueBlue points and cruise loyalty points from our partners.",
      image:
        "https://jetblue.com/magnoliapublic/dam/cruise-ship-tiny.jpg?width=764",
    },
  ],
  insurance: [
    {
      title: "Travel protection for flights.",
      description:
        "Protect your flight itinerary to enjoy peace of mind from takeoff to touchdown.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/AWHP_Allianz_Tab_1.jpg?width=764",
    },
    {
      title: "Travel protection for the whole package.",
      description:
        "Protect your flight + hotel package so you can take a vacation from worries.",
      image:
        "https://jetblue.com/magnoliapublic/dam/ui-assets/Owned-Channel-Placements/AWHP_Allianz_Tab_2.jpg?width=764",
    },
  ],
};

interface TravelCardProps {
  card: TravelCard;
  variant?: "default" | "large";
}

function TravelCardComponent({ card, variant = "default" }: TravelCardProps) {
  return (
    <Card className="overflow-hidden">
      <div
        className={`relative ${variant === "large" ? "aspect-video" : "aspect-[16/9]"}`}
      >
        <Image
          src={card.image || "/placeholder.svg"}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3
          className={`mb-2 font-bold text-navy-900 ${variant === "large" ? "text-2xl" : "text-xl"}`}
        >
          {card.title}
        </h3>
        <p className="text-gray-600 text-sm">{card.description}</p>
      </CardContent>
    </Card>
  );
}

export default function TravelServices() {
  return (
    <section className="mt-8 mb-16 flex flex-col items-center justify-center bg-gray-100 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
            All travel. All right here. All for you.
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-lg">
            Add more to your trip or book the whole package at once. Either way,
            you'll enjoy more savings and JetBlue's award-winning customer
            service wherever you go.
          </p>
        </div>

        <Tabs defaultValue="paisly" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="mx-auto mb-8 w-full max-w-2xl text-center">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="paisly">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tabContent.paisly.map((card) => (
                <TravelCardComponent key={card.title} card={card} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tabContent.packages.map((card) => (
                <TravelCardComponent
                  key={card.title}
                  card={card}
                  variant="large"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insurance">
            <div className="grid gap-6 md:grid-cols-2">
              {tabContent.insurance.map((card) => (
                <TravelCardComponent
                  key={card.title}
                  card={card}
                  variant="large"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
