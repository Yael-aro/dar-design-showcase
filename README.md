<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>DAR DESIGN — README</title>
  <meta name="description" content="README du projet DAR DESIGN — landing page pour impression textile, mugs, accessoires et design graphique." />
  <style>
    :root{
      --bg:#0f1724;      /* bleu nuit */
      --card:#0b1220;
      --accent:#8b5cf6;  /* violet */
      --accent2:#f472b6; /* rose */
      --muted:#9aa4b2;
      --glass: rgba(255,255,255,0.04);
      --radius:16px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      background:linear-gradient(180deg,var(--bg),#071028 60%);
      color:#e6eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.5;
      padding:32px;
      display:flex;
      justify-content:center;
      align-items:flex-start;
      gap:24px;
    }

    .container{
      max-width:980px;
      width:100%;
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:var(--radius);
      padding:28px;
      box-shadow: 0 10px 30px rgba(2,6,23,0.6);
      border: 1px solid rgba(255,255,255,0.03);
    }

    header{
      display:flex;
      gap:20px;
      align-items:center;
      margin-bottom:18px;
    }

    .logo{
      width:84px;
      height:84px;
      border-radius:12px;
      background:linear-gradient(135deg,var(--accent),var(--accent2));
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      font-size:20px;
      color:white;
      box-shadow: 0 6px 18px rgba(139,92,246,0.25), inset 0 -6px 18px rgba(255,255,255,0.06);
    }

    h1{margin:0;font-size:28px;letter-spacing:0.2px}
    p.lead{margin:6px 0 0;color:var(--muted)}
    .badges{margin-left:auto;display:flex;gap:8px;align-items:center}
    .badge{
      background:var(--glass);
      padding:6px 10px;
      border-radius:999px;
      font-size:13px;
      color:var(--muted);
      border:1px solid rgba(255,255,255,0.03);
    }

    main{display:grid;grid-template-columns:1fr;gap:18px;margin-top:10px}
    .card{
      background: linear-gradient(180deg, rgba(255,255,255,0.012), rgba(255,255,255,0.01));
      border-radius:12px;
      padding:18px;
      border:1px solid rgba(255,255,255,0.02);
    }

    .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    pre{background:#071226;padding:12px;border-radius:8px;color:#bcd7ff;overflow:auto}
    code{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace; font-size:13px}

    ul{margin:10px 0 0;padding-left:20px;color:var(--muted)}
    table{width:100%;border-collapse:collapse;margin-top:8px}
    td,th{padding:10px;border-top:1px solid rgba(255,255,255,0.02);text-align:left}
    th{color:var(--muted);font-weight:600;font-size:13px}

    footer{display:flex;justify-content:space-between;align-items:center;margin-top:16px;color:var(--muted);font-size:13px}
    .cta{
      display:inline-flex;
      gap:10px;
      align-items:center;
      background:linear-gradient(90deg,var(--accent),var(--accent2));
      color:white;
      padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;
      box-shadow: 0 8px 30px rgba(139,92,246,0.18);
    }

    @media (max-width:780px){
      .grid-2{grid-template-columns:1fr}
      header{flex-direction:column;align-items:flex-start;gap:12px}
      .badges{margin-left:0}
    }

  </style>
</head>
<body>
  <div class="container" role="main">
    <header>
      <div class="logo">DAR<br/>DESIGN</div>
      <div>
        <h1>DAR DESIGN — Landing Page</h1>
        <p class="lead">Site vitrine professionnel pour impression textile, mugs, accessoires et design graphique sur mesure.</p>
      </div>
      <div class="badges" aria-hidden="true">
        <div class="badge">React + TypeScript</div>
        <div class="badge">Vite</div>
        <div class="badge">Tailwind (UI)</div>
      </div>
    </header>

    <main>
      <!-- Aperçu -->
      <section class="card" aria-labelledby="preview">
        <h2 id="preview">✨ Aperçu du projet</h2>
        <p style="color:var(--muted);margin-top:8px">
          Une landing page moderne, responsive et rapide pour mettre en avant les services et le portfolio de DAR DESIGN.
          Conçue pour convertir les visiteurs en clients : mise en avant visuelle, appels à l'action clairs et formulaire de contact.
        </p>
      </section>

      <!-- Technologies & Installation -->
      <section class="grid-2">
        <div class="card" aria-labelledby="tech">
          <h3 id="tech">🚀 Technologies</h3>
          <table>
            <thead>
              <tr><th>Technologie</th><th>Rôle</th></tr>
            </thead>
            <tbody>
              <tr><td>React + TypeScript</td><td>Front-end</td></tr>
              <tr><td>Vite</td><td>Build & dev server</td></tr>
              <tr><td>Tailwind CSS</td><td>Styles utilitaires</td></tr>
              <tr><td>Lucide Icons</td><td>Icônes légères</td></tr>
              <tr><td>Vercel</td><td>Déploiement</td></tr>
            </tbody>
          </table>
        </div>

        <div class="card" aria-labelledby="install">
          <h3 id="install">📦 Installation</h3>
          <p style="color:var(--muted);margin-top:6px">Clone le repo puis installe les dépendances :</p>
          <pre><code>git clone https://github.com/ton-repo.git
cd dardesign
npm install</code></pre>
          <p style="color:var(--muted);margin-top:8px">Pour lancer en local :</p>
          <pre><code>npm run dev
# puis ouvre http://localhost:5173</code></pre>
        </div>
      </section>

      <!-- Fonctionnalités -->
      <section class="card" aria-labelledby="features">
        <h3 id="features">🖼️ Fonctionnalités principales</h3>
        <ul>
          <li>Hero section impactante avec CTA.</li>
          <li>Présentation claire des services : impression textile, mugs, accessoires, design graphique.</li>
          <li>Portfolio visuel (galerie réactive).</li>
          <li>Formulaire de contact fonctionnel + intégration email/API possible.</li>
          <li>Responsive mobile & desktop, optimisé pour la performance.</li>
        </ul>
      </section>

      <!-- Arborescence & Déploiement -->
      <section class="grid-2">
        <div class="card" aria-labelledby="structure">
          <h3 id="structure">📁 Arborescence recommandée</h3>
          <pre><code>📦 dardesign
├─ src/
│  ├─ components/
│  │  ├─ Hero.tsx
│  │  ├─ Services.tsx
│  │  ├─ Portfolio.tsx
│  │  └─ Contact.tsx
│  ├─ assets/
│  └─ main.tsx
├─ public/
└─ README.html</code></pre>
        </div>

        <div class="card" aria-labelledby="deploy">
          <h3 id="deploy">🌐 Déploiement</h3>
          <p style="color:var(--muted);margin-top:6px">
            Déploiement automatique avec Vercel : chaque push vers la branche `main` déclenche un build et un déploiement.
          </p>
          <p style="margin-top:10px">
            <strong>URL de production :</strong>
            <div style="margin-top:8px">
              <a class="cta" href="https://dardesign.pro" target="_blank" rel="noopener noreferrer">Visiter le site</a>
            </div>
          </p>
        </div>
      </section>

      <!-- Extras & Contact -->
      <section class="card" aria-labelledby="extras">
        <h3 id="extras">🔧 Extras & contact</h3>
        <ul>
          <li>Badges et image de couverture (bannière) pour README disponibles sur demande.</li>
          <li>Possibilité d'ajouter un mini CMS (Sanity, Contentful) pour gérer les créations.</li>
        </ul>

        <p style="margin-top:12px;color:var(--muted)">
          <strong>Contact :</strong><br/>
          contact@dardesign.pro — <a href="https://dardesign.pro" style="color:inherit;text-decoration:underline">dardesign.pro</a>
        </p>
      </section>
    </main>

    <footer>
      <div>© DAR DESIGN — README</div>
      <div style="display:flex;gap:10px;align-items:center">
        <a class="badge" href="#" onclick="alert('Remplacez par votre repo GitHub')">Repo</a>
        <a class="badge" href="mailto:contact@dardesign.pro">Contact</a>
      </div>
    </footer>
  </div>
</body>
</html>
