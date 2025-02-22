import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b bg-jb-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="https://www.jetblue.com/magnoliapublic/dam/logo/jetblue-logo.svg"
                alt="Paisly"
                width={60}
                height={20}
                className="h-5 w-auto"
              />
            </Link>
          </div>

          <nav className="ml-8 hidden items-center gap-6 md:flex">
            <Link
              href="/flights"
              className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
            >
              Book
            </Link>

            <Link
              href="/manage-trips"
              className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
            >
              Manage Trips
            </Link>

            <Link
              href="/check-in"
              className="gap-1 border-jb-navy border-b-4 font-bold hover:border-jb-orange"
            >
              Check In
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="size-12" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCart className="size-12" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
