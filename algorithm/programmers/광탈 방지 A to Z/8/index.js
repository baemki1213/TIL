// 생성 방법
const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);

const arr5 = new Array(5).fill(5);

// 초기화
const arr6 = Array.from(Array(5), function (v, k) {
  return k + 1;
});

const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);
// 잘림
arr.length = 3;

// join
// console.log(arr.join(", "));
// reverse,원본 값에 영향을 준다.
// console.log(arr.reverse());

// 배열 합
const arr7 = [1, 2, 3, 4, 5, 6];
const arr8 = [7, 8, 9, 10];

// arr7.concat(arr8);

// pop, push(맨 뒤 추가, 맨 뒤 삭제)
arr7.push(7);
arr7.push(7, 8, 9);
console.log(arr);
arr.pop();
arr.pop();
console.log(arr.pop());
console.log(arr);

// shift(맨 앞 삭제), unshift(맨 앞 추기)
// slice
// splice

// for of
for (const item of arr) {
  console.log(item);
}

// 배열은 객체와 타입이 동일하다.

// 객체

const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "asd", company: "asdada" };
const obj4 = { name: "asd", company: "asdada" };
// 추가
obj4["key"] = "value";
obj4.key2 = "value2";
console.log(obj4);

// 삭제
delete obj1.key;

// 키 확인
console.log("name" in obj4); // true
console.log("noneKey" in obj4); // false

console.log(Object.keys(obj4));

// for in
for (const key in obj4) {
  console.log(key, obj4[key]);
}
