import { test as custom } from "@playwright/test";
const tester = custom.extend({
  name: "aman dixit",
  print: async function ({ page }, use) {
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
    );
    console.log(`intializing page`);
    await use(page);
    console.log(`fixture teared`);
    await page.close();
  },
});

export default tester;
