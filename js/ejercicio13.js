function verificarVoto() {
    let edad = document.getElementById("edad").value;
    let campoResultado = document.getElementById("resultado");

    if (edad === "" || isNaN(edad)) {
        alert("¡Error! El campo está vacío o contiene letras. Debes ingresar únicamente un valor numérico para la edad.");
        campoResultado.value = "";
        return; 
    }

    if (edad < 0) {
        alert("¡Error! El valor de la edad no puede ser negativo.");
        campoResultado.value = "";
        return; 
    }    

    if (edad >= 18) {
        campoResultado.value = "Puedes votar.";
    } else {
        campoResultado.value = "No puedes votar.";
    }
}
