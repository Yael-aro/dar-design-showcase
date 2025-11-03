import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Remplace par ton URI MongoDB Atlas ou local
mongoose.connect("TON_URI_MONGODB_ICI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const commentSchema = new mongoose.Schema({
  name: String,
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

// Récupérer tous les commentaires
app.get("/api/comments", async (req, res) => {
  const comments = await Comment.find().sort({ createdAt: -1 });
  res.json(comments);
});

// Ajouter un commentaire
app.post("/api/comments", async (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) return res.status(400).json({ message: "Tous les champs sont requis" });

  const comment = new Comment({ name, text });
  await comment.save();
  res.status(201).json(comment);
});

app.listen(5000, () => console.log("Backend lancé sur http://localhost:5000"));
