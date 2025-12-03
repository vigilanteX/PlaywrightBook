import { expect, test } from "@playwright/test";

test("demo6 test", async ({ page }) => {
  //sselect single option from dropdown
  //   await page.goto(
  //     "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  //   );
  //   const dropdown = page.locator("#select-demo");
  //   //await dropdown.selectOption("Friday");
  //   //await dropdown.selectOption({ index: 1 });
  //   await page.selectOption("#select-demo", { label: "Monday" });
  //   await page.waitForTimeout(2000);

  //select multiple options from dropdown
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", [
    "California",
    "Ohio",
    "Washington",
  ]);
  await page.waitForTimeout(12000);
});
