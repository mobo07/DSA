class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(node) {
    let current;
    let newNode = new Node(node);
    if (this.head === null) {
      ++this.size;
      this.head = newNode;
    } else {
      current = newNode;
      current.next = this.head;
      this.head = current;
      ++this.size;
    }
  }

  search(elem) {
    let current = this.head;
    while (current) {
      if (current.element === elem) {
        console.log("Found Node with value of", current.element);
        return current.element;
      } else {
        current = current.next;
      }
    }
    console.log("Not found", elem);
    return "Not found";
  }

  insert(elem, index) {
    if (index === 0) this.add(elem);
    else {
      let current = this.head;
      let position = index;
      let newNode = new Node(elem);
      while (position > 1) {
        current = current.next;
        position -= 1;
      }
      let prevElem = current;
      let nextElem = current.next;
      prevElem.next = newNode;
      newNode.next = nextElem;
      ++this.size;
    }
  }

  indexOf(elem) {
    let idx = 0;
    let current = this.head;
    while (idx < this.size) {
      if (current.element === elem) {
        console.log("Found " + elem + " at index " + idx);
        return idx;
      }
      current = current.next;
      ++idx;
    }
    console.log("Not found");
    return -1;
  }

  print() {
    let current = this.head;
    let printedOut = "";
    while (current.next) {
      if (current === this.head) {
        printedOut += `[Head: ${current.element}]-> `;
        current = current.next;
      }
      printedOut += `[${current.element}]-> `;
      current = current.next;
    }
    printedOut += `[Tail: ${current.element}]`;
    console.log(printedOut);
  }
}

// const node1 = new Node(20);
// console.log(node1);

const list = new LinkedList();
// let sizeOfList = list.isEmpty();
// console.log(sizeOfList);

list.add(1);
list.add(2);
list.add(4);
// list.print();
list.insert(3, 1);
list.insert(5, 0);
list.insert(6, 0);
list.insert(10, 3);
list.print();
list.indexOf(10);
list.indexOf(12);
