"use strict";
let products = [
    {name: "Gummy Worms", price: 5.79},
    {name: "Plain M&Ms", price: 2.89},
    {name: "Peanut M&Ms", price: 2.89},
    {name: "Swedish Fish", price: 3.99},
    {name: "Reese's Cups", price: 5.99},
    {name: "Jolly Ranchers", price: 5.29},
    {name: "Sour Gummy Worms", price: 3.49},
    {name: "Gummie Bears", price: 4.57},
    {name: "Snickers", price: 2.49},
    {name: "Twix", price: 3.0},
];

// Which candies costs less than $4.00
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.price < 4) {
      console.log(`${i}. ${product.name}`);
  }
}
console.log("========================");
// Which candies has "M&M" its name
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name.includes("M&Ms")) {
        console.log(product.name);
    }
}
console.log("=======================");

    //Do we carry "Swedish Fish"

    function isSwedishFish() {
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          if (product.name == "Swedish Fish") {
            return true;
          }
        }
        return false;
      }
      console.log(isSwedishFish(products));