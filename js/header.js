import logohSVG from '../assets/logoH.svg';
import logohWEBP from '../assets/logoH.webp';
import logohPNG from '../assets/logoH.png';
import closeSVG from '../assets/close.svg';
import chevronRightSVG from '../assets/chevronRight.svg';
import asideIcon__marcoCurricularSVG from '../assets/asideIcon__marcoCurricular.svg';
import asideIcon__progresionAprendizajesSVG from '../assets/asideIcon__progresionAprendizajes.svg';
import asideIcon__metasSVG from '../assets/asideIcon__metas.svg';

// import { closeMenu } from './functions.js';

export const header = () => {

    return `
<div class="closeContainer">
    <button class="button button--icon" onclick="closeMenu()"><img src="${closeSVG}" type='image/svg+xml'></button>
</div>
<div class="logoContainer">
    <a href="/">
        <picture>
            <source srcset='${logohSVG}' type='image/svg+xml'>
            <source srcset='${logohWEBP}' type='image/webp'>
            <img src='${logohPNG}' type='image/png' alt='Logo de Currículum Córdoba'>
        </picture>
    </a>
</div>
<nav>
    <ul>
        <li><a href="metas_ciclo.html"><img src="${asideIcon__metasSVG}" type='image/svg+xml' alt="Metas por ciclo">Metas por ciclo</a></li>
        <li><a href="marco_curricular.html"><img src="${asideIcon__marcoCurricularSVG}" type='image/svg+xml' alt="Marco Curricular Común">Marco Curricular Común</a></li>
        <li><a href="progresiones_aprendizaje.html"><img src="${asideIcon__progresionAprendizajesSVG}" type='image/svg+xml' alt="Progresiones de aprendizaje">Progresiones de aprendizaje</a></li>
        <li class="hasSubMenu"><a><img src="${asideIcon__progresionAprendizajesSVG}" type='image/svg+xml' alt="Progresiones de aprendizaje">Progresiones de aprendizaje</a></li>
        <li class="subMenu collapsed">
            <ul>
                <li><a href="progresiones_lengua_matematica.html"><img src="${chevronRightSVG}" type='image/svg+xml'>Lenguajes/Lengua y Literatura - Matemática</a></li>
                <li><a href="progresiones_sociales_naturales.html"><img src="${chevronRightSVG}" type='image/svg+xml'>Ciencias Sociales y Ciencias Naturales</a></li>
            </ul>
        </li>
    </ul>
</nav>
`;}