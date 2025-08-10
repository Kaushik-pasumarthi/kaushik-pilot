import { ArrowDown, Github, Twitter, Mail, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixRain from "./MatrixRain";
import professionalHeadshot from "@/assets/professional-headshot.jpg";

const CyberHero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Matrix Rain Background */}
      <MatrixRain />

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-16">
          
          {/* Left Side - Profile */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/40 bg-black/30 backdrop-blur-lg relative">
                <img
                  src={professionalHeadshot}
                  alt="Alex - Developer & Creator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="lg"
                className="hover:text-primary border border-primary/30 hover:border-primary p-4 bg-black/50 backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/Kaushik-pasumarthi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                  variant="ghost"
                  size="lg"
                  className="hover:text-primary border border-primary/30 hover:border-primary p-4 bg-black/50 backdrop-blur-sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/sai-srinivasa-kaushik-pasumarthi-019504293/" target="_blank" rel="noopener noreferrer">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </Button>
              <Button
                variant="ghost"
                size="lg"
                className="hover:text-primary border border-primary/30 hover:border-primary p-4 bg-black/50 backdrop-blur-sm"
                asChild
              >
                <a href="mailto:kaushik.pasumarthi@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary font-mono text-lg">
                  <Code2 className="h-5 w-5" />
                  <span>$ whoami</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold font-orbitron tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    KAUSHIK
                  </span>
                </h1>
              </div>
              
              <div className="font-mono text-xl text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <span>AI/ML Student & Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <span>B.Tech CSE-AIML @ VNR VJIET</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">{">"}</span>
                  <span>Artist & Code Enthusiast</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building AI-powered solutions and full-stack applications. 
                Passionate about machine learning, web development, and creating innovative tech solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-4 text-lg"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary/50 hover:border-primary hover:bg-primary/10 font-mono px-8 py-4 text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground font-mono">CGPA</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground font-mono">Hackathons</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground font-mono">interests</div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary font-mono text-sm group transition-colors"
          >
            <span className="mb-2">explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CyberHero;