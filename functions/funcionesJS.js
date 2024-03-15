//Funcion tablas de multiplicar
const generarTablaDeMultiplicar = (num, limite) => {
  console.log(
    `La tabla de multiplicar de: ${num}, con limite: ${limite}, es: `
  );

  for (let i = 0; i <= limite; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

//Funcion numero primo
const esPrimo = (num) => {
  if (num <= 1) return console.log(`${num} no es numero primo`);

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return console.log(`${num} no es numero primo`);
  }
  return console.log(`${num} es numero primo`);
};

//Funcion calculadora factorial
const numeroFactorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

//Comprobación
console.log(generarTablaDeMultiplicar(2, 8));
console.log(esPrimo(3));
console.log(numeroFactorial(6));
