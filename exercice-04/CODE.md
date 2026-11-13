# Exercice 04 · Annuaire d’équipe : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

*Styles fournis (copiés tels quels, pas tapés en live) : `src/index.css` (92 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `correction/src/App.jsx` (7 lignes)

```jsx
import Home from "./Home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `correction/src/components/TeamList.jsx` (20 lignes)

```jsx
import MemberCard from "./MemberCard";

function TeamList({ title, members }) {
  return (
    <section>
      <h1>{title}</h1>
      {members.length === 0 ? (
        <p>No members</p>
      ) : (
        <div className="team-grid">
          {members.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TeamList;
```

### `correction/src/components/MemberCard.jsx` (12 lignes)

```jsx
function MemberCard({ fullName, role, email, remote, showEmail = true }) {
  return (
    <article className="member-card">
      <h2>{fullName}</h2>
      <p className="role">{role}</p>
      {showEmail && <p>Email : {email ? email : "N/A"}</p>}
      {remote && <span className="badge">Remote</span>}
    </article>
  );
}

export default MemberCard;
```

### `correction/src/Home.jsx` (14 lignes)

```jsx
import TeamList from "./components/TeamList";

const members = [
  { id: 1, fullName: "Alice Martin", role: "Lead Developer", email: "alice@company.com", remote: true },
  { id: 2, fullName: "Karim Benali", role: "Product Owner", email: "karim@company.com", remote: false },
  { id: 3, fullName: "Sara Lopez", role: "UX Designer", remote: true },
  { id: 4, fullName: "Tom Durand", role: "QA Engineer", remote: false },
];

function Home() {
  return <TeamList title="Team Directory" members={members} />;
}

export default Home;
```
