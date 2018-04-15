// Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
   
    var factor1=[]
    for(var x=angka1; x>=1; x--) {

        if(angka1%x===0) {

            factor1.push(x)
        }
    }

    var factor2=[]
    for(var y=angka2; y>=1; y--) {

        if(angka2%y===0) {

            factor2.push(y)
        }
    }

    var factorout=[]
    for(i=0; i<factor1.length; i++) {
        for(j=0; j<factor2.length; j++) {

            if(factor2[j]===factor1[i]) {
                factorout.push(factor2[j])
            }
        }
    }

    return (factorout[0])
    
}
  
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1