import { test } from "@playwright/test";

test.skip("mock request", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/mocking/index.html");
  //listener page.route()
  await page.route("**/playwrightserver", async function (r) {
    const req = r.request();
    console.log(await req.allHeaders());
    let body = JSON.parse(await req.postData());
    body = { userid: 123456789, ...body };
    console.log(body);
    //send request
    await r.continue({ postData: body });
  });

  await page.locator("#callApiBtn").click();
});

test.skip("mock response", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/mocking/index.html");
  await page.waitForTimeout(5000);

  await page.route("**/playwrightserver", async function (r) {
    const data = { name: "Aman", age: 100, meow: "CAT" };
    await r.fulfill({ body: JSON.stringify(data) });
  });
  await page.locator("#callApiBtn").click();
  await page.waitForTimeout(5000);
});

test("abort scenario", async function ({ page }) {
  await page.route("**/playwrightserver", async function (r) {
    r.abort("accessdenied");
  });
  await page.goto("http://127.0.0.1:5500/RevisitDec29/mocking/index.html");
  await page.waitForTimeout(5000);
  await page.locator("#callApiBtn").click();
  await page.waitForTimeout(5000);
});
