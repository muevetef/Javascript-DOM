//Objeto global window
console.log(window);
//El DOM es parte del objeto Window
console.log(window.document)

//Podemos acceder a los elementos del DOM
//directamente con sus  propiedades
console.log(window.document.body)
console.log(window.document.links[0])

//Podemos establecer las propiedades de los 
//elementos
//document.body.innerHTML = "<h1>Hello World!</h1>";
console.log(document.body.innerHTML);

//Tenemos métodos para seleccionar de forma más 
//específica
//document.getElementById("test").innerHTML = "Cesta de la compra";
document.querySelector("#test h1").innerHTML = "Cesta de la compra";


