document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de autenticación (para demostración)
    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        // Redireccionar o cargar otra página si fuera necesario
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
