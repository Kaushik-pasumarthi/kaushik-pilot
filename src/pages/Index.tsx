import CyberNav from "@/components/CyberNav";
import CyberHero from "@/components/CyberHero";
import CyberAbout from "@/components/CyberAbout";
import CyberProjects from "@/components/CyberProjects";
import CyberContact from "@/components/CyberContact";
import IntroBlurb from "@/components/IntroBlurb";
import CyberExperience from "@/components/CyberExperience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CyberNav />
      <CyberHero />
      <IntroBlurb />
      <CyberExperience />
      <CyberProjects />
      <CyberAbout />
      <CyberContact />
    </div>
  );
};

export default Index;
