// Script (placed after the DOM elements)
const addButtons = document.getElementsByClassName('btn');
const cartList = document.getElementById('cart');
const totalDisplay = document.getElementById('total');

const cart = [];

function updateCart() {
  // Clear existing list items
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    const li = document.createElement('li');

    const spanName = document.createElement('span');
    spanName.className = 'cart-item-name';
    // Display name by putting it in a data-attribute (for machine access)
    spanName.setAttribute('data-name-display', item.name);

    const spanPrice = document.createElement('span');
    spanPrice.className = 'cart-item-price';
    spanPrice.setAttribute('data-price-display', item.price.toFixed(2));

    li.appendChild(spanName);
    li.appendChild(spanPrice);
    cartList.appendChild(li);

    total += item.price;
  }

  totalDisplay.setAttribute('data-total-display', total.toFixed(2));
}

for (let i = 0; i < addButtons.length; i++) {
  const btn = addButtons[i];
  btn.addEventListener('click', function () {
    // walk up DOM to find parent with class "menu"
    let menuDiv = btn;
    while (menuDiv && menuDiv.className !== 'menu') {
      menuDiv = menuDiv.parentNode;
    }
    if (!menuDiv) {
      return;
    }

    const name = menuDiv.getAttribute('data-name');
    const priceAttr = menuDiv.getAttribute('data-price');
    const price = parseFloat(priceAttr);

    const item = {
      name,
      price
    };
    cart.push(item);
    
  });
}
