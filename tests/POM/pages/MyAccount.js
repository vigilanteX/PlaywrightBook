class MyAccount {
  #logOut = "//a[text()='Logout' and @class]";
  constructor(page, context) {
    this.page = page;
    this.context = context;
  }

  async myAccountGetUrl() {
    return await this.page.url();
  }
  async logOut() {
    await this.page.locator(this.#logOut).click();
    await this.page.waitForTimeout(3000);
  }
}
export default MyAccount;
