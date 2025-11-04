import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PolitiqueConfidentialite = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Politique de Confidentialité</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Nature du site</h2>
            <p className="text-muted-foreground">
              Ce site est un site vitrine présentant les services de DAR DESIGN. Nous ne collectons aucune donnée personnelle directement via ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Données collectées</h2>
            <p className="text-muted-foreground">
              Ce site ne collecte pas de données personnelles. Aucun formulaire de contact n'est présent sur le site. Si vous nous contactez via Instagram, WhatsApp ou email, les données que vous partagez sont gérées selon les politiques de confidentialité de ces plateformes respectives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Cookies</h2>
            <p className="text-muted-foreground">
              Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Hébergement</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par Vercel. L'hébergeur peut collecter des données techniques (adresse IP, logs) pour assurer le bon fonctionnement et la sécurité du site. Ces données sont conservées conformément à la politique de Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Liens externes</h2>
            <p className="text-muted-foreground">
              Notre site contient des liens vers nos réseaux sociaux (Instagram, WhatsApp). Ces plateformes ont leurs propres politiques de confidentialité que nous vous invitons à consulter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Vos droits</h2>
            <p className="text-muted-foreground">
              Même si nous ne collectons pas de données via ce site, vous disposez de droits concernant vos données personnelles. Pour toute question, vous pouvez nous contacter aux coordonnées indiquées ci-dessous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. Contact</h2>
            <p className="text-muted-foreground mb-3">
              Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Par email : dar.design33@gmail.com</li>
              <li>Par téléphone : +212 710 157 075</li>
              <li>Via Instagram : @dar_design.pro</li>
              <li>Via WhatsApp : +212 710 157 075</li>
            </ul>
          </section>

          <p className="text-sm text-muted-foreground italic mt-12">
            Dernière mise à jour : Novembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;