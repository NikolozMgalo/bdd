import BasePage from '../../framework/page/BasePage.js';
import { Label, Button, Input } from '../../framework/elements/index.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';

class TextInputPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="title"]', 'UI playground main page'), 'UI testing main page')

        this.textInputButton = new Button(PreciseTextLocator('Text Input'), 'text input button')

        this.inputField = new Input('//*[@id="newButtonName"]', 'Input field')

        this.updatingButton = new Button('//*[@id="updatingButton"]')
    }

    async selectTextInput() {
        await this.textInputButton.click();
    }

    async writeText(text) {
        await this.inputField.typeText(text)
    }

    async clickOnButton() {
        await this.updatingButton.click()
    }

    async getButtonText() {
        return await this.updatingButton.getText()
    }
}

export default new TextInputPage();