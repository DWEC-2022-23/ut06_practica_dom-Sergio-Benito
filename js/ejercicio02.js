window.onload = inicio
const div = document.getElementById("div")
const boton = document.getElementById("boton")
var aux = true

function inicio(){
    boton.addEventListener("click", function(){
        if(aux){
            div.style.color="white";
            div.style.backgroundColor="black";
            boton.innerHTML="Fondo claro";
            aux=!aux;
        }
        else{
            div.style.backgroundColor="";
            div.style.color="";
            boton.innerHTML="Fondo oscuro";
            aux=!aux;
        }
    })
}