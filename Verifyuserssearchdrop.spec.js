import { test, expect } from '@playwright/test';

test.setTimeout(6000000);
test('test', async ({ page }) => {
  await page.goto('http://192.168.1.101:4200/');
  await page.getByRole('textbox', { name: 'SSO ID' }).click();
  await page.getByRole('textbox', { name: 'SSO ID' }).click();
  await page.getByRole('textbox', { name: 'SSO ID' }).fill('789456123');
  await page.getByRole('textbox', { name: 'SSO ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('mlive@12');
  await page.getByRole('textbox', { name: 'Enter password' }).press('Tab');
  await page.getByRole('button').filter({ hasText: /^$/ }).press('Enter');
  await page.getByRole('button').filter({ hasText: /^$/ }).press('Tab');
  await page.getByRole('button', { name: '↻' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('B3HJ8U');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: ' Masters ' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Users' }).click();
  await page.getByRole('combobox').nth(1).selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('2');
  await page.getByRole('combobox').nth(1).selectOption('3');
  await page.getByRole('combobox').nth(1).selectOption('4');
  await page.getByRole('combobox').nth(1).selectOption('5');
  await page.locator('div').filter({ hasText: /^Refresh$/ }).click();
  await page.goto('http://192.168.1.101:4200/users');
});