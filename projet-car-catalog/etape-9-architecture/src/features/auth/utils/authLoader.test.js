import { describe, it, expect, vi, beforeEach } from "vitest";
import { requireAuth, redirectIfAuthenticated } from "./authLoader";
import { storage } from "./storage";

// On remplace le stockage : pas besoin de localStorage (environnement node)
vi.mock("./storage", () => ({
  storage: { getToken: vi.fn() },
}));

// Un loader qui redirige "throw" une Response : on la récupère pour l'inspecter
const catchThrown = (fn) => {
  try {
    fn();
  } catch (thrown) {
    return thrown;
  }
  return undefined;
};

describe("requireAuth", () => {
  beforeEach(() => vi.mocked(storage.getToken).mockReset());

  it("redirige vers /login s'il n'y a pas de token", () => {
    vi.mocked(storage.getToken).mockReturnValue(null);
    const response = catchThrown(requireAuth);
    expect(response).toBeInstanceOf(Response);
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/login");
  });

  it("renvoie le token s'il existe", () => {
    vi.mocked(storage.getToken).mockReturnValue("abc");
    expect(requireAuth()).toEqual({ token: "abc" });
  });
});

describe("redirectIfAuthenticated", () => {
  beforeEach(() => vi.mocked(storage.getToken).mockReset());

  it("redirige vers / si l'utilisateur est déjà connecté", () => {
    vi.mocked(storage.getToken).mockReturnValue("abc");
    const response = catchThrown(redirectIfAuthenticated);
    expect(response).toBeInstanceOf(Response);
    expect(response.headers.get("Location")).toBe("/");
  });

  it("renvoie null si personne n'est connecté", () => {
    vi.mocked(storage.getToken).mockReturnValue(null);
    expect(redirectIfAuthenticated()).toBeNull();
  });
});
