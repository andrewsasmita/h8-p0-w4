// Shopping Time

function shoppingTime(memberId, money) {

  var stacattu=['Sepatu Stacattu', 1500000]
  var zoro=['Baju Zoro', 500000]
  var hn=['Baju H&N', 250000]
  var uniklooh=['Sweater Uniklooh', 175000]
  var phone=['Casing Handphone', 50000]
  
  var belian=[]
  belian.push(stacattu)
  belian.push(zoro)
  belian.push(hn)
  belian.push(uniklooh)
  belian.push(phone)
 
  belian.sort(function(a,b){return a[1]<b[1]})
  
  var result = {}
  
  result.memberId=memberId
  result.money=money
  result.listPurchased=[]

  var duid = money

  for(i=0; i<belian.length; i++) {
    if(duid>=belian[i][1]) {
      duid -=belian[i][1]
      result.listPurchased.push(belian[i][0])
    } 
  }  
  result.changeMoney=duid

  if(memberId===undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if(memberId==='') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if(money<50000){
    return 'Mohon maaf, uang tidak cukup'
  } else {
    return result
  }

}
  
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
/*
Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
*/