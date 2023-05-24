//Selectores multiples
//Devuelven una NodeList
const listItems = document.querySelectorAll('.item')
console.log(listItems);
//Aceder por sus indices
console.log(listItems[0].innerText)
listItems[0].style.color = 'red'

//Podemos usar el método foreach en las NodeList
listItems.forEach((item, index)=>{
    item.style.color = 'blue'
    if(index === 1){
        item.remove();
    }
    if(index == 0){
        item.innerHTML = `Cacahuetes
                    <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`
    }
})

//console.log(listItems);

//D 
const listItems2 = document.getElementsByClassName('item')
//Se tienen que convertir a Array para tener los métodos 
//de los arrays
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach((item)=>{
    console.log(item.innerText);
})

console.log(listItems2)

document.getElementsByTagName('li')