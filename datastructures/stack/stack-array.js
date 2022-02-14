/* Stack(pilha) - É uma coleção ordenada de itens que obedece ao princípio LIFO 
(Last in First Out, isto é, o último é o primeiro a sair). 

* Exemplos na vida real: Pilha de livros, bandejas e etc...
*/

// * Criando uma classe Stack baseada em array

class Stack {
  constructor () {
    this.items = [];
  }

  push(...elements) {
    this.items.push(...elements);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    const top = this.items.length - 1;
    console.log(this.items[top]);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    console.log(this.items.length);
  }
}

let books = new Stack();
books.push('Matemática', 'Física');
books.peek();
books.size();
books.pop();
console.log(books.isEmpty());
books.clear();
console.log(books.isEmpty());


// * WeakMap - Garante que a propriedade seja private
const items = new WeakMap();
class StackWithWeakMap {
  constructor () {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
}