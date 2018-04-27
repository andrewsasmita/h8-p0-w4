// Change Me !

function changeMe(arr) {

    if(arr.length===0) {
      console.log("")
    } else {
 
     
     for(i=0; i<arr.length; i++) {
        
        var heroList = {}
         
         heroList.firstName=arr[i][0]
         heroList.lastName=arr[i][1]
         heroList.gender=arr[i][2]
         heroList.age
         
         if(arr[i][3]===undefined) {
           heroList.age='Invalid Birth Year'
         } else {
           heroList.age=2018-arr[i][3]
         }
         console.log((i+1)+'. '+arr[i][0]+' '+arr[i][1]+':')
         console.log(heroList)
     }
    }
     
 }
   
 changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
 // 1. Christ Evans:
 // { firstName: 'Christ',
 //   lastName: 'Evans',
 //   gender: 'Male',
 //   age: 36 }
 // 2. Robert Downey:
 // { firstName: 'Robert',
 //   lastName: 'Downey',
 //   gender: 'Male',
 //   age: 'Invalid Birth Year' }
 changeMe([]); // ""