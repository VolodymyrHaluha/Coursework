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

