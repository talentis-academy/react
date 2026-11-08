import { describe, it, expect } from "vitest";
import { adaptHomeCars, findCarById, HOME_CARS_LIMIT } from "./HomeScreen.adapter";

const makeCar = (id) => ({
  id,
  car: "Audi",
  car_model: `Model ${id}`,
  car_color: "Blue",
  car_model_year: 2012,
  car_vin: `VIN${id}`,
  price: "$10,000.00",
  availability: id % 2 === 0,
});

const response = { Cars: Array.from({ length: 10 }, (_, i) => makeCar(i + 1)) };

describe("adaptHomeCars", () => {
  it("limite la liste à 6 voitures", () => {
    const cars = adaptHomeCars(response);
    expect(HOME_CARS_LIMIT).toBe(6);
    expect(cars).toHaveLength(6);
    expect(cars.map((car) => car.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("garde toutes les voitures s'il y en a moins de 6", () => {
    expect(adaptHomeCars({ Cars: [makeCar(1), makeCar(2)] })).toHaveLength(2);
  });

  it("transforme chaque voiture en modèle de carte", () => {
    const [first] = adaptHomeCars(response);
    expect(first).toMatchObject({ id: 1, title: "Audi Model 1", colorHex: "#3498db", statusLabel: "Unavailable", detailsUrl: "/car/1" });
  });

  it("marque les voitures en favori", () => {
    const cars = adaptHomeCars(response, [2, 5]);
    expect(cars.filter((car) => car.isFavorite).map((car) => car.id)).toEqual([2, 5]);
  });

  it("renvoie une liste vide si la réponse est vide ou mal formée", () => {
    expect(adaptHomeCars(undefined)).toEqual([]);
    expect(adaptHomeCars({})).toEqual([]);
    expect(adaptHomeCars({ Cars: null })).toEqual([]);
  });
});

describe("findCarById", () => {
  it("retrouve l'objet API brut", () => {
    expect(findCarById(response, 3)).toEqual(makeCar(3));
  });

  it("renvoie undefined si la voiture n'existe pas", () => {
    expect(findCarById(response, 99)).toBeUndefined();
    expect(findCarById(undefined, 1)).toBeUndefined();
  });
});
