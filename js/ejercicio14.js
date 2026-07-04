function calcular() {
    let inputNumeros = document.getElementById("numeros").value.trim();
    let campoMayor = document.getElementById("mayor");
    let campoMenor = document.getElementById("menor");
    let campoPromedio = document.getElementById("promedio");

    if (inputNumeros === "") {
        alert("¡Error! El campo está vacío. Ingresa números separados por comas.");
        return;
    }

    let arregloCadenas = inputNumeros.split(",");

    for (let i = 0; i < arregloCadenas.length; i++) {
    let texto = arregloCadenas[i].trim();

    if (texto === "" || isNaN(texto)) {
        alert("¡Error! Valores inválidos. Asegúrate de ingresar únicamente números separados por comas.");
        return; 
    }
    }

    let numeros = arregloCadenas.map(Number);

    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    campoMayor.value = maximo;
    campoMenor.value = minimo;
    campoPromedio.value = promedio;
}