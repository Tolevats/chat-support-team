// scripts.js

//when clicked unread messages with bold will remove class dynamically
document.querySelectorAll('.chats-list__item--unread').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.remove('chats-list__item--unread');
    });
});

const searchToggleButton = document.querySelector('.current-chat__search-toggle');
const searchInput = document.querySelector('.current-chat__search-input');

searchToggleButton.addEventListener('click', () => {
    searchInput.classList.toggle('visible');
});