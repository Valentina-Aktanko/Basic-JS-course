'use strict';

/**
 * Определяет, является ли число простым.
 * @param {number} num - число, которое необходимо проверить.
 * @returns {boolean} - возвращает true, если число простое, и false - если составное.
 */
function isPrimeNumber(num) {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let i = 0;
while (i <= 100) {
    if (isPrimeNumber(i)) {
        console.log(i);
    }
    i++;
}