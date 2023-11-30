'use strict';
class StringBuilder {
  #value;
  constructor(value = {}) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value.push(str);
  }
  padStart(str) {
    str.concat(this.#value);
  }
  padBoth(str) {
    str.concat(this.#value).push(str);
  }
}
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
