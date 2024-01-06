function showConfirmation() {
    // Відображення вікна "готово"
    var confirmationDiv = document.createElement('div');
    confirmationDiv.innerHTML = '<p>Ви успішно зареєструвалися! Готово!</p>';
    confirmationDiv.classList.add('registration-success');
    document.body.appendChild(confirmationDiv);

    // Затримка перед переходом
    setTimeout(function () {
        // Перехід на іншу сторінку
        window.location.href = "CourPage.html";
    }, 1500); // 1500 мілісекунд = 1,5 секунди
}