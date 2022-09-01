function reduceArray(arr, cb, initValue) {  
  let acc = initValue
  arr.forEach( function(a, b) {
    acc = cb(acc, a, b)
  })
  return acc
}
console.log(reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} ))