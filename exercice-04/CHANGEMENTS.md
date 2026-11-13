# Exercice 04 · Annuaire d’équipe : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Point de départ : `template`

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/index.css` (92 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Présents mais pas encore branchés (non affichés) : `src/components/MemberCard.jsx`*

### `src/App.jsx` (7 lignes)

```jsx
import Home from "./Home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `src/components/TeamList.jsx` (14 lignes)

```jsx
import MemberCard from "./MemberCard";

// TODO 3 : recevoir les props title et members
function TeamList() {
  return (
    <section>
      {/* TODO 4 : afficher le title dans un <h1> */}
      {/* TODO 5 : dans <div className="team-grid">, une MemberCard par membre avec map() et key={member.id} */}
      {/* Bonus : si la liste est vide, afficher « No members » */}
    </section>
  );
}

export default TeamList;
```

### `src/Home.jsx` (13 lignes)

```jsx
// Exercice 4 · template : le CSS est prêt (index.css), à vous de coder l'annuaire (les TODO)
import TeamList from "./components/TeamList";

// TODO 1 : créer le tableau members (4 à 6 membres : id, fullName, role, email facultatif, remote)
//          avec au moins 1 membre sans email, 1 membre remote: true et 1 membre remote: false
const members = [];

function Home() {
  // TODO 2 : passer le titre "Team Directory" et le tableau members à TeamList
  return <TeamList />;
}

export default Home;
```

## Étape 1 → 2 : `template` → `correction`

Les données dans Home, TeamList (title, map et key) et MemberCard (email ou N/A, badge Remote), bonus compris.

### `package.json` (modifié, +1 −1)

```diff
@@ -1,5 +1,5 @@
 {
-  "name": "exercice-04-template",
+  "name": "exercice-04-annuaire",
   "private": true,
   "version": "0.0.0",
   "type": "module",
```

### `src/Home.jsx` (modifié, +7 −6)

```diff
@@ -1,13 +1,14 @@
-// Exercice 4 · template : le CSS est prêt (index.css), à vous de coder l'annuaire (les TODO)
 import TeamList from "./components/TeamList";
 
-// TODO 1 : créer le tableau members (4 à 6 membres : id, fullName, role, email facultatif, remote)
-//          avec au moins 1 membre sans email, 1 membre remote: true et 1 membre remote: false
-const members = [];
+const members = [
+  { id: 1, fullName: "Alice Martin", role: "Lead Developer", email: "alice@company.com", remote: true },
+  { id: 2, fullName: "Karim Benali", role: "Product Owner", email: "karim@company.com", remote: false },
+  { id: 3, fullName: "Sara Lopez", role: "UX Designer", remote: true },
+  { id: 4, fullName: "Tom Durand", role: "QA Engineer", remote: false },
+];
 
 function Home() {
-  // TODO 2 : passer le titre "Team Directory" et le tableau members à TeamList
-  return <TeamList />;
+  return <TeamList title="Team Directory" members={members} />;
 }
 
 export default Home;
```

### `src/components/MemberCard.jsx` (modifié, +5 −5)

```diff
@@ -1,10 +1,10 @@
-// TODO 6 : recevoir les props fullName, role, email, remote (bonus : showEmail, true par défaut)
-function MemberCard() {
+function MemberCard({ fullName, role, email, remote, showEmail = true }) {
   return (
     <article className="member-card">
-      {/* TODO 7 : le nom dans un <h2>, le rôle dans <p className="role"> */}
-      {/* TODO 8 : « Email : [email] », ou « Email : N/A » si pas d'email (ternaire ? :) */}
-      {/* TODO 9 : le badge <span className="badge">Remote</span> seulement si remote (&&) */}
+      <h2>{fullName}</h2>
+      <p className="role">{role}</p>
+      {showEmail && <p>Email : {email ? email : "N/A"}</p>}
+      {remote && <span className="badge">Remote</span>}
     </article>
   );
 }
```

### `src/components/TeamList.jsx` (modifié, +11 −5)

```diff
@@ -1,12 +1,18 @@
 import MemberCard from "./MemberCard";
 
-// TODO 3 : recevoir les props title et members
-function TeamList() {
+function TeamList({ title, members }) {
   return (
     <section>
-      {/* TODO 4 : afficher le title dans un <h1> */}
-      {/* TODO 5 : dans <div className="team-grid">, une MemberCard par membre avec map() et key={member.id} */}
-      {/* Bonus : si la liste est vide, afficher « No members » */}
+      <h1>{title}</h1>
+      {members.length === 0 ? (
+        <p>No members</p>
+      ) : (
+        <div className="team-grid">
+          {members.map((member) => (
+            <MemberCard key={member.id} {...member} />
+          ))}
+        </div>
+      )}
     </section>
   );
 }
```
