const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (encrType = true) {
    this.encrType = encrType;
  }  
  alphabet = "abcdefghijklmnopqrstuvwxyz";
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let localMessage = message.toLowerCase();
    let localKey = key.toLowerCase();
    let outputString = '';
    let keyIndex = 0;
    for (let i = 0; i < localMessage.length; i++) {
      if (this.alphabet.indexOf ( localMessage[i]  ) !== -1 && localKey[keyIndex] !== undefined) {
        let outputLetter = ( (localMessage[i].charCodeAt(0) - 97) + ( localKey[keyIndex].charCodeAt(0) - 97 ) ) % 26;
        outputString += this.alphabet[outputLetter];
        keyIndex++;
      } else if (this.alphabet.indexOf ( localMessage[i]  ) !== -1 && localKey[keyIndex] === undefined) {
        keyIndex = 0;
        let outputLetter = ( (localMessage[i].charCodeAt(0) - 97) + ( localKey[keyIndex].charCodeAt(0) - 97 ) ) % 26;
        outputString += this.alphabet[outputLetter];
        keyIndex++;
      } else {
        outputString += localMessage[i];
      }        
    } 


    if (this.encrType === true) {
      return outputString.toUpperCase();
    } else {
      return outputString.split('').reverse().join('').toUpperCase();
    }      
  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let localMessage = message.toLowerCase();
    let localKey = key.toLowerCase();
    let outputString = '';
    let keyIndex = 0;
    for (let i = 0; i < localMessage.length; i++) {
      if (this.alphabet.indexOf ( localMessage[i]  ) !== -1 && localKey[keyIndex] !== undefined) {
        let outputLetter = ( (localMessage[i].charCodeAt(0) - 97) - ( localKey[keyIndex].charCodeAt(0) - 97 ) ) % 26;
        if (outputLetter < 0) {
            outputLetter += 26;
        }
        outputString += this.alphabet[outputLetter];
        keyIndex++;
      } else if (this.alphabet.indexOf ( localMessage[i]  ) !== -1 && localKey[keyIndex] === undefined) {
        keyIndex = 0;
        let outputLetter = ( (localMessage[i].charCodeAt(0) - 97) - ( localKey[keyIndex].charCodeAt(0) - 97 ) ) % 26;
        if (outputLetter < 0) {
          outputLetter += 26;
        }
        outputString += this.alphabet[outputLetter];
        keyIndex++;
      } else {
        outputString += localMessage[i];
      }        
    }
    if (this.encrType === true) {
      return outputString.toUpperCase();
    } else {
      return outputString.split('').reverse().join('').toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;