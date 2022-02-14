// Classe Stack baseada em objeto

class Stack {
  constructor () {
    this.items = {};
    this.count = 0
  }


  push(element) {
    // 0: element
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty())
      return undefined;

    this.count--;
    const itemRemoved = this.items[this.count];
    delete this.items[this.count];

    return itemRemoved;
  }

  peek() {
    if (this.isEmpty())
      return undefined;
    
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty())
      return '';
    
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();
stack.push(8);
stack.push(5);
stack.push(10);
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
// console.log(stack.size());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.isEmpty());
// console.log(stack.toString());
