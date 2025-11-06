import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

const portfolioItems = [
  {
    title: "Sweatshirt à capuche Personnalisé",
    category: "Impression textile",
    image: portfolio1,
  },
  {
    title: "T-Shirt Personnalisé",
    category: "Accessoires",
    image: portfolio2,
  },
  {
    title: "Sweatshirt à capuche Sérigraphié",
    category: "Impression textile",
    image: portfolio3,
  },
  {
    title: "Poster Artistique",
    category: "Design graphique",
    image: portfolio4,
  },
  {
    title: "Casquette sur mesure",
    category: "Broderie",
    image: portfolio5,
  },
  {
    title: "Tote Bag Écologique",
    category: "Impression textile",
    image: portfolio6,
  },
  {
    title: "Logo d’entreprise minimaliste",
    category: "Design graphique",
    image: portfolio7,
  },
  {
    title: "Carte de visite Premium",
    category: "Impression & Branding",
    image: portfolio8,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-accent">Réalisations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvre quelques-unes de nos créations pour nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-accent text-sm font-medium mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
