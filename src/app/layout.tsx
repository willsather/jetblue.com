import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/header";

import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | JetBlue",
    default: "JetBlue | Airline Tickets, Flights & Airfare",
  },
  description:
    "Book your next flight with JetBlue and enjoy award-winning service and entertainment.",
  applicationName: "JetBlue",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 64x64",
      },
      {
        url: "/favicons/favicon-16.png",
        sizes: "16x16",
      },
      {
        url: "/favicons/favicon-32.png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
      },
    ],
  },
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
