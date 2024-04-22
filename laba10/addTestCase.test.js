const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

class ElMarketPage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.id('search-field');
        this.catalogBlock = By.className('catalog list search-catalog-block');
        this.addToCartButton = By.className('add basket basket-link-303892');
    }

    async open() {
        await this.driver.get('https://www.elmarket.by/');
    }

    async searchForProduct(productName) {
        const searchInput = await this.driver.findElement(this.searchInput);
        await searchInput.sendKeys(productName, Key.RETURN);
        await sleep(3000);
    }

    async waitForCatalogBlock() {
        await this.driver.wait(until.elementLocated(this.catalogBlock), 5000);
        await sleep(3000);
    }

    async addToCart() {
        let addToCartButton = await this.driver.findElement(this.addToCartButton);
        await addToCartButton.click();
        await sleep(3000);
    }
}

describe('Поиск товара и добавление в корзину', () => {
    let driver;
    let page;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        page = new ElMarketPage(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Поиск товара и добавление в корзину Braun MQ 3135 WH Sauce', async () => {
        try {
            await page.open();
            await sleep(3000);

            await page.searchForProduct('Braun MQ 3135 WH Sauce');
            await page.waitForCatalogBlock();

            console.log('Товар успешно найден!');

            await page.addToCart();

            console.log('Товар успешно добавлен в корзину!');
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 30000);
});
