"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 */
const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
        openedImageNotFoundSrc: 'images/gallery/notFound.png',
        openedImageBackSrc: 'images/gallery/back.png',
        openedImageNextSrc: 'images/gallery/next.png',
        openedImageBackClass: 'galleryWrapper__back',
        openedImageNextClass: 'galleryWrapper__next',
    },

    /**
     * {Element} Хранит последнее открытое изображение (миниатюру)
     */
    openedImageEl: null,

    /**
     * Возвращает следующий элемент (картинку) от открытой или первую картинку в контейнере,
     * если текущая открытая картинка последняя.
     * @returns {Element} Следующую картинку от текущей открытой.
     */
    getNextImage(currentImage) {
        // Получаем элемент справа от текущей открытой картинки.
        let nextImageEl = currentImage.nextElementSibling;
        // Если элемент справа есть, его и возвращаем, если нет, то берем первый элемент в контейнере миниатюр.
        if (nextImageEl !== null) {
            return nextImageEl;
        } else {
            return document.querySelector(this.settings.previewSelector + ' img');
        }
    },

    /**
     * Возвращает предыдущий элемент (картинку) от открытой или последнюю картинку в контейнере,
     * если текущая открытая картинка первая.
     * @returns {Element} Предыдущую картинку от текущей открытой.
     */
    getPrevImage(currentImage) {
        // Получаем элемент слева от текущей открытой картинки.
        let prevImageEl = currentImage.previousElementSibling;
        // Если элемент слева есть, его и возвращаем, если нет, то берем последний элемент в контейнере миниатюр.
        if (prevImageEl !== null) {
            return prevImageEl;
        } else {
            return document.querySelector(this.settings.previewSelector + ' img:last-of-type');
        }
    },

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для галереи.
     */
    init(userSettings = {}) {
        // Записываем настройки, которые передал пользователь в наши настройки.
        Object.assign(this.settings, userSettings);

        // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
        // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
        // gallery и передадим туда событие MouseEvent, которое случилось.
        document
            .querySelector(this.settings.previewSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
    },

    /**
     * Обработчик события клика для открытия картинки.
     * @param {MouseEvent} event Событие клики мышью.
     * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
     */
    containerClickHandler(event) {
        // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
        if (event.target.tagName !== 'IMG') {
            return;
        }
        // Сохраним элемент открываемого изображения (миниатюры) в свойство объекта gallery.
        this.openedImageEl = event.target;

        // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).
        this.openImage(event.target.dataset.full_image_url);
    },

    /**
     * Открывает картинку.
     * @param {string} src Ссылка на картинку, которую надо открыть.
     */
    openImage(src) {
        // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;

    },

    /**
     * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
     * @returns {Element}
     */
    getScreenContainer() {
        // Получаем контейнер для открытой картинки.
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        // Если контейнер для открытой картинки существует - возвращаем его.
        if (galleryWrapperElement) {
            return galleryWrapperElement;
        }

        // Возвращаем полученный из метода createScreenContainer контейнер.
        return this.createScreenContainer();
    },

    /**
     * Создает контейнер для открытой картинки.
     * @returns {HTMLElement}
     */
    createScreenContainer() {
        // Создаем сам контейнер-обертку и ставим ему класс.
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        //Создаем картинку для стрелки назад, ставим класс, src и добавляем её в контейнер-обёртку.
        const galleryWrapper__back = new Image();
        galleryWrapper__back.classList.add(this.settings.openedImageBackClass);
        galleryWrapper__back.src = this.settings.openedImageBackSrc;
        galleryWrapper__back.alt = 'Назад';
        galleryWrapper__back.addEventListener('click', () => {
            let prevImageEl = this.getPrevImage(this.openedImageEl);
            this.openImage(prevImageEl.dataset.full_image_url);
            this.openedImageEl = prevImageEl;
        });
        galleryWrapperElement.appendChild(galleryWrapper__back);

        //Создаем картинку для стрелки Вперед, ставим класс, src и добавляем её в контейнер-обёртку.
        const galleryWrapper__next = new Image();
        galleryWrapper__next.classList.add(this.settings.openedImageNextClass);
        galleryWrapper__next.src = this.settings.openedImageNextSrc;
        galleryWrapper__next.alt = 'Вперед';
        galleryWrapper__next.addEventListener('click', () => {
            let nextImageEl = this.getNextImage(this.openedImageEl);
            this.openImage(nextImageEl.dataset.full_image_url);
            this.openedImageEl = nextImageEl;
        });
        galleryWrapperElement.appendChild(galleryWrapper__next);

        // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        image.addEventListener('error', () => image.src = this.settings.openedImageNotFoundSrc);
        galleryWrapperElement.appendChild(image);

        // Добавляем контейнер-обертку в тег body.
        document.body.appendChild(galleryWrapperElement);

        // Возвращаем добавленный в body элемент, наш контейнер-обертку.
        return galleryWrapperElement;
    },

    /**
     * Закрывает (удаляет) контейнер для открытой картинки.
     */
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    }
};

// Инициализируем нашу галерею при загрузке страницы.

window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});