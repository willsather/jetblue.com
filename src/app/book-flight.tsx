import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, ChevronDown, Plane } from "lucide-react";

export default function BookFlight() {
  return (
    <div className="relative bg-jb-navy text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://www.jetblue.com/magnoliapublic/dam/Booker-Pattern_Pink_wOverlay_1980x1080.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative mx-auto px-4 py-12">
        <h1 className="relative mb-12 text-center font-bold text-4xl text-white">
          Celebrating 25 years, nonstop.
        </h1>

        <Card className="relative mx-auto max-w-4xl">
          <CardContent className="p-6">
            <Tabs defaultValue="flights" className="mb-6">
              <TabsList>
                <TabsTrigger value="flights" className="gap-2">
                  <Plane className="h-4 w-4" />
                  Flights
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="trip-type">Trip Type</Label>
                  <Button variant="outline" className="w-full justify-between">
                    Round Trip
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </div>
                <div className="flex-1">
                  <Label htmlFor="passengers">Passengers</Label>
                  <Button variant="outline" className="w-full justify-between">
                    1 Adult
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="from">From</Label>
                  <Input id="from" placeholder="San Francisco area" />
                </div>
                <div>
                  <Label htmlFor="to">To</Label>
                  <Input id="to" placeholder="Select destination" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Depart</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Pick a date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label>Return</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Pick a date
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="use-points" />
                  <Label htmlFor="use-points">Use TrueBlue points</Label>
                </div>
                <Button className="bg-jb-navy hover:bg-jb-navy/80">
                  Search flights
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
