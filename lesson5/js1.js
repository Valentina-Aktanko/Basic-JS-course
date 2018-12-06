'use strict';

const chess = {
    /**
     * @property {HTMLElement} gameContainerElement Контейнер игры (DOM элемент).
     */
    gameContainerElement: document.getElementById('game'),

    figures: [
        {name: 'rook', color: 'w', pos: 'a1'},
        {name: 'rook', color: 'b', pos: 'a8'},
        {name: 'knight', color: 'w', pos: 'b1'},
        {name: 'knight', color: 'b', pos: 'b8'},
        {name: 'bishops', color: 'w', pos: 'c1'},
        {name: 'bishops', color: 'b', pos: 'c8'},
        {name: 'king', color: 'w', pos: 'd1'},
        {name: 'king', color: 'b', pos: 'd8'},
        {name: 'queen', color: 'w', pos: 'e1'},
        {name: 'queen', color: 'b', pos: 'e8'},
        {name: 'bishops', color: 'w', pos: 'f1'},
        {name: 'bishops', color: 'b', pos: 'f8'},
        {name: 'knight', color: 'w', pos: 'g1'},
        {name: 'knight', color: 'b', pos: 'g8'},
        {name: 'rook', color: 'w', pos: 'h1'},
        {name: 'rook', color: 'b', pos: 'h8'},

        {name: 'pawn', color: 'w', pos: 'a2'},
        {name: 'pawn', color: 'w', pos: 'b2'},
        {name: 'pawn', color: 'w', pos: 'c2'},
        {name: 'pawn', color: 'w', pos: 'd2'},
        {name: 'pawn', color: 'w', pos: 'e2'},
        {name: 'pawn', color: 'w', pos: 'f2'},
        {name: 'pawn', color: 'w', pos: 'g2'},
        {name: 'pawn', color: 'w', pos: 'h2'},

        {name: 'pawn', color: 'w', pos: 'a7'},
        {name: 'pawn', color: 'w', pos: 'b7'},
        {name: 'pawn', color: 'w', pos: 'c7'},
        {name: 'pawn', color: 'w', pos: 'd7'},
        {name: 'pawn', color: 'w', pos: 'e7'},
        {name: 'pawn', color: 'w', pos: 'f7'},
        {name: 'pawn', color: 'w', pos: 'g7'},
        {name: 'pawn', color: 'w', pos: 'h7'},
    ],

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
     *
     * @param {number} rowNum Номер строки
     * @param {number} colNum Номер колонки
     * @returns {boolean} Признак, является ли ячейка закрашенной
     */
    isCellIsBlack(rowNum, colNum) {
        return  rowNum > 0 && rowNum < 9 && // если строка не 0 и не 9
                colNum < 9 && colNum > 0 && // если колонка не 0 и не 9
                ((rowNum % 2 && colNum % 2) // если нечетная строка и четный столбец
                || !(rowNum % 2 || colNum % 2)); // или четная строка и нечетный столбец (тут инверсия && даёт ||)
    },
};

chess.renderMap();