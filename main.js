console.log("Hola desde LATAM");

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    alert(`Nombre: ${name} ${lastname}`);
});