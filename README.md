# 🎯 FreshBite Café Digital Menu System

    FreshBite Cafe Digital Menu System is a simple, browser-based digital menu system that allows staff to manage menu items and customers to browse and order food. This project shows basic front-end development concepts like authentication, data storage, and user interface design using HTML, CSS, and JavaScript.


## 📖 Project Overview

    FreshBite Café owner Maria wants to replace her old paper menus with a digital solution that works on both staff and customer sides without reprinting papers.

    This project shows a login-protected dashboard for staff and a public-facing menu for customers.

## 🚀 Features

###  👷Staff Side

#### Login System
 Hardcoded credentials:
    →Username: `admin`
    →Password: `cafe123`
    →Basic validation for empty fields
#### Staff Dashboard
    →Add new menu items (name, price, description)
    →Remove existing items
    →Edit menu item prices
    →View all current menu items

### 🧑‍🍽️ Customer Side
 Digital Menu:
    →Items displayed as cards/boxes
    →Categories: Drinks, Food, Desserts
    →Search items by name

### Ordering System

    →Add items to cart
    →View cart with item count and total
    →Simple checkout form (name, table number)
    →Display confirmation message


## 🛠️ Technical Details
  Requirements:

  * Login/logout system
  * Add/remove menu items (staff)
  * Browse and order items (customers)
  * Calculate order totals
  * Basic form validation


## 📂 Pages

* `login.html` – Staff login page
* `staff-dashboard.html` – Staff menu management
* `customer-menu.html` – Customer-facing menu

---

## 📝 Sample Data Structure

```javascript
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
```

## 👥 Team Roles 

    →Login Developer(Build authentication system) - Mariam Adesina
    →Staff Dashboard Developer(Menu management features) - Lukman Ibrahim 
    →Customer Interface Developer(Customer menu and ordering system) - Samuel Oyedoyin
    →Designer – Styling, layout, and user experience - Olamide Olabode


