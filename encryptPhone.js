/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


function encryptPhoneNumber(phoneNumInput) {
  let phoneNumString = phoneNumInput.toString();
  let phoneNumSections = [];
  let phoneNumSectAsterisk = [];
  let phoneNumSectDash = [];
  
  
  for (let i = 0, sectionLength = phoneNumString.length; i < sectionLength - 4; i += 3) {
    phoneNumSections.push(phoneNumString.substring(i, i + 3));
}
  for (let j = 6, sectionLength = phoneNumString.length; j < sectionLength; j += 4) {
   phoneNumSections.push(phoneNumString.substring(j, j + 4));
}     
  phoneNumSectAsterisk = phoneNumSections;
  phoneNumSectAsterisk[0] = '***';
  phoneNumSectAsterisk[1] = '***';
  
 // for (let k = 0; k < phoneNumSections.length; k+= 2) {
 //   phoneNumSectDash.push(phoneNumSections[1], '-');
//  }
  
  //for (let l = 2; l < phoneNumSections.length; l+= 2) {
   //phoneNumSectDash.push(phoneNumSections[4], '-');
 // }
  
  //param = phoneNumSections.join(" ");

  return console.log(phoneNumSections);
  
}

encryptPhoneNumber(2223334444)
  //let phoneNumSections = phoneNumString.match(/.{1,3}/g);
  //let param = phoneNumSections.join("-");

  //return console.log(phoneNumSections)
 