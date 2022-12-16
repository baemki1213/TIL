// 처음엔 재귀로 하려고했다... ㅋㅋㅋ;;
// 투포인터로 풀었숨

function solution(queue1, queue2) {
  const totalArr = [...queue1, ...queue2];
  const add = arr => arr.reduce((a, b) => a + b, 0);
  const goalSum = add([...queue1, ...queue2]) / 2;
  const maxLength = [...queue1, ...queue2].length * 2;
  let sum = add(queue1);
  let count = 0;
  let q1point = 0;
  let q2point = queue1.length;

  while (count <= maxLength) {
    if (goalSum > sum) {
      sum += totalArr[q2point];
      q2point++;
    } else if (goalSum < sum) {
      sum -= totalArr[q1point];
      q1point++;
    } else if (goalSum === sum) return count;

    count++;
  }

  return -1;
}
