function solution(X, Y) {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  for (let char of X) countX[char]++;
  for (let char of Y) countY[char]++;

  let result = [];

  for (let i = 9; i >= 0; i--) {
    const matchCount = Math.min(countX[i], countY[i]);
    for (let j = 0; j < matchCount; j++) {
      result.push(i);
    }
  }

  if (result.length === 0) return "-1";
  if (result[0] === 0) return "0";

  return result.join("");
}

/*
 * 문제 이해
 * 두 정수 X와 Y의 임의의 자리에서 공통으로 나타나는 정수들을 모아서 가장 큰 정수를 만듦
 * 공통으로 나타나는 정수가 전혀 없으면 "-1"을 반환
 * 공통으로 나타나는 정수가 오직 0으로만 구성되어 있다면 "0"을 반환
 */

/*
 * 문제 풀이
 * 0부터 9까지의 숫자 등장 횟수를 기록할 크기 10의 배열 countX와 countY를 생성하여 개수를 셈
 * 가장 큰 수를 만들어야 하므로 9부터 0까지 거꾸로 순회하며 두 배열의 최소 등장 횟수만큼 숫자를 result에 담기
 * result가 비어있으면 "-1"을, 맨 앞 글자가 0이면 전체가 0이라는 뜻이므로 "0"을 반환하고 그 외엔 문자열로 합쳐 반환
 */
