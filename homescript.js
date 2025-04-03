// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all menu elements
    const profileMenu = document.querySelector('.lefter');
    const productMenu = document.querySelector('.left');
    const deliveryMenu = document.querySelector('.center');
    const stockMenu = document.querySelector('.right');
    const aboutMenu = document.querySelector('.righter');

    // Add click event listeners
    profileMenu.addEventListener('click', function() {
        window.location.href = 'profile.html';
    });

    productMenu.addEventListener('click', function() {
        window.location.href = 'Product.html';
    });

    deliveryMenu.addEventListener('click', function() {
        window.location.href = 'services.html';
    });

    stockMenu.addEventListener('click', function() {
        window.location.href = 'stock.html';
    });

    aboutMenu.addEventListener('click', function() {
        window.location.href = 'AboutUs.html';
    });
});