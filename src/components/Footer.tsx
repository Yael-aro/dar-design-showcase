import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/DarDesign.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
        {/* Logo centré */}
        <div className="flex flex-col items-center space-y-4">
          <img src={logo} alt="Dar Design logo" className="h-32 w-auto" />
          <p className="text-primary-foreground/80 text-center text-sm">
            Transformons vos idées en créations uniques depuis 2024.
          </p>
        </div>

        {/* Sections du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center md:text-left">
          {/* Navigation */}
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
              <li>dar.design33@gmail.com</li>
              <li>+212-710157075 </li>
              <li className="flex justify-center md:justify-start gap-3 pt-2">
                <a
                  href="https://www.instagram.com/dar_design.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/+212-710157075"
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
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60 space-y-2">
          <p>© 2025 DAR DESIGN. Tous droits réservés.</p>
          <p>
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