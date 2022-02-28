/* 

Uma fila(queue) é uma coleção ordenada de itens baseada em FIFO(First in First out,
isto é, o primeiro que entra é o primeiro que sai), também conhecido como princípio do
first-come first-served (o primeiro a chegar é o primeiro a ser servido). A adição de 
novos elementos em uma fila é feita na cauda(tail) e a remoção, na frente. O elemento mais recente
adicionado na fila deve esperar no final dela.

Exemplo: Uma fila na vida real(Filas no cinema, lanchonete...)

*/

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty())
      return undefined;
    
    const itemRemoved = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    return itemRemoved;
  }

  peek() {
    if (this.isEmpty())
      return undefined;

    return this.items[this.lowestCount];
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
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('Matheus');
queue.enqueue('Nataliane jaquinha mole');
queue.enqueue('Rodriguinho do gera');
queue.enqueue('Dannilo Marombeiro🔥');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
console.log(queue.size());
