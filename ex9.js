// Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
  
    var alphabet='abcdefghijklmnopqrstuvwxyz';
    var upperCaseAlphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var transformed=''
   
    for(i=0; i<kalimat.length; i++) {
      switch (kalimat[i]) {
    case ' ': {transformed += ' '; break;}
    case '!': {transformed += '!'; break;}
    case '1': {transformed += '1'; break;}
    case '2': {transformed += '2'; break;}
    case '3': {transformed += '3'; break;}
    case '4': {transformed += '4'; break;}
    case '5': {transformed += '5'; break;}
    case '6': {transformed += '6'; break;}
    case '7': {transformed += '7'; break;}
    case '8': {transformed += '8'; break;}
    case '9': {transformed += '9'; break;}
    case '0': {transformed += '0'; break;}
    case '-': {transformed += '-'; break;}
    case '_': {transformed += '_'; break;} 
      } 
      
        for(j=0; j<alphabet.length; j++) {

            if(kalimat[i]===alphabet[j]) {
                
                transformed += upperCaseAlphabet[j]

            } else if (kalimat[i]===upperCaseAlphabet[j]) {

                transformed += alphabet[j]

            } 
        }
    }
    return transformed
}
  
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"