> **Exercice 4 · Correction**

# Annuaire d’équipe (Team Directory)

*Correction complète, bonus compris.*

| | |
|---|---|
| **Énoncé** | Exercice_04_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Point de départ** | Dossier `template/` (le CSS est prêt, les TODO à coder) |
| **Source** | Énoncé du formateur (Programme.docx, Exercice_04.docx) |

## Les données (Home)

**`src/Home.jsx`**

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

## TeamList

**`src/components/TeamList.jsx`**

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

## MemberCard

**`src/components/MemberCard.jsx`**

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

## Points clés

- `{...member}` transmet toutes les propriétés du membre en props
- `email ? email : "N/A"` gère l’email manquant
- `remote && <span>` n’affiche rien quand remote vaut false
- Bonus : `members.length === 0` → « No members », et `showEmail = true` par défaut

## Ressources utiles

- React, afficher des listes : <https://react.dev/learn/rendering-lists>
- React, rendu conditionnel : <https://react.dev/learn/conditional-rendering>
