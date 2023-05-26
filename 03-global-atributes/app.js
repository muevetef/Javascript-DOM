const lista = document.getElementsByTagName("li");

for (const item of lista) {
  //console.log(item.getAttribute("data-tipo-comida"));
  console.log(item.innerHTML);
  console.log(item.dataset.tipoComida);
  console.log(item.dataset.tipoPrecio); //Devuelve en forma de objeto
}
