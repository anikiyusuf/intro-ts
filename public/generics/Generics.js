"use strict";
// Generics 
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'peron',
    data: { name: "Yusuf" }
};
const docFour = {
    uid: 2,
    resourceName: 'ShoppingList',
    data: ['milk', 'egg', 'meat']
};
console.log(docThree, docFour);
