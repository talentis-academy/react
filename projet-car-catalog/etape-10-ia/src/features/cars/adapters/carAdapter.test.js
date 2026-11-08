import { describe, it, expect } from "vitest";
import { adaptCarCard, MISSING_VALUE } from "./carAdapter";
import { DEFAULT_COLOR } from "../utils/colorUtils";

const dto = {
  id: 12,
  car: "Audi",
  car_model: "Q7",
  car_color: "Red",
  car_model_year: 2012,
  car_vin: "WAUAF78E96A123456",
  price: "$23,456.78",
  availability: true,
};

describe("adaptCarCard", () => {
  it("transforme le DTO de l'API en modèle pour la carte", () => {
    expect(adaptCarCard(dto)).toEqual({
      id: 12,
      title: "Audi Q7",
      colorHex: "#e74c3c",
      colorName: "Red",
      year: 2012,
      vin: "WAUAF78E96A123456",
      priceLabel: "$23,456.78",
      isAvailable: true,
      statusLabel: "Available",
      detailsUrl: "/car/12",
      isFavorite: false,
    });
  });

  it("indique si la voiture est en favori", () => {
    expect(adaptCarCard(dto, true).isFavorite).toBe(true);
  });

  it("marque une voiture indisponible", () => {
    const car = adaptCarCard({ ...dto, availability: false });
    expect(car.isAvailable).toBe(false);
    expect(car.statusLabel).toBe("Unavailable");
  });

  it("résiste aux valeurs manquantes", () => {
    const car = adaptCarCard({ id: 3 });
    expect(car.title).toBe("Unknown car");
    expect(car.colorHex).toBe(DEFAULT_COLOR);
    expect(car.colorName).toBe(MISSING_VALUE);
    expect(car.priceLabel).toBe(MISSING_VALUE);
    expect(car.year).toBe(MISSING_VALUE);
    expect(car.vin).toBe(MISSING_VALUE);
    expect(car.isAvailable).toBe(false);
    expect(car.statusLabel).toBe("Unavailable");
    expect(car.detailsUrl).toBe("/car/3");
  });

  it("garde le titre lisible si seul le modèle manque", () => {
    expect(adaptCarCard({ ...dto, car_model: null }).title).toBe("Audi");
  });

  it("couleur inconnue -> gris, mais garde son nom", () => {
    const car = adaptCarCard({ ...dto, car_color: "Teal" });
    expect(car.colorHex).toBe(DEFAULT_COLOR);
    expect(car.colorName).toBe("Teal");
  });

  it("prix vide -> tiret", () => {
    expect(adaptCarCard({ ...dto, price: "" }).priceLabel).toBe(MISSING_VALUE);
  });
});
