import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src={aboutImage}
              alt="Équipe DAR DESIGN"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Qui sommes-<span className="text-accent">nous</span> ?
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <span className="text-accent font-semibold">DAR DESIGN</span>, c'est
                la fusion entre créativité et qualité. Nous transformons vos idées en
                créations uniques grâce à notre expertise en design et impression.
              </p>
              
              <p>
                Notre mission est de donner vie à votre imagination en offrant des
                produits personnalisés de haute qualité qui reflètent votre
                personnalité et votre style unique.
              </p>
              
              <p>
                Que ce soit pour un projet personnel, professionnel ou un cadeau
                spécial, nous mettons tout notre savoir-faire à votre service pour
                créer quelque chose d'exceptionnel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">48h</div>
                <div className="text-sm text-muted-foreground">Livraison rapide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
