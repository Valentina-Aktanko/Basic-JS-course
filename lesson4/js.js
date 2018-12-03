'use strict';

const myCar = {
    manufacturer: 'BMW',
    color: 'black',
    possibleColors: ['black', 'red', 'brown', 'grey'],
    engine: {
        engineCode: 'B58',
        power: 350,
    },
    beep() {
        console.log('Машина сигналит!');
    },
    [Symbol.iterator]: function* () {   // делает объект итерируемым
        yield 'Привет!';
        yield 'Пока!';
    }
};

// вызов атрибутов объекта
// console.log(myCar.possibleColors[1]);
// console.log(myCar.engine.power);

// вызов метода объекта
// myCar.beep();

// перебрать все возможные цвета
// for (let i = 0; i < myCar.possibleColors.length; i++) {
//     console.log(`Возможнвй цвет машины: ${myCar.possibleColors[i]}`);
// }

// Получение и вывод значений свойств объектов
// console.log(myCar.manufacturer);
// console.log(myCar['manufacturer']);
// const prop = 'color';
// console.log(myCar[prop]);

// Изменение значений свойств объекта
// console.log(myCar);
// myCar.color = 'green';
// console.log(myCar);
// myCar['color'] = 'brown';
// console.log(myCar);

// Удаление свойств объекта
// delete myCar.color;
// console.log(myCar);
// myCar.weigth = 2000;
// console.log(myCar);

// Вывод всех свойств объекта
// for (const prop in myCar) {
//     console.log(`В объекте есть свойство ${prop}, в нем лежит значение ${myCar[prop]}`);
// }

// Еще способы полуния все свойства объекта
// console.log(Object.keys(myCar));
// console.log(Object.getOwnPropertyNames(myCar));

// вывести все значения свойств объекта
// для начала нужно сделать объект итерируемым
// for (const val of myCar) {
//     console.log(val); // Выведется 'Привет!' и 'Пока!'.
// }

// Передача по значению
// let a = 1;
// console.log(a); // 1
// incOne(a);
// console.log(a); // 1
//
// function incOne(param) {
//     param++;
// }

// передача по ссылке
// let a = {
//     num: 1
// };
// console.log(a); // 1
// incOne(a);
// console.log(a); // 2
//
// function incOne(param) {
//    param.num++;
// }

// конструкция this


