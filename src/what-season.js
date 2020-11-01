const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let localDate = date;
    let monthNumber = localDate.getMonth();
    console.log( monthNumber );
    if ( monthNumber >= 0 && monthNumber <= 1 || monthNumber === 11) {
        return 'winter';
    } else if ( monthNumber >= 2 && monthNumber <= 4 ) {
        return 'spring';
    } else if ( monthNumber >= 5 && monthNumber <= 7 ) {
        return 'summer';
    } else {
        return 'autumn';
    }
  } else {    
    throw new Error();
  }
}