'use strict';
//возвращает подстроку с позиции start до, но не включая end

/**
 * Возвращает последний символ в строке
 * @param {string} stringCount - переданная строка
 * @returns {string} - последний символ в строке
 */
function getLastChar(stringCount) {
    return stringCount.substr(stringCount.length-1,1);
}
function getDeclensionByCount(count) {

    switch (getLastChar(count.toString())) {
        case 'add':
            return add(arg1, arg2);
        case 'reduce':
            return reduce(arg1, arg2);
        case 'divide':
            return divide(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
        default:
            return NaN;
    }
}

let count = parseInt(prompt('Введите сумму:'));
alert(`Ваша сумма в ${count} ${getDeclensionByCount(count)} успешно зачислена`);