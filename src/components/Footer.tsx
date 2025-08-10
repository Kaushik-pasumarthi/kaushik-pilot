import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Web Development", href: "#portfolio" },
    { label: "Mobile Apps", href: "#portfolio" },
    { label: "AI Solutions", href: "#portfolio" },
    { label: "Consulting", href: "#contact" },
    { label: "Code Review", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <span className="font-playfair font-semibold text-xl">
                  John Developer
                </span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Passionate full-stack developer creating innovative digital solutions
                that bridge technology and human experience.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-accent hover:bg-white/10 transition-smooth"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-accent hover:bg-white/10 transition-smooth"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-accent hover:bg-white/10 transition-smooth"
                  asChild
                >
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-accent hover:bg-white/10 transition-smooth"
                  asChild
                >
                  <a href="mailto:john@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-accent transition-fast"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-white/80 hover:text-accent transition-fast"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:john@example.com"
                    className="text-white/80 hover:text-accent transition-fast"
                  >
                    john@example.com
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white/80 hover:text-accent transition-fast"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Location</p>
                  <p className="text-white/80">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-white/80">
              <span>© {currentYear} John Developer. Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-white/60 hover:text-white transition-fast text-sm">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-fast text-sm">
                Terms of Service
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-white hover:text-accent hover:bg-white/10 transition-smooth"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;