// spec: ReviewJan16/demo.feature
// seed: ReviewJan16/seed.spec.ts

import { test, expect } from '@playwright/test';

 test.describe('We are testing naveen automation labs site', () => {
  test('Check naveen automation lab login page', async ({ page }) => {
    // Given we open naveen automation labs site https://naveenautomationlabs.com/opencart/index.php?route=account/login
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // When we enter username bobatea@gmail.com and password 12345
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('bobatea@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('12345');

    // And click on login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Then user should be able to login successfully
    await expect(page.getByText('My Account')).toBeVisible();

    // And Take the screenshot of the logged in page as jan16.png
    await page.evaluate('() => window.scrollTo(0, 0)');
    await page.screenshot({ path: 'jan16.png', fullPage: true });
  });
});
