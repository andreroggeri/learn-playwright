import { Page } from "playwright";

export class LoginPage {

    constructor(private page: Page) { }

    async navigate(){
        await this.page.goto('https://staging.agendaodonto.com/login');
    }

    async authenticate(email: string, password: string) {
        await this.page.fill('[name=email]', email);
        await this.page.fill('[name=password]', password);
        await this.page.click('button[color="accent"]');
    }
}