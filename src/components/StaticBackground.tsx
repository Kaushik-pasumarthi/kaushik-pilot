const StaticBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Darker creative geometric pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(180 100% 50% / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(180 100% 50% / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Enhanced decorative circles */}
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary/15 rounded-full"></div>
        <div className="absolute top-60 right-32 w-32 h-32 border border-accent/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 border border-primary/10 rounded-full"></div>
        <div className="absolute bottom-80 right-20 w-24 h-24 border border-accent/15 rounded-full"></div>
        
        {/* Geometric shapes with glow */}
        <div className="absolute top-1/3 left-10 w-12 h-12 bg-primary/8 rotate-45 rounded-sm"></div>
        <div className="absolute top-1/2 right-16 w-8 h-8 bg-accent/10 rotate-12 rounded-sm"></div>
        <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-primary/6 rotate-45 rounded-sm"></div>
        
        {/* Code-inspired elements - larger and more visible */}
        <div className="absolute top-1/4 right-1/4 font-mono text-6xl text-primary/15 select-none font-bold">
          {"{"}
        </div>
        <div className="absolute bottom-1/4 left-1/4 font-mono text-5xl text-accent/15 select-none font-bold">
          {"</"}
        </div>
        <div className="absolute top-3/4 right-1/3 font-mono text-4xl text-primary/15 select-none font-bold">
          {"()"}
        </div>
        <div className="absolute top-1/2 left-1/5 font-mono text-3xl text-accent/12 select-none">
          {"[]"}
        </div>
        
        {/* Musical notes */}
        <div className="absolute top-1/2 left-1/4 text-4xl text-accent/20 select-none">
          ♪
        </div>
        <div className="absolute bottom-1/2 right-1/4 text-3xl text-primary/18 select-none">
          ♫
        </div>
        <div className="absolute top-1/3 right-1/5 text-2xl text-accent/15 select-none">
          ♬
        </div>
      </div>
      
      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
    </div>
  );
};

export default StaticBackground;