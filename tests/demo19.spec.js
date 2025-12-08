import { test } from "@playwright/test";

test("check playwright ui functionality", async ({ page }) => {
  await page.goto("https://www.google.com/?zx=1765201259497&no_sw_cr=1");
  await page.locator("[name='q']").fill("lemon");
  await page.pause();
});
