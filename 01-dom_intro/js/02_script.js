let output;
//deprecated
output = document.all
output = document.all[11]
output = document.all.length

//Obtener todos los elementos html
output = document.documentElement

//Head y body
output = document.head
output = document.body

//HTMLColection de todos los elementos en hedad y body
output = document.head.children
output = document.body.children

//Propiedades random
output = document.doctype
output = document.domain
output = document.URL
output = document.characterSet
output = document.contentType

//Obtener formularios
output = document.forms
output = document.forms[0]
output = document.forms[0].id
output = document.forms[0].method
output = document.forms[0].action

console.log(output);

//Obtener el src de todas las imágenes
//Haz un código que al lanzarlo en el terminal
//cambie el src de todas las imágenes por imagenes random
const imagenes = document.images;
//Recorrer la coleccion
for(let i = 0; i < imagenes.length; i++){
    imagenes[i].src = "https://cdn2.thecatapi.com/images/a1r.jpg"
    imagenes[i].width = 100
}
const imgArray = Array.from(imagenes);
imgArray.sort()
console.log(typeof imgArray);
