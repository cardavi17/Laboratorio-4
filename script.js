
//obtiene la constante de el nombre 
const form = document.getElementById("nombre");
//inicializa la constante de saludo con un mensaje
const saludo = document.getElementById("saludo");

//cuando se le da el boton de enviar obtienes los datos
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // inicializa la variable con el con el nombre puesto
    const nombre = document.getElementById("name").value;
    //concatena el nombre con el saludo
    saludo.textContent = "¡Hola " + nombre + "!";
});