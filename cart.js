const cartItemsContainer = document.getElementById("cart-items");
const totalPriceDiv = document.getElementById("total-price");

// Retrieve cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartDisplay() {
    cartItemsContainer.innerHTML = ""; // Clear the cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
        totalPriceDiv.textContent = "";
        return;
    }

    // Display each cart item
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const img = document.createElement("img");
        img.src = item.imgSrc;
        cartItemDiv.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = item.name;
        cartItemDiv.appendChild(title);

        const price = document.createElement("p");
        price.textContent = `Price: $${item.price}`;
        cartItemDiv.appendChild(price);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            removeItemFromCart(index);
        });
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // Display total price
    totalPriceDiv.textContent = `Total Price: $${totalPrice}`;
}

function removeItemFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Initial cart display
updateCartDisplay();
