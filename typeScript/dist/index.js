"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
age = 30;
let username = "John";
username = "Rose";
let isMobile = true;
isMobile = false;
let user = "MT";
// user = 20
let user1;
user1 = "12";
user1 = 12;
let place = null;
place = null;
let fruits = ["apple", "orange"];
fruits.push("12");
// fruits.push(false)
let items = ["apple", 20, false];
// items.push(null)
function allProducts(items) {
    let total = items.reduce((sum, item) => sum + item, 0);
    // return total
}
allProducts([20, 40, 50]);
let hsla;
hsla = [100, "100%", "50%", 20];
function myFunc() {
    return [100, 200];
}
//# sourceMappingURL=index.js.map