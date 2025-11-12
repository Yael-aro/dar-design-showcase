import { Construction, X, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

const MaintenanceBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu le modal
    const hasSeenModal = sessionStorage.getItem("hasSeenMaintenanceModal");
    
    if (!hasSeenModal) {
      // Afficher le modal après 1 seconde
      setTimeout(() => {
        setShowModal(true);
      }, 1000);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem("hasSeenMaintenanceModal", "true");
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {/* Bannière sticky en haut */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-4 shadow-lg animate-slide-down">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Construction size={24} className="animate-bounce" />
              <div className="flex-1">
                <p className="font-semibold text-sm md:text-base">
                  🚧 Site en développement - Certaines fonctionnalités peuvent être indisponibles
                </p>
              </div>
            </div>
            <button
              onClick={handleCloseBanner}
              className="ml-4 hover:bg-black/10 p-1 rounded transition-colors flex-shrink-0"
              aria-label="Fermer la bannière"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Modal popup au centre */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
          {/* Overlay sombre */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleCloseModal}
          />
          
          {/* Contenu du modal */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
            {/* Bouton fermer */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            {/* Icône */}
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-full">
                <Construction size={48} className="text-yellow-600 dark:text-yellow-500" />
              </div>
            </div>

            {/* Titre */}
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Site en Construction
            </h2>

            {/* Message */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <AlertCircle className="text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" size={20} />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <p className="font-semibold mb-1">Notre site est actuellement en développement</p>
                  <p>
                    Certaines fonctionnalités peuvent ne pas fonctionner correctement. 
                    Merci de votre patience !
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Vous pouvez continuer à naviguer et découvrir nos services. 
                Le site complet sera bientôt disponible ! 🚀
              </p>
            </div>

            {/* Bouton */}
            <button
              onClick={handleCloseModal}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              J'ai compris, continuer
            </button>

            {/* Note */}
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
              Ce message ne s'affichera qu'une seule fois par session
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default MaintenanceBanner;