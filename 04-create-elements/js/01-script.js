const miDiv = document.createElement("div");
miDiv.className = "my-element";
miDiv.id = "my-id-element";
miDiv.setAttribute("title", "My new Div");

//miDiv.innerText = "Hello World"

const textNode = document.createTextNode("Hello world in the text node");
miDiv.appendChild(textNode);

//document.body.appendChild(miDiv);
document.querySelector('ul').appendChild(miDiv);
