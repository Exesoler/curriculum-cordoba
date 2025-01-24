// import {disableMenuResponsive} from './functions.js';
import {header} from './header.js';
import {footer} from './footer.js';
import {mobileHeader} from './mobileHeader.js';

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

let pdf = '';

switch (filename) {
    case 'metas_ciclo.html':
        pdf = metasPDF;
        console.log('pdf de metas');
        break;

    case 'marco_curricular.html':
        pdf = marcoPDF;
        console.log('pdf de marco');
        break;

    default:
        pdf = false;
        break;
}

const pageNum = document.querySelector('#page_num');
const pageCount = document.querySelector('#page_count');
const currentPage = document.querySelector('#current_page');
const previousPage = document.querySelector('#prev_page');
const nextPage = document.querySelector('#next_page');

const initialState = {
	pdfDoc: null,
	currentPage: 1,
	pageCount: 0,
	zoom: 1,
};

if(pdf !== false){
    pdfjsLib
    .getDocument(pdf)
    .promise.then((data) => {
        initialState.pdfDoc = data;
        // console.log('pdfDocument', initialState.pdfDoc);

        pageCount.textContent = initialState.pdfDoc.numPages;

        renderPage();
    })
    .catch((err) => {
        console.error(`Error en el lector de pdf = ${err.message}`);
    });

    // Render the page.
    const renderPage = () => {
        // Load the first page.
        // console.log(initialState.pdfDoc, 'pdfDoc');
        initialState.pdfDoc
            .getPage(initialState.currentPage)
            .then((page) => {
                console.log('page', page);

                const canvas = document.querySelector('#pdf-canvas');
                const ctx = canvas.getContext('2d');
                const viewport = page.getViewport({
                    scale: initialState.zoom,
                });

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render the PDF page into the canvas context.
                const renderCtx = {
                    canvasContext: ctx,
                    viewport: viewport,
                };

                page.render(renderCtx);

                pageNum.textContent = initialState.currentPage;
            });
    };

    const showPrevPage = () => {
        if (initialState.pdfDoc === null || initialState.currentPage <= 1)
            return;
        initialState.currentPage--;
        // Render the current page.
        currentPage.value = initialState.currentPage;
        renderPage();
    };

    const showNextPage = () => {
        if (
            initialState.pdfDoc === null ||
            initialState.currentPage >= initialState.pdfDoc._pdfInfo.numPages
        )
            return;

        initialState.currentPage++;
        currentPage.value = initialState.currentPage;
        renderPage();
    };

    // Button events.
    previousPage.addEventListener('click', showPrevPage);
    nextPage.addEventListener('click', showNextPage);

    // Keypress event.
    currentPage.addEventListener('keypress', (event) => {
        if (initialState.pdfDoc === null) return;
        // Get the key code.
        const keycode = event.keyCode ? event.keyCode : event.which;

        if (keycode === 13) {
            // Get the new page number and render it.
            let desiredPage = currentPage.valueAsNumber;
            initialState.currentPage = Math.min(
                Math.max(desiredPage, 1),
                initialState.pdfDoc._pdfInfo.numPages,
            );

            currentPage.value = initialState.currentPage;
            renderPage();
        }
    });
}

