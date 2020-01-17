function matrixGenerator(rows, columns) {
  let answer = [];

  for (let i = 0; i < columns; i++) {
    answer.push(new Array()); // push a new array into "answer";
    for (let j = 0; j < rows; j++) {
      answer[i].push(Math.floor(Math.random() * 101));
      answer[i].sort(function(a, b) {
        return a - b;
      });
    }
  }

  return answer.sort(function(a, b) {
    return a[0] - b[0]; // return the appropriate array by first index
  });
}

module.exports = matrixGenerator;
