// Mencari Modus

function cariModus(arr) {
    
    var unique=[]
    var uniqueLength=[]
    var result

    for(i=0; i<arr.length; i++) {
        if(unique.indexOf(arr[i]) < 0) {
            unique.push(arr[i]);
          }
    }

    if(unique.length===arr.length) {
     
        result = -1
      
    } else if(unique.length===1) {
        
        result = -1

    } else {
    
        for(j=0; j<unique.length; j++) {
        uniqueLength.push([])
      }

    for(x=0; x<arr.length; x++) {
        for(y=0; y<unique.length; y++) {
            if(arr[x]===unique[y]) {
                uniqueLength[y].push(arr[x])
            }
        }
    }
    uniqueLength.sort(function(value1, value2) { return value1.length < value2.length });
    result = uniqueLength[0][0]
    }
    
return result
}
   
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1