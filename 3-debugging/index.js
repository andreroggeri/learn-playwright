const playwright = require('playwright');

async function main() {
    const browser = playwright.chromium;
    const context = await browser.launch({headless: false});

    const page = await context.newPage();


    await page.goto('https://staging.agendaodonto.com');
    await page.fill('[name=email]', 'some-email@tld');
    debugger;
    await page.fill('[name=password]', 'some-password');
    await context.close();
}

main();