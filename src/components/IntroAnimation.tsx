import { useEffect, useState } from "react";
import { Palette, Sparkles } from "lucide-react";

const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  
  const fullText = "Welcome to DAR DESIGN";
  const subText = "Ton style, notre art";

  useEffect(() => {
    // Vérifier si l'animation a déjà été vue
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (hasSeenIntro === "true") {
      setIsVisible(false);
      return;
    }

    // Animation du texte principal lettre par lettre
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Afficher le sous-texte
        setTimeout(() => setShowSubtext(true), 300);
        // Afficher les icônes
        setTimeout(() => setShowIcons(true), 600);
        // Masquer l'animation après 3 secondes
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("hasSeenIntro", "true");
        }, 4000);
      }
    }, 100); // 150ms entre chaque lettre

    return () => clearInterval(typingInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4">
        {/* Icônes décoratives */}
        {showIcons && (
          <>
            <Palette 
              className="absolute -left-16 top-1/2 -translate-y-1/2 text-accent animate-spin-slow opacity-50"
              size={48}
              style={{ animationDuration: '10s' }}
            />
            <Sparkles 
              className="absolute -right-16 top-1/2 -translate-y-1/2 text-accent animate-pulse opacity-50"
              size={48}
            />
          </>
        )}

        {/* Texte principal avec effet de curseur */}
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            {currentText}
            <span className="inline-block w-1 h-16 md:h-24 bg-accent ml-2 animate-blink" />
          </h1>
          
          {/* Ligne décorative */}
          <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-4" 
               style={{ 
                 width: showSubtext ? '100%' : '0%',
                 transition: 'width 0.8s ease-in-out'
               }}
          />
        </div>

        {/* Sous-texte avec effet de fondu */}
        {showSubtext && (
          <p className="text-xl md:text-2xl text-white/80 mt-6 animate-fade-in font-light tracking-wide">
            {subText}
          </p>
        )}

        {/* Barre de progression */}
        <div className="mt-12 w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent to-orange-500 animate-progress"
            style={{ animationDuration: '3s' }}
          />
        </div>
      </div>

      {/* Effet de brillance qui traverse l'écran */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shine"
          style={{ animationDuration: '3s' }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes shine {
          0% { left: -50%; }
          100% { left: 150%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out forwards;
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;