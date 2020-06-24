import { chromium } from 'playwright';
import { getCredentials } from '../utils';


async function main() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({});
    const credentials = getCredentials();
    const page = await context.newPage();

    await page.goto('https://staging.agendaodonto.com');

    await page.type('[name=email]', credentials.email);
    await page.type('[name=password]', credentials.password);
    await page.click('button[color="accent"]')

    console.log(await page.textContent('h1'));

    await browser.close();
}


main();