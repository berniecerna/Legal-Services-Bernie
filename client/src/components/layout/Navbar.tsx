import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Logo_-_Silver_with_white_background_1772057157870.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meet Bernie", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white shadow-sm border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                <img 
                  src={logoImage} 
                  alt="Attorney Bernie Logo" 
                  className="h-full w-full object-contain p-1.5 transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-tight text-foreground ml-[20px] mr-[20px]">
                  Attorney Bernie
                </span>
                <span className="text-muted-foreground uppercase tracking-widest font-medium mt-1 text-[25px] ml-[20px] mr-[20px]">
                  Legal Services
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-medium tracking-wide">
              Free Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border absolute w-full pb-4 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col container mx-auto px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="mt-6 bg-primary w-full rounded-full">
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
