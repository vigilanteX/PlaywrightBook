import { firefox } from "@playwright/test";

async function globalSetup() {
  console.log("globalSetup is called");
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator("#input-email").fill("bobatea@gmail.com");
  await page.locator("#input-password").fill("12345");
  await page.locator("[value='Login']").click();
  await page.context().storageState({ path: "./LoginAuth.json" });
  await browser.close();
}
export default globalSetup;
