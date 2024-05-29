function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
 var elementosAl = array[Math.floor(Math.random() * array.length)];
 return elementosAl;
}

module.exports = obtenerElementoAleatorio;
