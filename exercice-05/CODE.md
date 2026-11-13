# Exercice 05 · Manipuler un tableau : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction.

## `correction`

### `correction/exercice.html` (22 lignes)

```html
<script>
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
  ];

  // 1️ Afficher le tableau dans la console

  // 2️ Ajouter { id: 4, name: "Headphones" } à la fin du tableau

  // 3️ Ajouter { id: 0, name: "Monitor" } au début du tableau

  // 4️ Trouver l’index du produit dont name === "Phone"
  // Rappel : indexOf ne marche pas sur les objets → utiliser findIndex

  // 5️ Supprimer le produit "Phone" du tableau (à partir de son index)

  // 6️ Inverser l’ordre du tableau

  // 7️ Afficher le tableau final
</script>
```

### `correction/correction.html` (38 lignes)

```html
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
