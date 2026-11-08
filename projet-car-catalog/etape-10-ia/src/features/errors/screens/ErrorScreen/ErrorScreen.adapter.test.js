import { describe, it, expect } from "vitest";
import { getErrorMessage, DEFAULT_ERROR_MESSAGE } from "./ErrorScreen.adapter";

describe("getErrorMessage", () => {
  it("renvoie le message de l'erreur", () => {
    expect(getErrorMessage(new Error("Boom"))).toBe("Boom");
  });

  it("renvoie le message par défaut sinon", () => {
    expect(getErrorMessage(undefined)).toBe(DEFAULT_ERROR_MESSAGE);
    expect(getErrorMessage({ status: 500 })).toBe(DEFAULT_ERROR_MESSAGE);
  });
});
