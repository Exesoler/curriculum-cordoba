// import {disableMenuResponsive} from './functions.js';
import {header} from './header.js';
import {footer} from './footer.js';
import {mobileHeader} from './mobileHeader.js';

import loadingGIF from './../assets/loading.gif';

import { GlobalWorkerOptions } from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.min.mjs';
GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.worker.min.mjs';

import metasPDF from './../public/downloads/METAS_2025_v1.0_LOW.pdf';
import marcoPDF from './../public/downloads/MCC_2025_v1.0_LOW.pdf';

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

const hasSubMenu = document.querySelector('.hasSubMenu');
const subMenu = document.querySelector('.subMenu');

const submenuCollapse = () => {

    if(subMenu.classList.contains('collapsed')){
        subMenu.classList.remove('collapsed');
    }else{
        subMenu.classList.add('collapsed');
    }

};

window.addEventListener("resize", () => {
    // console.log('resize event')
    disableMenuResponsive();
});


let url = window.location.pathname;

let filename = url.split('/').pop();

const addMenuActive = (filename) => {
    let menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        if (item.getAttribute('href') == filename) {
            item.classList.add('active');
        }
    });
}

const removeAcercaDe = (filename) => {
    const acercaContainer = document.querySelector('.acercaContainer');
    if (filename == 'quienes_somos.html') {
        acercaContainer.classList.add('hidden');
    }
}

addMenuActive(filename);
removeAcercaDe(filename);

if(window.innerWidth < 768){
    document.querySelector('header').classList.add('hidden');
}

window.scrollY = 0;

hasSubMenu.addEventListener('click', () => {
    console.log('click para la función submenuCollapse')
    submenuCollapse();
});

if (filename == 'contacto.html') {
    document.querySelector('#contact-submit').addEventListener('click', (e) => {
        e.classList.add('loading');
        e.innerHTML = `<img src="${loadingGIF}" alt="loading">`;
    });
}

if (filename == 'metas_ciclo.html' || filename == 'progresiones_aprendizaje.html') {
    submenuCollapse();
}


const videoFrame = document.querySelector('#videoFrame');
const video = document.querySelector('#videoFrame + video');

if (videoFrame) {
    videoFrame.addEventListener('click', () => {
        videoFrame.classList.add('hidden');
        video.classList.remove('hidden');
        setTimeout(() => {
            video.play();
        }, 1000);
    });
}


