const navBarList = document.querySelector('#nav-lists');
const menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click', () => {
  navBarList.classList.toggle('active')
})