import MatrixRain from "./MatrixRain";

const IntroBlurb = () => {
  return (
    <section aria-label="Quick intro" className="py-10 bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="container mx-auto px-6 relative z-20 text-center animate-matrix-fade">
        <h2 className="text-3xl lg:text-4xl font-orbitron font-bold mb-3 turquoise-text animate-glitch">
          ./intro
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
          ;)desperate to try out new stuff and do them seriously.
        </p>
        <p className="text-base lg:text-lg text-muted-foreground font-mono max-w-2xl mx-auto mt-2">
          AI/ML student who codes by day and sketches by night.
        </p>
        <p className="text-base lg:text-lg text-muted-foreground font-mono max-w-2xl mx-auto mt-2">
          Im BATMAN!
        </p>
      </div>
    </section>
  );
};

export default IntroBlurb;
