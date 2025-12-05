import { test } from "@playwright/test";

test("demo14 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  //accept alert
  // page.on("dialog", async (dialog) => {
  //   console.log(dialog.message());
  //   await page.waitForTimeout(5000);
  //   await dialog.accept();
  // });
  // await page.click("//p[text()='JavaScript Alerts']/button");

  //confirm alert
  // page.on("dialog", async (dialog) => {
  //   console.log(dialog.message());
  //   //await dialog.accept();
  //   await dialog.dismiss();
  //   console.log(await page.locator("#confirm-demo").textContent());
  // });
  //await page.click("//p[text()='Confirm box:']/button");

  //confirm prompt
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("meow");
    console.log(await page.locator("#prompt-demo").textContent());
  });
  await page.click("//p[text()='Prompt box:']/button");
});
