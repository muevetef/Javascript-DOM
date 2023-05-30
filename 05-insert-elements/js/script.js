//insertar elemento contigua
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentEment";

  filter.insertAdjacentElement("beforebegin", h1);
}

//insertar texto contiguo
function insetText() {
  const item = document.querySelector("li:first-child");
  //item.insertAdjacentText("beforebegin", "insertAdjacentText");
  item.insertAdjacentText("beforeend", "<h2>(Oferta)</h2>");
}

//insertar html
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}

//insertar antes
function insertBeforeItem() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = " insertBeforeItem";

  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

//Hacer una funcion custom que inserte un elemento despues de otro 
//Esta funcion usa navegacion del DOM + la creacion e insercion de nodos
function insertAfter(newElement, existingElement) {
  existingElement.parentElement.insertBefore(newElement,existingElement.nextSibling)
}
//Probar la funcionalidad
//Crear el item que queremos insertar
const li = document.createElement("li");
li.textContent = "Insertame después";

//Recoger el elemento de referéncia
const firstItem = document.querySelector("li:first-child");

//Usamos nuestra funcion custom
insertAfter(li, firstItem);