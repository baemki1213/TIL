const Solution = (N, K) => {
  let result = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      result.push(i);
    }
  }
  return result.length + 1 > K ? result[K - 1] : "0";
};

// input 설정
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(el => parseInt(el));
}).on("close", function () {
  console.log(Solution(input[0], input[1]));
  process.exit();
});
