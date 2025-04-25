
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, TrendingUp, ChartLine } from "lucide-react";

const features = [
  {
    title: "Precise Analysis",
    description: "Leverage the 2HH2LL method to identify trading opportunities with high precision",
    icon: ChartBar,
  },
  {
    title: "Risk Management",
    description: "Protect your capital with proven risk management techniques",
    icon: TrendingUp,
  },
  {
    title: "Consistent Results",
    description: "Achieve stable results through a systematic approach to trading",
    icon: ChartLine,
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardHeader>
                <feature.icon className="h-12 w-12 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

