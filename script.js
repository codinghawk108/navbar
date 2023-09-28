// Code by Coding Hawk

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const searchToggle = document.getElementById('search-btn');
const searchDropdown = document.getElementById('search-dropdown');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

searchToggle.addEventListener('click', () => {
    searchDropdown.classList.toggle('active');
});