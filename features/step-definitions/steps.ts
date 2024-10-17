import { Given, When, Then } from '@wdio/cucumber-framework';

import LandingPage from "../pageobjects/Landing.page.ts";
import RegistrationPage from "../pageobjects/Registration.page.ts";
import {ClientInfo} from "../resourses/clientInfo.ts";

const paraBank = 'https://parabank.parasoft.com/parabank/index.htm';

Given(/^I am on the (\w+) page$/, async (url :string = paraBank) => {
    await LandingPage.open(url);
});

When(/^I fill the new client registration form$/, async () => {
    await RegistrationPage.registerNewClient(ClientInfo);
});

Then(/^I should see a registration complete successfully message$/, async () => {
    await RegistrationPage.validateRegistrationSuccess();
});
