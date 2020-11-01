const CustomError = require("../extensions/custom-error");
let max_depth = 0;
module.exports = class DepthCalculator {
  calculateDepth(arr, local_depth = 1) {  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        max_depth = this.calculateDepth(arr[i], local_depth + 1)
      }      
    }
    if (max_depth < local_depth) {
      max_depth = local_depth;
    }
    let depth = max_depth;
    max_depth = 0;
    return depth;
  }
};