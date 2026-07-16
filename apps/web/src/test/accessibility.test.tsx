import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import axe from "axe-core";
import App from "../App";

const routes = [
  "/",
  "/competition",
  "/teams",
  "/partners",
  "/updates",
  "/updates/why-9v9",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/accessibility",
  "/not-a-real-page",
];

beforeAll(() => {
  Object.defineProperty(window, "scrollTo", { value: () => undefined, writable: true });
});

afterEach(() => cleanup());

describe("Release A accessibility smoke tests", () => {
  for (const route of routes) {
    it(`${route} has no automatically detectable serious or critical violations`, async () => {
      window.history.replaceState({}, "", route);
      const { container } = render(<App />);
      const results = await axe.run(container, {
        resultTypes: ["violations"],
        rules: {
          "color-contrast": { enabled: false },
          "landmark-unique": { enabled: false },
        },
      });
      const blocking = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
      expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
    });
  }
});

