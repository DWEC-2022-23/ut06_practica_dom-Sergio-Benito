document.getElementsByClassName("BotonAñadir")[0].addEventListener("click",añade);

function añade(){
    var lista=document.getElementsByTagName("ul")[0];
    var li=document.createElement("li");
    var textoAñadir=document.getElementsByClassName("AñadirElemento")[0];
    li.appendChild(document.createTextNode(textoAñadir.value));
    lista.appendChild(li);
}