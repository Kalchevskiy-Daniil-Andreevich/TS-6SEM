const { Builder, By, Key, until } = require('selenium-webdriver');

class ElMarketPage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.id('search-field');
        this.searchResults = By.className('catalog list search-catalog-block');
    }

    async open() {
        await this.driver.get('https://www.elmarket.by/');
    }

    async searchForProduct(productName) {
        let searchInput = await this.driver.findElement(this.searchInput);
        await searchInput.sendKeys(productName, Key.RETURN);
        await this.driver.wait(until.elementLocated(this.searchResults), 5000);
    }
}

describe('Поиск товара', () => {
    let driver;
    let page;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        page = new ElMarketPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Поиск товара Braun MQ 3135 WH Sauce', async () => {
        try {
            await page.open();
            await page.searchForProduct('Braun MQ 3135 WH Sauce');
            console.log('Товар успешно найден!');
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 30000);
});
