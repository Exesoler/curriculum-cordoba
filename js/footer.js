import emailSVG from '../assets/email.svg';
import logoEducacionSVG from '../assets/logoEducacion.svg';
import logoCordobaSVG from '../assets/logoCordoba.svg';
import logoTransformarCBASVG from '../assets/logoTransformarCBA.svg';
import logoCurriculumCordobaSVG from '../assets/logoHWhite.svg';

import videoFooterWEBP from '../assets/nature_1080p.webm';
import videoFooterMP4 from '../assets/nature_1080p.mp4';

export const footer = () => {
    return `
<div class="row acercaContainer">
    <div class="col-12 acercaContainer__title">
        <h3>Acerca de Currículum Córdoba</h3>
    </div>
    <!--<div class="col-12 col-md-6 acercaContainer__image">
        <picture>
            <source srcset='url de la imagen' type='image/webp'>
            <img src='url de la imagen' type='image/jpg' alt='Acerca de Currículum Córdoba'>
        </picture>
    </div>-->
    <div class="col-12 acercaContainer__text">
        <p>El programa <strong>TransFORMAR@Cba</strong>, inicia un proceso gradual y progresivo de renovación curricular y didáctica en el Sistema Educativo de la provincia de Córdoba.</p>
        <p><strong>Currículum Córdoba</strong> es el desarrollo curricular del programa y es una invitación a coconstruir un currículum vivo, democrático y participativo, donde se entraman los acuerdos sobre lo que es importante que la escuela transmita hoy a las nuevas generaciones cordobesas.</p>
    </div>
    <div class="col-auto acercaContainer__action">
        <button class="button button--secondary" onclick="window.location.href='quienes_somos.html';">Conocenos</button>
    </div>
</div>
<div class="row contactoContainer">
    <div class="col-12 contactoContainer__action">
        <button class="button button--primary button--icon" onclick="window.location.href='contacto.html';">Contacto <img src="${emailSVG}" alt="Email icon"></button>
    </div>
</div>
<div class="row base">
    <div class="col-12 col-md-3 base__logo">
        <img src="${logoCurriculumCordobaSVG}" alt="Logo Currículum Córdoba">
    </div>
    <div class="col-12 col-md-3 base__logo">
        <img src="${logoTransformarCBASVG}" alt="Logo Gobierno de la provincia de Córdoba">
    </div>
    <div class="col-12 col-md-3 base__logo">
        <img src="${logoEducacionSVG}" alt="Logo Ministerio de Educación de Córdoba">
    </div>
    <div class="col-12 col-md-3 base__logo">
        <img src="${logoCordobaSVG}" alt="Logo Gobierno de la provincia de Córdoba">
    </div>
</div>
`;}
