import { Page } from "playwright";

export class SelectComponent {
    constructor(private page: Page, private selector: string) { }

    async selectOption(value: string) { 
        await this.page.click(this.selector);
        await this.page.click(`mat-option >> text=${value}`);
        await this.page.waitForSelector('mat-option', {state: 'detached'})
    }
}