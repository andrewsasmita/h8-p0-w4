// Password Generator

function changeVocals (str) {
 
    var alphabet='abcdefghijklmnopqrstuvwxyz';
    var upperCaseAlphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var movedStr='';

    for(var i=0; i<str.length; i++) {
        for(var j=0; j<alphabet.length; j++) {

            if(str[i]===alphabet[j]) {
                movedStr += alphabet[j+1];
            } else if(str[i]===upperCaseAlphabet[j]) {
                movedStr += upperCaseAlphabet[j+1];
            }
        }
    }
    return movedStr;
}
  
function reverseWord (str) {
    
    var split=str.split("");
    var reversearray=split.reverse();
    var join=reversearray.join("");
    return join;
      
}
  
function setLowerUpperCase (str) {

    var sizing=''
    for (var x=0; x<str.length; x++) {
      if (str[x] === str[x].toUpperCase()) {
        sizing += str[x].toLowerCase();
      } else if (str[x] === str[x].toLowerCase()) {
        sizing += str[x].toUpperCase();
      } else {
        sizing += str[x];
      }
    }
    return sizing
}
  
function removeSpaces (str) {
    
    var diss=str.split(" ")
    var removed=diss.join("");
    return removed

}
  
function passwordGenerator (name) {

    var changed=changeVocals(name)
    var reversed=reverseWord(changed)
    var lowerUpper=setLowerUpperCase(reversed)
    var result=removeSpaces(lowerUpper)
    
    if(result.length<5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return result
    }

}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
