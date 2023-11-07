function calcularMCD(a, b) {
  // Utiliza el algoritmo de Euclides para calcular el MCD
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function smallestCommons(a, b) {
  // Calcula el MCM utilizando la fórmula MCM(a, b) = (a * b) / MCD(a, b)
  return (a * b) / calcularMCD(a, b);
}

// Ejemplo de uso
const numero1 = 12;
const numero2 = 18;cd
const mcm = calcularMCM(numero1, numero2);
console.log(`El MCM de ${numero1} y ${numero2} es ${mcm}`);

  smallestCommons([1,5]);
