import { test } from "@playwright/test";

test("Test Case 1", async ({ page }) => {
  await page.goto("https://google.com");
});

test("Test Case 2", async ({ page }) => {
  await page.goto("https://yahoo.com", { timeout: 4000 });
});
