import promptSync from 'prompt-sync';//ESM
const prompt = promptSync();
import VerTareas from './VerTareas.js';


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
            console.log(`Estado: ${tarea.estado}`);
            console.log(`Dificultad: ${tarea.dificultad}`);
            console.log(`Vencimiento: ${tarea.vencimiento}\n`);
            console.log(`Creacion: ${tarea.creacion}`);
        }

    }
    
}

export default function BuscarTarea(tareas){
 console.log("introduce el titulo de la tarea a bscar");
 let titulo = prompt("titulo:");
 for(let i=0; i<tareas.length; i++){
    if(tareas[i].titulo === titulo){
        console.log("tarea encontrada");
        const tarea = tareas[i];
        console.log(`[${i + 1}] ${tarea.titulo}`);
        VerDetalle(tareas);
        
    }else{
        console.log("No hay tareas relacionadas con ese titulo)");
        return;
    }
 }
 
}