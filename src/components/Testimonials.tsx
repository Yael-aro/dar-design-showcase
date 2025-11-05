import { useState, useEffect } from "react";
import { MessageCircle, User, Star, Shield, Trash2 } from "lucide-react";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc, 
  query, 
  orderBy,
  Timestamp 
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Comment {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: Date;
  approved: boolean;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [pendingComments, setPendingComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModeration, setShowModeration] = useState(false);
  const [moderationPassword, setModerationPassword] = useState("");
  const ADMIN_PASSWORD = "dardesign2024"; // Change ce mot de passe !

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const commentsRef = collection(db, "comments");
      const q = query(commentsRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      
      const allComments: Comment[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        allComments.push({
          id: doc.id,
          name: data.name,
          text: data.text,
          rating: data.rating,
          date: data.date.toDate(),
          approved: data.approved,
        });
      });

      setComments(allComments.filter(c => c.approved));
      setPendingComments(allComments.filter(c => !c.approved));
    } catch (err) {
      console.error("Erreur de chargement:", err);
      setError("Erreur lors du chargement des commentaires");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) {
      setError("Veuillez remplir tous les champs et donner une note");
      return;
    }

    try {
      const newComment = {
        name: name.trim(),
        text: text.trim(),
        rating,
        date: Timestamp.now(),
        approved: false,
      };

      await addDoc(collection(db, "comments"), newComment);
      
      setName("");
      setText("");
      setRating(0);
      setError("");
      alert("Merci ! Votre commentaire sera visible après modération.");
      
      // Recharger les commentaires
      loadComments();
    } catch (err) {
      console.error("Erreur:", err);
      setError("Erreur lors de l'envoi du commentaire");
    }
  };

  const approveComment = async (comment: Comment) => {
    try {
      const commentRef = doc(db, "comments", comment.id);
      await updateDoc(commentRef, { approved: true });
      
      // Recharger les commentaires
      loadComments();
    } catch (err) {
      console.error("Erreur d'approbation:", err);
      alert("Erreur lors de l'approbation");
    }
  };

  const deleteComment = async (commentId: string) => {
    try {
      await deleteDoc(doc(db, "comments", commentId));
      
      // Recharger les commentaires
      loadComments();
    } catch (err) {
      console.error("Erreur de suppression:", err);
      alert("Erreur lors de la suppression");
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const renderStars = (currentRating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={interactive ? 24 : 20}
            className={`${
              star <= (interactive ? (hoveredStar || currentRating) : currentRating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer transition-all" : ""}`}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoveredStar(star)}
            onMouseLeave={() => interactive && setHoveredStar(0)}
          />
        ))}
      </div>
    );
  };

  const averageRating = comments.length > 0
    ? (comments.reduce((sum, c) => sum + c.rating, 0) / comments.length).toFixed(1)
    : "0";

  return (
    <section id="comments" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Avis <span className="text-accent">Clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {renderStars(Math.round(parseFloat(averageRating)))}
            <span className="text-2xl font-bold">{averageRating}/5</span>
          </div>
          <p className="text-muted-foreground">
            Basé sur {comments.length} avis vérifiés
          </p>
        </div>

        {/* Bouton Modération */}
        <div className="mb-6 text-right">
          <button
            onClick={() => setShowModeration(!showModeration)}
            className="text-sm text-muted-foreground hover:text-accent flex items-center gap-2 ml-auto"
          >
            <Shield size={16} />
            Mode modération
          </button>
        </div>

        {/* Panel Modération */}
        {showModeration && (
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="text-yellow-600" />
              Panel de Modération
            </h3>
            
            {moderationPassword !== ADMIN_PASSWORD ? (
              <div>
                <input
                  type="password"
                  placeholder="Mot de passe admin"
                  value={moderationPassword}
                  onChange={(e) => setModerationPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg mb-2"
                />
                <p className="text-xs text-muted-foreground">
                  Mot de passe par défaut: dardesign2024
                </p>
              </div>
            ) : (
              <div>
                <h4 className="font-semibold mb-3">
                  En attente de modération ({pendingComments.length})
                </h4>
                {pendingComments.length === 0 ? (
                  <p className="text-muted-foreground">Aucun commentaire en attente</p>
                ) : (
                  <div className="space-y-3">
                    {pendingComments.map((comment) => (
                      <div key={comment.id} className="bg-white p-4 rounded-lg border">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{comment.name}</p>
                            {renderStars(comment.rating)}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => approveComment(comment)}
                              className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                            >
                              Approuver
                            </button>
                            <button
                              onClick={() => deleteComment(comment.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm">{comment.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(comment.date)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                
                <h4 className="font-semibold mt-6 mb-3">
                  Commentaires approuvés ({comments.length})
                </h4>
                {comments.length === 0 ? (
                  <p className="text-muted-foreground">Aucun commentaire approuvé</p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-white p-3 rounded-lg border flex justify-between items-center">
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{comment.name}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{comment.text}</p>
                        </div>
                        <button
                          onClick={() => deleteComment(comment.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="text-accent" size={24} />
            <h3 className="text-2xl font-bold">Laissez votre avis</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Votre note *
              </label>
              {renderStars(rating, true)}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Votre nom *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  id="name"
                  type="text"
                  placeholder="Ex: Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="text" className="block text-sm font-medium mb-2">
                Votre avis *
              </label>
              <textarea
                id="text"
                placeholder="Partagez votre expérience avec DAR DESIGN..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                rows={4}
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Publier mon avis
            </button>
          </form>
        </div>

        {/* Liste des commentaires approuvés */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">
            Avis clients ({comments.length})
          </h3>

          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Chargement...</p>
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
              <Star className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground">
                Soyez le premier à laisser un avis !
              </p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <User className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{comment.name}</h4>
                        {renderStars(comment.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comment.text}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ⚠️ Les avis sont modérés avant publication pour garantir leur authenticité
        </p>
      </div>
    </section>
  );
};

export default CommentSection;