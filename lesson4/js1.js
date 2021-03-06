'use strict';

/**
 * Разбивает число по разрядам и возвращает объект с описанными разрядами числа
 * @param {number} num - число, из которого необходимо выделить разряды
 * @returns {object} digits - Описание разрядов числа.
 */
function getDigitsOfNumber(num) {

    if (!(Number.isInteger(num)) || num < 0 || num > 999 || isNaN(num)) {
        console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
        return {};
    }

    /**
     * Объект, сожержащий описание разрядов числа.
     * @property {number} firstDigit Первый разряд, единицы.
     * @property {number} secondDigit Второй разряд, десятки.
     * @property {number} thirdDigit Третий разряд, сотни.
     */
    const digits = {
        firstDigit : num%10,
        secondDigit: Math.floor(num%100/10),
        thirdDigit: Math.floor(num%1000/100),
    };
    return digits;
}

let num = +prompt('Введите целое число в диапазоне от 0 д 999');
console.log(getDigitsOfNumber(num));