let age:number = 20;
age = 30

let username: string = "John";
username = "Rose"

let isMobile: boolean = true;
isMobile = false 

let user ="MT";
// user = 20

let user1;
user1 = "12";
user1 = 12

let place: null = null;
place = null;

let fruits: string[] = ["apple", "orange"];
fruits.push("12");
// fruits.push(false)

let items: (string | number | boolean)[] = ["apple", 20, false];
// items.push(null)

function allProducts(items: number[]):void {
    let total  = items.reduce((sum, item ) => sum + item, 0)
    // return total
}

allProducts([20, 40, 50])

let hsla: [number, string, string, number];
hsla = [100, "100%", "50%", 20]

function myFunc() : [number, number] {
    return [100, 200]
}