function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/images/menu/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/images/menu/close_white_36dp.svg'
    }
}
