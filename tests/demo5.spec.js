import { expect, test } from "@playwright/test";

test("demo6 test", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/index.html");
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000); // keep it open 3s
    await dialog.accept();
  });
  await page.waitForTimeout(6000);
  await page
    .locator(".card")
    .filter({ hasText: "Aman" })
    .getByRole("button")
    .click();
  await page.waitForTimeout(6000);
});
