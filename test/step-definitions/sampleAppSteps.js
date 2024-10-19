import SampleAppPage from '../page-objects/sampleAppPage.js';
import { Given, When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import Browser from '../../framework/browser/Browser.js';

const username = process.env.USERNAME
const password = process.env.PASSWORD

Given('I am on the main page', async () => {
    await Browser.openUrl('http://uitestingplayground.com/')

    assert.isTrue(await SampleAppPage.isPageOpened(), 'main page not open')
})

When('I select Sample App page', async () => {
    await SampleAppPage.clickSampleAppButton();
})

When('I enter username and password', async () => {
console.log('username here3', username)
console.log('password here4', password)
    await SampleAppPage.enterUsername(username)
    await SampleAppPage.enterPassword(password)
})

When('I click on login button', async () => {
    await SampleAppPage.clickLoginButton()
})

Then('I should see welcome message', async () => {
    assert.isTrue(await SampleAppPage.checkLoginStatus(), 'did not login successfully')
})