import { describe, it, expect } from "vitest";
import { getColorHex, DEFAULT_COLOR } from "./colorUtils";

describe("getColorHex", () => {
  it("renvoie le code couleur d'une couleur connue", () => {
    expect(getColorHex("Red")).toBe("#e74c3c");
    expect(getColorHex("Goldenrod")).toBe("#daa520");
  });

  it("renvoie le gris par défaut pour une couleur inconnue", () => {
    expect(getColorHex("Teal")).toBe(DEFAULT_COLOR);
  });

  it("renvoie le gris par défaut si la couleur est absente", () => {
    expect(getColorHex(undefined)).toBe(DEFAULT_COLOR);
    expect(getColorHex(null)).toBe(DEFAULT_COLOR);
    expect(getColorHex("")).toBe(DEFAULT_COLOR);
  });

  it("respecte la casse de l'API", () => {
    expect(getColorHex("red")).toBe(DEFAULT_COLOR);
  });
});
