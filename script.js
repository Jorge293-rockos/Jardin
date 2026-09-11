function comenzar() {
    const nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        alert("Primero escribe un nombre");
        return;
    }

    document.getElementById("nombreMostrado").textContent = nombre;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("experiencia").style.display = "block";
}