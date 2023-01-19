
// Модальные окна
const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector), 
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            body = document.querySelector('body');

        if (trigger.length > 0) {
            trigger.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.classList.remove('hidden');
                const widthScroll = window.innerWidth - modal.offsetWidth + 'px';
                body.classList.add('lock')
                body.style.paddingRight = widthScroll;
            }));
        }

        if (close.length > 0) {
            close.forEach(item => item.addEventListener('click', event => {
                if (event.target) event.preventDefault();
                modal.classList.add('hidden');
                body.classList.remove('lock')
                body.style.paddingRight = '';
            }))
        }   

        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.add('hidden');
                body.classList.remove('lock')
                body.style.paddingRight = '';
            }
        })
    }

    // Окно после нажатия на кнопку "Добавить в корзину"
    bindModal('.info-header__call span', '.modal-call', '.modal-call__close');
}

modals();