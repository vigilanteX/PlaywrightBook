import { test } from "@playwright/test";

test("t1", async function ({ page }) {
  await page.waitForTimeout(11000);
});
test("t2", async function ({ page }) {
  await page.waitForTimeout(11000);
});
