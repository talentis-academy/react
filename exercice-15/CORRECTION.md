> **Exercice 15 · Correction**

# Migrer un écran vers View / Scene / Adapter

*La page de détails découpée en View, adapter testé, Scene et index.*

| | |
|---|---|
| **Énoncé** | Exercice_15_Enonce.docx |
| **Code** | Dossier `correction/` (et `template/` pour le point de départ) |
| **Source** | Projet Car Catalog de la formation : `Projet-Car-Catalog/etape-9-architecture` |

## L’adapter

Une fonction pure : elle reçoit la réponse de l’API `{ Car: {...} }` et renvoie le modèle de la page, ou `null` si la voiture est absente. Elle réutilise `adaptCarBase` (champs communs avec la carte) et `orMissing` (« — » quand une valeur manque).

**`src/features/cars/screens/CarDetailsScreen/CarDetailsScreen.adapter.js`**

```jsx
import { adaptCarBase, orMissing } from "../../adapters/carAdapter";

// Réponse de l'API { Car: {...} } -> modèle de la page détails (null si la voiture est absente)
export const adaptCarDetails = (response, favoriteIds = []) => {
  const dto = response?.Car;
  if (!dto) return null;

  return {
    ...adaptCarBase(dto),
    brand: orMissing(dto.car),
    model: orMissing(dto.car_model),
    isFavorite: favoriteIds.includes(dto.id),
  };
};
```

## Le test de l’adapter

Pas de navigateur ni de réseau : on donne un DTO, on vérifie le modèle. Les cas couverts : DTO complet, favori, réponse vide, champs manquants (bonus).

**`src/features/cars/screens/CarDetailsScreen/CarDetailsScreen.adapter.test.js`**

```jsx
import { describe, it, expect } from "vitest";
import { adaptCarDetails } from "./CarDetailsScreen.adapter";
import { MISSING_VALUE } from "../../adapters/carAdapter";
import { DEFAULT_COLOR } from "../../utils/colorUtils";

const dto = {
  id: 7,
  car: "Ford",
  car_model: "Focus",
  car_color: "Green",
  car_model_year: 2012,
  car_vin: "1FAHP3F2XCL123456",
  price: "$12,345.00",
  availability: false,
};

describe("adaptCarDetails", () => {
  it("transforme la réponse de l'API en modèle de la page détails", () => {
    expect(adaptCarDetails({ Car: dto })).toEqual({
      id: 7,
      title: "Ford Focus",
      brand: "Ford",
      model: "Focus",
      colorHex: "#2ecc71",
      colorName: "Green",
      year: 2012,
      vin: "1FAHP3F2XCL123456",
      priceLabel: "$12,345.00",
      isAvailable: false,
      statusLabel: "Unavailable",
      isFavorite: false,
    });
  });

  it("indique si la voiture est en favori", () => {
    expect(adaptCarDetails({ Car: dto }, [7]).isFavorite).toBe(true);
  });

  it("renvoie null si la voiture est absente", () => {
    expect(adaptCarDetails(undefined)).toBeNull();
    expect(adaptCarDetails({})).toBeNull();
    expect(adaptCarDetails({ Car: null })).toBeNull();
  });

  it("résiste aux champs manquants", () => {
    const car = adaptCarDetails({ Car: { id: 8 } });
    expect(car.brand).toBe(MISSING_VALUE);
    expect(car.model).toBe(MISSING_VALUE);
    expect(car.vin).toBe(MISSING_VALUE);
    expect(car.priceLabel).toBe(MISSING_VALUE);
    expect(car.colorHex).toBe(DEFAULT_COLOR);
  });
});
```

## La Scene

Uniquement des props (`car`, `onToggleFavorite`). Le JSX de l’ancienne page est gardé, mais les champs de l’API sont remplacés par ceux du modèle et le HTML répété par les composants partagés.

**`src/features/cars/screens/CarDetailsScreen/CarDetailsScreen.scene.jsx`**

```jsx
import { Link } from "react-router-dom";
import { BackIcon, ColorDot, Price, StatusBadge } from "@/components/atoms";
import { DetailItem, FavoriteButton } from "@/components/molecules";

// Présentation pure de la fiche voiture
export function CarDetailsScreenScene({ car, onToggleFavorite }) {
  return (
    <div className="container">
      <Link to="/" className="back-link">
        <BackIcon />
        Back to Catalog
      </Link>

      <div className="card detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{car.title}</h1>
          <FavoriteButton isActive={car.isFavorite} onToggle={onToggleFavorite} />
        </div>

        <div className="detail-grid">
          <DetailItem label="Brand">
            <span className="detail-value">{car.brand}</span>
          </DetailItem>
          <DetailItem label="Model">
            <span className="detail-value">{car.model}</span>
          </DetailItem>
          <DetailItem label="Color">
            <div className="color-detail">
              <ColorDot color={car.colorHex} />
              <span className="detail-value">{car.colorName}</span>
            </div>
          </DetailItem>
          <DetailItem label="Year">
            <span className="detail-value">{car.year}</span>
          </DetailItem>
          <DetailItem label="VIN">
            <span className="detail-value">{car.vin}</span>
          </DetailItem>
          <DetailItem label="Price">
            <Price value={car.priceLabel} className="detail-value" />
          </DetailItem>
          <DetailItem label="Availability">
            <StatusBadge isAvailable={car.isAvailable} label={car.statusLabel} className="detail-value" />
          </DetailItem>
        </div>
      </div>
    </div>
  );
}
```

## La View

Le conteneur : il appelle les hooks, gère le chargement, l’erreur et la voiture introuvable, adapte les données et passe le résultat à la Scene. Pour les favoris, on stocke l’objet brut `data.Car`.

**`src/features/cars/screens/CarDetailsScreen/CarDetailsScreen.view.jsx`**

```jsx
import { useParams } from "react-router-dom";
import { Loading } from "@/components/molecules";
import { useFavorites } from "@/features/favorites/hooks";
import { useCarDetails } from "../../hooks";
import { adaptCarDetails } from "./CarDetailsScreen.adapter";
import { CarDetailsScreenScene } from "./CarDetailsScreen.scene";

export function CarDetailsScreenView() {
  const { id } = useParams();
  const { data, isLoading, error } = useCarDetails(id);
  const { favoriteIds, toggleFavorite } = useFavorites();

  if (isLoading) return <Loading text="Loading car details..." />;

  const car = adaptCarDetails(data, favoriteIds);

  // Erreur réseau ou voiture absente : même message
  if (error || !car) {
    return (
      <div className="container">
        <p>Car not found</p>
      </div>
    );
  }

  // Dans Redux on stocke l'objet API brut, pas le modèle adapté
  return <CarDetailsScreenScene car={car} onToggleFavorite={() => toggleFavorite(data.Car)} />;
}
```

## L’index et le router

**`src/features/cars/screens/CarDetailsScreen/index.js`**

```jsx
export { CarDetailsScreenView as CarDetailsScreen } from "./CarDetailsScreen.view";
```

**`src/app/router.jsx`**

```jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { HomeScreen } from "@/features/cars/screens/HomeScreen";
import { CarDetailsScreen } from "@/features/cars/screens/CarDetailsScreen";
import { FavoritesScreen } from "@/features/favorites/screens/FavoritesScreen";
import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { ApiDemoScreen } from "@/features/api-demo/screens/ApiDemoScreen";
import { ErrorScreen } from "@/features/errors/screens/ErrorScreen";
import { NotFoundScreen } from "@/features/errors/screens/NotFoundScreen";
import { requireAuth, redirectIfAuthenticated } from "@/features/auth/utils/authLoader";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginScreen />, loader: redirectIfAuthenticated },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorScreen />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "favorites", element: <FavoritesScreen />, loader: requireAuth },
      { path: "car/:id", element: <CarDetailsScreen /> },
      { path: "api-demo", element: <ApiDemoScreen /> },
      { path: "*", element: <NotFoundScreen /> },
    ],
  },
]);
```

L’ancienne page `src/pages/CarDetailPage.jsx` est supprimée.

## Points clés

- La View est le seul fichier qui connaît React Query, Redux et le router
- L’adapter isole le format de l’API : si un nom de champ change, seul l’adapter bouge, et son test le signale
- La Scene ne reçoit que des props : elle réutilise `DetailItem`, `FavoriteButton`, `ColorDot`, `Price`, `StatusBadge`
- Le rendu ne change pas : les tests e2e restent verts sans les modifier
- Le fichier `CHANGEMENTS.pdf` montre ce qui change entre le template et la correction
