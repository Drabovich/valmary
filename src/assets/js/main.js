const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  //= components/modals.js
});


//Бургер меню
document.querySelector('.header__menu-icon').addEventListener('click', () => {
    document.querySelector('.header__bottom').classList.add('flex-active');
    const widthScroll = window.innerWidth - document.querySelector('.header__bottom').offsetWidth + 'px';
    body.classList.add('lock')
    body.style.paddingRight = widthScroll;
})

document.querySelector('.burger__close').addEventListener('click', () => {
	document.querySelector('.header__bottom').classList.remove('flex-active');
	body.classList.remove('lock')
	body.style.paddingRight = '';
})

document.querySelector('.header__bottom').addEventListener('click', function(event) {
	if (this.classList.contains('flex-active') && event.target === this) {
		this.classList.remove('flex-active');
		body.classList.remove('lock')
		body.style.paddingRight = '';
	}
})


// Слайдер с карточками курсов
const swiper = new Swiper('.courses__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,

    breakpoints: {
        1240: {
            spaceBetween: 60,
            centeredSlides: false,
            slidesPerView: 3,
        },
        1001: {
            spaceBetween: 30,
            centeredSlides: false,
            slidesPerView: 3,
        },
        701: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 19,
        },
        431: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 19,
        },
        0: {
            spaceBetween: 19,
            slidesPerView: 1.5,
            centeredSlides: true,
        },
    },

    pagination: {
        el: '.courses__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.courses__btn-next',
        prevEl: '.courses__btn-prev',
    },
});

const swiperStocks = new Swiper('.stocks__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        el: '.stocks-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.stocks__btn-next',
        prevEl: '.stocks__btn-prev',
    },

    breakpoints: {
        1240: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        1001: {
            spaceBetween: 25,
            slidesPerView: 3,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        0: {
            spaceBetween: 10,
            slidesPerView: 1.5,
            centeredSlides: true,
        },
    },


    // autoHeight: true, // выравнивание по высоте
    // simulateTouch: false, // откл свайпы на ПК
    // watchOverflow: false, // откл слайдер если нет слайдов
    // slidesPerGroup: 2, // кол-во пролистываемых слайдов
    // initialSlide: 0, // Начинаем со 2 слайдера
    // slidesPerColumn: 2, // делаем 2 рядад, высота должна быть фикс.
    // freeMode: true, // можно перетаскивать как ленту
    // lazyLoading: true,
	// watchSlidesProgress: true,
});