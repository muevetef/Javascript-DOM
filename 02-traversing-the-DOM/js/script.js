let out;
//Como obtener los elementos hijos 
//de un elemento padre
const parent = document.querySelector(".parent");

out = parent.children;
out = parent.children[1].innerText;
out = parent.children[1].className;
out = parent.children[1].nodeName;

out = parent.children[1].innerText = "Patatas";
out = parent.children[1].style.color = "red";


out = parent.firstElementChild.innerText = "Hijo Uno";
out = parent.lastElementChild.innerText = "Hijo TRES";

//Podemos Obtener el elemento padre del hijo
const child = document.querySelector('.child');
out = child.parentElement;
out = child.parentElement.style.border = '2px solid #ccc';
out = child.parentElement.style.padding = '10px';

// Obtener los elementos hermanos (Siblings)
const secondItem = document.querySelector('.child:nth-child(2)');
//const secondItem = document.querySelector('.selected');
out = secondItem.innerHTML;
out = secondItem.nextElementSibling.style.color='green'
out = secondItem.previousElementSibling.style.color='orange'
console.log(out);
