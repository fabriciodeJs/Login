

const btnMenu = document.querySelector('#btn-menu');
const menuMobile = document.querySelector('.menu');


btnMenu.addEventListener('click', (e) => {
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'flex'
    }else{
        menuMobile.style.display = 'none';
    }
});



