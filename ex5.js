// Ubah Huruf

function ubahHuruf(kata) {

    var alphabet='abcdefghijklmnopqrstuvwxyz';

    var indexKata=[]
    for(i=0; i<kata.length; i++) {
        for(j=0; j<alphabet.length; j++) {

            if(kata[i]===alphabet[j]) {
                indexKata.push(j)
            }
        }
    }

    var transformed=''
    for(x=0; x<indexKata.length; x++){
        transformed=transformed+alphabet[indexKata[x]+1]
    }    

    return transformed
}
  
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu