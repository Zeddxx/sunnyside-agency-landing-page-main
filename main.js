const hamburgerBtn = document.querySelector('.hamburger'),
      menuMobileEl = document.querySelector('.menu-mobile'),
      blurEl = document.querySelector('.hamburger-blur');

hamburgerBtn.addEventListener('click', () => {
    menuMobileEl.classList.toggle('active');
    blurEl.classList.toggle('active');
})

console.log('Made By Sahil Ahmed')