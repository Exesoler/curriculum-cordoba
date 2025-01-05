export const header = () => {

    return `
<div class="closeContainer">
    <button class="button button--icon" onclick="closeMenu()"><img src="./assets/close.svg" type='image/svg+xml'></button>
</div>
<div class="logoContainer">
    <a href="index.html">
        <picture>
            <source srcset='./assets/logoH.svg' type='image/svg+xml'>
            <source srcset='./assets/logoH.webp' type='image/webp'>
            <img src='./assets/logoH.png' type='image/png' alt='Logo de Currículum Córdoba'>
        </picture>
    </a>
</div>
<nav>
    <ul>
        <li><a href="marco_curricular.html"><img src="./assets/asideIcon__marcoCurricular.svg" type='image/svg+xml' alt="Marco Curricular Común">Marco Curricular Común</a></li>
        <li><a href="#"><img src="./assets/asideIcon__progresionAprendizajes.svg" type='image/svg+xml' alt="Marco Curricular Común">Progresión
            de aprendizajes</a></li>
        <li><a href="#"><img src="./assets/asideIcon__metas.svg" type='image/svg+xml' alt="Marco Curricular Común">Metas 2025</a></li>
    </ul>
</nav>
`;}
