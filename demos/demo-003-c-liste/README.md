# Démo 003-C · Liste (slides 12 et 13)

On part de la correction de l’exercice 3, puis on passe à une vraie liste : un tableau d’objets (JSON) parcouru avec `.map()`. Même CSS que l’exercice 3, rien en plus.

| Étape | Dossier | Ce qui change |
|---|---|---|
| 1 | `etape-1-depart` | La correction de l’exercice 3 : 3 `CarCard` écrites à la main |
| 2 | `etape-2-json` | Le tableau `cars` (id, brand, color), sans `.map()` : `cars[0]`, `cars[1]`, `cars[2]` (pour les débutants) |
| 3 | `etape-3-map` | Les 3 lignes remplacées par `.map()`, avec `key={car.id}` |
| 4 | `etape-4-price-available` | `price` et `available` dans le JSON ; `CarCard` affiche le prix et « Disponible / Indisponible » |
| 5 | `etape-5-car-objet` | Code plus propre : `<CarCard car={car} />`, une seule prop ; `CarCard` destructure l’objet `car` |

Lancer une étape : `cd etape-3-map && npm install && npm run dev`.
Ce qui change d’une étape à l’autre : `CHANGEMENTS.pdf`.
