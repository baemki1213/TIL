// 재귀로 풀려고했는데... 테스트 케이스 9번에서 막혀서 반복문으로 바꿔서 해봤다.

function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    let remainder = coupon % 10;
    let share = Math.floor(coupon / 10);
    answer += share;
    coupon = remainder + share;
  }

  return answer;
}

// 처음에 재귀로 했던 코드
//     let temp = 0;
//     const serviceHandler = (chicken) => {
//         if(chicken < 10) {
//             return temp += chicken;
//         } else if (chicken >= 10) {
//             let remainder = chicken % 10;
//             let share = Math.floor(chicken / 10);
//             answer += share;
//             temp += remainder;
//             return serviceHandler(share);
//         }
//     }

//     serviceHandler(chicken);
