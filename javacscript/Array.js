// let mark = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of mark) {
//     sum += val;
    
// }
// let avg = sum / mark.length;
// console.log(`${avg}`)



//Q2nd 
//let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) { 

//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items)
    

//Q3rd

// companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(1, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);


//Q4th
let arr = [1, 2, 3, 4, 5];
let copy = arr[arr.length - 1]; // Store the last element
for (let i = arr.length-1; i > 0; i--) {
    
        arr[i] = arr[i-1];
}
    arr[0] = copy; // Move the first element to the end

console.log(arr); // 
