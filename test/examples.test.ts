import { test, expect, ConsoleMessage } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare global {
  interface Window {
    map: any;
    maptoolkit: any;
  }
}

test.describe("examples", () => {
  const examplesDir = path.join(__dirname, "..", "examples");
  const htmlFiles = fs
    .readdirSync(examplesDir)
    .filter((file) => file.endsWith(".html"))

  for (const fileName of htmlFiles) {
    test(fileName, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: Error[] = [];

      page.on("console", (msg: ConsoleMessage) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      page.on("pageerror", (error) => {
        pageErrors.push(error);
      });

      await page.goto(`/examples/${fileName}`);
      await page.waitForFunction(
        () => {
          return window.map !== undefined;
        },
        { timeout: 5000 },
      );

      await page.waitForFunction(
        () => {
          return new Promise((resolve) => {
            if (window.map) {
              window.map.once("idle", () => {
                resolve(true);
              });
            } else {
              resolve(false);
            }
          });
        },
        { timeout: 10000 },
      );

      const canvas = page.locator("canvas.maplibregl-canvas");
      await expect(canvas).toBeVisible();

      const hasContainer = await page.evaluate(() => {
        return window.map?.getContainer() !== null;
      });

      expect(hasContainer).toBe(true);
      expect(consoleErrors).toEqual([]);
      expect(pageErrors).toEqual([]);
    });
  }
});
