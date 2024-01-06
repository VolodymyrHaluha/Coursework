document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-button');

  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productContainer = this.closest('.sale_section_block, .sets_section_block, .Drink');

      const productId = productContainer.dataset.id;
      const productName = productContainer.querySelector('.image_sale_rolls, .image_sale_drink').alt;
      const productPrice = parseFloat(this.closest('p').textContent.match(/\d+/)[0]);
      

      addToCart(productId, productName, productPrice);
      redirectToBasket();
    });
  });
  function addToCart(productId, productName, productPrice) {
    try {
      // Отримати або створити кошик в локальному сховищі
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      // Додати новий товар до кошика
      cart.push({ id: productId, name: productName, price: productPrice });
  
      // Зберегти оновлений кошик в локальному сховищі
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Викликати функцію для оновлення відображення кошика
      updateCartDisplay();
  
      console.log('Товар додано до кошика:', { id: productId, name: productName, price: productPrice });
    } catch (error) {
      console.error('Помилка при додаванні товару до кошика:', error);
    }
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
}); 
