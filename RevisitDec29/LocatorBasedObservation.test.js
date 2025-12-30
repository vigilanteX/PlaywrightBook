import { test } from "@playwright/test";
test("locator.isVisible()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("//label[text()='Click on check box']").isVisible()
  );
  await page.waitForTimeout(4000);
});

test("locator.isHidden()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(await page.locator("//label[text()='meow']").isHidden());
  await page.waitForTimeout(4000);
});

test("locator.isChecked()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await page.locator("//label[text()='Click on check box']/input").check();
  await page.waitForTimeout(4000);
  console.log(
    await page.locator("//label[text()='Click on check box']/input").isChecked()
  );
  await page.waitForTimeout(4000);
  await page.locator("//label[text()='Click on check box']/input").uncheck();
  console.log(
    await page.locator("//label[text()='Click on check box']/input").isChecked()
  );
  await page.waitForTimeout(4000);
});
//An element is considered enabled if it does not have a disabled attribute. This applies to elements like <button>, <input>, <select>, and <textarea>
test("locator.isEnabled()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("(//label[contains(text(),'4')])[1]/input").isEnabled(),
    await page.locator("(//label[contains(text(),'2')])[1]/input").isEnabled()
  );
});
//isEditable() is specifically designed for input fields (like <input>, <textarea>, or elements with contenteditable="true")
/*
State,isVisible(),isEnabled(),isEditable()
Normal Input,✅,✅,✅
Disabled Input,✅,❌,❌
Read-only Input,✅,✅,❌
Enabled Button,✅,✅,❌
Hidden Input,❌,✅,❌
*/
//If you call isEditable() on a <div> or <span> that doesn't have the contenteditable attribute,
//it will return false, even if the element is visible and enabled.
//FYI-contenteditable attribute is a global HTML attribute that allows you to turn almost any standard HTML element (like a <div>, <p>, or <h1>) into an editable text area.
test("locator.isEditable()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("(//label[contains(text(),'4')])[1]/input").isEditable(),
    await page.locator("(//label[contains(text(),'4')])[2]/input").isEditable()
  );
});

//Retrieval based
/*
1. locator.textContent()
This method returns the raw text content of an element and all its descendants.

Includes Hidden Text: It will return text inside elements that are hidden via CSS (display: none or visibility: hidden).

Includes Scripts/Styles: If there is a <script> or <style> tag inside your target element, textContent will return that code as text.

Whitespace: It preserves the exact whitespace and line breaks found in the HTML source code.

2. locator.innerText()
This method returns the rendered text of an element, approximating what a user would see if they highlighted and copied the text.

Visible Only: It ignores text that is hidden by CSS.

Respects CSS: If you use CSS to change text (e.g., text-transform: uppercase), innerText will return the uppercase version, while textContent will return the original source text.

Formatting: It normalizes whitespace and converts <br> tags into actual newline characters.

3. locator.allInnerTexts()
This is the plural version of innerText().

Returns an Array: If your locator matches multiple elements (e.g., all items in a list), this returns an Array<string> containing the innerText of each one.

No Auto-waiting: Unlike the singular versions, allInnerTexts() does not wait for the elements to appear. It immediately returns whatever is on the page. If the page hasn't loaded yet, it may return an empty array.
Feature,textContent(),innerText(),allInnerTexts()
Visibility,Returns hidden text,Only visible text,Only visible text
CSS Styles,Ignores CSS styling,Respects CSS styling,Respects CSS styling
Return Type,string (or null),string,Array<string>
Performance,Faster (raw DOM),Slower (requires layout),Slower (batch layout)
Best For,Data scraping / raw checks,UI Assertions (user view),Validating lists of items

*/

test("textContent()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/indexreturnable.html");
  console.log(await page.locator("#container").textContent());
});
test("innerText()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/indexreturnable.html");
  console.log(await page.locator("#container").innerText());
});
test("allInnerTexts()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/indexreturnable.html");
  console.log(await page.locator("#container").allInnerTexts());
});
test("getAttribute()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );
  console.log(await page.locator("#inputEmail").getAttribute("placeholder"));
});
test("locator.inputValue()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );
  await page.locator("#name").fill("Aman");
  console.log(await page.locator("#name").inputValue());
});

//DRAG DROP, SCROLL
test("drag and drop", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
  );
  await page
    .locator("//span[text()='Draggable 1']")
    .dragTo(page.locator("#mydropzone"));
  await page.waitForTimeout(4000);
  await page.locator().scrollIntoViewIfNeeded();
});

test("scrollIntoViewIfNeeded()", async function ({ page }) {
  await page.setViewportSize({ width: 500, height: 500 });
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.waitForTimeout(5000);
  await page.locator("[value='Login']").scrollIntoViewIfNeeded();
  await page.waitForTimeout(5000);
});
test("selectText()", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  console.log(await page.locator().selectText());
  await page.waitForTimeout(5000);
});

test("select text", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator("//p[contains(text(),'By creating')]").selectText();
  await page.waitForTimeout(4000);
});
/*
State,Description
'visible',(Default) Waits until the element is visible (has non-zero size and is not hidden by CSS).
'hidden',Waits until the element is either removed from the DOM or hidden via CSS.
'attached',Waits until the element is present in the DOM (even if it's hidden).
'detached',Waits until the element is completely removed from the DOM.
*/
//only timeout proeprty works
test("locator.waitFor()", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  await page.locator(".meow").waitFor({ state: "visible" });
});

/*Here is the summary of the difference in 4 lines:

* **`page.locator()`** is a **lazy blueprint**: it only stores search instructions and auto-waits for elements when you finally perform an action (like `.click()`).
* **`page.locator().all()`** is an **eager snapshot**: it instantly returns a standard JS array of all matching elements found on the page at that exact moment.
* **Crucial Difference**: `.all()` **does not auto-wait**; if the elements haven't rendered yet when it is called, it will simply return an empty array `[]`.
* **Best Practice**: Use `page.locator()` for standard interactions and `.all()` when you need to loop through a dynamic list of items. */
test("locator.all()", async function ({ page }) {});
