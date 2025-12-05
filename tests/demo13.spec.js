import { test, expect } from "@playwright/test";

test("demo13 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/iframe-demo/"
  );
  await page.frameLocator("#iFrame1").getByText("Your content.").fill("aman");
  await page.waitForTimeout(3000);
});

test("demo13 test 2", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/nested-frames/"
  );
  let top = await page
    .frameLocator("[name='frame-top']")
    .getByText("Top")
    .textContent();
  console.log("top:", top);
  let bottom = await page.frameLocator("[name='frame-bottom']");
  let bottomLeft = await bottom
    .frameLocator("[name='frame-left']")
    .getByText("Left")
    .textContent();
  let bottommiddle = await bottom
    .frameLocator("[name='frame-middle']")
    .getByText("Middle")
    .textContent();
  let bottomright = await bottom
    .frameLocator("[name='frame-right']")
    .getByText("Right")
    .textContent();
  console.log("bottom left:", bottomLeft);
  console.log("bottom middle:", bottommiddle);
  console.log("bottom right:", bottomright);
});
