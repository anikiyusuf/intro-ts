"use strict";
// ENUM
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Director"] = 3] = "Director";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceName: ResourceType.Book,
    data: { title: "Things fall" }
};
const docSix = {
    uid: 2,
    resourceName: ResourceType.Film,
    data: { name: 'Yusuf' }
};
console.log(docThree, docFour);
