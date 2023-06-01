//Datos precargados...
const carrito = ["Manzanas", "Zumo de naranja", "Oreos", "Leche"];

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemFilter = document.getElementById("filter");

//Carga de datos del carrito
function loadCarrito(miCarrito) {
  miCarrito.forEach((item) => {
    createNewItem(item);
  });
}
function addItem(evt) {
  evt.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Inserta un producto");
    return;
  }
  //insertar un nuevo elemento en la lista
  createNewItem(newItem);
}
function filterItems() {
  const items = itemList.querySelectorAll("li");
  const textToFilter = itemFilter.value;

  items.forEach((item) => {
    const txtItem = item.firstChild.textContent.toLocaleLowerCase();
    if (txtItem.indexOf(textToFilter) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
    console.log(txtItem);
  });
}
function createNewItem(item) {
  const li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  //Añadir evento de borrado
  button.addEventListener("click", (evt) => {
    //TODO confirmacion de borrado
    const currentItem = evt.currentTarget.parentElement;
    currentItem.remove();
    console.log(evt.currentTarget.parentElement);
  });
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  //Vamos enlazando los elementos creados
  button.appendChild(icon);
  li.appendChild(button);

  //Añadir el li entero al ul de la lista
  itemList.appendChild(li);
}

//Event listeners
itemForm.addEventListener("submit", addItem);
itemFilter.addEventListener("input", filterItems);

loadCarrito(carrito);
