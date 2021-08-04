const menuIcon = document.getElementById('menu_icon');
const mobileMenu = document.getElementById('mobile_menu_modal')
const iconSrc =document.getElementById('menu_icon_img')
menuIcon.addEventListener('click', () =>{
    const display = mobileMenu.style.display
    mobileMenu.style.display = display === '' ? 'block' : ''
    iconSrc.setAttribute('src',display === '' ? '/assets/shared/mobile/close.svg': '/assets/shared/mobile/menu.svg'  )
    document.body.style.overflow = display === '' ? 'hidden' : 'auto'
})