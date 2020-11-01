const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultString = String(str);
    let additionString = String(str);
      if (options.additionSeparator === undefined) {
        options.additionSeparator === '|';
        for (let i = 1; i <= options.additionRepeatTimes; i++) {          
          if (i !== options.additionRepeatTimes) {
            additionString += options.addition;
            additionString += options.additionSeparator;
          }
          else {
            additionString += options.addition; 
          }
        }
      } else if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
        for (let i = 1; i <= options.additionRepeatTimes; i++) {          
            if (i !== options.additionRepeatTimes) {
              additionString += options.addition;
              additionString += options.additionSeparator;
            }
            else {
              additionString += options.addition; 
            }
          }
      } else {
        for (let i = 1; i <= options.additionRepeatTimes; i++) {          
          if (i !== options.additionRepeatTimes) {
            additionString += options.addition;
            additionString += options.additionSeparator;
          }
          else {
            additionString += options.addition; 
          }
        }
      }
      
      resultString = additionString;
      

      if (options.separator === undefined) {
        options.separator = '+';
          for (let i = 1; i <= options.repeatTimes; i++) {
              if (i !== options.repeatTimes) {
                resultString += options.separator;
                resultString += additionString; 
              } 
                
          }
      } else if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
        for (let i = 1; i <= options.repeatTimes; i++) {
            if (i !== options.repeatTimes ) {
              resultString += options.separator;
              resultString += additionString;
            }                
          } 
      } else {
        for (let i = 1; i <= options.repeatTimes; i++) {
          if (i !== options.repeatTimes ) {
            resultString += options.separator;
            resultString += additionString;
          }                
        }    
      }
    return resultString;
};