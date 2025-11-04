import { test, expect } from '@playwright/test';

test.setTimeout(600000000);
test('test', async ({ page }) => {
  await page.goto('http://192.168.1.101:4200/');
  await page.getByRole('textbox', { name: 'SSO ID' }).click();
  await page.getByRole('textbox', { name: 'SSO ID' }).fill('789456123');
  await page.getByRole('textbox', { name: 'SSO ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('mlive@12');
  await page.getByRole('textbox', { name: 'Enter password' }).press('Tab');
  await page.getByRole('button').filter({ hasText: /^$/ }).press('Tab');
  await page.getByRole('button', { name: '↻' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('W77VE6');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: ' Masters ' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Suppliers' }).click();
  await page.getByRole('textbox', { name: 'Search Supplier...' }).click();
  await page.getByRole('textbox', { name: 'Search Supplier...' }).fill('N');
  await page.getByRole('textbox', { name: 'Search Supplier...' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Search Supplier...' }).fill('navfd');
  await page.getByText('Refresh').click();
  await page.locator('html').click();
  await page.getByRole('combobox').selectOption('25');
  await page.getByRole('combobox').selectOption('50');
  await page.getByRole('combobox').selectOption('100');
  await page.getByRole('combobox').selectOption('10');
});