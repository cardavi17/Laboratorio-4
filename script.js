var formulario = document.getElementById("formulario");// Obtener el formulario

formulario.addEventListener("submit", function(e) {// Escuchar cuando se envía
    e.preventDefault(); // evitar recarga

    // Obtener datos
    var nombre = document.getElementById("name").value;//Busca el input con id=name, el .value obtiene lo que el usuario escribió y lo guarda en la variable nombre
    var identificacion = document.getElementById("id").value;//Busca el input con id=id, el .value obtiene lo que el usuario escribió y lo guarda en la variable identificación
    var email = document.getElementById("email").value;//Busca el input con id=email, el .value obtiene lo que el usuario escribió y lo guarda en la variable email

    // Mostrar en consola
    console.log("Nombre: " + nombre);//muestra en consola el nombre
    console.log("Identificación: " + identificacion);//muestra la identificación en consola
    console.log("Email: " + email);//muestra el email en consola
});