//console.dir (document)

//console.log (document.domain)

console.log (document.title);
document.title= "novi 5sajt";
console.log(document.all);
console.log(document.all[8])
document.all[8].textContent = "Nesto drugo"

//Get element by ID
console.log (document.getElementById ("main-title"));

document.getElementById("main-title").textContent="Drugi naslov"
let mainTitle = document.getElementById("main-title");
mainTitle.textContent= "Treci Naslov"
 
//get element by class

console.log (document.getElementsByClassName("list-item"))
let items = document.getElementsByClassName("list-item");
items[2].textContent="Zamenio sam drugi element"
items[2].style.backgroundColor = "red"

for (let i = 0 ; i<items.length ; i++){
    if(i % 2==0)
    items[i].style.backgroundColor = "grey"

}