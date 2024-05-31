const menuBurger = document.querySelector('.menu__burger');

const headerMenu = document.querySelector('.header__menu')

menuBurger.onclick = (e) => {
    e.preventDefault();

    headerMenu.classList.toggle('active')
}

