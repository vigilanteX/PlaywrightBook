import { test, browser } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
import MyAccount from "../pages/MyAccount.js";
import sitData from "../data/sit.json";

test.describe("Login Tests", () => {
  test("Valid Login Test1", async ({ browser }) => {
    let data = sitData.data;
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
    const loginPage = new LoginPage(page, context);
    const myaccount = new MyAccount(page, context);
    await loginPage.login(data[0].email, data[0].password);
    console.log(await myaccount.myAccountGetUrl());
    await myaccount.logOut();
  });
});
