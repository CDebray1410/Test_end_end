const { Given, When, Then } = require('@wdio/cucumber-framework');
const { default: $ } = require('webdriverio/build/commands/browser/$');

Given("I am on the youtube page", async () => {
    browser.url("https://www.youtube.com/");
    console.dir("On youtube page");
})

When("I search with uplift spice", async () => {

    const declineCookiesButton = await browser.$('[aria-label="Refuser l\'utilisation de cookies et d\'autres données aux fins décrites"]')
    await declineCookiesButton.click();
    
    const searchBar = await browser.$('[name="search_query"]');
    searchBar.setValue("uplift spice");
    const serachButton = await browser.$("[title='Musique']");
    await serachButton.click();

    const loginButton = await browser.$('[aria-label="Se connecter"]');
    await loginButton.click();

    const identifierInput = await browser.$('[name="identifier"]');
    identifierInput.setValue('testing');

    const nextButton = await browser.$('#identifierNext');
    nextButton.click();
    await browser.waitUntil(
        async () => 1 !== 1,
        {
            timeout: 50000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
})

Then("I should see a result page containing youtube links about uplift spice", async () => {
    console.dir("Youtube page with uplift spice");
})