'use strict';

const chess = {
    /**
     * @property {HTMLElement} gameContainerElement Контейнер игры (DOM элемент).
     */
    gameContainerElement: document.getElementById('game'),


    /**
     * Метод отображения карты (игрового поля)
     */
    renderMap() {
        // нахвания колонок
        const colsName = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

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

    isCellIsBlack(rowNum, colNum) {
        return  rowNum > 0 && rowNum < 9 &&
                colNum < 9 && colNum > 0 &&
                ((rowNum % 2 && colNum % 2) || !(rowNum % 2 || colNum % 2));
    },
};

chess.renderMap();