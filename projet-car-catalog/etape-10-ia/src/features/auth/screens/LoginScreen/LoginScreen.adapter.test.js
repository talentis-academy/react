import { describe, it, expect } from "vitest";
import { getLoginErrorMessage, DEFAULT_LOGIN_ERROR } from "./LoginScreen.adapter";

describe("getLoginErrorMessage", () => {
  it("renvoie null sans erreur", () => {
    expect(getLoginErrorMessage(null)).toBeNull();
    expect(getLoginErrorMessage(undefined)).toBeNull();
  });

  it("préfère le message renvoyé par le serveur", () => {
    const error = { message: "Request failed with status code 401", response: { data: { message: "Wrong password" } } };
    expect(getLoginErrorMessage(error)).toBe("Wrong password");
  });

  it("utilise le message de l'erreur sinon", () => {
    expect(getLoginErrorMessage({ message: "Network Error" })).toBe("Network Error");
  });

  it("utilise le message par défaut en dernier recours", () => {
    expect(getLoginErrorMessage({})).toBe(DEFAULT_LOGIN_ERROR);
  });
});
