// java.js

document.addEventListener('DOMContentLoaded', function () {
  const orderButtons = document.querySelectorAll('.order-button');

  orderButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productContainer = this.closest('.sale_section_block1',
        '.sale_section_block2',
        '.sale_section_block3',
        '.sale_section_block4',
        '.sale_section_block5',
        '.sets_section_block1',
        '.sets_section_block2',
        '.sets_section_block3',
        '.sets_section_block4',
        '.sets_section_block5',
        '.Drink');

      const productId = productContainer.dataset.id;
      const productName = productContainer.querySelector('.image_sale, .image_sale_rolls, .image_sale_drink').alt;
      const productPrice = parseFloat(this.closest('p').textContent.match(/\d+/)[0]);

      addToCart(productId, productName, productPrice);
      redirectToBasket();
    });
  });

  function addToCart(productId, productName, productPrice) {
    try {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ id: productId, name: productName, price: productPrice });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDisplay();

      console.log('Товар додано до кошика:', { id: productId, name: productName, price: productPrice });
    } catch (error) {
      console.error('Помилка при додаванні товару до кошика:', error);
    }
  }

  function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemCount = cart.length;
    console.log('Кількість товарів у кошику: ' + cartItemCount);

    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItemCount.toString();
  }
});
