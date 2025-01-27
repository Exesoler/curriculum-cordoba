const menu = document.querySelector('header');
const backdrop = document.querySelector('.backdrop');

const body = document.querySelector('body');

const closeMenu = () => {
    menu.classList.add('hidden');
    backdrop.classList.add('hidden');
    body.classList.remove('noScroll');
};

const openMenu = () => {
    menu.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    body.classList.add('noScroll');
};

const toggleColapse = (elementClass) => {

    element = document.querySelector(elementClass);

    actionContainerDownload = document.querySelector('.actionsContainer > .actionsContainer__download');

    console.log(`colapsed`)

    if(element.classList.contains(`colapsed`)){
        element.classList.remove(`colapsed`);
        actionContainerDownload.classList.add(`d-none`);
    }else{
        element.classList.add(`colapsed`);
        actionContainerDownload.classList.remove(`d-none`);
    }
};
