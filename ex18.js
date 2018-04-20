// Kali Terus (rekursif)

function kaliTerusRekursif(angka) {

    if(angka.toString().length===1) {
        return angka
    } 
    else {

        var splitAngka=(angka.toString().split(""))
        var deretAngka=[]
        for(var i=0; i<splitAngka.length; i++) {
            deretAngka.push(Number(splitAngka[i]))
        }
        return kaliTerusRekursif(deretAngka.reduce(function(a,b){return a*b;}));
   
}
}
  
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
