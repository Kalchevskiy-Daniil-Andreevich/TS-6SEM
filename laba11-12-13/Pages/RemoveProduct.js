const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');
const { delay } = require('../delay');

class RemoveProduct extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.removeFromCartButton = By.xpath('/html/body/div[2]/div[1]/div[2]/div[3]/div/div/div[1]/div[1]/div/div[1]/div[2]/p/a');
    }

    async removeFromCart() {
        let removeFromCartButton = await this.driver.findElement(this.removeFromCartButton);
        await removeFromCartButton.click();
        await delay(3000);
    }
}
module.exports = RemoveProduct;
