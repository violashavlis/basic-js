const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  const outputArray = [];
  const disNext = '--discard-next';
  const disPrev = '--discard-prev';
  const doubNext = '--double-next';
  const doubPrev = '--double-prev'; 
  if ( !Array.isArray( arr ) ) {
    throw new Error("Not an array");
  } 
  if (arr.length === 0) {
    return outputArray;
  }         
  let operation;
  for (let i = 0; i < arr.length; i++) { 
    let item = arr[i];
    outputArray.push( item );
    switch (item) {
      case  disNext:
        outputArray.pop(item);
        i += 1;
        operation = 'disNext';
        break;
      case  disPrev:
        outputArray.pop(item);
        if (arr[i - 1] !== undefined && operation !== 'disNext') {  
          outputArray.pop(arr[i - 1]);        
        }          
        operation = '';
        break;
      case  doubNext:
        outputArray.pop(item);
        if (arr[i + 1] !== undefined) { 
            outputArray.push(arr[i + 1]);  
        }
        operation = ''; 
        break;
      case  doubPrev:
        outputArray.pop(item);
        if (arr[i - 1] !== undefined && operation !== 'disNext') { 
          outputArray.push(arr[i - 1]);  
        } 
        operation = ''; 
        break;
  
      default: 
        operation = ''; 
        break;
    }
  }
  return outputArray;
}