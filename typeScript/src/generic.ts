// function getFirstStringElement(arr: string[]): string {
//     return arr[0]
// }
// // console.log(getFirstStringElement(["apple", "orange"]))
// let numbers = [1,2,3]
// // console.log(getFirstStringElement(numbers))

// function getFirstStringElement(arr: any[]): any {
//     return arr[0]
// }

// // console.log(getFirstStringElement(["apple", 1 ,true]))

// let value:any =getFirstStringElement([2, "orange", 1, true])
// value.toLowerCase();
// console.log(value)

//*************************

function getFirstStringElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

let names: string[] = ["John", "Rose"];
console.log(getFirstStringElement(names)); // Output: John

let numbers: number[] = [1, 2];
console.log(getFirstStringElement(numbers)); // Output: 1
