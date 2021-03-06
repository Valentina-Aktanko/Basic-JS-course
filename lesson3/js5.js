'use strict';

const arr = [
    [1, 5, 10],
    [2, 4, 6, 100],
    [30],
];

/**
 * Возвращает сумму элементов массива
 * @param {array} arr - массив, сумму элементов которого необходимо получить
 * @returns {number} - сумма элементов массива
 */
function getSumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + parseInt(arr[i]);
    }

    return sum;
}

/**
 * Возвращает минимальный элемент массива
 * @param {array} arr - исходный массив
 * @returns {number} - значение минимального элемента в массиве
 */
function getMinElement(arr) {

    let minNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }

    return minNumber;
}

let maxSumOfArrayIndex = 0;
let maxSumOfArray = getSumOfElements(arr[0]);

// обход массива с массивами
for (let i = 1; i < arr.length; i++) {
    // поиск массива с максимальной суммой элементов
    let sumOfArray = getSumOfElements(arr[i]);
    if (sumOfArray > maxSumOfArray) {
        maxSumOfArrayIndex = i;
        maxSumOfArray = sumOfArray;
    }
}

console.log(`Массив с индексом [${maxSumOfArrayIndex}] - наибольший по сумме своих элементов.`);
console.log(`Наименьший элемент в этом массиве - число ${getMinElement(arr[maxSumOfArrayIndex])}.`);


