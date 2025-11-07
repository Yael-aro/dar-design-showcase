import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentionsLegales = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Mentions Légales</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Informations légales</h2>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Nom de l'entreprise :</strong> DAR DESIGN</p>
              <p><strong>Email :</strong> contact@dardesign.pro </p>
              <p><strong>Téléphone :</strong> +212 710 157 075</p>
              <p><strong>Adresse :</strong> Settat, Casablanca-Settat, Maroc</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Responsable de la publication</h2>
            <p className="text-muted-foreground">
              Le responsable de la publication du site www.dardesign.pro est DAR DESIGN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Hébergement</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par un prestataire d'hébergement web professionnel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de DAR DESIGN, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord écrit préalable de DAR DESIGN.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              DAR DESIGN s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DAR DESIGN ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-muted-foreground mt-4">
              En conséquence, DAR DESIGN décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Liens hypertextes</h2>
            <p className="text-muted-foreground">
              Le site peut contenir des liens hypertextes vers d'autres sites. DAR DESIGN n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Droit applicable</h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont régies par le droit marocain. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents du Maroc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant les mentions légales, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Par email : contact@dardesign.pro</li>
              <li>Par téléphone : +212 710 157 075</li>
              <li >Via Instagram : @dar_design.pro</li>
              <li>Via WhatsApp : +212 710 157 075</li>
            </ul>
          </section>

          <p className="text-sm text-muted-foreground italic mt-12">
            Dernière mise à jour : Novembre 2025-11-4
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;