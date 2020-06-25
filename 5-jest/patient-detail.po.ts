import { Page } from "playwright";
import { SelectComponent } from "./select-component.po";


interface PatientDetailFormData {
    name: string;
    lastName: string;
    phone: number;
    sex: string;
    dentalPlan: string;
    clinic: string;
}

export class PatientDetailPage {

    private sexSelect = new SelectComponent(this.page, '[formcontrolname="sex"]');
    private planSelect = new SelectComponent(this.page, '[formcontrolname="dental_plan"]');
    private clinicSelect = new SelectComponent(this.page, '[formcontrolname="clinic"]');

    constructor(private page: Page) { }

    async fillData(data: PatientDetailFormData) {
        await this.page.fill('[formcontrolname="name"]', data.name);
        await this.page.fill('[formcontrolname="last_name"]', data.lastName);
        await this.page.fill('[formcontrolname="phone"]', data.phone.toString());
        await this.sexSelect.selectOption(data.sex);
        await this.planSelect.selectOption(data.dentalPlan);
        await this.clinicSelect.selectOption(data.clinic);
        await this.page.click('app-patient-detail button');
    }
}
