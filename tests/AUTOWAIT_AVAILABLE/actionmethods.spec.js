import { test, page } from "@playwright/test";

test("AUTOWAIT_AVAILABLE demo", async ({ page, context }) => {
  //1-below line will wait for the element to be visible and enabled before clicking
  //and it will wait for time mentiond in the playwright.config.js file timeout property
  // await page.goto("https://www.onlinemictest.com/mouse-test/");
  // await page.locator("#meows").click();
  //2- below code works for double click
  //wait for the element to be visible and enabled before clicking
  // await page.goto("https://doubleclicktest.com/");
  // await page.locator("#dcCounts").hover();
  // await page.locator("#dcCounts").dblclick();
  // await page.waitForTimeout(3000);
  //3- fill wait for the element to be visible and enabled before filling
  //and this is autowait feature of playwright
  //and fetch timeout from playwright.config.js file timeout property
  //   await page.goto(
  //     "https://www.lambdatest.com/selenium-playground/input-form-demo"
  //   );
  //   await page.locator("[placeholder='Names']").fill("Aman");
  //   await page.waitForTimeout(3000);
  //4-clear autowait feature of playwright
  //wait for the element to be visible and enabled before clearing
  //and wait is fetched from playwright.config.js file timeout property
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/input-form-demo"
  // );
  // await page.locator("#name").fill("Aman");
  // await page.waitForTimeout(5000);
  // await page.locator("#names").clear();
  // await page.waitForTimeout(3000);
  //5-type and press autowait feature of playwright
  //wait for the element to be visible and enabled before typing
  //and wait is fetched from playwright.config.js file timeout property
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/input-form-demo"
  // );
  // await page.locator("#names").type("xmxmx");
  // await page.goto("https://playwright.dev/docs/api/class-keyboard");
  // // await page
  // //   .locator("//strong[text()='strike a key']")
  // //   .press("ArrowLeft", { delay: 5000 });
  // await page
  //   .locator("//h1[text()='Keyboard']")
  //   .press("Control+A", { delay: 5000 });
  // await page
  //   .locator("//h1[text()='Keyboard']")
  //   .press("Control+C", { delay: 5000 });
  // const newpage = await context.newPage();
  // await newpage.goto("https://www.onlinenotepad.io/");
  // await newpage.locator("[role='textbox']").press("Control+V", { delay: 5000 });
  //6-check uncheck autowait feature of playwright
  //wait for the element to be visible and enabled before checking/unchecking
  //and wait is fetched from playwright.config.js file timeout property
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  // );
  // await page.locator("[name='option4x']").check();
  // await page.waitForTimeout(5000);
  // await page.locator("[name='option4x']").uncheck();
  // await page.waitForTimeout(5000);
  //7-selectOptions autowait feature of playwright
  //wait for the element to be visible and enabled before selecting options
  //fetches wait time from playwright.config.js file timeout property
  // await page.goto("https://practice.expandtesting.com/dropdown");
  // //await page.locator("#country").selectOption("Chile");
  // await page.locator("#country").selectOption({ index: 5 });
  // await page.waitForTimeout(5000);
  //8-file upload autowait feature of playwright
  //wait for the element to be visible and enabled before uploading file
  //wait time is fetched from playwright.config.js file timeout property
  // await page.goto("https://the-internet.herokuapp.com/upload");
  // await page.locator("#file-uploads").setInputFiles("buriburi.jpg");
  // await page.waitForTimeout(5000);
  //9-hover autowait feature of playwright
  //wait for the element to be visible and enabled before hovering
  //wait time is fetched from playwright.config.js file timeout property
  // await page.goto("https://www.lambdatest.com/selenium-playground/hover-demo");
  // await page.locator("div.bg-green-100x").hover();
  // await page.waitForTimeout(5000);
  //10-dispatchevent autowait feature of playwright
  //wait for the element to be visible and enabled before dispatching event
  //wait time is fetched from playwright.config.js file timeout property
  // await page.goto(
  //   "http://127.0.0.1:5500/tests/AUTOWAIT_AVAILABLE/HTML/index.html"
  // );
  // await page.waitForTimeout(5000);
  // await page.locator("#input").dispatchEvent("focus");
  // await page.waitForTimeout(5000);
});
