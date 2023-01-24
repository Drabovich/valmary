const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  
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


    // autoHeight: true, // выравнивание по высоте
    // simulateTouch: false, // откл свайпы на ПК
    // watchOverflow: false, // откл слайдер если нет слайдов
    // slidesPerGroup: 2, // кол-во пролистываемых слайдов
    // initialSlide: 0, // Начинаем со 2 слайдера
    // slidesPerColumn: 2, // делаем 2 рядад, высота должна быть фикс.
    // freeMode: true, // можно перетаскивать как ленту
    // lazyLoading: true,
	// watchSlidesProgress: true



    pagination: {
        el: '.courses__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.courses__btn-next',
        prevEl: '.courses__btn-prev',
    },

    
});