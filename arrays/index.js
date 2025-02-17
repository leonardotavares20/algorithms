// Um array é a estrutura de dados mais simples possível em memória.
// Um array armazena valores que são todos do mesmo tipo.
// Embora o Javascript nos permita criar arrays com valores de tipos distintos.

// Criando e inicializando arrays

// Expressão reservada new
let newArr = new Array(10);
let newArrDays = new Array("seg", "ter", "qua", "qui", "sex", "sab", "dom");

// Colchetes
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrDays = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];

// Length

const lengthArr = arr.length;
const lengthArrDays = arrDays.length;

// Acessando elementos e fazendo uma iteração em um array

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Fibonacci

let fibonacci = [1, 2];

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

// Acrescentando elementos

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inserindo no final do array

numbers[numbers.length] = 10;

// Em javascript um array é um objeto mutável. Então podemos adicionar e remover elementos facilmente. Em linguagens como C e Java, é preciso determinar o tamanho do array.

// Usando o método push

// O método push nos permite adicionar novos elementos no final de um array.

numbers.push(11);
numbers.push(12, 13);

// Inserindo um elemento na primeira posição

Array.prototype.insertInFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertInFirstPosition(-1);

// Usando o método unshift

numbers.unshift(-3, -2);

// Removendo elementos

// Usando o método pop

// O método pop remove um elemento do final do array

// Os métodos push e pop permitem que um array emule uma estrutura de dados básica de pilha(stack).

numbers.pop();

// Removendo da primeira posição

Array.prototype.reIndex = function (myArray) {
  const newArr = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArr.push(myArray[i]);
    }
  }

  return newArr;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();

// Usando o método shift

// Os métodos shift e unshift permitem que um array emule uma estrutura de dados básica de fila(queue).

numbers.shift();
