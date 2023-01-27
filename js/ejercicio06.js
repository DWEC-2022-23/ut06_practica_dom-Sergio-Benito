let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  var thisLi = event.target.parentElement
  switch (event.target.innerText) {
    case "subir":
      if (thisLi == thisLi.parentElement.firstChild)
        break
      thisLi.parentElement.insertBefore(thisLi, thisLi.previousSibling)
      break
    case "bajar":
      if (thisLi == thisLi.parentElement.lastChild)
        break
      thisLi.parentElement.insertBefore(thisLi, thisLi.nextSibling.nextSibling)
      break
    case "borrar":
      thisLi.parentElement.removeChild(thisLi)
      break
    default:
      break
  }
}
var visible=true;
 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (visible){
    document.getElementsByClassName("list")[0].style.display="none";
    document.getElementById("toggleList").innerText="Mostrar";
    visible=false;
  }else{
    document.getElementsByClassName("list")[0].style.display="";
    document.getElementById("toggleList").innerText="Ocultar";
    visible=true;
  }

 }


 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA

  var input=document.getElementsByClassName("description")[1].value;
  document.getElementsByClassName("description")[0].innerText=input;

 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.

  var li=document.createElement("li");
    var textoAñadir=document.getElementsByClassName("addItemInput")[0];
    li.appendChild(document.createTextNode(textoAñadir.value));
    listUl.appendChild(li);
    attachListItemButtons(li);
 }


