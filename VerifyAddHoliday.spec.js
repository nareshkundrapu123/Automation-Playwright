import { test, expect } from '@playwright/test';


test.setTimeout(60000000);
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
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('ZR343Q');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: ' Masters ' }).click();
  await page.getByRole('list').getByText('Holidays').click();
  await page.getByRole('button', { name: 'Add Holiday' }).click();
  await page.locator('form').getByRole('textbox').fill('2025-11-30');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.locator('form').getByRole('textbox').fill('2025-11-29');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('.slider').first().click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});