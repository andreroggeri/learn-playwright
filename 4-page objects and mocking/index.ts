import { createBrowser, getCredentials } from "../utils";
import { LoginPage } from "./login.po";
import { MenuPage } from "./menu.po";
import { ComponentsPage } from "./components.po";

async function main() {
    const { browser, page } = await createBrowser();
    const { email, password } = getCredentials();
    const loginPage = new LoginPage(page);
    const menuPage = new MenuPage(page);
    const componentsPage = new ComponentsPage(page)

    await page.route('**/dental-plans/*', route => route.fulfill({
        status: 500,
        body: JSON.stringify({ content: 'failed' })
    }))

    await loginPage.navigate();
    await loginPage.authenticate(email, password);

    await menuPage.toggle();
    await menuPage.goToMenu('Planos');

    const content = await componentsPage.getSnackbarContent();

    console.log('Content is => ', content);

    browser.close();
}

main();