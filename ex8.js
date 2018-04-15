// Mengurutkan Abjad

function urutkanAbjad(str) {

    var alphabet='abcdefghijklmnopqrstuvwxyz';

    var wordIndex=[]
    for(i=0; i<str.length; i++) {
        for(j=0; j<alphabet.length; j++) {

            if(str[i]===alphabet[j]) {
                wordIndex.push(j)
            }
        }
    }

    var sortedStr=wordIndex.sort(function(value1, value2) { return value1 > value2 });

    var transformed=''
    for(x=0; x<sortedStr.length; x++){
        transformed=transformed+alphabet[sortedStr[x]]
    }    

    return transformed

}
  
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'