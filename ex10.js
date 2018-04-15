// Check AB

function checkAB(num) {
   
    var indexA=[]
    for (i=0; i<num.length; i++) {

        if(num[i]==='a') {
            indexA.push(i)
        }
    }

    var indexB=[]
    for (j=0; j<num.length; j++) {

        if(num[j]==='b') {
            indexB.push(j)
        }
    }

    var skip=[]
    for (x=0; x<indexA.length; x++) {
        for (y=0; y<indexB.length; y++) {
            
            skip.push(indexA[x]-indexB[y])
        }
    }
    
    var result=0
    for (z=0; z<skip.length; z++) {

        if((Math.abs(skip[z]))===4) {
            result += 1
        }
    }

    if (result>=1) {
        return true
    } else {
        return false
    }
}
  
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false