const { until } = require('selenium-webdriver');
const Logger = require('../Logger');
const { delay } = require('../delay');

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        Logger.log(`Открытие страницы: ${url}`);
        await this.driver.get(url);
    }

    async waitForElement(locator, timeout = 5000) {
        Logger.log(`Ожидание элемента по локатору: ${locator}`);
        await this.driver.wait(until.elementLocated(locator), timeout);
    }

    async findElement(locator) {
        Logger.log(`Поиск элемента по локатору: ${locator}`);
        return await this.driver.findElement(locator);
    }

    async sendKeys(element, keys) {
        Logger.log(`Ввод текста '${keys}' в элемент`);
        await element.sendKeys(keys);
    }

    async click(element) {
        Logger.log(`Клик по элементу`);
        await element.click();
    }
}

module.exports = BasePage;
