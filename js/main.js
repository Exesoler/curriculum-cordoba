// import {disableMenuResponsive} from './functions.js';
import {header} from './header.js';
import {footer} from './footer.js';
import {mobileHeader} from './mobileHeader.js';

document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();
document.querySelector('main').insertAdjacentHTML("afterbegin", mobileHeader());

const menu = document.querySelector('header');
const backdrop = document.querySelector('.backdrop');

const body = document.querySelector('body');

const disableMenuResponsive = () => {

    // console.log('disableMenuResponsive() Active')

    if(window.innerWidth > 767){
        menu.classList.remove('hidden');
        backdrop.classList.add('hidden');
        body.classList.remove('noScroll');
    }else{
        closeMenu();
    }
};

window.addEventListener("resize", () => {
    // console.log('resize event')
    disableMenuResponsive();
});


let url = window.location.pathname;

let filename = url.split('/').pop();

const addMenuActive = (filename) => {
    let menuItems = document.querySelectorAll('nav > ul > li > a');
    menuItems.forEach(item => {
        if (item.getAttribute('href') == filename) {
            item.classList.add('active');
        }
    });
}

addMenuActive(filename);

if(window.innerWidth < 768){
    document.querySelector('header').classList.add('hidden');
}

window.scrollY = 0;
