function findHighestPriced(arr) {
  let highest = 0
  let highestObj 
  arr.forEach(function(arrObj) {
    if(arrObj.price > highest ) {
      highest = arrObj.price
      highestObj = arrObj
    }
  })
  return highestObj
}
console.log(findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }, 
  { sku: 'e5', price: 50}
]))
