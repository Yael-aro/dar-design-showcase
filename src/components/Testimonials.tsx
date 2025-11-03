import { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ _id: string; name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Charger les commentaires depuis le backend
  useEffect(() => {
    fetch("http://localhost:5000/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const res = await fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, text }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setName("");
      setText("");
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Commentaires</h2>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-border rounded-lg"
            required
          />
          <textarea
            placeholder="Votre commentaire"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border border-border rounded-lg"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors"
          >
            Envoyer
          </button>
        </form>

        {/* Liste des commentaires */}
        <div className="space-y-4">
          {comments.length === 0 && <p className="text-center text-muted-foreground">Aucun commentaire pour l'instant.</p>}
          {comments.map((c) => (
            <div key={c._id} className="border p-4 rounded-lg bg-white shadow-sm">
              <p className="italic text-muted-foreground">"{c.text}"</p>
              <p className="font-semibold mt-2">— {c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
