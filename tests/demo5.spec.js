import { expect, test } from "@playwright/test";

test("demo6 test", async function ({ page }) {
//   await page.goto("http://127.0.0.1:5500/index.html");
//   page.on("dialog", async (dialog) => {
//     await page.waitForTimeout(3000); // keep it open 3s
//     await dialog.accept();
//   });

//example 1
//   await page.waitForTimeout(6000);
//   await page
//     .locator(".card")
//     .filter({ hasText: "Aman" })
//     .getByRole("button")
//     .click();
//   await page.waitForTimeout(6000);


//example 2
await page.goto('http://127.0.0.1:5500/index2.html')
await page.locator('div').filter({has:page.getByPlaceholder('First Name')}).getByRole('textbox').fill('Aman')
await page.waitForTimeout(5000)





});
