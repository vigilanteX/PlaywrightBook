import { test } from "@playwright/test";

test("video record check", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator("#input-email").fill("bobatea@gmail.com");
  await page.waitForTimeout(3000);
  await page.locator("#input-password").fill("12345");
  await page.waitForTimeout(3000);
  await page.locator("[value='Login']").click();
  await page.waitForTimeout(3000);
});
