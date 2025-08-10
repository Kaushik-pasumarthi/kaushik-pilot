import { useState, useEffect } from "react";
import { Menu, X, Terminal, Music, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CyberNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "~/home", href: "#home" },
    { label: "~/about", href: "#about" },
    { label: "~/projects", href: "#projects" },
    { label: "~/contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-primary/30 shadow-2xl"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Cyber Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-matrix rounded cyber-border flex items-center justify-center animate-neon-pulse">
              <Terminal className="h-5 w-5 text-background" />
            </div>
            <div>
              <span className="font-orbitron font-bold text-lg matrix-text animate-glitch">
                &gt; kaushik
              </span>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Gamepad2 className="h-3 w-3" />
                <span>coding Nerd</span>
                <Music className="h-3 w-3" />
                <span>Pianist/Artist</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-sm hover-matrix relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-matrix transition-glow group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-neon hover:opacity-90 font-mono text-sm glow-neon"
            >
              ./chat_with_me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-matrix"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-black/98 backdrop-blur-xl rounded-lg border border-primary/30 shadow-2xl animate-matrix-fade">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-6 py-3 font-mono text-base hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg border border-transparent hover:border-primary/30"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 font-mono text-base py-3 rounded-lg shadow-lg"
                >
                  ./chat_with_me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CyberNav;