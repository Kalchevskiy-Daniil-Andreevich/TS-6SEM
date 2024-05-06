const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');
const { delay } = require('../delay');

class FilterPrice extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        // this.butTechnolog = By.xpath('/html/body/div[2]/div[2]/div/ul/li[1]');
        // this.linkProduct = By.xpath('/html/body/div[2]/div[2]/div/ul/li[1]/div/div/div[1]/ul[3]/li[3]/a');
        this.buttonPrice = By.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div[1]/div/div/div[1]/div[1]/a[1]');
    }

    // async clickTechnology() {
    //     let butTech = await this.findElement(this.butTechnolog);
    //     await this.click(butTech);
    //     await delay(3000);
    // }

    // async clickLink() {
    //     let linkProd = await this.findElement(this.linkProduct);
    //     await this.click(linkProd);
    //     await delay(3000);
    // }

    async clickButtonPrice() {
        let butPrice = await this.findElement(this.buttonPrice);
        await this.click(butPrice);
        await delay(5000);
    }

}

module.exports = FilterPrice;