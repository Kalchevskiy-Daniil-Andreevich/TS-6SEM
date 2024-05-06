const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');
const { delay } = require('../delay');
const { scrollDownToCoordinates } = require('../scrollDown');;

class ViewPromotion extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.buttonPromote = By.xpath('//*[@id="body"]/div[1]/div/ul/li[3]/a');
        this.infoPromote = By.xpath('/html/body/div[3]/div[1]/div[2]/div/div[2]/div[1]/a[2]');
    }

    async clickPromote() {
        let buttonPromote = await this.findElement(this.buttonPromote);
        await this.click(buttonPromote);
        await delay(3000);
    }

    async clickInfoPromote() {
        let butInfoProm = await this.findElement(this.infoPromote);
        await this.click(butInfoProm);
        await delay(3000);
    }

    async scrollDownToInfoPromote() {
        let x = 0;
        let y = 700;
        await scrollDownToCoordinates(this.driver, x, y);
        await delay(3000);
    }
}

module.exports = ViewPromotion;