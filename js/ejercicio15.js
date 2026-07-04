let estudiantes = [];
function agregarEstudiante() {
    let inputNombre = document.getElementById("nombre").value.trim();
    let inputCalificacion = document.getElementById("calificacion").value.trim();

    if (inputNombre === "") {
        alert("¡Error! El campo de nombre está vacío.");
        return;
    }

    if (inputCalificacion === "") {
        alert("¡Error! El campo de calificación está vacío.");
        return;
    }

    if (isNaN(inputCalificacion)) {
        alert("¡Error! La calificación debe ser un número.");
        return;
    }

    let calificacion = Number(inputCalificacion);

    if (calificacion < 0 || calificacion > 100) {
        alert("¡Error! La calificación debe estar entre 0 y 100.");
        return;
    }

    let estudiante = {
        nombre: inputNombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);
    
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}
function calcular() {
    if (estudiantes.length === 0) {
        alert("¡Error! No hay estudiantes agregados.");
        return;
    }

    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
    let calificacionMayor = Math.max(...estudiantes.map(estudiante => estudiante.calificacion));
    let calificacionMenor = Math.min(...estudiantes.map(estudiante => estudiante.calificacion));

    let estudianteMayor = estudiantes.find(estudiante => estudiante.calificacion === calificacionMayor);
    let estudianteMenor = estudiantes.find(estudiante => estudiante.calificacion === calificacionMenor);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("estudianteMayor").value = estudianteMayor.nombre;
    document.getElementById("estudianteMenor").value = estudianteMenor.nombre;
}