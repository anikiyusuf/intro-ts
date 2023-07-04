

// Generics 
const addUID =<T extends {name:string}> (obj: object) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi' , age:40})
console.log(docOne)


interface Resource <T> {
    uid:number;
    resourceName: string;
    data:T;
}

const docThree: Resource<object> = {
    uid:1,
    resourceName: 'peron',
    data: { name: "Yusuf"}
}

const docFour: Resource <string[]> = {
    uid: 2,
    resourceName: 'ShoppingList',
    data:['milk' , 'egg', 'meat']

}

console.log(docThree , docFour)









