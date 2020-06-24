import { Page } from "playwright";

export class ComponentsPage {

    constructor(private page: Page) { }

    getSnackbarContent() {
        return this.page.textContent('simple-snack-bar')
    }
}