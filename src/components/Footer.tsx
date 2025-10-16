import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span>DAR</span>
              <span className="text-accent"> DESIGN</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transformons vos idées en créations uniques depuis 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nos réalisations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  À propos
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Impression textile</li>
              <li>Design graphique</li>
              <li>Accessoires personnalisés</li>
              <li>Branding & Logos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>contact@dardesign.ma</li>
              <li>+212 6 00 00 00 00</li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 DAR DESIGN. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-accent transition-colors">
              Mentions légales
            </a>
            {" | "}
            <a href="#" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
