import { expect, test } from "@playwright/test";

test("demo9 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/radiobutton-demo"
  );
  //way1
  //await page.locator("input[name='optradio'][value='Male']").click();

  //way2
  //await page.locator("input[name='optradio']").first().click();

  //way3
  await page.locator("input[name='optradio']").nth(0).check();

  console.log(await page.locator("input[name='optradio']").nth(0).isChecked());

  await page.waitForTimeout(2000);
});
