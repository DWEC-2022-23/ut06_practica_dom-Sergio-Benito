document.getElementsByClassName("BotonAñadir")[0].addEventListener("click",añade);
document.getElementById("BorrarUlt").addEventListener("click",borrarUltimo);
document.getElementById("BorrarPrim").addEventListener("click",borrarPrimero);


var lista=document.getElementsByTagName("ul")[0];

function añade(){
   
    var li=document.createElement("li");
    var textoAñadir=document.getElementsByClassName("AñadirElemento")[0];
    li.appendChild(document.createTextNode(textoAñadir.value));
    lista.appendChild(li);
}

function borrarPrimero(){
    console.log("a");
    lista.removeChild(lista.firstElementChild);
}

function borrarUltimo(){
    lista.removeChild(lista.lastElementChild);
}