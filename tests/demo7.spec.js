import { expect, test } from "@playwright/test";

test("demo7 test", async ({ page }) => {
  //way1 single checkbox
  //   await page.goto(
  //     "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  //   );
  //   let checkBox = page.locator("div.mt-40>label>input");
  //   console.log(await checkBox.isChecked());
  //   await checkBox.check();
  //   console.log(await checkBox.isChecked());

  //way2 multiple checkbox
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let elements = page.locator("div.flex.gap-30.flex-wrap input");
  console.log(await elements.count());
  for (let i = 0; i < (await elements.count()); i++) {
    await elements.nth(i).check();
  }
});
