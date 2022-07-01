function formatWithPadding(n, char, length) {
  const padding = char.repeat(length);
  return (length > n.toString().length) ? padding + n : n.toString();
  // if (length < n.toString().length) {
  //   return n.toString();
  // } else {
  //   return padding + n;
  // }
}


console.log(formatWithPadding(123, '0', 5)); //=> "00123"
console.log(formatWithPadding(42, '*', 10)); //=> "********42"
console.log(formatWithPadding(1234, '*', 3)); //=> "1234"