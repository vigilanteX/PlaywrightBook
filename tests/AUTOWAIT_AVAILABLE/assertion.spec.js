import { expect, test } from "@playwright/test";

test("expect(locator).toBeVisible()", async ({ page }) => {
  //1-tobevisisble
  // await page.goto(
  //   "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  // );
  // //element to be visible within 60 seconds
  // //expect waits for time from config file and field name is expect.timeout
  //const email = await page.locator("#input-emailss");
  // await expect(email).toBeVisible();
  //2-tobehidden
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo"
  // );
  // const hidden = await page.getByText(
  //   "Autocloseable success message. Hide in 5 seconds.",
  //   { exact: true }
  // );
  // await expect(hidden).toBeHidden();
  //3-tobeenabled
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  // );
  // const option = await page.locator(
  //   "(//h2[contains(text(),'Disabled')]/../div//input)[3]"
  // );
  // await expect(option).toBeEnabled();
  //4-tobedisabled
  //5-toHaveAttribute
  // await page.goto(
  //   "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  // );
  // const option = await page.locator(
  //   "(//h2[contains(text(),'Disabled')]/../div//input)[3]"
  // );
  // await expect(option).toHaveAttribute("disabled");
  //6-tohavecount
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let c = await page.locator("//h2[contains(text(),'Disabled')]/../div//input");
  await expect(c).toHaveCount(5);
});

// toBeEnabled() checks if the element is enabled (not disabled).
// Works for: <input>, <button>, <select>, <textarea>, etc.
// Passes if the element does not have the disabled attribute.
// toBeEditable() checks if the element is editable by the user.

// Works for: <input>, <textarea>, <select>, and elements with contenteditable="true".
// Passes if the element is enabled and not read-only (for inputs/textareas), or has contenteditable.

// expect(locator).toBeChecked() is intended for checkboxes and radio buttons (i.e., elements that support the checked property).

// It passes if the element is present and has the checked attribute/property (e.g., <input type="checkbox" checked> or <input type="radio" checked>).
// It fails for elements that do not support being checked.

// toHaveText(): Passes only if the element’s text exactly matches the expected string (no extra or missing text).
// toContainText(): Passes if the element’s text contains the expected substring anywhere (can have extra text before/after).
//toHaveValue() checks the current value of the input box, including any user input.

/*
When you use toHaveCSS in Playwright, it checks the computed CSS property value of the element. This includes:
Inline styles (from the style attribute)
Styles from external CSS files
Styles from <style> tags in the page
Inherited and browser default styles
*/
