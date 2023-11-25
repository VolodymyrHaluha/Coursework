
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
