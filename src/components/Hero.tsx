import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DAR DESIGN Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Exprime ton style avec{" "}
            <span className="text-accent">DAR DESIGN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Nous imprimons tes idées sur t-shirts, mugs, tote bags, affiches et
            plus encore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-primary text-lg px-8"
            >
              Voir nos créations
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-accent text-accent-foreground hover:shadow-[0_0_30px_hsl(45_100%_55%/0.6)] transition-all text-lg px-8"
            >
              Commander maintenant
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
