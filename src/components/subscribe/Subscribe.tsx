
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically integrate with your email service
      console.log("Submitted email:", email);
      toast({
        title: "Děkujeme za váš zájem!",
        description: "Brzy vás budeme kontaktovat s dalšími informacemi.",
      });
      setEmail("");
    }
  };

  return (
    <div id="subscribe" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <h2 className="text-3xl font-bold">Buďte první, kdo se dozví o spuštění</h2>
        <p className="text-gray-600">
          Přihlaste se k odběru novinek a získejte přednostní přístup k metodě 2HH2LL
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Váš email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">
            <Mail className="mr-2 h-5 w-5" />
            Přihlásit
          </Button>
        </form>
      </div>
    </div>
  );
}
