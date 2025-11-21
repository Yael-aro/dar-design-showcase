import { useState, useEffect } from "react";
import { Construction, Clock, Mail, Instagram, MessageCircle, Phone, CalendarDays, Users, Sparkles, AlertTriangle } from "lucide-react";
import logo from "@/assets/DarDesign.png";

const UnderConstruction2008 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [visitorCount] = useState(Math.floor(Math.random() * 10000) + 5000);

  const currentDate = new Date();

  const launchDate = new Date("2024-11-28T00:00:00").getTime();

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
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #000080 0%, #0000CD 50%, #4169E1 100%)',
    }}>
      
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">

        {/* Top banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-black p-2 mb-4 border-4 border-black shadow-xl animate-rainbow">
          <marquee className="font-bold text-lg">
            <Sparkles size={20} /> BIENVENUE SUR DARDESIGN.PRO • SITE EN CONSTRUCTION • RESTEZ CONNECTÉS <Sparkles size={20} />
          </marquee>
        </div>

        {/* Visitor counter */}
        <div className="flex justify-between mb-4 text-white text-sm">
          <div className="bg-black/50 px-4 py-2 border-2 border-lime-400 flex items-center gap-2">
            <CalendarDays size={16} className="text-lime-400" />
            {currentDate.toLocaleString('fr-FR')}
          </div>
          <div className="bg-black/50 px-4 py-2 border-2 border-lime-400 animate-pulse flex items-center gap-2">
            <Users size={16} className="text-lime-400" />
            Visiteur #{visitorCount}
          </div>
        </div>

        {/* Main content box */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-400 border-8 shadow-2xl p-8 mb-4" style={{
          borderImage: 'linear-gradient(45deg, #FFD700, #FF4500, #FFD700) 1',
        }}>

          {/* Logo */}
          <div className="text-center mb-6">
            <img 
              src={logo} 
              alt="DAR DESIGN Logo" 
              className="w-48 h-48 mx-auto animate-bounce-slow drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px #FFD700) drop-shadow(0 0 40px #FF4500)',
              }}
            />
          </div>

          {/* Construction icons */}
          <div className="text-center mb-6">
            <div className="inline-block relative">
              <Construction size={120} className="animate-spin-slow text-yellow-400" strokeWidth={3} />
              <AlertTriangle size={60} className="absolute -top-4 -right-4 animate-bounce text-red-500" />
              <AlertTriangle size={60} className="absolute -top-4 -left-4 animate-bounce text-red-500" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center mb-4 relative">
            <span className="absolute inset-0 text-6xl font-black text-red-600 blur-sm">
              UNDER CONSTRUCTION
            </span>
            <span className="relative text-6xl font-black text-yellow-300" style={{
              textShadow: '4px 4px 0px #FF0000, 8px 8px 0px #0000FF',
              WebkitTextStroke: '2px black',
            }}>
              UNDER CONSTRUCTION
            </span>
          </h1>

          {/* Blink text */}
          <p className="text-center text-2xl font-bold mb-6 animate-blink" style={{
            color: '#FF00FF',
            textShadow: '2px 2px 4px #000',
          }}>
            *** SITE BIENTÔT DISPONIBLE ***
          </p>

          {/* Countdown */}
          <div className="bg-black p-6 border-4 border-yellow-400 mb-6">
            <h2 className="text-center text-lime-400 text-2xl font-bold mb-4 animate-pulse flex items-center justify-center gap-2">
              <Clock size={32} />
              COMPTE À REBOURS
              <Clock size={32} />
            </h2>

            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "JOURS", value: timeLeft.days },
                { label: "HEURES", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-b from-red-600 to-red-900 border-4 border-yellow-300 p-4 transform hover:scale-110 transition-transform"
                >
                  <div className="text-5xl font-bold text-yellow-300 mb-1" style={{
                    textShadow: '3px 3px 0px #000',
                    fontFamily: 'Impact, fantasy',
                  }}>
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-white font-bold tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email signup */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 p-6 border-4 border-yellow-400 mb-6">
            <h3 className="text-center text-white text-xl font-bold mb-4 flex items-center justify-center gap-2" style={{
              textShadow: '2px 2px 4px #000',
            }}>
              <Mail size={24} />
              NEWSLETTER
              <Mail size={24} />
            </h3>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-2 border-4 border-black font-bold text-lg"
                required
                style={{
                  background: 'linear-gradient(180deg, #FFF 0%, #E0E0E0 100%)',
                }}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-b from-lime-400 to-lime-600 border-4 border-black font-bold text-xl hover:scale-105 transition-all"
                style={{ textShadow: '1px 1px 2px #000' }}
              >
                GO!
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="text-center mb-6">
            <p className="text-xl font-bold mb-4 animate-pulse flex items-center justify-center gap-2" style={{
              color: '#00FF00',
              textShadow: '2px 2px 4px #000',
            }}>
              <Sparkles size={24} />
              SUIVEZ-NOUS
              <Sparkles size={24} />
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/dar_design.pro/"
                target="_blank"
                className="bg-gradient-to-b from-pink-500 to-pink-700 px-6 py-3 border-4 border-black font-bold text-white hover:rotate-3 transition-all flex items-center gap-2"
              >
                <Instagram size={24} /> INSTAGRAM
              </a>

              <a
                href="https://wa.me/212710157075"
                target="_blank"
                className="bg-gradient-to-b from-green-500 to-green-700 px-6 py-3 border-4 border-black font-bold text-white hover:-rotate-3 transition-all flex items-center gap-2"
              >
                <MessageCircle size={24} /> WHATSAPP
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-yellow-300 border-4 border-black p-4 text-center">
            <p className="font-bold text-black mb-2 flex items-center justify-center gap-2">
              <Phone size={20} />
              CONTACT
              <Phone size={20} />
            </p>

            <p className="text-sm">
              <a href="mailto:contact@dardesign.pro" className="text-blue-600 underline font-bold">
                contact@dardesign.pro
              </a>
              {" | "}
              <a href="tel:+212710157075" className="text-blue-600 underline font-bold">
                +212 710 157 075
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black text-lime-400 p-2 border-4 border-lime-400 text-center font-mono text-sm">
          © 2024 DARDESIGN.PRO | POWERED BY YAHYA EL AROUSY | BEST VIEWED IN 1024x768
        </div>

        {/* NEW badge */}
        <div className="fixed top-4 right-4 animate-bounce">
          <div className="bg-red-600 text-yellow-300 font-black text-2xl px-4 py-2 border-4 border-yellow-300 transform rotate-12" style={{
            textShadow: '2px 2px 0px #000',
          }}>
            NEW!
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-rainbow { animation: rainbow 3s linear infinite; }
        .animate-blink { animation: blink 1s step-start infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        marquee { display: block; }
      `}</style>
    </div>
  );
};

export default UnderConstruction2008;
