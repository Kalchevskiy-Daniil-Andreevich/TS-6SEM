const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');
const { delay } = require('../delay');

class ViewReview extends BasePage {
    constructor(driverManager) {
        super();
        this.driverManager = driverManager;
        this.driver = driverManager.driver;
        this.buttonReview = By.xpath('/html/body/div[6]/div/div[1]/ul/li[7]/a');
    }

    async clickReview() {
        let buttReview = await this.findElement(this.buttonReview);
        await this.click(buttReview);
        await delay(3000);
    }
}

module.exports = ViewReview;