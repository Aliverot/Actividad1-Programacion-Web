// Se seleccionan los elementos principales del DOM.
let input = document.getElementById("nuevoElemento");
let botonAgregar = document.getElementById("agregarBtn");
let lista = document.getElementById("lista");

function agregarElemento() {
    let texto = input.value.trim();

    if (texto === "") {
        alert("Escribe algo para agregar a la lista.");
        return;
    }

    let elemento = document.createElement("li");
    let textoElemento = document.createElement("span");
    let botonEliminar = document.createElement("button");

    // classList.add agrega las clases de Bootstrap y la clase propia.
    elemento.classList.add("list-group-item", "elemento");
    botonEliminar.classList.add("btn", "btn-danger", "btn-sm");

    textoElemento.textContent = texto;
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        elemento.remove();
    });

    elemento.appendChild(textoElemento);
    elemento.appendChild(botonEliminar);
    lista.appendChild(elemento);

    input.value = "";
}

botonAgregar.addEventListener("click", agregarElemento);
