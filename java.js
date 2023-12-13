document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productContainer = this.closest(
            '.sale_section_block1',
            '.sale_section_block2',
            '.sale_section_block3',
             '.sale_section_block4');
            const productId = productContainer.dataset.id;
            const productName = productContainer.querySelector('.image_sale').alt;
            const productPrice = parseFloat(productContainer.innerText.match(/(\d+(\.\d+)?)/)[0]); // Отримати ціну з тексту

            addToCart(productId, productName, productPrice);
        });
    });
    function addToCart(productId, productName, productPrice) {
        // Отримати дані товару
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        
    }}
});




