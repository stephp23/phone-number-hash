/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


function encryptPhoneNumber() {
  let phoneNumInput = prompt("What is your phone number?");
  let phoneNumString = phoneNumInput.toString();
  let phoneNumSections = [];
  let phoneNumSectDash = [];
  let phoneNumSectAsterisk = [];
  let param;
  
  for (let i = 0, sectionLength = phoneNumString.length; i < sectionLength - 4; i += 3) {
    phoneNumSections.push(phoneNumString.substring(i, i + 3));
}
  for (let j = 6, sectionLength = phoneNumString.length; j < sectionLength; j += 4) {
   phoneNumSections.push(phoneNumString.substring(j, j + 4));
}     
 
  for (let k = 0; k < phoneNumSections.length -1; k++) {
    phoneNumSectDash.push(phoneNumSections[k], '-');
  }
  
  for (let l = 2; l < phoneNumSections.length; l++) {
    phoneNumSectDash.push(phoneNumSections[l]);
  }
  
  param = phoneNumSectDash.join("");
  
  phoneNumSectAsterisk = phoneNumSectDash.slice();
  phoneNumSectAsterisk[0] = '***';
  phoneNumSectAsterisk[2] = '***';
  paramEncrypted = phoneNumSectAsterisk.join("");

  return paramEncrypted
  
}

console.log(encryptPhoneNumber());