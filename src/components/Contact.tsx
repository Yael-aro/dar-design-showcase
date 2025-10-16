import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-accent">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une idée en tête ? Parlons-en et créons ensemble quelque chose d'unique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nom complet *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div>
                <Input
                  placeholder="Type de projet (ex: T-shirt, Mug, Logo...)"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Décris ton projet *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-background min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:shadow-[0_0_30px_hsl(45_100%_55%/0.6)] transition-all"
                size="lg"
              >
                Envoyer ma demande
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@dardesign.ma"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      contact@dardesign.ma
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a
                      href="tel:+212600000000"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +212 6 00 00 00 00
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:shadow-[0_0_20px_hsl(45_100%_55%/0.4)]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:shadow-[0_0_20px_hsl(45_100%_55%/0.4)]"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
              <h4 className="font-semibold text-lg mb-2">Horaires d'ouverture</h4>
              <p className="text-muted-foreground">
                Lundi - Vendredi: 9h00 - 18h00
                <br />
                Samedi: 10h00 - 16h00
                <br />
                Dimanche: Fermé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
