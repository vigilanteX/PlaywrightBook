import { test } from "@playwright/test";

test("handling multi window", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan09/HandlingWindowAndPages/index.html"
  );
  const [windowpopup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#openTwoWindows"),
  ]);
  await windowpopup.waitForLoadState();
  console.log(await windowpopup.url());
  console.log(await windowpopup.title());
});

test("get all pages opened", async function ({ context }) {
  const page = await context.newPage();
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan09/HandlingWindowAndPages/index2.html"
  );
  await page.click("#openTabs");
  await page.waitForTimeout(4000);
  const pages = context.pages();
  for (let p of pages) {
    console.log(await p.title());
  }
});

test("multi window handle with context.page()", async function ({ context }) {
  const page = await context.newPage();
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan09/HandlingWindowAndPages/index.html"
  );
  await page.click("#openTwoWindows");
  await page.waitForTimeout(5000);
  const pages = context.pages();
  for (let p of pages) {
    console.log(await p.title());
  }
});

test("download event", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/download-file-demo"
  );
  const [downlaod] = await Promise.all([
    page.waitForEvent("download"),
    page.click("//button[text()='Download File']"),
  ]);
  const name = downlaod.suggestedFilename();
  await downlaod.saveAs(
    `ReviseJan09/HandlingWindowAndPages/DownloadFiles/${name}`
  );
});

test("upload files", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/upload-file-demo"
  );
  await page.setInputFiles("#file", "buriburi.jpg");
  await page.waitForTimeout(4000);
});
