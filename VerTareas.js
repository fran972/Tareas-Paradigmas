import promptSync from 'prompt-sync';//ESM
const prompt = promptSync();

function mostrarTodasLasTareas(tareas) {
    console.log("Mostrando todas las tareas:");
    for(let i=0;i<tareas.length;i++){
        const tarea = tareas[i];
        console.log(`[${i + 1}] ${tarea.titulo}`);
    }
    VerDetalle(tareas);
}

function VerDetalle(tareas){
    console.log("Desea ver los detalles de alguna?");
    console.log("Introduce el numero de la tarea o 0 para volver");
    let opcion = prompt("Ingrese una opción: ");
    if(isNaN(opcion) || opcion < 0 || opcion > tareas.length){
        console.log("Opcion no valida");
        return;
    } else {
        if(opcion == '0'){
            return;
        }
        else{
            const tarea = tareas[opcion - 1];
            console.log("Esta es la tarea que elegiste:\n");
            console.log(`Título: ${tarea.titulo}\n`);
            console.log(`Descripción: ${tarea.descripcion}\n`);
            if(tarea.estado == 1){
                tarea.estado = "pendiente";
            } else if(tarea.estado == 2){
                tarea.estado = "en curso";
            } else if(tarea.estado == 3){
                tarea.estado = "terminado";
            } else if(tarea.estado == 4){
                tarea.estado = "cancelado";
            }
            console.log(`Estado: ${tarea.estado}`);
            if(tarea.dificultad ==1){
                tarea.dificultad = "fácil";
            }else if(tarea.dificultad == 2){
                tarea.dificultad = "medio";
            }else if(tarea.dificultad == 3){
                tarea.dificultad = "difícil";
            }
            console.log(`Dificultad: ${tarea.dificultad}`);
            console.log(`Vencimiento: ${tarea.vencimiento}\n`);
            console.log(`Creacion: ${tarea.creacion}`);
        }

    }
    EditarTarea(tareas,opcion-1);
}

function EditarTarea(tareas, indice){
    console.log("Si desea editar la tarea ingrese E, o presione 0 para volver al menu principal");
    let opcion = prompt("Ingrese una opción: ");
    if(opcion == "0"){
        return;
    }
    else if(opcion.toUpperCase() == "E"){
       console.log("Estas editando la tarea "+tareas[indice].titulo);
       console.log("-si desea mantener los valores de un atributo, simplemente deje el espacio en blanco.");
       console.log("-si desea dejar en blanco un atributo, escribe un espacio");
       let nuevadescripcion = prompt("Ingrese la nueva descripcion: ");
       if(nuevadescripcion != ""){
        if(nuevadescripcion == " "){
            tareas[indice].descripcion = "";
        }
        else{
            tareas[indice].descripcion = nuevadescripcion;
        }
       }
       let nuevoestado = prompt("Ingrese el nuevo estado (1:pendiente,2: en curso,3: terminado, 4:cancelado): ");
       if(nuevoestado != ""){
           if(nuevoestado == " "){
               tareas[indice].estado = "";
           }
           else{
                if(isNaN(nuevoestado) || nuevoestado < 1 || nuevoestado > 4){
                    console.log("Estado no válido, se mantiene el anterior.");
                    nuevoestado = tareas[indice].estado;
                }
               tareas[indice].estado = nuevoestado;
           }
       }
       let nuevodificultad = prompt("Ingrese la nueva dificultad (1: fácil, 2: medio, 3: difícil): ");
       if(nuevodificultad != ""){
           if(nuevodificultad == " "){
               tareas[indice].dificultad = "";

           }
             else{
                if(isNaN(nuevodificultad) || nuevodificultad < 1 || nuevodificultad > 3){
                    console.log("Dificultad no válida, se mantiene la anterior.");
                    nuevodificultad = tareas[indice].dificultad;
                }
                 tareas[indice].dificultad = nuevodificultad;
             }
         }
            let nuevovencimiento = prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD) o deje vacío para no asignar: ");
            if(nuevovencimiento != ""){
                if(nuevovencimiento == " "){
                    tareas[indice].vencimiento = "";
                }
                else{
                    tareas[indice].vencimiento = nuevovencimiento;
                }
            }
       }
}

function VerPendientes(tareas){
    console.log("Mostrando tareas pendientes:");
    for(let i=0;i<tareas.length;i++){
        if(tareas[i].estado == 1){
            const tarea = tareas[i];
            console.log(`[${i + 1}] ${tarea.titulo}`);
        }
    }
}

function VerEnCurso(tareas){
    console.log("mostrando tareas en curso:");
    for(let i=0; i<tareas.length;i++){
        if(tareas[i].estado == 2){
            const tarea = tareas[i];
            console.log(`[${i + 1}] ${tarea.titulo}`);
        }
    }
}

function VerTerminadas(tareas){
    console.log("mostrando tareas terminadas:");        
    for(let i=0; i<tareas.length;i++){
        if(tareas[i].estado == 3){
            const tarea = tareas[i];
            console.log(`[${i + 1}] ${tarea.titulo}`);
        }
    }
}

    
    


export default function VerTareas(tareas) {
    console.log("Que tarea deseas ver?");
    console.log("[1] Ver todas las tareas");
    console.log("[2] Ver tareas pendientes");
    console.log("[3] Ver tareas en curso");
    console.log("[4] Ver tareas terminadas");
    console.log("[0] Volver al menú principal");
    let opcion = prompt("Ingrese una opción: ");
    if(isNaN(opcion) || opcion < 0 || opcion > 4){
        console.log("Opcion no valida");
    } else {
        switch(opcion){
            case '1':
                mostrarTodasLasTareas(tareas);
                break;
            case '2':
                VerPendientes(tareas);
                break;
            case '3':
                VerEnCurso(tareas);
                break;
            case '4':
                VerTerminadas(tareas);
                break;
            case '0':
                console.log("Volviendo al menú principal...");
                break;
        }
    }
}