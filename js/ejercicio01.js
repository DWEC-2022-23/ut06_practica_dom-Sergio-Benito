document.getElementById("boton").addEventListener("click",cambioColor)

function cambioColor(){
    var pintar=document.getElementById("colorPick").value;
    document.getElementsByTagName("h1")[0].style.color=pintar;
}