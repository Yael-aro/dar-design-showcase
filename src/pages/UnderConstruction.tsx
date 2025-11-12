import { Construction, Clock, Mail, Instagram, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/DarDesign.png";

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Date de lancement (15 jours à partir d'aujourd'hui)
  const launchDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Particules animées en arrière-plan */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 animate-bounce-slow">
          <img 
            src={logo} 
            alt="DAR DESIGN Logo" 
            className="w-40 h-40 mx-auto mb-6 drop-shadow-2xl"
          />
        </div>

        {/* Icône de construction */}
        <div className="mb-8">
          <Construction 
            size={80} 
            className="mx-auto text-accent animate-pulse"
          />
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Site en <span className="text-accent">Construction</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Nous préparons quelque chose d'exceptionnel pour vous ! 
          Notre nouveau site arrive bientôt avec de nouvelles fonctionnalités incroyables.
        </p>

        {/* Compte à rebours */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="text-accent" size={24} />
            <h2 className="text-2xl font-semibold text-white">Lancement dans :</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Jours", value: timeLeft.days },
              { label: "Heures", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Secondes", value: timeLeft.seconds },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-accent/50 transition-all transform hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
            <Mail className="text-accent" size={24} />
            Restez informé du lancement !
          </h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Notifier
            </button>
          </form>
        </div>

        {/* Réseaux sociaux */}
        <div className="mb-8">
          <p className="text-gray-400 mb-4">En attendant, suivez-nous sur :</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/dar_design.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:border-accent hover:bg-accent/20 transition-all transform hover:scale-110"
            >
              <Instagram size={28} className="text-white" />
            </a>
            <a
              href="https://wa.me/212710157075"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 hover:border-green-500 hover:bg-green-500/20 transition-all transform hover:scale-110"
            >
              <MessageCircle size={28} className="text-white" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-gray-400 text-sm">
          <p className="mb-2">Besoin de nous contacter ?</p>
          <a 
            href="mailto:dar.design33@gmail.com" 
            className="text-accent hover:underline"
          >
            dar.design33@gmail.com
          </a>
          <span className="mx-2">|</span>
          <a 
            href="tel:+212710157075" 
            className="text-accent hover:underline"
          >
            +212 710 157 075
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-30px) translateX(20px); 
            opacity: 0.5;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;