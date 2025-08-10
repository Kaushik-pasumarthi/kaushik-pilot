import { useState } from "react";
import { Mail, Github, Twitter, Send, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import MatrixRain from "./MatrixRain";

const CyberContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "I'll get back to you soon! ✨" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16 animate-matrix-fade">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 neon-text animate-neon-pulse">
            ./get_in_touch
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Let's chat about code, anime, or piano! ☕🎹
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="cyber-border glow-matrix bg-card/50 backdrop-blur-lg">
            <CardContent>
              <div className="flex justify-center space-x-6 pt-8">
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
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-2.451 0-4.438-1.987-4.438-4.437S5.998 8.114 8.449 8.114s4.437 1.987 4.437 4.437-1.986 4.437-4.437 4.437zm7.072 0c-2.451 0-4.437-1.987-4.437-4.437S13.07 8.114 15.521 8.114s4.437 1.987 4.437 4.437-1.986 4.437-4.437 4.437z"/>
                    </svg>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CyberContact;