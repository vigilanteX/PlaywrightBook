import { test, browser } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import MyAccount from "../pages/MyAccount.js";

test.describe("Login Tests", () => {
  test("Valid Login Test1", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
    const loginPage = new LoginPage(page, context);
    const myaccount = new MyAccount(page, context);
    await loginPage.login("bobatea@gmail.com", "12345");
    console.log(await myaccount.myAccountGetUrl());
    await myaccount.logOut();
  });
});
