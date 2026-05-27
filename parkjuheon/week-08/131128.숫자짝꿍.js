// 문제: 숫자짝꿍
// 레벨: Level 1
// 문제 간략 설명: X와 Y에 공통으로 있는 숫자들로 만들 수 있는 가장 큰 수를 구하는 문제
/*
풀이:
  1. X와 Y에서 각 숫자(0~9)가 몇 번 등장하는지 저장
  2. 9부터 0까지 반복하며 공통으로 있는 개수 확인
  3. 공통 개수만큼 해당 숫자를 결과 문자열에 추가
  4. 결과가 빈 문자열이면 공통 숫자가 없으므로 -1 반환
  5. 결과가 0으로만 이루어져 있으면 0 반환
  6. 그 외에는 결과 문자열 반환
*/

function solution(X, Y) {
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);

  for (const num of X) {
    countX[num]++;
  }

  for (const num of Y) {
    countY[num]++;
  }

  let result = "";

  for (let i = 9; i >= 0; i--) {
    const common = Math.min(countX[i], countY[i]);
    result += String(i).repeat(common);
  }

  if (result === "") {
    return "-1";
  }

  if (result[0] === "0") {
    return "0";
  }

  return result;
}
