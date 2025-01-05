export const mobileHeader = () => {
    return `
    <section id="mobileHeader">
        <div class="row">
          <div class="col-auto">
            <button class="button button--icon" onclick="openMenu()">
              <img src="./assets/menuMobile.svg" alt="menuMobile">
            </button>
          </div>
          <div class="col-auto logoContainer">
            <a href="index.html">
                <picture>
                    <source srcset='./assets/logoH.svg' type='image/svg+xml'>
                    <source srcset='./assets/logoH.webp' type='image/webp'>
                    <img src='./assets/logoH.png' type='image/png' alt='Logo de Currículum Córdoba'>
                </picture>
            </a>
          </div>
        </div>
    </section>
`
};