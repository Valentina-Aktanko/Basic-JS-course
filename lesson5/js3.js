'use strict';

const form = {
    formEl: null,

    /**
     * Инициализация формы
     */
    init() {
        this.formEl = document.querySelector('.my-form');
        this.formEl.addEventListener('submit', e => this.formSubmit(e))

        this.
    },

    /**
     * Метод, который запускается перед отправкой формы.
     * @param e [event] e Событие отправки формы.
     */
    formSubmit(e) {
        if (this.validate()) {

        }
    }

    /**
     * Валидирует форму
     */
    validate(e) {

    },
};

form.init();