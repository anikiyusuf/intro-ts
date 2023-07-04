// ENUM


enum ResourceType { Book , Author, Film, Director}
interface Resource <T> {
    uid:number;
    resourceName: string;
    data:T;
}

const docFive: Resource<object> = {
    uid:1,
    resourceName: ResourceType.Book, 
    data: { title: "Things fall"}
}

const docSix: Resource <object> = {
    uid: 2,
    resourceName: ResourceType.Film, 
    data:{name:'Yusuf'}

}

console.log(docThree , docFour)


