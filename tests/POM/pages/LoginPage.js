class LoginPage {
  #emailLocator = "#input-email";
  #passwordLocator = "#input-password";
  constructor(page, context) {
    this.page = page;
    this.context = context;
  }

  async login(email, password) {
    await this.page.locator(this.#emailLocator).fill(email);
    await this.page.locator(this.#passwordLocator).fill(password);
    await this.page.locator("[type='submit']").click();
    await this.page.waitForTimeout(3000);
  }
  async MyAccount() {
    console.log(await this.page.url());
  }
}
export default LoginPage;
