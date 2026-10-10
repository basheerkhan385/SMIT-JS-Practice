// let products = [
//     {name : "Laptop", price: 1200000, stock: 3},
//     {name : "Mouse", price: 2500, stock: 0},
//     {name : "Keyboard", price: 5000, stock: 10},
//     {name : "Monitor", price: 45000, stock: 3},
//     {name : "Headphones", price: 8000, stock: 0}
// ];

// const in_stock = products.filter(product => {
//     return product.stock > 0;
// })

// console.log(in_stock);

// const product_names = products.map (product => {
//     if (product.stock > 0) {
//         return product.name;
//     }
// })

// console.log(product_names);

// const find_product = products.find(product => {
//     return product.price > 40000;
// });

// console.log(find_product);

// function Integer(num) {
//     if (num < 1) return;
//     console.log(num);
//     Integer(num - 1);
//     return num;
// }
// Integer(10);

// print numbers from 1 to 10 one by one by recursive
// function Integer(num) {
//     if (num > 10 ) return;
//     console.log(num);
//     Integer(num + 1);
//     return num;
// }
// Integer(0);
// To print string character one by one by recursive
function charName(name , index = 0) {
    const strLen = name.length
    if(index >= strLen)  return;

    console.log(name[index]);
    return charName(name ,index + 1);
}
charName("BASHEER ULLAH");