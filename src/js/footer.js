export const footer = () => {
    return `
<div class="row acercaContainer">
    <div class="col-12 acercaContainer__title">
        <h2>Acerca de Currículum Córdoba</h2>
    </div>
    <div class="col-12 col-md-6 acercaContainer__image">
        <picture>
            <source srcset='/src/assets/acercaDe.webp' type='image/webp'>
            <img src='/src/assets/acercaDe.jpg' type='image/jpg' alt='Acerca de Currículum Córdoba'>
        </picture>
    </div>
    <div class="col-12 col-md-6 acercaContainer__text">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
    </div>
    <div class="col-auto acercaContainer__action">
        <button class="button button--secondary">Conocenos</button>
    </div>
</div>
<div class="row base">
    <div class="col-12 base__text">
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
    </div>
    <div class="col base__action">
        <button class="button button--icon">Contacto <img src="/src/assets/email.svg" alt="Email icon"></button>
    </div>
    <div class="col-auto base__logo">
        <a href="#">
            <img style="width: 150px;" src="/src/assets/logoEducacion.svg" alt="Logo Ministerio de Educación de Córdoba">
        </a>
    </div>
    <div class="col-auto base__logo">
        <a href="#">
            <img src="/src/assets/logoCordoba.svg" alt="Logo Gobierno de la provincia de Córdoba">
        </a>
    </div>
</div>
`;}
