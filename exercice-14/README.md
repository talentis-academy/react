> **Exercice 14 · Énoncé**

# Le panier d’achat avec Redux Toolkit

*Une petite boutique : la liste des produits, le badge du panier et le panier partagent le même state global.*

| | |
|---|---|
| **Moment** | Jour 4 · Module 12 · Redux Toolkit |
| **Durée** | 1 heure |
| **Niveau** | Intermédiaire |
| **Prérequis** | createSlice, configureStore, Provider, useSelector, useDispatch, payload |

## Objectif

Mettre en place un **state global** avec Redux Toolkit, partagé entre plusieurs composants qui ne se connaissent pas : la liste des produits ajoute au panier, le header affiche le nombre d’articles, le panier affiche les lignes et le total.

## Le template de départ

Le dossier `template/` est un projet Vite prêt à lancer : l’interface est déjà faite (même style que la carte catalogue). Il ne reste qu’à brancher Redux Toolkit.

```bash
cd template
npm install
npm run dev
```

| Fichier | Rôle |
|---|---|
| `src/data/products.js` | Les produits : MacBook Air, iPhone, AirPods, Apple Watch, iMac (non disponible), AirTag |
| `src/components/Header.jsx` | Le titre et le badge du panier (nombre d’articles) |
| `src/components/ProductList.jsx` et `ProductCard.jsx` | La liste des produits et le bouton « Ajouter au panier » |
| `src/components/Cart.jsx` | Le panier : lignes, quantités (− / +), suppression (×), total, « Vider le panier » |

Les endroits à compléter sont marqués `// TODO (exercice)`. Les packages `@reduxjs/toolkit` et `react-redux` sont déjà dans le `package.json`.

## Étapes

1. Créer `src/store/cartSlice.js` avec `createSlice` : `name: "cart"`, `initialState: { items: [] }`
2. Écrire les reducers : `addToCart` (payload = le produit ; s’il est déjà dans le panier, on augmente sa quantité), `increment` et `decrement` (payload = l’id ; à 0, la ligne disparaît), `removeFromCart` (payload = l’id), `clearCart`
3. Exporter les actions et écrire les selectors : les lignes du panier, le nombre total d’articles, le prix total
4. Créer le store dans `src/store/store.js` avec `configureStore`
5. Dans `App.jsx`, entourer l’application avec `<Provider store={store}>`
6. Brancher les composants : `ProductCard` dispatch `addToCart`, `Header` lit le nombre d’articles, `Cart` lit les lignes et le total, et dispatch les autres actions

## Conseils

- Grâce à Immer, on peut écrire `item.quantity += 1` ou `state.items.push(...)` dans un reducer RTK
- Un selector est une simple fonction : `(state) => state.cart.items`
- Pour les totaux : `reduce` sur les lignes du panier
- Installer l’extension Redux DevTools pour suivre chaque action

## Bonus (optionnel)

- Ne pas dépasser un stock maximum par produit
- Garder le panier dans le `localStorage` pour le retrouver après un rechargement
- Afficher « Déjà au panier (2) » sur la carte du produit

## Ressources utiles

- Redux Toolkit, démarrage : <https://redux.js.org/toolkit/introduction/getting-started>
- createSlice : <https://redux.js.org/toolkit/api/createSlice>
- configureStore : <https://redux.js.org/toolkit/api/configureStore>
- React Redux, les hooks : <https://react-redux.js.org/api/hooks>
- Redux DevTools : <https://github.com/reduxjs/redux-devtools/tree/main/extension#installation>

## Erreurs fréquentes à éviter

- Oublier le `<Provider>` : useSelector plante (« could not find react-redux context value »)
- Écrire `useSelector(state => state.items)` au lieu de `state.cart.items` : la clé vient du `reducer` de configureStore
- Retourner un nouvel objet ET modifier le draft dans le même reducer : avec Immer, c’est l’un ou l’autre

## Résultat attendu

- [ ] « Ajouter au panier » ajoute le produit, ou augmente sa quantité
- [ ] Le badge du header affiche le nombre total d’articles
- [ ] Les boutons −, + et × mettent à jour la ligne et le total
- [ ] « Vider le panier » remet tout à zéro
- [ ] L’iMac (non disponible) ne peut pas être ajouté

Bon courage !
