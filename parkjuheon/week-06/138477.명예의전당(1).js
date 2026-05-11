// 문제: 명예의 전당(1)
// 레벨: Level 1
// 문제 간략 설명: 매일 가수 점수를 확인하며, 현재까지의 상위 k개의 점수 중 가장 낮은 값을 구하는 문제
/*
풀이:
 1. 매일 가수 점수를 명예의 전당 배열에 추가
 2. 점수를 오름차순으로 정렬
 3. 명예의 전당 크기가 k를 초과하면 가장 낮은 점수를 제거
 4. 현재 명예의 전당의 최하위 점수를 결과 배열에 저장
 5. 모든 날짜를 반복한 뒤 결과를 반환
*/

function solution(k, score) {
  const arr = [];
  const result = [];

  for (let num of score) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    if (arr.length > k) arr.shift();
    result.push(Math.min(...arr));
  }
  return result;
}
