import { test } from "@playwright/test";

test("test1", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  console.log(await page.title());
});
test("test2", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  console.log(await page.title());
});
