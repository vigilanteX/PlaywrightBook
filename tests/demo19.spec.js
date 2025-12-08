import { test } from "@playwright/test";

// test("check playwright ui functionality", async ({ page }) => {
//   await page.goto("https://www.google.com/?zx=1765201259497&no_sw_cr=1");
//   await page.locator("[name='q']").fill("lemon");
//   await page.pause();
// });
// test("check playwright ui functionality2 @meow", async ({ page }) => {
//   await page.goto("https://www.google.com/?zx=1765201259497&no_sw_cr=1");
//   await page.locator("[name='q']").fill("meow");
//   await page.pause();
// });

test("check playwright ui functionality3 @meow", async ({ page }) => {
  await page.goto("https://www.yahoo.com");
  await page.getByPlaceholder("Search the web").fill("meow");
});
