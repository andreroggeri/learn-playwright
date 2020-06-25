import { Page } from "playwright";

export class PatientListPage {
    constructor(private page: Page) { }

    async new() {
        await this.page.click('a.mat-raised-button')
    }


    async getAll() {
        await this.page.waitForSelector('app-patient table tbody > tr')
        const rows = await this.page.$$('app-patient table tbody > tr')
        
        return Promise.all(rows.map(row => row.textContent()));
    }
}