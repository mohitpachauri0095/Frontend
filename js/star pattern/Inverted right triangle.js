function invertedTriangle(n) {
  let result = '';
  for (let i = n; i >= 1; i--) {      
    for (let j = 1; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  console.log(result);
}
invertedTriangle(5);
