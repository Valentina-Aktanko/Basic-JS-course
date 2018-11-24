'use strict';

/**
 * Функция возвращает псевдослучайное число в диапазоне от min до max
 * @param {number} min - Минимальное значение в диапазоне, включительно.
 * @param {number} max - Максимальное значение в диапазоне, не включая его.
 * @returns {number} - Псевдослучайное число из указанного диапазона.
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandom(-100, 100);
let b = getRandom(-100, 100);

if (a >= 0 && b >= 0) {
    alert(`Числа ${a} и ${b} положительные, разность чисел: ${a - b}`);
} else if (a < 0 && b < 0) {
    alert(`Числа ${a} и ${b} отрицательные, произведение чисел: ${a * b}`);
} else {
    alert(`Числа ${a} и ${b} разных знаков, сумма чисел: ${a + b}`);
}
