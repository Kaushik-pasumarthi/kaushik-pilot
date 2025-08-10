import { useState } from "react";
import { ExternalLink, Github, Star, Coffee, Music, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MatrixRain from "./MatrixRain";

const CyberProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
  
    {
      id: 1,
      title: "NextInvest AI",
      description: "AI-powered financial assistant using Gemini API",
      longDescription: "Built an intelligent financial advisor that analyzes spending habits, suggests budgets, and provides investment insights. Uses Gemini API for natural language processing and smart recommendations.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["JavaScript", "Python", "Gemini API", "Financial APIs"],
      liveUrl: "https://github.com/Kaushik-pasumarthi/NextInvest",
      githubUrl: "https://github.com/Kaushik-pasumarthi/NextInvest",
      status: "Managing finances smartly",
      emoji: "💰",
      metrics: {
        accuracy: "89%",
        users: "150+",
        rating: "Profitable/10"
      }
    },
    {
      id: 2,
      title: "Dream Logger AI",
      description: "NLP-powered dream interpretation web app",
      longDescription: "Innovative web app that interprets dreams using NLP and sentiment analysis. Features AI-generated dream visuals, mood detection, and pattern analysis. Built with Flask backend and modern frontend.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "NLP", "Flask", "Hugging Face APIs"],
      liveUrl: "https://dream-logger-ai.onrender.com/",
      githubUrl: "https://github.com/kauhsikkk/dream-logger-ai",
      status: "Analyzing dreams",
      emoji: "💭",
      metrics: {
        dreams: "500+",
        accuracy: "87%",
        rating: "Dreamy/10"
      }
    },
      {
      id: 3,
      title: "Crime Prevention DB",
      description: "Predictive crime prevention with interactive dashboards",
      longDescription: "Built an AI-powered system that analyzes crime patterns and predicts high-risk areas. Features real-time dashboards for police departments and citizens. Won Hack4SDG hackathon as team lead!",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["React", "Python", "Machine Learning", "Real-time Analytics"],
      liveUrl: "stackblitz.com/edit/sb1-gkkwyj",
      githubUrl: "https://github.com/Kaushik-pasumarthi/hack4sdg_prototype",
      status: "Hackathon Winner 🏆",
      emoji: "🚔",
      metrics: {
        accuracy: "94%",
        dashboards: "5+",
        rating: "Winner/10"
      }
    },

    {
      id: 4,
      title: "Restaurant Management System",
      description: "Full-stack SQL database system for restaurants",
      longDescription: "Comprehensive restaurant management system with Oracle SQL backend. Optimized data retrieval by 50% and handles menu management, orders, inventory, and customer data efficiently.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Oracle SQL", "DBMS", "Backend Optimization"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Kaushik-pasumarthi",
      status: "Serving customers efficiently",
      emoji: "🍽️",
      metrics: {
        optimization: "50%",
        tables: "25+",
        rating: "Efficient/10"
      }
    },
    
  ];

  const categories = [
    { id: "all", label: "all projects", emoji: "🚀" },
    { id: "ai", label: "AI/ML projects", emoji: "🤖" },
    { id: "web", label: "web apps", emoji: "🌐" },
    { id: "music", label: "music related", emoji: "🎵" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-12 animate-matrix-fade">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-4 turquoise-text animate-glitch">
            ./my_projects
          </h2>
          <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
            <span className="neon-text">$</span> Real projects solving real problems 🎯
          </p>
        </div>

        {/* Simple Projects List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="cyber-border glow-turquoise bg-card/50 backdrop-blur-lg p-6 rounded-lg hover:glow-cyber transition-glow animate-matrix-fade"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-xl font-orbitron font-semibold turquoise-text">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-mono mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono bg-primary/10 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 md:flex-col lg:flex-row">
                  <Button
                    size="sm"
                    variant="outline"
                    className="cyber-border hover:glow-turquoise font-mono"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cyber-border hover:glow-turquoise font-mono"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberProjects;