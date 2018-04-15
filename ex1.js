// Angka Prima

function angkaPrima(angka) {
    
    var prime=0

    for(var i=angka; i>1; i--) {

        if((angka%i===0)) {
          
            prime += 1

        }
    }

    if(prime===1) {
        return true
    } else {
        return false
    }
}
  
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false