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

/**
 * Возвращает сумму двух чисел a и b
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @returns {number} - Сумма двух чисел a и b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Возвращает разность  двух чисел a и b
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @returns {number} - Разность двух чисел a и b.
 */
function reduce(a, b) {
    return a - b;
}

/**
 * Возвращает частное двух чисел a и b (результет деления a на b)
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @returns {number} - Частное двух чисел a и b.
 */
function divide(a, b) {
    return a / b;
}

/**
 * Возвращает произведение двух чисел a и b
 * @param {number} a - Первое число.
 * @param {number} b - Второе число.
 * @returns {number} - Произведение двух чисел a и b.
 */
function multiply(a, b) {
    return (a * b);
}

/**
 * Возвращает результат выполнения операции над двумя агрументами
 * @param {number} arg1 - Первый аргумент.
 * @param {number} arg2 - Второй агрумент.
 * @param {string} operation - Наименование выполняемой операции.
 * @returns {number} - Результат выполнения операции над двумя аргументами.
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
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

let arg1 = getRandom(0, 100);
let arg2 = getRandom(0, 100);

console.log(`Сумма двух чисел ${arg1} и ${arg2}: ${mathOperation(arg1, arg2, 'add')}`);
console.log(`Разность двух чисел ${arg1} и ${arg2}: ${mathOperation(arg1, arg2, 'reduce')}`);
console.log(`Частное двух чисел ${arg1} и ${arg2}: ${(mathOperation(arg1, arg2, 'divide')).toFixed(2)}`);
console.log(`Произведение двух чисел ${arg1} и ${arg2}: ${mathOperation(arg1, arg2, 'multiply')}`);