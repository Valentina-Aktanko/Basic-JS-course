'use strict';

const chess = {
    /**
     * @property {HTMLElement} gameContainerElement Контейнер игры (DOM элемент).
     */
    gameContainerElement: document.getElementById('game'),

    /**
     * Массив объектов всех шазматных фигур с описанием их свойств
     */
    figures: [
        {name: 'rook', color: 'W', pos: 'a1'},
        {name: 'rook', color: 'B', pos: 'a8'},
        {name: 'knight', color: 'W', pos: 'b1'},
        {name: 'knight', color: 'B', pos: 'b8'},
        {name: 'bishop', color: 'W', pos: 'c1'},
        {name: 'bishop', color: 'B', pos: 'c8'},
        {name: 'queen', color: 'W', pos: 'd1'},
        {name: 'queen', color: 'B', pos: 'd8'},
        {name: 'king', color: 'W', pos: 'e1'},
        {name: 'king', color: 'B', pos: 'e8'},
        {name: 'bishops', color: 'W', pos: 'f1'},
        {name: 'bishops', color: 'B', pos: 'f8'},
        {name: 'knight', color: 'W', pos: 'g1'},
        {name: 'knight', color: 'B', pos: 'g8'},
        {name: 'rook', color: 'W', pos: 'h1'},
        {name: 'rook', color: 'B', pos: 'h8'},

        {name: 'pawn', color: 'W', pos: 'a2'},
        {name: 'pawn', color: 'W', pos: 'b2'},
        {name: 'pawn', color: 'W', pos: 'c2'},
        {name: 'pawn', color: 'W', pos: 'd2'},
        {name: 'pawn', color: 'W', pos: 'e2'},
        {name: 'pawn', color: 'W', pos: 'f2'},
        {name: 'pawn', color: 'W', pos: 'g2'},
        {name: 'pawn', color: 'W', pos: 'h2'},

        {name: 'pawn', color: 'B', pos: 'a7'},
        {name: 'pawn', color: 'B', pos: 'b7'},
        {name: 'pawn', color: 'B', pos: 'c7'},
        {name: 'pawn', color: 'B', pos: 'd7'},
        {name: 'pawn', color: 'B', pos: 'e7'},
        {name: 'pawn', color: 'B', pos: 'f7'},
        {name: 'pawn', color: 'B', pos: 'g7'},
        {name: 'pawn', color: 'B', pos: 'h7'},
    ],

    /**
     * HTML-вывод шахматных фигур
     */
    figureHtml: {
        pawnW: '&#9817;',
        pawnB: '&#9723;',
        rookW: '&#9814;',
        rookB: '&#9820;',
        knightW: '&#9816;',
        knightB: '&#9822;',
        bishopW: '&#9815;',
        bishopB: '&#9821;',
        queenW: '&#9813;',
        queenB: '&#9819;',
        kingW: '&#9812;',
        kingB: '&#9818;',
    },

    /**
     * Метод отображения карты (игрового поля)
     */
    renderMap() {
        // массив с названиями колонок
        const colsName = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        // массив с названиями строк
        const rowsName = [0, '8', '7', '6', '5', '4', '3', '2', '1', 0];

        for (let row = 0; row < 10; row++) {
            const trElem = document.createElement('tr');
            this.gameContainerElement.appendChild(trElem);

            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('td');
                // установим data-атрибуты ячейке
                cell.setAttribute('rowName', rowsName[row]);
                cell.setAttribute('colName', colsName[col]);
                // вывод ячейки
                trElem.appendChild(cell);

                if ((row === 0 || row === 9) && colsName[col] !== 0) {
                    cell.innerHTML = colsName[col];
                }

                if ((col === 0 || col === 9) && rowsName[row] !== 0) {
                    cell.innerHTML = rowsName[row];
                }

                if (this.isCellIsBlack(row, col)) {
                    cell.style.backgroundColor = 'grey';
                }
            }

        }
        ;
    },

    /**
     * Определяет, является ли фигура черной (закрашенной)
     * @param {number} rowNum Номер строки
     * @param {number} colNum Номер колонки
     * @returns {boolean} Признак, является ли ячейка закрашенной
     */
    isCellIsBlack(rowNum, colNum) {
        return rowNum > 0 && rowNum < 9 && // если строка не 0 и не 9
            colNum < 9 && colNum > 0 && // если колонка не 0 и не 9
            ((rowNum % 2 && colNum % 2) // если нечетная строка и четный столбец
                || !(rowNum % 2 || colNum % 2)); // или четная строка и нечетный столбец (тут инверсия && даёт ||)
    },

    renderFigures() {
        // пробегаем все фигуры на поле.
        this.figures.forEach(function (element) {
            console.log(element);
            const figure = element;
            // Получаем имя фигуры и цвет в одну строку.
            const figureHtmlProperty = figure.name + figure.color;
            // получаем изображение фигуры (html-код)
            const figureCode = this.figureHtml[figureHtmlProperty];
            // Выводим ее прям в html для примера, вам надо вставлять в ячейку.
            document.body.innerHTML = figureCode;
        });
    },

};

chess.renderMap();
chess.renderFigures();