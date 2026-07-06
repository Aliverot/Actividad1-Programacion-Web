// Funciones flecha para cada operacion basica.
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: Division por cero";

function mostrarError(mensaje) {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje
    });
}

function calcularOperacion(operacion) {
    // Se toman los valores escritos por el usuario.
    let valorNumero1 = document.getElementById("numero1").value.trim();
    let valorNumero2 = document.getElementById("numero2").value.trim();
    let campoResultado = document.getElementById("resultado");

    // Primero se valida que no esten vacios.
    if (valorNumero1 === "" || valorNumero2 === "") {
        mostrarError("Debes ingresar los dos numeros.");
        campoResultado.value = "";
        return;
    }

    // Despues se valida que ambos datos sean numericos.
    if (isNaN(valorNumero1) || isNaN(valorNumero2)) {
        mostrarError("Debes ingresar unicamente valores numericos.");
        campoResultado.value = "";
        return;
    }

    let numero1 = Number(valorNumero1);
    let numero2 = Number(valorNumero2);
    let resultado = 0;

    // Segun el boton presionado, se llama a la funcion flecha correspondiente.
    if (operacion === "suma") {
        resultado = sumar(numero1, numero2);
    } else if (operacion === "resta") {
        resultado = restar(numero1, numero2);
    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === "division") {
        resultado = dividir(numero1, numero2);
    }

    // La division entre cero se muestra como error con SweetAlert2.
    if (resultado === "Error: Division por cero") {
        mostrarError("No se puede dividir entre cero.");
        campoResultado.value = "";
        return;
    }

    campoResultado.value = resultado;
}
