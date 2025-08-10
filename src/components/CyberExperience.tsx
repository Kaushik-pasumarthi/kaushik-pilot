import MatrixRain from "./MatrixRain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CyberExperience = () => {
  return (
    <section id="experience" aria-label="Experience" className="py-10 bg-background relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-20 animate-matrix-fade">
        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold mb-4 turquoise-text animate-glitch">
          ./experience
        </h2>
        <Card className="bg-card/60 backdrop-blur border-primary/20">
          <CardHeader>
            <CardTitle className="font-orbitron text-2xl">
              Infosys Springboard Virtual Internship 6.0
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Ongoing...</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CyberExperience;
