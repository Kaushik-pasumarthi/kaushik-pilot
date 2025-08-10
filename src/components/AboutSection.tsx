import { Calendar, MapPin, Award, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import workspaceImage from "@/assets/workspace.jpg";

const AboutSection = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 85 },
    { name: "Design Systems", level: 90 },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovators Inc.",
      description: "Leading development of enterprise-scale applications using modern tech stacks.",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      description: "Built and maintained multiple client projects, focusing on performance optimization.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Specialized in creating responsive, accessible web applications with smooth UX.",
    },
    {
      year: "2019",
      title: "Computer Science Graduate",
      company: "State University",
      description: "Graduated with honors, specialized in software engineering and human-computer interaction.",
    },
  ];

  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "I strive for perfection in every line of code and every user interaction.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Technology is not just my profession, it's my passion and creative outlet.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Impact",
      description: "I focus on creating solutions that make a real difference in people's lives.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions
            that combine technical excellence with human-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My journey into technology began with a simple curiosity about how things work.
                What started as tinkering with HTML in high school evolved into a deep passion
                for creating meaningful digital experiences.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, I specialize in full-stack development, focusing on React, TypeScript,
                and modern cloud technologies. I believe in writing clean, maintainable code
                and creating user interfaces that are both beautiful and functional.
              </p>
            </div>

            {/* Workspace Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-medium hover-lift transition-smooth">
              <img
                src={workspaceImage}
                alt="My workspace - clean desk setup with laptop and plants"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10"></div>
            </div>
          </div>

          {/* Skills and Timeline */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Skills */}
            <Card className="shadow-soft hover-lift transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-smooth"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Values */}
            <Card className="shadow-soft hover-lift transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-6">My Values</h3>
                <div className="space-y-4">
                  {values.map((value) => (
                    <div key={value.title} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-playfair font-semibold text-center mb-12">
            Professional Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      <Calendar className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 shadow-soft hover-lift transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-sm">
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-primary font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;