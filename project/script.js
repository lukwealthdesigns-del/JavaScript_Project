let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({
        name: itemName,
        price: itemPrice
    });
   
    total += itemPrice;
   
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart');
    const totalElement = document.getElementById('total');
   
    cartList.innerHTML = '';
   
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₦${item.price.toLocaleString()}`;
        cartList.appendChild(li);
    });
   
    totalElement.textContent = `Total: ₦${total.toLocaleString()}`;
}



