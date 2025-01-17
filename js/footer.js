import acercadeWEBP from '../assets/acercaDe.webp';
import acercadeJPG from '../assets/acercaDe.jpg';
import emailSVG from '../assets/email.svg';
import logoEducacionSVG from '../assets/logoEducacion.svg';
import logoCordobaSVG from '../assets/logoCordoba.svg';
import logoTransformarCBASVG from '../assets/logoTransformarCBA.svg';

import videoFooterWEBP from '../assets/nature_1080p.webm';
import videoFooterMP4 from '../assets/nature_1080p.mp4';

export const footer = () => {
    return `
<div class="row acercaContainer">
    <div class="col-12 acercaContainer__title">
        <h2>Acerca de Currículum Córdoba</h2>
    </div>
    <!--<div class="col-12 col-md-6 acercaContainer__image">
        <picture>
            <source srcset='${acercadeWEBP}' type='image/webp'>
            <img src='${acercadeJPG}' type='image/jpg' alt='Acerca de Currículum Córdoba'>
        </picture>
    </div>-->
    <div class="col-12 col-md-6 acercaContainer__video">
        <video controls width="100%">
            <source src="${videoFooterWEBP}" type="video/webm" />
            <source src="${videoFooterMP4}" type="video/mp4" />
        </video>
    </div>
    <div class="col-12 col-md-6 acercaContainer__text">
        <p>El programa <strong>TransFORMAR@Cba</strong>, inicia un proceso gradual y progresivo de renovación curricular y didáctica en el Sistema Educativo de la provincia de Córdoba.</p>
        <p><strong>Currículum Córdoba</strong> es el desarrollo curricular del programa y es una invitación a coconstruir un currículum vivo, democrático y participativo, donde se entraman los acuerdos sobre lo que es importante que la escuela transmita hoy a las nuevas generaciones cordobesas.</p>
    </div>
    <div class="col-auto acercaContainer__action">
        <button class="button button--secondary" onclick="window.location.href='quienes_somos.html';">Conocenos</button>
    </div>
</div>
<div class="row base">
    <div class="col-12 base__text">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>
    <div class="col-12 col-md base__action">
        <button class="button button--icon">Contacto <img src="${emailSVG}" alt="Email icon"></button>
    </div>
    <div class="col-4 col-md-auto base__logo">
        <a href="#">
            <img src="${logoTransformarCBASVG}" alt="Logo Gobierno de la provincia de Córdoba">
        </a>
    </div>
    <div class="col col-md-auto base__logo">
        <a href="#">
            <img src="${logoEducacionSVG}" alt="Logo Ministerio de Educación de Córdoba">
        </a>
    </div>
    <div class="col-4 col-md-auto base__logo">
        <a href="#">
            <img src="${logoCordobaSVG}" alt="Logo Gobierno de la provincia de Córdoba">
        </a>
    </div>
</div>
`;}
