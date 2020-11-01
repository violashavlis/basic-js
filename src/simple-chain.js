const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currArr: [],
    getLength() {
      return this.currArr.length;
    },
    addLink(value) { 
        if (value === '') {
          this.currArr.push(`(  )`);
        } 
        this.currArr.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
      if (typeof(position) !== "number") {
        this.currArr = [];
        throw new Error();
      } else {
        this.currArr = this.currArr.slice(0, position - 1).concat(this.currArr.slice(position)); 
        return this;
      }      
    },
    reverseChain() {
      this.currArr = this.currArr.reverse();
      return this;
    },
    finishChain() { 
      let result = this.currArr.join('~~');  
      this.currArr = [];  
      return result;
    }
};

module.exports = chainMaker;