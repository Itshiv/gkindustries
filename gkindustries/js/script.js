let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
// }
// let cartItem = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active')
}
