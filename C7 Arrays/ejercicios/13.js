function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var resultado = array.filter((array) => array % 2 === 0);
  return resultado;
}

module.exports = filtrarNumerosPares;
