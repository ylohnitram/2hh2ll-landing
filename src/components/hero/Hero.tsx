
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover the Power of Trading with the 2HH2LL Method
          </h1>
          <p className="text-xl text-gray-600">
            A Unique Trading Strategy to Help You Achieve Consistent Results in Financial Markets
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#subscribe">
                <TrendingUp className="mr-2 h-5 w-5" />
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

