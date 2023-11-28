
const icon = document.getElementById('icon');
const popupContainer = document.getElementById('popup-container');

// Додайте обробник події для кліку на іконці
icon.addEventListener('click', function() {
    // Перевірте, чи вікно приховане
    if (popupContainer.classList.contains('hidden')) {
        // Покажіть вікно
        popupContainer.classList.remove('hidden');
    } else {
        // Сховайте вікно
        popupContainer.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.closest('.sale_section_block1, .sets_section_block2, .sale_section_block3, .sets_section_block4').dataset.id;
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        // Отримайте дані товару за його ідентифікатором (productId)
        // Додайте товар у кошик, наприклад, зберігаючи його в локальному сховищі
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Товар додано в кошик!');
    }
});