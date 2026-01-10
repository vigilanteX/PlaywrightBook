import { test } from "@playwright/test";

test("bytext()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  const data = await page.getByText("Login Page").textContent();
  console.log(data);
});

test("byLabel", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  await page.getByLabel("email").fill("aman");
  await page.waitForTimeout(5000);
});

test("Byplaceholder", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  await page.getByPlaceholder("Enter your username").fill("aman");
  await page.waitForTimeout(5000);
});

test("byalttext()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  console.log(await page.getByAltText("Company Logo").isVisible());
});
test("getbytitle()", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  console.log(await page.getByTitle("Help Icon").isVisible());
});

test("getbytestdataid", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/ReviseJan09/GetByElements/index.html");
  console.log(await page.getByTestId("login-btn").textContent());
});

test("getByRole()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan09/GetByElements/getbyroleindex.html"
  );
  let text = await page.getByRole("link", { name: "Home" }).textContent();
  text = await page.getByRole("button", { name: "Login" }).textContent();
  text = await page
    .getByRole("textbox", { name: "Email" })
    .getAttribute("aria-label");
  text = await page.getByRole("checkbox", { name: " Remember Me " });
  text = await page
    .getByRole("radio", { name: " Male", exact: true })
    .getAttribute("name");
  text = await page
    .getByRole("combobox", { name: "Country" })
    .selectOption("USA");
  text = await page
    .getByRole("img", { name: "Company Logo" })
    .getAttribute("src");
  text = await page.getByRole("heading", { level: 1 }).textContent();
  text = await page.getByRole("table").textContent();
  text = await page.getByRole("list").textContent();
  text = await page.getByRole("listitem").last().textContent();
  console.log(text);
});
