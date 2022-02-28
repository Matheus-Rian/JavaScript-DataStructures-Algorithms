/* 
A estrutura de dados de deque, também conhecida como fila de duas pontas(double-ended queue),
é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.

* Exemplo: Fila de cinema, onde uma pessoa que acabou de comprar ingresso, volta a frente da fila,
* para tirar uma dúvida e logo sai, após ter a dúvida sanada.

! O deque implementa os princípios tanto de LIFO quanto de FIFO, podemos dizer também
! que o deque combina as estruturas de dados de fila e de pilha.
*/

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty())
      return undefined;

    const itemRemoved = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return itemRemoved;
  }

  removeBack() {
    if (this.isEmpty())
      return undefined;

    this.count--;
    const itemRemoved = this.items[this.count];
    delete this.items[this.count];

    return itemRemoved;
  }

  peekFront() {
    if (this.isEmpty())
      return undefined;

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty())
      return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty())
      return '';

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }

}

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.addFront('John');
console.log(deque.toString());
