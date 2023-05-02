const burgerOpen = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const navbar = document.querySelector('.nav');

burgerOpen.addEventListener('click', onBurgerOpen);
burgerClose.addEventListener('click', onBurgerClose);
window.addEventListener('orientationchange', onOrientationChange);

function onBurgerOpen() {
    navbar.classList.add('visible')

    if( window.innerWidth  <= 992 ) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        console.log('onBurgerOpen If')
    } else {
        document.body.style.position = 'static';
        document.body.style.top = '';
        console.log('onBurgerOpen Else')
    }
}

function onBurgerClose() {
    navbar.classList.remove('visible')

    document.body.style.position = 'static';
    document.body.style.top = '';

    const scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    console.log('onBurgerClose')
}

function onOrientationChange() {
    if (window.orientation !== 0 && window.screen.width > 992) {
        navbar.classList.remove('visible')
        document.body.style.position = 'static';
        document.body.style.top = '';
        console.log('onOrientationChange')
    }
}
