'use strict';

let ticketNumber = +prompt('Введите 6 цифр номера билета:');

function findNumber(ticketNumber, digits) {
    return (Math.floor(ticketNumber / digits)) % 10;
}

if (findNumber(ticketNumber, 1) + findNumber(ticketNumber,10) + findNumber(ticketNumber, 100) ===
    findNumber(ticketNumber, 1000) + findNumber(ticketNumber, 10000) + findNumber(ticketNumber, 100000))
{
    alert('Счастливый билет!');
}
else
{
    alert('Несчастливый билет.');
}