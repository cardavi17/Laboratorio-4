const form = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("name").value;

    saludo.textContent = "¡Hola " + nombre + "!";
});