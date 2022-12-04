// 주석으로 하나하나 단계별로 생각하면서 하니까 코드가 완전 길어졌음...
// 하드코딩 밖에 할 수 없는 나 ㅠ

function solution(survey, choices) {
  let answer = "";
  let surveySheet = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  const checkSurveyRowIndex = surveyFirstString => {
    let rowIndex = 0;
    surveySheet.map((survey, idx) => {
      if (Object.keys(survey).includes(surveyFirstString)) {
        rowIndex = idx;
      }
    });
    return rowIndex;
  };
  const choicesSum = (choice, rowIdx, surveyString) => {
    if (choice === 1) surveySheet[rowIdx][surveyString[0]] += 3;
    if (choice === 2) surveySheet[rowIdx][surveyString[0]] += 2;
    if (choice === 3) surveySheet[rowIdx][surveyString[0]] += 1;
    if (choice === 5) surveySheet[rowIdx][surveyString[1]] += 1;
    if (choice === 6) surveySheet[rowIdx][surveyString[1]] += 2;
    if (choice === 7) surveySheet[rowIdx][surveyString[1]] += 3;
  };
  // survey 완성
  for (let i = 0; i < survey.length; i++) {
    let surveyString = survey[i].split("");
    let rowIdx = checkSurveyRowIndex(surveyString[0]);
    choicesSum(choices[i], rowIdx, surveyString);
  }
  // 완성된 시트를 보고 답을 만든다.
  for (let j = 0; j < surveySheet.length; j++) {
    let compareKeys = Object.keys(surveySheet[j]);
    let compareValues = Object.values(surveySheet[j]);
    if (compareValues[0] >= compareValues[1]) answer += compareKeys[0];
    else answer += compareKeys[1];
  }

  return answer;
}
