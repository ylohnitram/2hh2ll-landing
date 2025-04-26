
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
            title: "This email is already registered",
            description: "Thank you for your interest!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Thank you for subscribing!",
          description: "We'll keep you updated on our latest news.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="subscribe" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <h2 className="text-3xl font-bold">Be the First to Know About Our Launch</h2>
        <p className="text-gray-600">
          Sign up for our newsletter and get priority access to the 2HH2LL method
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Mail className="mr-2 h-5 w-5" />
            {isLoading ? "Sending..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
}
