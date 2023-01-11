function solution(priorities, location) {
  const queue = [];
  for (let i = 0; i < priorities.length; i++) {
    queue.push([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let answer = 0;
  while (true) {
    const currentValue = queue[0];
    if (currentValue[0] < priorities[answer]) {
      queue.push(queue.shift());
    } else {
      const value = queue.shift();
      answer++;
      if (location === value[1]) {
        return answer;
      }
    }
  }
}
