//metodos de seleccion de elementos del DOM
//getElementById
//GetElementsByClassName
//getElementsByTagName
//querySelector
//querySelectorAll
//cloneNode(deep)

//metodos de manipulacion de elementos del DOM
//contenido y texto
/*
innerHTML
element.textContent
element.innerText
*/
//atributos
/*
setAttribute
getAttribute
removeAttribute
*/
//clases
/*
element.classList.add(nombreClase)
element.classList.remove(nombreClase)
element.classList.toggle(nombreClase)
element.classList.contains(nombreClase)
 */
//estilos
/*
element.style.propiedadCSS
element.style.setProperty(propiedad, valor, prioridad)
element.style.removeProperty(propiedad)
window.getComputedStyle(elemento).propiedadCSS
 */
//creacion y eliminacion de elementos
/*
document.createElement(nombreElemento)
document.createTextNode(texto)
parent.appendchild(element)
parent.removechild(childNode)
parent.lastchild // accede al ultimo nodo
parent.replacechild(newchild, oldchild)
parent.insertbefore(new element, reference element)
*/

// propiedades de los nodos
//nodeType
//node.parentNode
//element.childNode
//nodeName
//nodeValue
//classList
//style
//outerHTML
//node.firstChild
//node.lastChild
//node.nextChild
//node.cloneNode(deep)
//node.previusSibling
//node.nextElementSibling

let btnSaludar = document.querySelector('.btn-saludar');
let h1 = document.querySelector('h1')
//let nombre = prompt("Introduce tu nombre: ")

btnSaludar.addEventListener('mouseover', function(){ // cuando pase poer el boton
    h1.style.backgroundColor = "yellow";
});

btnSaludar.addEventListener('mouseout', function(){ //cuando salga del boton
    h1.style.backgroundColor = 'red';
})
 
//eventos con el addEventListener, funcionalidad y ejemplos.
