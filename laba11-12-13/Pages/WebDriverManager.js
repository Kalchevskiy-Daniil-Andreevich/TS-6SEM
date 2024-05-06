const { Builder } = require('selenium-webdriver');
const Logger = require('../Logger');

class WebDriverManager {
    constructor(browser) {
        this.browser = browser;
        this.driver = null;
    }

    async start() {
        try {
            this.driver = await new Builder().forBrowser(this.browser).build();
            Logger.log(`WebDriver успешно запущен для браузера ${this.browser}`);
        } catch (error) {
            Logger.error(`Ошибка при запуске WebDriver для браузера ${this.browser}:`, error);
            throw error;
        }
    }

    async quit() {
        try {
            if (this.driver) {
                await this.driver.quit();
                Logger.log(`WebDriver успешно завершил работу для браузера ${this.browser}`);
            } else {
                Logger.log(`Нет активного экземпляра WebDriver для браузера ${this.browser}`);
            }
        } catch (error) {
            Logger.error(`Ошибка при завершении работы WebDriver для браузера ${this.browser}:`, error);
            throw error;
        }
    }

    async navigateTo(url) {
        try {
            await this.driver.get(url);
            Logger.log(`Переход на страницу ${url}`);
        } catch (error) {
            Logger.error('Ошибка при переходе на страницу:', error);
        }
    }
}

module.exports = WebDriverManager;
