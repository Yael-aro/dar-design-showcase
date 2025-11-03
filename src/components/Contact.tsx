import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpwdqvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue, réessayez plus tard.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d’envoyer le message.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-accent">nous</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une idée en tête ? Parlons-en et créons ensemble quelque chose d’unique
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
                  type="tel"
                  placeholder="Numéro de téléphone *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-background"
                />
              </div>

              <div>
                <Input
                  placeholder="Type de projet (ex : T-shirt, Mug, Logo…)"
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
          {/* … ton bloc « Nos coordonnées / Suivez-nous / Horaires » reste inchangé … */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
