import { Page } from "playwright";

export class MenuPage {

    constructor(private page: Page) { }

    async toggle() {
        await this.page.click('button.toggle-sidenav');
    }

    async goToMenu(menu: string) {
        await this.page.click(`mat-sidenav >> text=${menu}`);
    }
}