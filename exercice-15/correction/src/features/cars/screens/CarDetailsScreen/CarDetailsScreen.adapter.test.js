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
