const _items = Symbol("stackItems");
class Stack {
  constructor() {
    this._count = 0;
    this[_items] = [];
  }

  push(element) {
    this[_items][this._count] = element;
    this._count++;
  }

  size() {
    return this._count;
  }

  isEmpty() {
    return this._count === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this._count--;

    const result = this[_items][this._count];

    delete this[_items][this._count];

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this[_items][this._count - 1];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this[_items][0]}`;

    for (let i = 1; i < this._count; i++) {
      objString = `${objString}, ${this[_items][i]}`;
    }

    return objString;
  }
}

function decimalToBinary(decNumber) {
  const remStack = new Stack();

  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
}
