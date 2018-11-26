'use strict';

/**
 * Возвращаяет вариант склонения для введенного числа
 * @param {number} numeral - число, для которого необходимо выбрать склонение
 * @param {array} variation - массив, содержащий варианты слов в склонениях:
 * @returns {string} declension - выбранный вариант слова с нужным склонением по порядку: 1, 2 и 3 склонения
 */
function getDeclension(numeral, variation) {

    let declension = '';
    let count = numeral % 100;

    if (count >= 5 && count <= 20) {
        declension = variation['2'];
    } else {
        count = count % 10;         // признаюсь честно, этот вложенный остаток от деления подсмотрела в интернете :-p
        if (count === 1) {
            declension = variation[0];
        } else if (count >= 2 && count <= 4) {
            declension = variation[1];
        } else {
            declension = variation[2];
        }
    }
    return declension;
}

function saySumWithDeclension() {
    let sum = parseInt(prompt('Введите сумму:'));
    if (sum > 0) {
        alert(`Ваша сумма в ${sum} ${getDeclension(sum, ['рубль', 'рубля', 'рублей'])} успешно зачислена`);
    } else {
        alert('Необходимо ввести положительное число. Попробуйте еще раз.');
        saySumWithDeclension();
    }
}

saySumWithDeclension();