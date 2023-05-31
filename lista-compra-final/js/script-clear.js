/**
 * TODO
 * 1- Implementar borrado completo
 *    de la lista al clicar en el boton Limpiar lista
 * 2- Al clicar en Añadir se añade un elemento al final de la lista
 *    en el texto del campo de texto
 * 3- Eliminar el item al clicar en su x
 * 4- Implementar la funcion de filtro "OnkeyUP"
 * Nota: Cambiado el submit para evitar el envio del formulario
 */

//1- Clear All
const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");
  //Limpiado burro
  //itemList.innerHTML = "";
  //items.forEach((item) => item.remove())
  
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }


}

clearBtn.addEventListener("click", function () {
  const confirm = window.confirm("¿Estas seguro?");
  if (confirm) {
    onClear();
  }
});
