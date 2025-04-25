
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Objevte sílu tradingu s metodou 2HH2LL
          </h1>
          <p className="text-xl text-gray-600">
            Jedinečná obchodní strategie, která vám pomůže dosáhnout konzistentních výsledků na finančních trzích
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#subscribe">
                <TrendingUp className="mr-2 h-5 w-5" />
                Chci vědět více
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
