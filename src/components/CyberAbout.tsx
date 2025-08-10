import { Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MatrixRain from "./MatrixRain";


const CyberAbout = () => {
  const skills = [
    { name: "Python", level: 80, icon: "🐍" },
    { name: "AI/ML", level: 70, icon: "🤖" },
    { name: "JavaScript", level: 65, icon: "⚡" },
    { name: "MERN", level: 60, icon: "⚛️" },
    { name: "UI/UX", level: 85, icon: "✏️" },

  ];


  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-matrix-fade">
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold mb-6 neon-text animate-neon-pulse">
            ./Stats
          </h2>
          <p className="text-xl text-muted-foreground font-mono max-w-3xl mx-auto">
            <span className="matrix-text">$</span> Core strengths and quick stats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-matrix-fade">
            <Card className="cyber-border glow-matrix bg-card/50 backdrop-blur-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-orbitron font-semibold mb-6 matrix-text">
                  Skills & Levels
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-mono text-base font-semibold">{skill.name}</span>
                        </div>
                        <span className="text-sm text-primary font-mono font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-4 overflow-hidden border border-primary/20">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillLoad 2s ease-out ${0.2 * index}s both, pulse 2s infinite ${1 + 0.2 * index}s`,
                            boxShadow: '0 0 15px hsl(180 100% 50% / 0.5)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-matrix-fade" style={{ animationDelay: '200ms' }}>
            <Card className="cyber-border glow-neon bg-card/50 backdrop-blur-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-orbitron font-semibold mb-6 neon-text">
                  Key Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-primary mr-2 text-xl">🧑🏿‍💻</span>
                      <span className="font-bold text-2xl matrix-text">1564</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">LEETCODE</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Music className="h-6 w-6 text-accent mr-2" />
                      <span className="font-bold text-2xl neon-text">5+</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">Piano Pieces</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-primary mr-2 text-xl">🧑🏿‍💻</span>
                      <span className="font-bold text-2xl matrix-text">975</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">CODEFORCES</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-primary mr-2 text-xl">✏️</span>
                      <span className="font-bold text-2xl neon-text">∞</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">Sketches Done</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border glow-cyber bg-card/50 backdrop-blur-lg mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-orbitron font-semibold mb-4 neon-text animate-neon-pulse">
                  Highlights
                </h3>
                <ul className="space-y-3">
                  
                  <li className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                     Technical Skills:
Python • Django • Flask • SQL • AI Agents • React • NodeJs • linux • Git • DSA • (cloud) •Trading Algorithms • UI/UX Design • ML •
                  </li>
                  
                  <li className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                     Data Structures, Algorithms, DBMS , Tableau, Google Cloud Platform, GitHub, Git, VS Code, Blender, Figm
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberAbout;