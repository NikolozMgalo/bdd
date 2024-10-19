import Browser from "../../framework/browser/Browser.js";
import TextInputPage from '../page-objects/textInputPage.js';
import { Given, When, Then, Before } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import AllureReporter from "@wdio/allure-reporter";

const text = 'abcd'

Before(() => {
    AllureReporter.addSeverity('critical')
})

Given('I am on the homepage', async () => {
    AllureReporter.addStep('Opening main page')
    await Browser.openUrl('http://uitestingplayground.com/')
})

When('I select text input', async () => {
    AllureReporter.addStep('Select text input')
    await TextInputPage.selectTextInput()
})

When('I write text in the input field', async () => {
    AllureReporter.addStep('write text into input field')
    await TextInputPage.writeText(text)
})

When('I click on the button', async () => {
    AllureReporter.addStep('click on updating button')
    await TextInputPage.clickOnButton()
})

Then('Button name should change', async () => {
    AllureReporter.addStep('Check button text')
    assert.strictEqual(await TextInputPage.getButtonText(), text)
})