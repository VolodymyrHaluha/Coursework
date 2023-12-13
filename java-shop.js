function showConfirmation() {
    alert("Готово!");

    // Запустити таймер на 2 секунди і перейти на головну сторінку
    setTimeout(function() {
        window.location.href = "index.html"; // Замініть це на вашу головну сторінку
    }, 2000);
}