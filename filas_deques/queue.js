const _items = new WeakMap();
class Queue {
  constructor() {
    this._count = 0;
    this._lowestCount = 0;
    _items.set(this, {});
  }

  enqueue(element) {
    _items.get(this)[this._count] = element;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = _items.get(this)[this._lowestCount];

    delete _items.get(this)[this._lowestCount];

    this._lowestCount++;

    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return _items.get(this)[this._lowestCount];
  }

  size() {
    return this._count - this._lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this._count = 0;
    this._lowestCount = 0;
    _items.set(this, {});
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${_items.get(this)[this._lowestCount]}`;

    for (let i = this._lowestCount + 1; i < this._count; i++) {
      objString = `${objString}, ${_items.get(this)[i]}`;
    }
  }
}
