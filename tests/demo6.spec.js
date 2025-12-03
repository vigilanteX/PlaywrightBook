import { expect, test } from "@playwright/test";

test("demo6 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  //way 1 to locate element by id
  //   await page.locator("#sum1").fill("10");
  //   await page.locator("#sum2").fill("20");
  //   await page.waitForTimeout(2000);
  //   await page.locator("#gettotal>button").click();

  //way2 by placeholder
  await page.locator(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  await page.getByPlaceholder("Please enter first value").fill("10");
  await page.getByPlaceholder("Please enter second value").fill("20");
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Get Sum" }).click();
  await page.waitForTimeout(2000);
});
