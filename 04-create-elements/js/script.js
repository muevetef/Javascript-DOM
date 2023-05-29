const list = document.querySelector("#item-list");

//Rapido y no recomendable
function createListItem(item) {
  //crear nodo li para añadir a la lista
  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  list.appendChild(li);
}

//Limpia y recomendable
function createNewItem(item) {
  const li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  //Vamos enlazando los elementos creados
  button.appendChild(icon);
  li.appendChild(button);

  //Añadir el li entero al ul de la lista
  list.appendChild(li);
}

createListItem("Eggs");
createNewItem("Cheese");
