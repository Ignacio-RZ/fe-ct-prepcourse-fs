function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var resultado = array.filter((array) => array > 10);
  var mayoresA10= resultado.length;
  return mayoresA10;
}

module.exports = contarElementosMayoresA10;
