const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');
const { delay } = require('../delay');

class Register extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.buttOffice = By.xpath('/html/body/div[1]/div/div/div[1]/a');
        this.buttReg = By.xpath('/html/body/div[1]/div/div/div[2]/div/a[2]');
        this.buttMail = By.xpath('/html/body/div[10]/div[2]/div/div[2]/ul/li[2]');
        this.inputMail = By.xpath('/html/body/div[10]/div[2]/div/div[2]/form[1]/div[1]/div/input');
        this.buttActiveReg = By.xpath('/html/body/div[10]/div[2]/div/div[2]/form[1]/div[3]/input');
        this.buttExit = By.xpath('/html/body/div[1]/div/div/div[2]/div/div/a[6]');
    }

    async clickOffice() {
        let buttOff = await this.findElement(this.buttOffice);
        await this.click(buttOff);
        await delay(3000);
    }

    async clickReg() {
        let buttReg = await this.findElement(this.buttReg);
        await this.click(buttReg);
        await delay(3000);
    }

    async clickMail() {
        let buttMail = await this.findElement(this.buttMail);
        await this.click(buttMail);
        await delay(6000);
    }

    async clickInputMail(mailName) {
        const mailInput = await this.findElement(this.inputMail);
        await this.sendKeys(mailInput, mailName + Key.RETURN);
        await delay(3000);
    }

    async clickActiveReg() {
        let buttActive = await this.findElement(this.buttActiveReg);
        await this.click(buttActive);
        await delay(3000);
    }

    async clickExit() {
        let exitButt = await this.findElement(this.buttExit);
        await this.click(exitButt);
        await delay(3000);
    }
}

module.exports = Register;