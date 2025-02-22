import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/header";

import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "JetBlue | Airline Tickets, Flights & Airfare",
  description:
    "Book your next flight with JetBlue and enjoy award-winning service and entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
