import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CheckInPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <nav className="border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex h-12 items-center gap-2 text-sm">
            <Link href="/" className="text-jb-blue hover:underline">
              Home
            </Link>
            <span className="text-gray-300">{"/"}</span>
            <span className="text-gray-600">Check in</span>
          </div>

          <h1 className="mb-12 font-bold">Check in</h1>
        </div>
      </nav>

      <main className="container mx-auto flex-1 px-4">
        <div className="mx-auto max-w-xl py-8">
          <div className="space-y-8">
            <h2 className="mb-2 font-bold">Find your itinerary</h2>
            <div>
              <p className="mb-8 text-gray-600">
                Check in within 24 hours of your flight.
              </p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmationCode">
                    Confirmation code or ticket #
                  </Label>
                  <Input
                    id="confirmationCode"
                    type="text"
                    placeholder="Confirmation code or ticket #"
                    className="w-full"
                  />
                  <p className="text-gray-500 text-sm">
                    ex. ABCDEF or 2790123456789
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-jb-navy text-white hover:bg-jb-navy"
                >
                  Continue
                </Button>
              </form>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Need help?</h3>
              <Link
                href="/find-confirmation"
                className="inline-flex items-center text-jb-blue hover:underline"
              >
                Find your confirmation code
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
