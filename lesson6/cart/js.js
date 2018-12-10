'use strict';

/**
 * @property {Object} settings Настройки корзины товаров.
 * @property {{price: number, name: string} []} goods Список товаров, что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа ценывсех товаров.
 */
const basket = {
    settings: {
        countSelector: '#basket-count',
        priceSelector: '#basket-price',
        btnClass: 'buy-button',
    },

    goods: [],
    countEl: null,
    priceEl: null,

    /**
     * Инициализирует переменные для корзины и показывает эти значения.
     */
    init(settings = {}) {
        // Записываем настройки, которые передал пользователь
        Object.assign(this.settings, settings);

        // Получвем DOM-элемент, где показывается количество товаров
        this.countEl = document.querySelector(this.settings.countSelector);

        // Получвем DOM-элемент, где показывается цена товаров
        this.priceEl = document.querySelector(this.settings.priceSelector);

        // повесим обработчики на все кнопки "купить"
        let btnElements = document.getElementsByClassName(this.settings.btnClass);

        for (let btnEl of btnElements) {
            btnEl.addEventListener('click', (event) => {
                this.add(event.target.dataset.name, event.target.dataset.price);
                this.render();
            });
        }
    },

    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
        // alert(this.getGoodPrice());
        document.querySelector(this.settings.priceSelector).innerHTML = this.getGoodPrice().toString();
        document.querySelector(this.settings.countSelector).innerHTML = this.goods.length.toString();

    },

    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Возвращает цену всех купленных товаров.
     */
    getGoodPrice() {
        let price = 0;

        for (let i = 0; i < this.goods.length; i++) {
            price += +(this.goods[i].price);
        }

        return price;
    },

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех
     * товаров.
     * @param goodName Название товара.
     * @param goodPrice Цена товара.
     */
    add(goodName, goodPrice) {
        this.goods.push({price: goodPrice, name: goodName});
    },

};

basket.init();