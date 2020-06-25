import { LoginPage } from "./login.po";
import { MenuPage } from "./menu.po";
import { getCredentials } from "../utils";
import { PatientListPage } from "./patient-list.po";
import { PatientDetailPage } from "./patient-detail.po";


describe('dental plan', () => {

    let loginPage: LoginPage;
    let menuPage: MenuPage;
    let patientListPage: PatientListPage;
    let patientDetailPage: PatientDetailPage

    beforeAll(() => {
        loginPage = new LoginPage(page);
        menuPage = new MenuPage(page);
        patientListPage = new PatientListPage(page);
        patientDetailPage = new PatientDetailPage(page);
    });

    it('should add a dental plan', async () => {
        // Arrange
        const { email, password } = getCredentials();
        await loginPage.navigate();
        await loginPage.authenticate(email, password)
        await menuPage.toggle();
        await menuPage.goToMenu('Pacientes')
        await patientListPage.new();

        // Act
        const data = {
            name: "Name",
            lastName: "Last Name",
            sex: "Masculino",
            phone: 19993770437,
            dentalPlan: "unleash",
            clinic: "Dynamic Division Officer"
        };
        await patientDetailPage.fillData(data);

        // Assert
        const result = await patientListPage.getAll();

        expect(result.some(row => row?.includes(data.name))).toBe(true);
    });
})