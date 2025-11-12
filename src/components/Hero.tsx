import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-printing.jpg";
import heroImage2 from "@/assets/hero-change.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Images avec transition */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`DAR DESIGN Studio ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fade-in py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
            Exprime ton style avec{" "}
            <span className="text-accent block sm:inline mt-2 sm:mt-0">DAR DESIGN</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
            Nous imprimons tes idées sur t-shirts, mugs, tote bags, affiches et
            plus encore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-6 px-4">
            <Button
              onClick={() => scrollToSection("portfolio")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-6"
            >
              Voir nos créations
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:shadow-[0_0_30px_hsl(45_100%_55%/0.6)] transition-all text-base md:text-lg px-6 md:px-8 py-6"
            >
              Commander maintenant
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Caché sur mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-4 md:bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70 w-3"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;