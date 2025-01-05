import {header} from './header.js';
import {footer} from './footer.js';
import {mobileHeader} from './mobileHeader.js';

document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();
document.querySelector('main').insertAdjacentHTML("afterbegin", mobileHeader());

if(window.innerWidth < 768){
    document.querySelector('header').classList.add('hidden');
}