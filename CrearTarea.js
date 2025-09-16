import promptSync from 'prompt-sync';//ESM
const prompt = promptSync();
export default function CrearTarea(tareas) {
  console.log("Crear Tarea");
  let titulo;
  do {
    titulo = prompt("Ingrese el título de la tarea: ").substring(0, 100);
    if (tareas.some(t => t.titulo === titulo)) {
      console.log("Ya existe una tarea con ese título. Ingrese uno diferente.");
      titulo = null;
    }
  } while (!titulo);

  const descripcion = prompt("Ingrese la descripción de la tarea: ");
  let dificultad = prompt("Ingrese la dificultad (1: fácil, 2: medio, 3: difícil): ");
  if (isNaN(dificultad) || dificultad < 1 || dificultad > 3) {
    console.log("Dificultad no válida, se asigna 1 (fácil) por defecto.");
    dificultad = 1;
  }
  const vencimientoInput = prompt("Ingrese la fecha de vencimiento (YYYY-MM-DD) o deje vacío para no asignar: ");
  let vencimiento = null;
  if (vencimientoInput) {
    const fecha = new Date(vencimientoInput);
    if (!isNaN(fecha)) {
      vencimiento = fecha;
    } else {
      console.log("Fecha no válida, no se asigna fecha de vencimiento.");
    }
  }
  let fechaCreacion = new Date();

  return { titulo, descripcion, dificultad, vencimiento, fechaCreacion };
}
