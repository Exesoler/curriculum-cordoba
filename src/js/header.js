export const header = () => {
    return `
<div class="logoContainer">
    <a href="index.html">
        <picture>
            <source srcset='/src/assets/logoH.svg' type='image/svg+xml'>
            <source srcset='/src/assets/logoH.webp' type='image/webp'>
            <img src='/src/assets/logoH.png' type='image/png' alt='Logo de Currículum Córdoba'>
        </picture>
    </a>
</div>
<nav>
    <ul>
        <li><a href="marco_curricular.html"><img src="/src/assets/asideIcon__marcoCurricular.svg" type='image/svg+xml' alt="Marco Curricular Común">Marco Curricular Común</a></li>
        <li><a href="#"><img src="/src/assets/asideIcon__progresionAprendizajes.svg" type='image/svg+xml' alt="Marco Curricular Común">Progresión
            de aprendizajes</a></li>
        <li><a href="#"><img src="/src/assets/asideIcon__metas.svg" type='image/svg+xml' alt="Marco Curricular Común">Metas 2025</a></li>
    </ul>
</nav>
`;}
