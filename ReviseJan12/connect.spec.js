import { test, chromium } from "@playwright/test";
//connect to browser started by playwright
//npx playwright run-server --port=3000 used for starting playwright browser
test("using connect", async function () {
  const browser = await chromium.connect("ws://127.0.0.1:3000/");
  console.log(browser.isConnected());
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "ReviseJan12/google.png" });
  await page.waitForTimeout(10000);
});
//use this command to start->  google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/pw-profile
//this can connect to existing CDP server
test("using connect CDP", async function () {
  const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
  console.log(browser.isConnected());
  const context = browser.contexts()[0];
  const page = await context.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "ReviseJan12/google.png" });
  await page.waitForTimeout(10000);
});
test("chromium connect", async function () {
  const server = await chromium.launchServer();
  const browser = await chromium.connect(server.wsEndpoint());
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "ReviseJan12/google.png" });
  await page.waitForTimeout(10000);
});
