// example
function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
}

// s를 배열로 만들어서 각 글자를 반복한다.
// "("라면 괄호를 시작하는게 맞으니까 Stack에 넣어놓는다.
// ")"라면 비어있는 스택에 왔을땐 무조건 잘못된 괄호가 된다.
// 비어 있는 게 아니라면 완성시켰으니 괄호를 제거한다.
// stack이 비어있으면 올바른 괄호들이 만들어진 것이기 때문에 최종적으로 true를 리턴한다.

// stack 대신 Count를 0부터 +1, -1하면서 그 값을 리턴하면 length를 사용하지 않아도 된다.
// function solution(s){
//   let counter = 0;

//   for(const c of s) {
//       if(c === "(") {
//           counter += 1;
//       } else {
//           if(counter === 0) {
//               return false;
//           } else {
//               counter -= 1;
//           }
//       }
//   }

//   return counter === 0;
// }
