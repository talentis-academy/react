> **Exercice 5 · Correction**

# Manipuler un tableau

*Correction commentée. Le fichier complet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_05_Enonce.docx |
| **Code** | `correction/correction.html` (à ouvrir dans le navigateur, résultat dans la console) |

## Correction

**`correction/correction.html (extrait du script)`**

```
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
];

// 1. Afficher le tableau
console.log("1) Initial :", products);

// 2. Ajouter à la fin
products.push({ id: 4, name: "Headphones" });

// 3. Ajouter au début
products.unshift({ id: 0, name: "Monitor" });

// 4. Trouver l’index de "Phone"
// (indexOf ne marche pas pour un objet : on utilise findIndex)
const indexPhone = products.findIndex((p) => p.name === "Phone");

// 5. Supprimer "Phone" (si trouvé : -1 = pas trouvé)
if (indexPhone !== -1) {
  products.splice(indexPhone, 1);
}

// 6. Inverser l’ordre
products.reverse();

// 7. Afficher le tableau final
console.log("7) Final :", products);
```

## Résultat dans la console

**`Console`**

```
7) Final : [
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
