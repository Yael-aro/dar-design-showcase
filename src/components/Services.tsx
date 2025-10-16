import { Card, CardContent } from "@/components/ui/card";
import serviceTextile from "@/assets/service-textile.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceAccessories from "@/assets/service-accessories.jpg";
import serviceBranding from "@/assets/service-branding.jpg";

const services = [
  {
    title: "Impression sur textile",
    description: "T-shirts, sweats, hoodies personnalisés avec des impressions haute qualité",
    image: serviceTextile,
  },
  {
    title: "Design graphique sur mesure",
    description: "Créations uniques adaptées à ton style et tes besoins",
    image: serviceDesign,
  },
  {
    title: "Impression sur accessoires",
    description: "Mugs, coques de téléphone, tote bags et plus encore",
    image: serviceAccessories,
  },
  {
    title: "Branding et logos",
    description: "Identité visuelle complète et logos professionnels",
    image: serviceBranding,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour transformer tes idées en créations tangibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(0_0%_0%/0.2)] hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
