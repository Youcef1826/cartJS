let numberOfItems = document.getElementById("number-items");
let totalPrice = document.getElementById("total-price");
let productFlag = document.getElementsByClassName("nbr-itm");
let price = document.getElementsByClassName("product-price")
let addToCart = document.getElementsByClassName("plus");
let removeToCart = document.getElementsByClassName("minus");

let itemsOnCart = 0;
let cartTotalPrice = 0;

for (let iteratorPlus of addToCart) { // When i add to cart

    iteratorPlus.onclick = function () {

        let index = Array.from(addToCart).indexOf(this); // Create un array and find index of item
        let productPrice = parseFloat(price[index].innerText); // Convert price on integer, find index and access the text content of the element

        let itemsProductFlag = parseInt(productFlag[index].innerText);  // Convert in integer, find index and access the text content of the element

        itemsOnCart++; // Update number of items on cart
        itemsProductFlag++; // Update number of items on product flag
        cartTotalPrice += productPrice; // Update price

        numberOfItems.innerText = itemsOnCart;
        productFlag[index].innerText = itemsProductFlag;
        totalPrice.innerText = cartTotalPrice;
    };
};

for (let iteratorMinus of removeToCart) { // When i remove to cart

    iteratorMinus.onclick = function () {

        let index = Array.from(removeToCart).indexOf(this); // Create un array and find index of item
        let productPrice = parseFloat(price[index].innerText); // Convert price on number, find index and access the text content of the element

        let itemsProductFlag = parseInt(productFlag[index].innerText); // Convert in integer, find index and access the text content of the element

        if (itemsProductFlag > 0) {

            itemsOnCart--; // Update number of items on cart
            itemsProductFlag--; // Update number of items on product flag
            cartTotalPrice -= productPrice; // Update price

            numberOfItems.innerText = itemsOnCart;
            productFlag[index].innerText = itemsProductFlag;
            totalPrice.innerText = cartTotalPrice;
        };
    };
};