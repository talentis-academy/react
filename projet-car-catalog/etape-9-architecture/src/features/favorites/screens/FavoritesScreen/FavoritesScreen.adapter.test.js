import { describe, it, expect } from "vitest";
import { adaptFavoriteCars } from "./FavoritesScreen.adapter";

describe("adaptFavoriteCars", () => {
  it("transforme chaque favori en carte marquée comme favorite", () => {
    const cars = adaptFavoriteCars([
      { id: 1, car: "BMW", car_model: "X5", price: "$50,000.00", availability: true },
      { id: 2, car: "Kia", car_model: "Rio" },
    ]);
    expect(cars).toHaveLength(2);
    expect(cars.every((car) => car.isFavorite)).toBe(true);
    expect(cars[0]).toMatchObject({ title: "BMW X5", priceLabel: "$50,000.00", statusLabel: "Available" });
    expect(cars[1]).toMatchObject({ title: "Kia Rio", priceLabel: "—", statusLabel: "Unavailable" });
  });

  it("renvoie une liste vide sans favoris", () => {
    expect(adaptFavoriteCars([])).toEqual([]);
    expect(adaptFavoriteCars()).toEqual([]);
  });
});
