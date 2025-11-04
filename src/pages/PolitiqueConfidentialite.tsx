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
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              DAR DESIGN s'engage à protéger la confidentialité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Données collectées</h2>
            <p className="text-muted-foreground mb-3">
              Nous pouvons collecter les types de données suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Données de communication :</strong> messages envoyés via le formulaire de contact ou les réseaux sociaux</li>
              <li><strong>Cookies :</strong> fichiers stockés sur votre appareil pour améliorer votre expérience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Utilisation des données</h2>
            <p className="text-muted-foreground mb-3">
              Vos données personnelles sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Répondre à vos demandes et questions</li>
              <li>Traiter vos commandes et projets</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Partage des données</h2>
            <p className="text-muted-foreground">
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-2">
              <li>Avec des prestataires de services (hébergement, paiement) sous contrat de confidentialité</li>
              <li>Si requis par la loi ou une autorité judiciaire</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Sécurité des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune méthode de transmission sur Internet n'est totalement sécurisée.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Vos droits</h2>
            <p className="text-muted-foreground mb-3">
              Conformément à la législation en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit de limitation :</strong> demander la limitation du traitement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Conservation des données</h2>
            <p className="text-muted-foreground">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales applicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Liens externes</h2>
            <p className="text-muted-foreground">
              Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites. Nous vous recommandons de consulter leurs politiques de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Modifications de la politique</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
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