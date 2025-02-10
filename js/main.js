// import {disableMenuResponsive} from './functions.js';
import {header} from './header.js';
import {footer} from './footer.js';
import {mobileHeader} from './mobileHeader.js';

import loadingGIF from './../assets/loading.gif';

import { GlobalWorkerOptions } from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.min.mjs';
GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.worker.min.mjs';

document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();
document.querySelector('main').insertAdjacentHTML("afterbegin", mobileHeader());

const menu = document.querySelector('header');
const backdrop = document.querySelector('.backdrop');

const body = document.querySelector('body');

const contactSuccess = document.querySelector('#contactSuccess');
const contactDanger = document.querySelector('#contactDanger');
const resetForm = document.querySelectorAll('#resetForm');

const toggleContactForm = (message) => {

    switch (message) {
        case 'success':
            contactSuccess.classList.remove('hidden');
            contactDanger.classList.add('hidden');
            break;

        case 'error':
            contactSuccess.classList.add('hidden');
            contactDanger.classList.remove('hidden');
            break;
    
        default:
            contactSuccess.classList.add('hidden');
            contactDanger.classList.add('hidden');
            break;
    }
};

const disableMenuResponsive = () => {
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
    disableMenuResponsive();
});


let url = window.location.pathname;

let filename = url.split('/').pop();

let filenameHREF = window.location.href.split('/').pop();

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

hasSubMenu.addEventListener('click', () => {
    console.log('click para la función submenuCollapse')
    submenuCollapse();
});

if (filename == 'contacto.html') {
    for (let i = 0; i < resetForm.length; i++) {
        resetForm[i].addEventListener("click", function() {
            toggleContactForm();
        });
    }
}

if (filenameHREF == 'contacto.html?consultaEnviada') {
    localStorage.setItem("formSend", "true");
    toggleContactForm('success');
}

if (filenameHREF == 'contacto.html?consultaNoEnviada') {
    localStorage.setItem("formSend", "error");
    toggleContactForm('error');
}

if (filename == 'metas_ciclo.html' || filename == 'progresiones_aprendizaje.html') {
    submenuCollapse();
}


if(document.querySelector('#backtop')){
    const backtop = document.querySelector('#backtop');
    backtop.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', () => {
        if(window.scrollY > 250){
            backtop.classList.remove('hidden');
        }else{
            backtop.classList.add('hidden');
        }
    });
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



const indiceMCC = document.querySelector('#indiceMCC');
const buttonIndiceMCC = document.querySelector('#buttonIndiceMCC');
const closeIndiceMCC = document.querySelector('#indiceMCC .close');
const itemIndiceMCC = document.querySelectorAll('#indiceMCC a');

const toggleIndiceMCC = () => {
    indiceMCC.classList.toggle('hidden');
    body.classList.toggle('noScroll');
    if (backdrop.style.opacity == '1') {
        backdrop.style.opacity = ((backdrop.style.opacity!='0') ? '0' : '1');
        setTimeout(() => {
            backdrop.classList.toggle('hidden');
        }, 300);
    } else {
        backdrop.classList.toggle('hidden');
        setTimeout(() => {
            backdrop.style.opacity = ((backdrop.style.opacity!='0') ? '0' : '1');
        }, 300);
    }
}

if (buttonIndiceMCC) {
    buttonIndiceMCC.addEventListener('click', () => {
        toggleIndiceMCC();
    });
    closeIndiceMCC.addEventListener('click', () => {
        toggleIndiceMCC();
    });
    itemIndiceMCC.forEach(item => {
        item.addEventListener('click', () => {
            toggleIndiceMCC();
        });
    });
}