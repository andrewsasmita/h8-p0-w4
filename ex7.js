// Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {

    var factor =[]
    var reversedFactor=[]

    for(i=angka; i>0; i--) {
        if((angka%i===0)) {
          
            factor.push(i)

        }
    }
    
    for(j=0; j<=angka; j++) {
        if((angka%j===0)) {
          
            reversedFactor.push(j)

        }
    }
   
    var join=[]
    
    for(x=0; x<factor.length; x++) {
      join.push(factor[x]+'*'+reversedFactor[x])
    }
    
    join.sort(function(value1, value2) { return value1.length > value2.length })

 return (join[0].length)-1
}
  
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2