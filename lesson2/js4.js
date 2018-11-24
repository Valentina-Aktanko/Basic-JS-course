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

let a = getRandom(0, 100);
let b = getRandom(0, 100);

console.log(`Сумма чисел  ${a} и ${b}: ${add(a, b)}`);
console.log(`Разность чисел  ${a} и ${b}: ${reduce(a, b)}`);
console.log(`Частное чисел  ${a} и ${b}: ${(divide(a, b)).toFixed(2)}`);
console.log(`Произведение чисел  ${a} и ${b}: ${multiply(a, b)}`);

