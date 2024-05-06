const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');
const { delay } = require('../delay');

class SearchProduct extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.searchInput = By.id('search-field');
        this.catalogBlock = By.className('catalog list search-catalog-block');
    }

    async searchForProduct(productName) {
        const searchInput = await this.findElement(this.searchInput);
        await this.sendKeys(searchInput, productName + Key.RETURN);
        await delay(3000);
    }

    async waitForCatalogBlock() {
        await this.waitForElement(this.catalogBlock);
        await delay(3000);
    }
}

module.exports = SearchProduct;