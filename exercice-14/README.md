> **Exercice 14 · Énoncé**

# La boutique avec Zustand

*La boutique de la démo Redux (téléphone, TV, caméra, avec une quantité sur chaque carte), cette fois avec un store Zustand.*

| | |
|---|---|
| **Moment** | Jour 4 · Module 12 · Redux Toolkit et Zustand |
| **Durée** | 30 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | La démo Redux et Redux Toolkit (slices, extraReducers), Zustand : create, set, selectors |

## Objectif

Refaire la boutique de la démo avec **Zustand** : les stocks et les actions dans un **seul store**, lus avec un hook, sans Provider, sans slice et sans dispatch.

Et la promo de la démo (« chaque TV achetée = un téléphone offert ») : avec Redux Toolkit, on l’a faite avec `extraReducers`. Avec Zustand, comment faire ?

## Le template de départ

Le dossier `template/` est un projet Vite prêt à lancer : la page `Home` affiche les 3 cartes (téléphone, TV, caméra), avec un champ quantité et un bouton « Buy » sur chaque carte. Les stocks sont écrits en dur et les boutons ne font rien encore. Le style est déjà dans `App.css`.

```bash
cd template
npm install
npm install zustand
npm run dev
```

Les endroits à compléter sont marqués `// TODO (exercice)`.

## Étapes

1. Installer Zustand : `npm install zustand`
2. Créer `src/store/shopStore.js` : `export const useShopStore = create((set) => ({ … }))`, avec les stocks de départ : `phones: 5`, `tvs: 3`, `cameras: 8`
3. Dans le même store, un objet `actions` avec les 3 actions écrites avec `set` : `buyPhone(quantity)`, `buyTV(quantity)`, `buyCamera(quantity)`, qui retirent la quantité du stock
4. La promo : chaque TV achetée = un téléphone offert. `buyTV` retire aussi la quantité du stock de téléphones
5. Dans `Home.jsx` : un `useState` par champ quantité (avec `onChange`), un selector par stock, un seul selector pour les actions (`useShopStore((state) => state.actions)`), et appeler l’action au clic sur « Buy »
6. Pas de Provider : `App.jsx` ne change pas

## Conseils

- Un seul store pour les 3 produits : pas besoin d’un store par produit (avec Redux Toolkit, on avait 3 slices)
- Pour partir du state actuel, on passe une fonction à `set` : `set((state) => ({ phones: state.phones - quantity }))`
- `set` fusionne : on retourne seulement les valeurs qui changent, et on peut en changer plusieurs dans le même `set` (c’est l’idée de la promo)
- Lire une seule valeur à la fois : `useShopStore((state) => state.phones)`. Le composant ne se re-rend que si cette valeur change
- Les actions dans un objet `actions` : cet objet ne change jamais, donc un seul selector suffit pour les 3 actions, sans re-rendu inutile
- Un input donne toujours du texte : `Number(e.target.value)`

## Bonus (optionnel)

- Ne jamais passer sous 0 : désactiver « Buy » quand la quantité demandée est plus grande que le stock
- Garder les stocks après un rechargement avec le middleware `persist` (indice : regarder l’option `partialize`, pour ne pas enregistrer l’objet `actions`)
- Brancher le middleware `devtools` pour suivre le store dans l’extension Redux DevTools

## Ressources utiles

- Zustand, introduction : <https://zustand.docs.pmnd.rs/learn/getting-started/introduction>
- Mettre à jour le state : <https://zustand.docs.pmnd.rs/learn/guides/updating-state>
- L’API create : <https://zustand.docs.pmnd.rs/reference/apis/create>
- Comparaison avec Redux, Context, Jotai… : <https://zustand.docs.pmnd.rs/learn/getting-started/comparison>
- Middleware persist : <https://zustand.docs.pmnd.rs/reference/middlewares/persist>
- Middleware devtools : <https://zustand.docs.pmnd.rs/reference/middlewares/devtools>

## Erreurs fréquentes à éviter

- Modifier le state directement (`state.phones -= quantity`) : sans Immer, l’écran ne se met pas à jour
- Un selector qui retourne un nouvel objet (`useShopStore((state) => ({ phones: state.phones, tvs: state.tvs }))`) : boucle de rendus infinie en Zustand 5. Une valeur par appel, ou `useShallow`
- Oublier `Number(...)` : `5 - "2"` marche par hasard, mais `"2" + 1` donne `"21"`
- Ajouter un `<Provider>` par réflexe Redux : avec Zustand, il n’y en a pas

## Résultat attendu

- [ ] « Buy » retire la quantité choisie du stock du produit
- [ ] Acheter une TV retire aussi un téléphone par TV (la promo)
- [ ] Les 3 cartes se mettent à jour sans Provider
- [ ] Le store tient dans un seul fichier, `src/store/shopStore.js`

Bon courage !
