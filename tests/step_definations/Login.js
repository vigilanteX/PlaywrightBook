import { Given, When, Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import LoginEmployee from "../POMForGerkins/PageObject/LoginEmployee.js";
let browser;
let pageC;
let login;
let context;
Given("User opens naveen automation labs and provide credentials", async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  pageC = await context.newPage();
  login = new LoginEmployee(pageC);
  await pageC.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await login.login("bobatea@gmail.com", "12345");
});

When("User clicks on login", async () => {
  console.log(await pageC.title());
});
Then("User should land on website as logged in user", async () => {
  await login.MyAccount();
});
