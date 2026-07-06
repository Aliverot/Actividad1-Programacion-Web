const CLAVE_TAREAS = "tareas";

// Closure que guarda juntas las acciones principales de las tareas.
const manejarTareas = (() => {
    const agregar = (texto) => {
        let tareas = obtenerTareas();
        let nuevaTarea = { tarea: texto };

        tareas.push(nuevaTarea);
        localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
    };

    const eliminar = (indice) => {
        let tareas = obtenerTareas();

        tareas.splice(indice, 1);
        localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
    };

    return { agregar, eliminar };
})();

function agregarTarea() {
    let inputTarea = document.getElementById("nuevaTarea");
    let textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        Swal.fire("Error", "Escribe una tarea antes de agregarla.", "error");
        return;
    }

    manejarTareas.agregar(textoTarea);
    inputTarea.value = "";
    renderizarTareas();
}

function obtenerTareas() {
    let tareasGuardadas = localStorage.getItem(CLAVE_TAREAS);

    // Esta variable tiene scope local: solo existe dentro de esta funcion.
    let tareas = tareasGuardadas ? JSON.parse(tareasGuardadas) : [];

    return tareas;
}

function eliminarTarea(indice) {
    Swal.fire({
        title: "Eliminar tarea",
        text: "Esta tarea se eliminara del Local Storage.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
        }
    });
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    let tareas = obtenerTareas();

    lista.innerHTML = "";

    if (tareas.length === 0) {
        lista.innerHTML = '<li class="lista-vacia">No hay tareas agregadas.</li>';
        return;
    }

    tareas.forEach((tarea, indice) => {
        let item = document.createElement("li");
        let texto = document.createElement("span");
        let boton = document.createElement("button");

        item.className = "tarea-item";
        texto.className = "tarea-texto";
        texto.textContent = tarea.tarea;
        boton.className = "boton-eliminar";
        boton.textContent = "Eliminar";
        boton.onclick = () => eliminarTarea(indice);

        item.appendChild(texto);
        item.appendChild(boton);
        lista.appendChild(item);
    });
}

renderizarTareas();
