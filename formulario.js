document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);

    if (edad <= 16) {
        alert("Lo siento,debes tener al menos 16 años para ingresar.");
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
    } else {

        document.getElementById("formulario").style.display = "none";
        document.getElementById("contenido").classList.remove("oculto");

    }
});
