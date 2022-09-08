const {chromium} = require('@playwright/test');

const run = async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto('https://tomas-taxi.vercel.app/login');
  await page.locator('#email').fill('lebedevgrisha21@gmail.com');
  await page.locator('#password').fill('4815162342l');
  await page.locator('text="Login"').click();
  await page.waitForNavigation({url: '/home'});
};

run();
