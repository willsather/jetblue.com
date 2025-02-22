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
            <div className="group relative">
              <Button variant="ghost" className="gap-1">
                Book
              </Button>
            </div>
            <Button variant="ghost">Manage Trips</Button>
            <Button variant="ghost">Check In</Button>
            <div className="group relative">
              <Button variant="ghost" className="gap-1">
                Travel Info
              </Button>
            </div>
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
