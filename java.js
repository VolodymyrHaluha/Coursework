
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
function showBasket() {
    var popup = document.getElementById('basket-popup');
    popup.style.display = 'block';
}

function placeOrder() {
    // Додайте код для обробки замовлення
    alert('Ваше замовлення успішно розміщено!');
}
