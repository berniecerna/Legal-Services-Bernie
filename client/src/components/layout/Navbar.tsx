import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Logo_-_Silver_with_white_background_1772057157870.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const hash = href.replace("/", "");
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      setLocation("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meet Bernie", href: "/meet-bernie" },
    { name: "Services", href: "/#services" },
    { name: "About Our Logo", href: "/#logo" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="flex flex-col ml-[-20px] mr-[-20px]">
                <span className="font-heading font-bold tracking-tight text-foreground ml-[20px] mr-[20px] text-[45px]">
                  Attorney Bernie
                </span>
                <span className="text-muted-foreground uppercase tracking-widest font-medium ml-[20px] mr-[20px] text-[25px] mt-[0px] mb-[0px]">
                  Legal Services
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === "/" ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleHomeClick}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  {link.name}
                </Link>
              )
            )}
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
            {navLinks.map((link) =>
              link.href === "/" ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { handleHomeClick(e); setIsMenuOpen(false); }}
                  className="py-4 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ) : link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-4 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={(e) => { handleHashClick(e, link.href); setIsMenuOpen(false); }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-4 border-b border-border/50 text-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0 }); }}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button className="mt-6 bg-primary w-full rounded-full">
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
