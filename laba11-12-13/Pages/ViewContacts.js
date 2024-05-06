const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');
const { delay } = require('../delay');

class ViewContacts extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.buttonContact = By.xpath('/html/body/div[1]/div/ul/li[2]/a');
    }

    async clickContacts() {
        let buttConcat = await this.findElement(this.buttonContact);
        await this.click(buttConcat);
        await delay(3000);
    }
}

module.exports = ViewContacts;