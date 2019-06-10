alert("Listo?");
var nombre = prompt("Cual es tu nombre?");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", calculoNumero);
document.addEventListener("keydown", grito);

function calculoNumero()
{
  alert("No me toques ahi " + nombre);
  document.write("El numero que elegiste es 3");
}


function grito()
{
  alert("OHH POR DIOS!!")
}
