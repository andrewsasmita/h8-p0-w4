function totalDigitRekursif(angka) {
  
    if(angka.toString().length===1) {
        return angka
    } 
    else {
        return Number(angka.toString().slice(0,1)) + totalDigitRekursif((Number(angka.toString().slice(-((angka.toString().length)-1)))))
    }
   
}
  
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5