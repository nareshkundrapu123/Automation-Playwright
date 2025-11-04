import { test, expect } from '@playwright/test';


test.setTimeout(60000000);
test('test', async ({ page }) => {
  await page.goto('http://192.168.1.101:4200/');
  await page.getByRole('textbox', { name: 'SSO ID' }).click();
  await page.getByRole('textbox', { name: 'SSO ID' }).fill('789456123');
  await page.getByRole('textbox', { name: 'SSO ID' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'SSO ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter password' }).fill('mlive@12');
  await page.getByRole('textbox', { name: 'Enter password' }).press('Tab');
  await page.getByRole('button').filter({ hasText: /^$/ }).press('Tab');
  await page.getByRole('button', { name: '↻' }).press('Tab');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).fill('7TX7MN');
  await page.getByRole('textbox', { name: 'Please enter the CAPTCHA' }).press('Tab');
  await page.getByRole('button', { name: 'Log In' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: ' Masters ' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Users' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('textbox', { name: 'Enter SSO ID' }).click();
  await page.getByRole('textbox', { name: 'Enter SSO ID' }).fill('111111119');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});