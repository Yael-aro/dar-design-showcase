import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>DAR DESIGN - Impression Textile & Design Graphique Settat Maroc</title>
      <meta name="description" content="DAR DESIGN à Settat : Spécialiste impression textile, t-shirts personnalisés, sweatshirts, design graphique, sérigraphie. Qualité professionnelle au Maroc." />
      <meta name="keywords" content="impression textile Maroc, design graphique Settat, t-shirt personnalisé, sweatshirt Maroc, sérigraphie Settat, DAR DESIGN, impression Settat, personnalisation vêtements" />
      
      {/* Open Graph pour réseaux sociaux */}
      <meta property="og:title" content="DAR DESIGN - Impression Textile Settat" />
      <meta property="og:description" content="Votre partenaire créatif pour l'impression textile et le design graphique à Settat" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ton-site.vercel.app" />
      
      {/* Localisation */}
      <meta name="geo.region" content="MA-CAS" />
      <meta name="geo.placename" content="Settat" />
    </Helmet>
  );
};

export default SEO;