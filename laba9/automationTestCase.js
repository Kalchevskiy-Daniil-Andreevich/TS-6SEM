const { Builder, By, Key, until } = require('selenium-webdriver');

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

describe('Поиск товара', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Поиск товара Braun MQ 3135 WH Sauce', async () => {
        try {
            await driver.get('https://www.elmarket.by/');
            await sleep(3000);

            const searchInput = await driver.findElement(By.id('search-field'));
            await searchInput.sendKeys('Braun MQ 3135 WH Sauce', Key.RETURN);
            await sleep(3000);

            await driver.wait(until.elementLocated(By.className('catalog list search-catalog-block')), 5000);
            await sleep(3000);

            console.log('Товар успешно найден!');
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    }, 30000);
});
