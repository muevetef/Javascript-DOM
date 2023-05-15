//DOM, selectores de un elemento simple
let out;

out = document.getElementById("app-title");

//Obtener valor de atributos
out = document.getElementById("app-title").id;
out = document.getElementById("app-title").className;
out = document.getElementById("app-title").getAttribute("id");

//Establecer valor de atributtos
out = document.getElementById("app-title").title = "Lista de la compra";
out = document.getElementById("app-title").setAttribute("class", "title");

//GET/SET contenido
const title = document.getElementById("app-title");
title.textContent = "Hello world";
title.innerText = "Hello Again";
title.innerHTML = "<em>Lista de la compra</em>";

//Cambiar estilos
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

//Usar selectores de CSS
out = document.querySelector("h1");
out = document.querySelector("#app-title");
out = document.querySelector(".container");
out = document.querySelector('input[type="text"]');
out = document.querySelector("li:nth-child(2)").innerText;
console.log(out);

const segundoHijo = document.querySelector("li:nth-child(2)");
segundoHijo.innerText = "Zumo de patata";
segundoHijo.style.color = "red";

//Podemos usar estos métodos en otros elementos
const lista = document.querySelector("ul");
console.log(lista);
const primerItem = lista.querySelector("li");
primerItem.style.color = "blue";
console.log(primerItem);
