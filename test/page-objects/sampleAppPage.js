import { Label, Button, Input } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class SampleAppPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="title"]', 'UI playground main page'), 'UI testing main page')

        this.sampleAppButton = new Button(PreciseTextLocator('Sample App'), 'sample app button')

        this.usernameField = new Input('//*[@name="UserName"]', 'Username Input')

        this.passwordField = new Input('//*[@name="Password"]')

        this.loginButton = new Button('//*[@id="login"]')

        this.loginStatus = new Label('//*[@id="loginstatus" and contains(text(), "Welcome")]', 'Success message')
    }

    async clickSampleAppButton() {
        await this. sampleAppButton.click();
    }

    async enterUsername(username) {
        await this.usernameField.typeSecret(username);
    }

    async enterPassword(password) {
        await this.passwordField.typeSecret(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async checkLoginStatus() {
        return await this.loginStatus.state().waitForDisplayed();
    }
    
}

export default new SampleAppPage();