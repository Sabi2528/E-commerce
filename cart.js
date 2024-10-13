// cart.js
document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.btn.signin'); // Select all Add to Cart buttons

    // Add click event listener to each button
    cartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const productId = event.target.getAttribute('data-id');
            const productName = event.target.getAttribute('data-name');

            // Get current cart from localStorage or create empty array if no cart exists
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Add the new product to the cart
            cart.push({ id: productId, name: productName });

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Redirect to the cart page
            window.location.href = 'cart.html';
        });
    });
});



