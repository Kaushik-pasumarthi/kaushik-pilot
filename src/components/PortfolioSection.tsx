import { useState } from "react";
import { ExternalLink, Github, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React and Node.js",
      longDescription: "Complete e-commerce platform featuring user authentication, payment processing, inventory management, and admin dashboard. Built with React, TypeScript, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: {
        users: "10K+",
        performance: "98%",
        rating: 4.9
      },
      testimonial: {
        text: "The platform exceeded our expectations in both functionality and design.",
        author: "Sarah Johnson",
        role: "Product Manager"
      }
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription: "Full-featured project management application with team collaboration, real-time updates, file sharing, and advanced reporting. Features drag-and-drop interface and mobile responsiveness.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: {
        users: "5K+",
        performance: "96%",
        rating: 4.8
      },
      testimonial: {
        text: "This tool transformed how our team collaborates on projects.",
        author: "Mike Chen",
        role: "Team Lead"
      }
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard for business intelligence",
      longDescription: "Advanced analytics dashboard powered by machine learning algorithms, featuring predictive analytics, data visualization, and automated reporting. Handles large datasets with real-time processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: {
        users: "2K+",
        performance: "94%",
        rating: 4.9
      },
      testimonial: {
        text: "The insights we get from this dashboard are game-changing.",
        author: "Lisa Rodriguez",
        role: "Data Scientist"
      }
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "React Native app for fitness tracking and social motivation",
      longDescription: "Cross-platform mobile application for fitness tracking, workout planning, and social motivation. Features GPS tracking, workout analytics, social challenges, and integration with wearable devices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Maps API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      metrics: {
        users: "15K+",
        performance: "95%",
        rating: 4.7
      },
      testimonial: {
        text: "This app keeps me motivated and connected with my fitness goals.",
        author: "Alex Thompson",
        role: "Fitness Enthusiast"
      }
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI/ML Projects" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving
            across various domains and technologies.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`transition-smooth ${
                  activeFilter === category.id 
                    ? "bg-gradient-primary" 
                    : "hover-lift"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="shadow-soft hover-lift transition-smooth overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="glass-effect hover-glow"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="glass-effect hover-glow"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-playfair mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{project.metrics.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Long Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-primary mr-1" />
                      <span className="font-semibold text-sm">{project.metrics.users}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Users</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap className="h-4 w-4 text-accent mr-1" />
                      <span className="font-semibold text-sm">{project.metrics.performance}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Performance</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                      <span className="font-semibold text-sm">{project.metrics.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="text-sm italic mb-2">"{project.testimonial.text}"</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">{project.testimonial.author}</span>
                    <span className="mx-1">•</span>
                    <span>{project.testimonial.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with clean code,
                modern design, and exceptional user experience.
              </p>
              <Button 
                className="bg-gradient-accent hover:opacity-90 transition-smooth"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;