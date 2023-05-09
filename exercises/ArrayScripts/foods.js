"use strict"

let lunchMenuItems = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let subtotal = 0;
for (let index = 0; index < lunchMenuItems.length; index++) {
    const menuItem = lunchMenuItems[index];
    // console.log(menuItem);
    // console.log(menuItem.item);
    // console.log(menuItem.price);
    subtotal = subtotal + menuItem.price;
    // OR
 //     subtotal += menuItem.price;
}

let tax = subtotal * 0.08;
let tip = subtotal * 0.18;
let total = subtotal + tax + tip;

console.log("subtotal: $" + subtotal);
console.log("tip: $" + tip.toFixed(2));
console.log("total: $" +total.toFixed(2));

