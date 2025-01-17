import logohSVG from '../assets/logoH.svg';
import logohWEBP from '../assets/logoH.webp';
import logohPNG from '../assets/logoH.png';
import menuMobile from '../assets/menuMobile.svg';

export const mobileHeader = () => {
    return `
    <section id="mobileHeader">
        <div class="row">
          <div class="col-auto">
            <button class="button button--icon" onclick="openMenu()">
              <img src="${menuMobile}" alt="menuMobile">
            </button>
          </div>
          <div class="col-auto logoContainer">
            <a href="index.html">
                <picture>
                    <source srcset='${logohSVG}' type='image/svg+xml'>
                    <source srcset='${logohWEBP}' type='image/webp'>
                    <img src='${logohPNG}' type='image/png' alt='Logo de Currículum Córdoba'>
                </picture>
            </a>
          </div>
        </div>
    </section>
`
};