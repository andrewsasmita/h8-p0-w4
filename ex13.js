// Toko X

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  var initialStock =[[10],[2],[1]]
                  
  var result=[{},{},{}]
  
  for(x=0; x<listBarang.length; x++) {
    result[x].product=listBarang[x][0]
    result[x].shoppers=[]
    result[x].leftOver
    result[x].totalProfit
  }

  
  for(j=0; j<listBarang.length; j++){
    for(i=0; i<shoppers.length; i++){
      if(shoppers[i].product===listBarang[j][0]) {
        if(shoppers[i].amount<=listBarang[j][2]) {
        result[j].shoppers.push(shoppers[i].name)
        listBarang[j][2] -= shoppers[i].amount
        }
      }
    }
    result[j].leftOver=listBarang[j][2]
    result[j].totalProfit=(initialStock[j]-listBarang[j][2])*listBarang[j][1]
  }
  
  if (shoppers[0]===undefined){
    return []
  } else {
  return result
  }
}
  
  console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
    {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
    {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([
    {name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]