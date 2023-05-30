function removeClearButton(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    
    ul.removeChild(li)
}

//Otros ejemplos
function removeItem1(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    
    ul.removeChild(li)
}

function removeItem2(itemNumber){
    const ul = document.querySelector('ul');
    const listaLi = document.querySelectorAll('li');
    const li = listaLi[itemNumber -1]
    ul.removeChild(li)
}

function removeItem3(itemNumber){
    const listaLi = document.querySelectorAll('li');
    listaLi[itemNumber -1].remove();
}

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber -1].remove();
    
