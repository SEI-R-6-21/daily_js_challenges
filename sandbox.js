function charCount(string) {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (result[character]) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }
  console.log(result);
  return result;
}

charCount('Today is fantastic!');
// { T: 1, o: 1, d: 1, a: 3, y: 1,
// ' ': 2, i: 2, s: 2, f: 1, n: 1,
// t: 2, c: 1, '!': 1 }
