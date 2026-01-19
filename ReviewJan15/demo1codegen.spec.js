import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.getByRole("textbox", { name: "E-Mail Address" }).click();
  await page
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("bobatea@gmail.com");
  await page.getByRole("textbox", { name: "E-Mail Address" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("12345");
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator("#column-right")
    .getByRole("link", { name: "My Account" })
    .click();
  await page.getByRole("link", { name: "Logout" }).click();
});
