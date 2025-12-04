import { expect, test } from "@playwright/test";

test("demo11 test", async ({ page }) => {
  //upload single file
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/upload-file-demo"
  // );
  // await page.setInputFiles("#file", "./buriburi.jpg");
  // await page.waitForTimeout(8000);
  //upload multiple files

  await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
  await page.setInputFiles("input[multiple]", [
    "./buriburi.jpg",
    "./buriburi.jpg",
  ]);
  await page.waitForTimeout(8000);
});
