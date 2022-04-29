const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value === undefined ? this.chain.push('( )') : this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !this.chain[position - 1]) {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    } else this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};
