
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          toast({
            title: "Tento e-mail je již zaregistrován",
            description: "Děkujeme za váš zájem!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Děkujeme za přihlášení!",
          description: "Budeme vás informovat o novinkách.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Nastala chyba",
        description: "Zkuste to prosím později.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="subscribe" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <h2 className="text-3xl font-bold">Buďte první, kdo se dozví o našem spuštění</h2>
        <p className="text-gray-600">
          Přihlaste se k odběru novinek a získejte prioritní přístup k metodě 2HH2LL
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Váš e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Mail className="mr-2 h-5 w-5" />
            {isLoading ? "Odesílám..." : "Odebírat"}
          </Button>
        </form>
      </div>
    </div>
  );
}

