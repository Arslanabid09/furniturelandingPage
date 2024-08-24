// Select elements
const hamburger = document.querySelector('.hamburger .bars');
const menu = document.querySelector('.menu');
const cancel = document.querySelector('.menu .cancel');

// Toggle the menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active'); // Show/hide the menu
    hamburger.style.display = 'none'; // Hide the hamburger icon
    cancel.style.display = 'block'; // Show the cancel icon
});

// Close the menu
cancel.addEventListener('click', () => {
    menu.classList.toggle('active'); // Hide the menu
    cancel.style.display = 'none'; // Hide the cancel icon
    hamburger.style.display = 'block'; // Show the hamburger icon
});
