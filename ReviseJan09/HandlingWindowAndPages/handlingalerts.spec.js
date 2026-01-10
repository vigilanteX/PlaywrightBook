import { test } from "@playwright/test";

test("ACP in js", async function ({ page }) {
  page.on("dialog", async function (d) {
    console.log(d.message());
    //await d.accept();
    //await d.dismiss();
    //d.accept("AMAN DIXIT");
  });
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  //await page.click("(//button[text()='Click Me'])[1]");
  //await page.click("(//button[text()='Click Me'])[2]");
  await page.click("(//button[text()='Click Me'])[3]");

  await page.waitForTimeout(5000);
});
