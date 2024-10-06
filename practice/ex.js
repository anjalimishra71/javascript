let itemsInCart = [
    "apple",
    "comb",
    // "mike",
    // "keyboard",
    // "t-shirt",
    // "mobile holder",
    ];
    // Display the items in cart
  //  itemsInCart.forEach((item) => console.log(item));
    itemsInCart.forEach((item, index, arr) =>
console.log(`The item ${item} was added to cart in position ${index + 1} The items in cart are ${arr}.`
)
);
