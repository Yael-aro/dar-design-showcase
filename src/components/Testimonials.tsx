import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Salma",
    text: "Super qualité d'impression ! Je recommande vivement DAR DESIGN pour tous vos projets créatifs.",
    rating: 5,
  },
  {
    name: "Amine",
    text: "Mon logo rendu parfait sur mon t-shirt. L'équipe est professionnelle et à l'écoute.",
    rating: 5,
  },
  {
    name: "Yasmine",
    text: "Service impeccable, délais respectés. Mes tote bags personnalisés sont magnifiques !",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Avis <span className="text-accent">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de leur expérience avec DAR DESIGN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    — {testimonial.name}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
