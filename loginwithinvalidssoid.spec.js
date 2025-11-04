import { test, expect } from '@playwright/test';

test.setTimeout(600000);
test('test', async ({ page }) => {
  await page.goto('http://192.168.1.101:4200/');
  await page.getByRole('textbox', { name: 'SSO ID' }).click();
  await page.getByRole('textbox', { name: 'SSO ID' }).fill('001122334');
  await page.getByRole('textbox', { name: 'SSO ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('mlive@123');
  await page.getByRole('textbox', { name: 'Enter password' }).press('Tab');
  await page.getByRole('button').filter({ hasText: /^$/ }).press('Tab');
  await page.getByRole('button', { name: '↻' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('3');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('3B5NL9');
  await page.getByRole('button', { name: 'Log In' }).click();
});