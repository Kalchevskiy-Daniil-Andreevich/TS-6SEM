const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');
const { delay } = require('../delay');

class Authorization extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.buttOffice = By.xpath('/html/body/div[1]/div/div/div[1]/a');
        this.buttAuth = By.xpath('/html/body/div[1]/div/div/div[2]/div/a[1]');
        this.buttVk = By.xpath('/html/body/div[10]/div[2]/div/div[2]/div[2]/div/div/a[1]');
        this.buttInputVK = By.xpath('/html/body/div[1]/div/div/div/div/div[1]/div/div[2]/div/div/div/form/div[1]/section/div/div/span/input');
        this.buttPasswordVK = By.xpath('/html/body/div[1]/div/div/div/div/div[1]/div[1]/div/div/div/div/form/div[1]/div[3]/div/div/input');
        this.continueName = By.xpath('/html/body/div[1]/div/div/div/div/div[1]/div/div/div/div/div/form/div[2]/button/span/span');
    }

    async clickOffice() {
        let buttOff = await this.findElement(this.buttOffice);
        await this.click(buttOff);
        await delay(3000);
    }

    async clickAuth() {
        let authButt = await this.findElement(this.buttAuth);
        await this.click(authButt);
        await delay(3000);
    }

    async clickVk() {
        let buttVk = await this.findElement(this.buttVk);
        await this.click(buttVk);
        await delay(3000);
    }

    async clickInputVK(VKName) {
        const mailVK = await this.findElement(this.buttInputVK);
        await this.sendKeys(mailVK, VKName + Key.RETURN);
        await delay(3000);
    }

    async clickPasswordVK(VKPassword) {
        const passwordVK = await this.findElement(this.buttPasswordVK);
        await this.sendKeys(passwordVK, VKPassword + Key.RETURN);
        await delay(15000);
    }

    async clickContin() {
        let buttContin = await this.findElement(this.continueName);
        await this.click(buttContin);
        await delay(3000);
    }
}

module.exports = Authorization;