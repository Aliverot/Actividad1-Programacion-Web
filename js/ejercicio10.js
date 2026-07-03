function convertir() {
    let valorCelsius = document.getElementById("celsius").value;
    let campoFahrenheit = document.getElementById("fahrenheit");

    if (valorCelsius === "" || isNaN(valorCelsius)) {
        alert("¡Error! El campo está vacío o contiene letras. Debes ingresar únicamente un valor numérico para los grados Celsius.");
        campoFahrenheit.value = ""; // Limpia el resultado si hay error
        return; // Detiene la función
    }

    let gradosC = parseFloat(valorCelsius);

    let gradosF = (gradosC * 9 / 5) + 32;

    campoFahrenheit.value = gradosF + "°F";
}