class Stack {
  constructor() {
    this.items = [];
  }

  push(elements) {
    this.items.push(elements);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {}

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1);
stack.push(2);

console.log(stack.peek());
console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(3);
stack.push(4);

stack.pop();
stack.pop();
console.log(stack.size());
