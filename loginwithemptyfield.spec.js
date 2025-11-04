import { test, expect } from '@playwright/test';

test.setTimeout(6000000);
test('test', async ({ page }) => {
  await page.goto('http://192.168.1.101:4200/');
  await page.getByRole('button', { name: 'Log In' }).click();
});