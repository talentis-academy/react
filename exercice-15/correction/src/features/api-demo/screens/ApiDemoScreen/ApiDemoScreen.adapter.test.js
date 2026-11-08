import { describe, it, expect } from "vitest";
import { adaptDemoResult } from "./ApiDemoScreen.adapter";

describe("adaptDemoResult", () => {
  it("succès -> encadré vert", () => {
    expect(adaptDemoResult(true)).toEqual({ variant: "success", message: "Data loaded successfully!" });
  });

  it("échec -> encadré rouge", () => {
    expect(adaptDemoResult(false)).toEqual({ variant: "error", message: "Failed to load data. Please try again." });
  });
});
