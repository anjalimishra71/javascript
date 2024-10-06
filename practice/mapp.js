let cartItemsPriceAsStrings = ["100", "58.50", "134", "175", "146", "205"];
// Array of item prices as numbers
let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.map((item) => Number(item));
console.log(cartItemsPriceAsNumbers);