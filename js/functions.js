const menu = document.querySelector('header');
const backdrop = document.querySelector('.backdrop');

const body = document.querySelector('body');

let menuIsOpen = false;

const closeMenu = () => {
    menu.classList.add('hidden');
    backdrop.classList.add('hidden');
    body.classList.remove('noScroll');
};

const openMenu = () => {
    menu.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    body.classList.add('noScroll');
};

const disableMenuResponsive = () => {

    console.log('disableMenuResponsive() Active')

    if(window.innerWidth > 767){
        menu.classList.remove('hidden');
        backdrop.classList.add('hidden');
        body.classList.remove('noScroll');
    }else{
        closeMenu();
    }
};

const toggleColapse = (elementClass) => {

    element = document.querySelector(elementClass);

    console.log(element.classList.contains('mainContent--colapsed'));

    if(element.classList.contains('mainContent--colapsed')){
        element.classList.remove('mainContent--colapsed');
    }else{
        element.classList.add('mainContent--colapsed');
    }
};

window.addEventListener("resize", () => {
    console.log('resize event')
    disableMenuResponsive();
});