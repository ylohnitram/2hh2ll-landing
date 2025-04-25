
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="2HH2LL Logo" className="h-8" />
          </Link>
          <Button variant="outline" asChild>
            <a href="#subscribe">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

