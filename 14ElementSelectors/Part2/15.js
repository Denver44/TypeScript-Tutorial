console.log("Welcome to tut15");

let cont = document.querySelector(`#heading`) // for query selector we have to write( #) for id.
cont = document.querySelector(`.no`) // for query selector we have to write (.) for class.
cont = document.querySelector(`.conatiner`)
// cont = cont.childNodes; // this will give all the element text spaces comment and tags
// cont = cont.children // this will give only elemeents .
// ** Use more the childrens when u are dealing with the elemnets.
// console.log(cont);
// let nodeName = cont.childNodes[0].nodeName; // this will print the Node name.
// let nodeName = cont.childNodes[1].nodeName;
// let nodeName = cont.childNodes[2].nodeName;
// let nodetype = cont.childNodes[1].nodeType; // This will print the type of nOde according to the belwo table
// let nodeName = cont.children[5].nodeName;
// console.log(nodetype);


// Node types 
/*
1. Element
2. Attribute
3. Text node
8. Comments
9. Documents
10. doctype
*/

// let conatiner = document.querySelector(`.conatiner`);
let conatiner = document.querySelector(`div.conatiner`);
// console.log(conatiner);
// console.log(conatiner.children[1].children[0].children[2]);

// console.log(conatiner.firstChild); // It will give the first child
// console.log(conatiner.firstElementChild); // this will give the first element of  the document
// console.log(conatiner.lastChild); // It will give the last child
// console.log(conatiner.lastElementChild); // this will give the last element of  the document
// console.log(conatiner.children); //  it will give the eleemt
// console.log(conatiner.childElementCount); //  it will give the total element count of child elements.

console.log(conatiner.firstElementChild.parentNode); // it will give the parent node
console.log(conatiner.firstElementChild.nextSibling); // this will give comment space all thing
console.log(conatiner.firstElementChild.nextElementSibling); // it only give the element
console.log(conatiner.firstElementChild.nextElementSibling.nextElementSibling);  
