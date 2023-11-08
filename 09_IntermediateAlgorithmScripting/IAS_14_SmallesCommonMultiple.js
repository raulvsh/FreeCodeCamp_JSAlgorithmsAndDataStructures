/* MÍNIMO COMÚN MÚLTIPLO DOS NÚMEROS

function calcularMCD(a, b) {
  // Utiliza el algoritmo de Euclides para calcular el MCD
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function smallestCommons(arr) {
  let a = arr[0];
  let b= arr[1];
  // Calcula el MCM utilizando la fórmula MCM(a, b) = (a * b) / MCD(a, b)
  return (a * b) / calcularMCD(a, b);
}

// Ejemplo de uso
const numero1 = 12;
const numero2 = 18;
const mcm = smallestCommons([numero1, numero2]);
console.log(`El MCM de ${numero1} y ${numero2} es ${mcm}`);


console.log(smallestCommons([1,5]));
*/


// Function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Function to calculate the least common multiple (LCM) of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Function to calculate the LCM of a range of numbers
function smallestCommons(arr) {
  // Sort the input array in ascending order
  arr.sort(function (a, b) {
    return a - b;
  });

  var result = arr[0];

  for (var i = arr[0] + 1; i <= arr[1]; i++) {
    result = lcm(result, i);
  }

  return result;
}

console.log(smallestCommons([1, 5])); // Output: 60