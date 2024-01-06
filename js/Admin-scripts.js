// Приклад даних
const products = [];
const orders = [
    { id: 1, product: 'Product 1', price: 20 },
    { id: 2, product: 'Product 2', price: 30 },
];
const users = [
    { login: 'user1', password: 'pass1', type: 'customer' },
    { login: 'user2', password: 'pass2', type: 'courier' },
];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').value;

    // Відправка даних на сервер
    fetch('/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        displayProducts();
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';
}

function displayOrders() {
    const ordersTable = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];

    ordersTable.innerHTML = '';

    orders.forEach(order => {
        const row = ordersTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = order.id;
        cell2.innerHTML = order.product;
        cell3.innerHTML = order.price;
        cell4.innerHTML = '<button onclick="completeOrder(' + order.id + ')">Завершити</button>';
    });
}

function displayUsers() {
    const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];

    usersTable.innerHTML = '';

    users.forEach(user => {
        const row = usersTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = user.login;
        cell2.innerHTML = user.password;
        cell3.innerHTML = user.type;
    });
}

function completeOrder(orderId) {
    // Логіка для завершення замовлення
    // ...

    displayOrders();
}

displayOrders();
displayUsers();
