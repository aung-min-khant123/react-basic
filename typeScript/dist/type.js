"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(randomColor());
const userOne = {
    name: "John",
    age: 20,
};
function formatUser(user) {
    console.log(user.name);
}
formatUser(userOne);
;
;
//# sourceMappingURL=type.js.map