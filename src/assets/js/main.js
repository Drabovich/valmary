const body = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  //= components/tabs.js
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
		console.log('dsadsadasda');
		this.classList.remove('flex-active');
		body.classList.remove('lock')
		body.style.paddingRight = '';
	}
})