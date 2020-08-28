var e = document.getElementById ("email");
var enviar = document.getElementById("boton");
enviar.addEventListener("click", consolear);
function consolear ()
{
    email = (e.value);
    console.log("Este es su email: " + email);
}