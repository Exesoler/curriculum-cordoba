import {header} from './header.js';
import {footer} from './footer.js';


document.querySelector('header').innerHTML = header();
document.querySelector('footer').innerHTML = footer();

setTimeout(() => {
    PDFObject.embed("/src/assets/prueba.pdf", "#pdfContainer");
}, 2000);

// document.querySelector('main').innerHTML = ``
