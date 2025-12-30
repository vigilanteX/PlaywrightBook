import { test } from "@playwright/test";

test("single frame", async function ({ page }) {
  await page.goto("https://demo.automationtesting.in/Frames.html");
  await page
    .frameLocator("#singleframe")
    .locator("input[type='text']")
    .fill("aman");
  await page.waitForTimeout(5000);
});

test("nested frame", async function ({ page }) {
  await page.goto("https://demo.automationtesting.in/Frames.html");
  await page.locator("//a[contains(text(),'with in')]").click();
  await page.waitForTimeout(4000);
  await page
    .frameLocator("//iframe[contains(@src,'Multiple')]")
    .frameLocator("//iframe[contains(@src,'Single')]")
    .locator("input[type='text']")
    .fill("meowwwwwwwww");
  await page.waitForTimeout(5000);
});
