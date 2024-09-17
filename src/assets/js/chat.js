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
/* 
// Toggle conversations list on mobile
document.querySelector('.header__menu-button').addEventListener('click', function() {
    const conversationsList = document.querySelector('.conversations-list');
    if (conversationsList.style.display === 'block') {
        conversationsList.style.display = 'none';
    } else {
        conversationsList.style.display = 'block';
    }
});

// Handle attachment dropdown
const attachmentButton = document.querySelector('.attachment-button');
const attachmentDropdown = document.querySelector('.attachment-dropdown');

attachmentButton.addEventListener('click', function() {
    if (attachmentDropdown.style.display === 'block') {
        attachmentDropdown.style.display = 'none';
    } else {
        attachmentDropdown.style.display = 'block';
    }
});

// Example of conversation search (non-functional)
const searchInput = document.querySelector('.current-chat__search');
searchInput.addEventListener('input', function() {
    console.log('Search input:', searchInput.value);
});

// Dynamically add or remove modifiers based on user interactions
const conversationListItems = document.querySelectorAll('.conversation-list__item');

conversationListItems.forEach(item => {
    if (item.dataset.unread === 'true') {
        item.classList.add('conversation-list--unread');
    }
}); */