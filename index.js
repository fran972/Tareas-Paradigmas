import promptSync from 'prompt-sync';//ESM
const prompt = promptSync();
import Menuprincipal from './Menuprincipal.js';
import CrearTarea from './CrearTarea.js';
import VerTareas from './VerTareas.js';
import BuscarTarea from './BuscarTarea.js';
let opcion;
let tareas = [];
do {
  Menuprincipal();
  opcion = prompt("Ingrese una opción: ");
  if(isNaN(opcion) || opcion < 0 || opcion > 3){
    console.log("Opcion no valida");
  } else {
    switch(opcion){
      case '1':
        if(tareas.length === 0) {
          console.log("no hay tareas creadas");
          break;
        }else{
        VerTareas(tareas);
        }
        break;
      case '2':
        // Acción para opción 2
        break;
      case '3':
        const nuevaTarea = CrearTarea(tareas);
        tareas.push(nuevaTarea);
        break;
      case '0':
        console.log("Saliendo...");
        break;
    }
  }
} while(opcion != '0');
