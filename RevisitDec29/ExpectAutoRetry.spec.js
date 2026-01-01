import { expect, test } from "@playwright/test";

test("expect(locator).toBeVisible()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let input = page.locator("//label[contains(.,'box')]/input");
  await expect(input).toBeVisible();
});

test("expect(locator).toBeHidden()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//p[text()='Checked!']");
  await expect(loc).toBeHidden();
});

test("expect(locator).toContainText('text')", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  let loc = page.locator("//p[contains(text(),'shop faster')]");
  await expect(loc).toContainText("up to date");
});

test("expect(locator).toHaveText('exact text')", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  let loc = page.locator("//p[contains(text(),'shop faster')]");
  await expect(loc).toHaveText(
    "By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made."
  );
});
test("expect(locator).toHaveValue('value')", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  let loc = page.locator("#input-email");
  await loc.fill("aman");
  await expect(loc).toHaveValue("aman");
});

test("expect(locator).toBeChecked()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//label[text()=' Option 2']/input");
  await loc.check();
  await expect(loc).toBeChecked();
  await page.waitForTimeout(5000);
});
test("expect(locator).toBeEnabled()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//label[text()=' Option 2']/input");
  await expect(loc).toBeEnabled();
});
test("expect(locator).toHaveAttribute('name', 'val')", async function ({
  page,
}) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//label[text()=' Option 2']/input");
  await expect(loc).toHaveAttribute("type", "checkbox");
});
test("expect(locator).toHaveClass('class-name')", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//h2[text()='Disabled Checkbox Demo']");
  await expect(loc).toHaveClass("text-size-22 font-semibold pb-10 text-black");
});
test("expect(locator).toHaveCount(3)", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let loc = page.locator("//input");
  await expect(loc).toHaveCount(14);
});
test("expect(locator).toHaveURL", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await expect(page).toHaveURL(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
});
test("expect(locator).toHaveTitle", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await expect(page).toHaveTitle(
    "Selenium Grid Online | Run Selenium Test On Cloud"
  );
});

//NOT OR NEGATIVE
test("expect(locator).not.toBeVisible()", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await expect(page).not.toHaveURL(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
});

//SOFT ASSERTION
test("soft assertion", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await expect.soft(page).toHaveURL("https://google.com");
  console.log(await page.title());
  console.log("soft assertion done");
});
