class LoginEmployee {
  #emailLocator = "#input-email";
  #passwordLocator = "#input-password";
  constructor(page) {
    this.page = page;
  }
  async login(email, password) {
    await this.page.locator(this.#emailLocator).fill(email);
    await this.page.locator(this.#passwordLocator).fill(password);
    await this.page.locator("[type='submit']").click();
  }
  async MyAccount() {
    console.log(await this.page.url());
  }
}

export default LoginEmployee;
