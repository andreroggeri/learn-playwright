import { chromium } from 'playwright';


async function main() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({});

    const page = await context.newPage();

    await page.goto('https://staging.agendaodonto.com');

    await page.type('[name=email]', 'a.roggeri.c@gmail.com')
    await page.type('[name=password]', 'Teste0987')
    await page.click('button[color="accent"]')

    console.log(await page.textContent('h1'));

    await browser.close();
}


main();