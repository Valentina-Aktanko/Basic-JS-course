"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,
    rows: 0,
    cols: 0,

    /**
     * Инициализация игрока и его метоположения.
     */
    init(startX, startY, rowsCount, colsCount) {
        this.x = startX;
        this.y = startY;
        this.rows = rowsCount;
        this.cols = colsCount;
    },

    /**
     * Вычисляет координаты следующей точки по направлению
     * @param direction Направление движения
     * @returns {{x: number, y: number}}
     */
    getNextPosition(direction) {
        let tx = this.x;
        let ty = this.y;
        switch (direction) {
            case 1:
                tx--;
                ty++;
                break;
            case 2:
                ty++;
                break;
            case 3:
                tx++;
                ty++;
                break;
            case 4:
                tx--;
                break;
            case 6:
                tx++;
                break;
            case 7:
                tx--;
                ty--;
                break;
            case 8:
                ty--;
                break;
            case 9:
                tx++;
                ty--;
                break;
        }
        return {x: tx, y: ty};
    },

    /**
     * Проверяет возможность хода в зависимости от координаты следубщей точки
     * @param point {{}} - координаты следубщего хода
     * @returns {boolean} - возможно ли совершить следубщий ход
     */
    canPlayerMakeStep(point) {
        return (point.x >= 0) && (point.x < this.rows) && (point.y >= 0) && ( point.y < this.cols);
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {int} direction Направление, в котором будет движение.
     */
    move(direction) {
        const nextPoint = this.getNextPosition(direction);
        if (this.canPlayerMakeStep(nextPoint)) {
            this.x = nextPoint.x;
            this.y = nextPoint.y;
        }
    },
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        // Инициализируем игрока, ставим его начальное местоположение
        this.player.init(this.settings.startPositionX, this.settings.startPositionY, this.settings.rowsCount, this.settings.colsCount);
        // Бесконечный цикл
        while (true) {
            // Отображаем нашу игру.
            this.render();

            // Получаем направление от игрока.
            const direction = this.getDirection();

            // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
            if (direction === -1) {
                alert('До свидания.');
                return;
            }

            const nextPoint = this.player.move(direction);
        }
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Сюда запишем все что надо отобразить.
        let map = "";

        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < this.settings.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            map += '\n';
        }

        // Чистим консоль.
        console.clear();
        // Выводим все что надо отобразить в игре.
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            // Получаем от пользователя направление.
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },
};

// Запускаем игру.
game.run();