function convertir() {
    let kilometros = document.getElementById("kilometros").value;
    let campoMillas = document.getElementById("millas");

    if (kilometros === "" || isNaN(kilometros)) {
        alert("¡Error! El campo está vacío o contiene letras. Debes ingresar únicamente un valor numérico para los kilómetros.");
        campoMillas.value = "";
        return; 
    }

    let millas = parseFloat(kilometros) * 0.621371;

    campoMillas.value = millas + " millas";
}