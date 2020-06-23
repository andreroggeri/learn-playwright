import { chromium, webkit, firefox } from 'playwright';

(async () => {
    for (const browserType of [chromium, webkit, firefox]) {
        const browser = await browserType.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://agendaodonto.com/');
        await page.screenshot({ path: `example-${browserType}.png` });
        await browser.close();
    }
})();