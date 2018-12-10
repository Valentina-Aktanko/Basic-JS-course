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

        this.countEl = document.getElementById(this.settings.countSelector);

    },

    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
    },

    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Возвращает цену всех купленных товаров.
     */
    getGoodPrice() {
    },

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех
     * товаров.
     * @param goodName Название товара.
     * @param goodPrice Цена товара.
     */
    add(goodName, goodPrice) {},
};

basket.init();