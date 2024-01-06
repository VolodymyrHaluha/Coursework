// Перевірка логіна та пароля
function showConfirmation() {

    const loginInput = document.getElementById('login').value;
    const passwordInput = document.getElementById('password').value;

    // Перевірка чи введені логін та пароль вірні
    if (loginInput === '12345' && passwordInput === '12345') {
        // Якщо правильно, перенаправте на іншу сторінку
        redirectAfterLogin();
        
        // Відображення вікна "готово"
        var confirmationDiv = document.createElement('div');
        confirmationDiv.innerHTML = '<p>Ви успішно зареєструвалися! Готово!</p>';
        confirmationDiv.classList.add('registration-success');
        document.body.appendChild(confirmationDiv);
    
    } else {
        // Якщо неправильно, виведіть помилку
        alert('Логін або пароль неправильні');
    }
}

// Перенаправлення на іншу сторінку
function redirectAfterLogin() {
    // Змініть URL відповідно до вашого випадку
    window.location.href = 'admin.html';
}
