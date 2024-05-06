const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');
const { delay } = require('../delay');

class AddProduct extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.addToCartButton = By.xpath('/html/body/div[3]/div[1]/div[2]/div/div[2]/div[1]/div/div[3]/a[2]');
    }

    async addToCart() {
        let addToCartButton = await this.findElement(this.addToCartButton);
        await this.click(addToCartButton);
        await delay(3000);
    }
}

module.exports = AddProduct;