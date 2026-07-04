function convertir() {
    let pesos = document.getElementById("mxn").value;
    let campoDolares = document.getElementById("usd");

    if (pesos === "" || isNaN(pesos)) {
        alert("¡Error! El campo está vacío o contiene letras. Debes ingresar únicamente un valor numérico para los pesos mexicanos.");
        campoDolares.value = "";
        return; 
    }

    if (pesos < 0) {
        alert("¡Error! El valor de los pesos mexicanos no puede ser negativo.");
        campoDolares.value = "";
        return; 
    }    

    let dolares = parseFloat(pesos) * 0.055;

    campoDolares.value = dolares + " dólares";
}