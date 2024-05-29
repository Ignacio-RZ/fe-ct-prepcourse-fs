function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  const valorAbsoluto = Math.abs(num);
  return valorAbsoluto >= 100 && valorAbsoluto <= 999;
}

module.exports = tieneTresDigitos;
