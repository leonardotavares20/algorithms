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

// O método shift remove um elemento do inicio do array

// Os métodos shift e unshift permitem que um array emule uma estrutura de dados básica de fila(queue).

numbers.shift();

// Adicionando eremovendo elementos de uma posição específica

// Usando o método splice

// Removendo elementos

numbers.splice(1, 0, 0);
numbers.splice(3, 1);

// Inserindo elementos

numbers.splice(1, 0, 1, 2);

// Arrays bidimensionais

let averageTemp = [];

for (let i = 0; i < 7; i++) {
  averageTemp[i] = [];
  for (let j = 0; j < 24; j++) {
    averageTemp[i][j] = Math.floor(Math.random() * (30 - 20 + 1) + 20);
  }
}

for (let i = 0; i < averageTemp.length; i++) {
  for (let j = 0; j < averageTemp[i]; j++) {
    console.log(averageTemp[i][j]);
  }
}

// Referências paramétodos dearrayemJavaScript

// Os arrays em Javascript sao objetos modificados, o que significa que todo array que criarmos terá alguns métodos disponíveis para uso

// Os métodos disponíveis para arrays

// concat - Junta vários arrays e devolve uma cópia dos arrays concatenados

// every - Itera por todos os elementos do array,verificando uma condição desejada(função) até que false seja devolvido

// filter - Cria um array com todos os elementos avaliados com true pela função especificada.

// forEach - Executa uma função específica em cada elemento do array.

// join - Reúne todos os elementos do array em uma string.

// indexOf - Pesquisa o array em busca de elementos específicos e devolve a sua posição.

// lastIndexOf - Devolve a posição do último item do array que corresponda ao critério de pesquisa.

// map - Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que

// reverse - Inverte o array,de modo que o último item se torne o primeiro,e vice-versa.

// slice - Devolveum novo array a partir do índice especificado.

// some - Itera por todos os elementos do array,verificando a condição desejada(função)até que true seja devolvido.

// sort - Organiza o array em ordem alfabética ou de acordo com a função especificada.

// toString - Devolve o array na forma de uma string.

// valueOf - É semelhante ao método toString e devolve o array na forma de uma string.

// Juntando vários arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

// Funções de iteracoes

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isEven = (x) => x % 2 === 0;

// every

// every verifica se todos os elementos do array satisfaem uma condição

numbers.every(isEven);

// some

// some verifica se algum dos elementos do array satisfaem uma condição

numbers.some(isEven);

// forEach

// forEach executa uma funcao em todos os elementos do array

numbers.forEach((x) => console.log(x));

// filter & map

// tanto filter quanto map retornam um novo array

// filter retornara os valores que satisfaem a condicao de isEven
const filtered = numbers.filter(isEven);

// map retornara um novo array com cada valor retornado como true ou false pela funcao isEven
const mapped = numbers.map(isEven);

// Reduce

// reduce recebe uma funcao com os parametros, previousValue, currentValue, index e array

// reduce retorna um unico valor podendo ser de qualquer tipo

const reduce = numbers.reduce((previousValue, currentValue, index, array) => {
  return previousValue + currentValue;
});

// for of

for (const number of numbers) {
  console.log(number);
}

// Usando o objeto @@iterator

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const number of iterator) {
  console.log(number);
}

// Metodos entries, keys e values de array

// entries

// O metodo entries devolve @@iterator, que contem pares chave*valor

let aEntries = numbers.entries();

// devolve

console.log(aEntries.next()); // [0, 1] posicao 0, valor 1
console.log(aEntries.next()); // [1, 2] posicao 1, valor 2
console.log(aEntries.next()); // [2, 3] posicao 2, valor 3

for (const entry of aEntries) {
  console.log(entry);
}

// keys

// o metodo keys devolve @@iterator que contem as chaves do array

let aKeys = numbers.keys();

// devolve

// done com o valor false significa que ainda há mais chaves para iterar, quando devolver done com o valor true, significa que chegou não há mais chaves.

console.log(aKeys.next()); // { value: 0, done: false }
console.log(aKeys.next()); // { value: 1, done: false }
console.log(aKeys.next()); // { value: 2, done: false }

for (const key of aKeys) {
  console.log(key);
}

// values

// o metodo values devolve @@iterator que contem os valores do array

let aValues = numbers.values();

// devolve

console.log(aValues.next()); // { value: 1, done: false }
console.log(aValues.next()); // { value: 2, done: false }

// Usando o metodo from

// O metodo Array.from cria um array a partir de um array existente

let evens = Array.from(numbers, (n) => n % 2 === 0);

// Usando o metodo Array.of

// O metodo Array.of cria um array a partir de uma lista de argumentos

let numbers3 = Array.of(2, 4, 6, 8, 10);

// Tambem é possivel fazer uma copia de um array existente

let numbers4 = Array.of(...numbers3);

// Usando o metodo Array.isArray

// O metodo Array.isArray verifica se um objeto é um array

Array.isArray(numbers);

// Usando o metodo fill

// O metodo fill preenche um array com um determinado valor

let numbers5 = [1, 2, 3, 4, 5];

numbers5.fill(0);

// posicao 3, fill com o valor 2
numbers5.fill(2, 3);

// posicao 3, fill com o valor 2, quantidade 2(valor 2, do indice 3 ate o indice 5)
numbers5.fill(2, 3, 5);

// O metodo of é bem util se voce quiser inicializar um array com um certo valor

let ones = Array(6).fill(1);

// Usando o metodo copyWithin

// O metodo copyWithin copia um pedaco de um array para outro

let copyArray = [1, 2, 3, 4, 5];

copyArray.copyWithin(0, 2);

// copia os items de index 2 para frente para o index 0, no caso o array ficaria [3, 4, 5, 4, 5]

// Ordenando elementos

// reverse

// O metodo reverse inverte o array

let numbersArray = [1, 2, 3, 4, 5];

numbersArray.reverse();

// ordenando com sort

function compare(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

numbersArray.sort(compare);

// Ordenando Strings

let names = ["Ana", "ana", "john", "John"];

names.sort();

// a saida sera: ["Ana", "John", "ana", "john"]

// ana em letras minusculas vira depois que John porque o JavaScript compara os caracteres de acordo com o seu valor ASCII. A, J, a e j, tem os seguintes valores ASCII decimais: A: 65, J74, a: 97, j: 106.
// Portando J tem um valor menor que a, e, por esse motivo vem antes no alfabeto.

function compare(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }

  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }

  return 0;
}

names.sort(compare);

// Class TypedArray

// TypedArray foi criado para que pudessemos trabalhar com arrays contendo um único tipo de dado.

// Sintaxe

let typedArray = new Int16Array(10);
