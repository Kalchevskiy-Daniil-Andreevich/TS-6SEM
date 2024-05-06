const { test, expect } = require('@jest/globals');
const WebDriverManager = require('./Pages/WebDriverManager');
const SearchProduct = require('./Pages/SearchProduct');
const AddProduct = require('./Pages/AddProduct');
const RemoveProduct = require('./Pages/RemoveProduct')
const ViewPromotion = require('./Pages/ViewPromotion')
const SortPopular = require('./Pages/SortPopular');
const FilterPrice = require('./Pages/FilterPrice');
const ViewReview = require('./Pages/ViewReview');
const ViewContacts = require('./Pages/ViewContacts');
const Register = require('./Pages/Register');
const Authorization = require('./Pages/Аuthorization')
const Logger = require('./Logger');

describe('Подготовка к выполнению тест-кейсов', () => {
    let driver;
    let searchProduct;
    let addProduct;
    let removeProduct;
    let sortPopular;
    let filterPrice;
    let viewReview;
    let viewContact;
    let register;
    let authorization;

    beforeAll(async () => {
        driver = new WebDriverManager('chrome');
        await driver.start();
        searchProduct = new SearchProduct(driver);
        addProduct = new AddProduct(driver);
        removeProduct = new RemoveProduct(driver);
        clickProm = new ViewPromotion(driver);
        sortPopular = new SortPopular(driver);
        filterPrice = new FilterPrice(driver);
        viewReview = new ViewReview(driver);
        viewContact = new ViewContacts(driver);
        register = new Register(driver);
        authorization = new Authorization(driver);
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Тесты', async () => {
        try {
            await searchProduct.open('https://www.elmarket.by/');
            await searchProduct.searchForProduct('Braun MQ 3135 WH Sauce');
            await searchProduct.waitForCatalogBlock();
            Logger.log('Товар успешно найден!');
            await addProduct.addToCart();
            Logger.log('Товар успешно добавлен в корзину!');
            await removeProduct.removeFromCart();
            Logger.log('Товар успешно удален из корзины!');
            await clickProm.clickPromote();
            Logger.log('Каталог акций успешно просмотрен!');
            await clickProm.clickInfoPromote();
            Logger.log('Акция успешно просмотрена!');
            await clickProm.scrollDownToInfoPromote();
            Logger.log('Скролинг успешно выполнен!');
            await sortPopular.clickTechnology();
            Logger.log('Каталог бытовая техника успешно открыт!');
            await sortPopular.clickLink();
            Logger.log('Нажата ссылка на продукт(Блендеры)!');
            await sortPopular.clickButtonPopul();
            Logger.log('Продукты(Блендеры) успешно отсортированы по популярности!');
            await filterPrice.clickButtonPrice();
            Logger.log('Продукты(Блендеры) успешно отфильтрованы по цене!');
            await viewReview.clickReview();
            Logger.log('Отзывы успешно просмотрены!');
            await viewContact.clickContacts();
            Logger.log('Обратная связь успешно просмотрена!');
            await register.clickOffice();
            Logger.log('Активирована кнопка мой кабинет!');
            await register.clickReg();
            Logger.log('Активирована кнопка регистрации!');
            await register.clickMail();
            Logger.log('Перешел на вкладку электронная почта!');
            await register.clickInputMail('potapovich.bstu@gmail.com');
            Logger.log('Поле почты успешно заплнено и пользователь успешно зарегистрирован!');
            await register.clickOffice();
            Logger.log('Активирована кнопка мой кабинет!');
            await register.clickExit();
            Logger.log('Пользователь вышел из аккаунта!');
            await authorization.clickOffice();
            Logger.log('Активирована кнопка мой кабинет!');
            await authorization.clickAuth();
            Logger.log('Активирована кнопка авторизации!');
            await authorization.clickVk();
            Logger.log('Пользователь перешел в авторизацию Vk');
            await authorization.clickInputVK('+375445403394');
            Logger.log('Поле телефона успешно заполнено!');
            await authorization.clickPasswordVK('0344533!LexaDanik510');
            Logger.log('Поле пароля успешно заполнено!');
            await authorization.clickContin();
            Logger.log('Пользователь успешно авторизовался!');
        } catch (error) {
            Logger.error('Произошла ошибка:', error);
            expect(error).toBeNull();
        }
    }, 250000);
});
