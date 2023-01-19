const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  
  // Табы
  const tabs = () => {
  
      function bindTabs(tabSelector, contentSelector, activeClass, startTitle, startContent) {
  
          const tabTitle = document.querySelectorAll(tabSelector),
              tabContent = document.querySelectorAll(contentSelector);
  
              tabTitle.forEach(item => item.addEventListener('click', () => {
  
                  tabContent.forEach(element => element.classList.add('hidden'));
  
                  tabTitle.forEach(element => element.classList.remove(activeClass));
  
              item.classList.add(activeClass);
  
              const activeContent = document.querySelector('#' + item.dataset.tab);
              activeContent.classList.remove('hidden');
          }))
  
          document.querySelector(startTitle).classList.add(activeClass);
          document.querySelector(startContent).classList.remove('hidden');
      }
  
      // Табы в выпадающем меню в шапке сайта
      // bindTabs('.catalog-header__title', '.catalog-header__content', 'active-title', '[data-tab="tab-1"]', '#tab-1');
  }
  
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
		console.log('dsadsadasda');
		this.classList.remove('flex-active');
		body.classList.remove('lock')
		body.style.paddingRight = '';
	}
})