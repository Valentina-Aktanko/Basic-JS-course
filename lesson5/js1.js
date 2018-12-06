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

        for (let row = 0; row < 10; row++) {
            const trElem = document.createElement('tr');
            this.gameContainerElement.appendChild(trElem);

            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);

                if ((row === 0 || row === 9) && colsName[col] !== 0){
                    cell.innerHTML = colsName[col];
                }
            }

        };
    },

    isCellIsBlack() {},
};

chess.renderMap();