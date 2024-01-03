document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-button');

  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productContainer = this.closest(
        '.sale_section_block1', 
        '.sale_section_block2', 
        '.sale_section_block3', 
        '.sale_section_block4',
        '.sets_section_block1',
        '.sets_section_block2',
        '.sets_section_block3',
        '.sets_section_block4',
        '.sets_section_block5'
      );
      const productId = productContainer.dataset.id;
      const productName = productContainer.querySelector('.image_sale').alt;
      const productPrice = parseFloat(productContainer.innerText.match(/(\d+(\.\d+)?)/)[0]); // Отримати ціну з тексту

      addToCart(productId, productName, productPrice);
    });
  });

  function addToCart(productId, productName, productPrice) {
    // Отримати або створити кошик в локальному сховищі
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Додати новий товар до кошика
    cart.push({ id: productId, name: productName, price: productPrice });

    // Зберегти оновлений кошик в локальному сховищі
    localStorage.setItem('cart', JSON.stringify(cart));

    // Викликати функцію для оновлення відображення кошика
    updateCartDisplay();
  }

  function updateCartDisplay() {
    // Оновити відображення кошика, наприклад, вивести кількість товарів у кошику
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.length;
    console.log('Кількість товарів у кошику: ' + cartItemCount);

    // Отримати елемент DOM для відображення кількості товарів у кошику
    const cartCountElement = document.getElementById('cart-count');

    // Оновити текст у блоку з кількістю товарів
    cartCountElement.textContent = cartItemCount.toString();
  }

  // Викликати функцію для оновлення відображення кошика при завантаженні сторінки
  updateCartDisplay();
});

    // Функція, яка додає товар до кошика
    function addToCart(itemName, itemPrice) {
      // Отримати або створити кошик в локальному сховищі
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Додати новий товар до кошика
      cart.push({ name: itemName, price: itemPrice });

      // Зберегти оновлений кошик в локальному сховищі
      localStorage.setItem('cart', JSON.stringify(cart));

      // Викликати функцію для оновлення відображення кошика
      updateCartDisplay();
  }

  // Функція для оновлення відображення кошика
  function updateCartDisplay() {
      // Отримати елементи з DOM, які відображають кошик
      const cartItemsElement = document.getElementById('cart-items');
      const totalPriceElement = document.getElementById('total-price');

      // Отримати кошик з локального сховища
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Очистити поточне відображення
      cartItemsElement.innerHTML = '';

      // Додати кожен товар з кошика до відображення
      cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
          cartItemsElement.appendChild(listItem);
      });

      // Підрахувати загальну суму
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);

      // Оновити відображення загальної суми
      totalPriceElement.textContent = `Загальна сума: $${totalPrice.toFixed(2)}`;
  }

  // Функція для оформлення замовлення
  function checkout() {
      // Тут ви можете додати логіку для переходу на сторінку оформлення замовлення
      // Наприклад, можна використовувати window.location.href
      // window.location.href = 'basket.html';
      alert('Оформлення замовлення!');
  }

  // Викликати функцію для оновлення відображення кошика при завантаженні сторінки
  window.onload = updateCartDisplay;