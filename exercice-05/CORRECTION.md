> **Exercice 5 · Correction**

# Manipuler un tableau

*Correction commentée. Le fichier complet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_05_Enonce.docx |
| **Code** | `correction/correction.html` (à ouvrir dans le navigateur, résultat dans la console) |

## Correction

**`correction/correction.html`**

```
<script>
  // Exercice avec un tableau d'OBJETS
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  ];

  // 1️ Afficher le tableau dans la console
  console.log("1) Initial:", products);

  // 2️ Ajouter { id: 4, name: "Headphones" } à la fin du tableau
  products.push({ id: 4, name: "Headphones" });
  console.log("2) Après push:", products);

  // 3️ Ajouter { id: 0, name: "Monitor" } au début du tableau
  products.unshift({ id: 0, name: "Monitor" });
  console.log("3) Après unshift:", products);

  // 4️ Trouver l’index de l'objet dont name === "Phone"
  // (indexOf ne marche pas ici, on utilise findIndex)
  const indexPhone = products.findIndex((p) => p.name === "Phone");
  console.log('4) Index de "Phone":', indexPhone);

  // 5️ Supprimer "Phone" du tableau
  // Si indexPhone === -1 => pas trouvé
  if (indexPhone !== -1) {
    products.splice(indexPhone, 1);
  }
  console.log('5) Après suppression de "Phone":', products);

  // 6️ Inverser l’ordre du tableau
  products.reverse();
  console.log("6) Après reverse:", products);

  // 7️ Afficher le tableau final
  console.log("7) Final:", products);
</script>
```

## Résultat final dans la console

**`Console`**

```
7) Final: [
  { id: 4, name: "Headphones" },
  { id: 3, name: "Tablet" },
  { id: 1, name: "Laptop" },
  { id: 0, name: "Monitor" }
]
```

## À retenir

| Méthode | Rôle | Modifie le tableau ? |
|---|---|---|
| `push` | Ajoute à la fin | Oui |
| `unshift` | Ajoute au début | Oui |
| `findIndex` | Index du premier élément qui respecte une condition (-1 sinon) | Non |
| `splice(i, 1)` | Supprime 1 élément à l’index i | Oui |
| `reverse` | Inverse l’ordre | Oui |

> **Remarque :** En React, on évite de modifier directement un tableau stocké dans le state : on crée un nouveau tableau (avec `map`, `filter` ou le spread `...`). On le verra avec useState.
