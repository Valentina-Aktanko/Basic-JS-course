'use strict';

let ticketNumber = +prompt('Введите 6 цифр номера билета:');

function findNumber(ticketNumber, digits) {
    return (Math.floor(ticketNumber / digits)) % 10;
}

let amountRight = findNumber(ticketNumber, 1) + findNumber(ticketNumber, 10) + findNumber(ticketNumber, 100);
let amountLeft = findNumber(ticketNumber, 1000) + findNumber(ticketNumber, 10000) + findNumber(ticketNumber, 100000);

if (amountLeft === amountRight) {
    alert('Счастливый билет!');
}
else {
    alert('Несчастливый билет.');
}