/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
      if (original[i] !== modified[i]) {
        if (original[i] === modified[i + 1]) {
          return modified[i]; // Carácter insertado en 'modified'
        } else if (original[i + 1] === modified[i]) {
          return original[i]; // Carácter eliminado de 'original'
        } else {
          return original[i] || modified[i]; // Carácter modificado o uno de los strings es más largo
        }
      }
    }
    return ''; // No hay cambios
  }

  function findNaughtyStep(original, modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
      if (original[i] !== modified[i]) {
        return original[i + 1] === modified[i] ? original[i] : modified[i];
      }
    }
    return ''; 
  }
console.log(findNaughtyStep('abcd', 'abcde'))// 'e'


console.log(findNaughtyStep('stepfor', 'stepor')) // 'f'

console.log(findNaughtyStep('abcde', 'abcde')) // ''

console.log(findNaughtyStep('xxxx', 'xxoxx'))// 'o'