import { test, expect } from "@playwright/test";

test("expect page to have screenshot", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await expect(page).toHaveScreenshot("loginpage.png");
  await page.locator("#input-email").fill("bobatea@gmail.com");
  await page.locator("#input-password").fill("12345");
  await page.locator("[value='Login']").click();
  await expect(page).toHaveScreenshot("navvendashboard.png");
});
test("expect locator to have screenshot", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await expect(page.locator("#input-email")).toHaveScreenshot("loginpage.png");
});
