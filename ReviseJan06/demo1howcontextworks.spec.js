import { test, chromium } from "@playwright/test";

test("context", async function () {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.fill("#input-email", "bobatea@gmail.com");
  await page.fill("#input-password", "12345");
  await page.click("[value=Login]");

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/account"
  );
  await page2.waitForTimeout(5000);
});
