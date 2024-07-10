class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index > this.length) return undefined;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;

    if (this.tail.val === value) return true;

    while (current.next) {
      if (current.val === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    if (!this.head) return -1;

    let index = 0;
    let current = this.head;

    while (current) {
      if (current.val === value) return index;
      else {
        current = current.next;
        index++;
      }
    }
    return -1;
  }

  toString() {
    let result = '';
    let currNode = this.head;
    while (currNode) {
      result += `( ${currNode.val} ) -> `;
      currNode = currNode.next;
    }
    result += '( null )';

    return result;
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return !!this.append(value);
    if (index === 0) return !!this.prepend(value);

    let newNode = new Node(value);
    let previousNode = this.at(index - 1);
    let temp = previousNode.next;

    previousNode.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) this.tail = null;
      return currentHead;
    }

    let previousNode = this.at(index - 1);
    let removed = previousNode.next;

    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
