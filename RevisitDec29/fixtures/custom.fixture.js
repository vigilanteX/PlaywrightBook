import { test as custom } from "@playwright/test";
import fs from "fs/promises";
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
  //it is mandatory to write use() in function body of fixture
  fileReader: async function ({}, use) {
    const data = await fs.readFile("RevisitDec29/fixtures/data.json", "utf-8");
    console.log(data);
    await use(data);
  },
});

export default tester;
