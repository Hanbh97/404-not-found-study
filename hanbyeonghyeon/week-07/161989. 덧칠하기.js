/**
 * 풀이 과정
 * 1. 시작점과 끝지점을 저장할 변수를 각각 선언
 * 2. 칠이 필요한 num을 기준으로 반복문 진행
 * 3. 끝지점보다 num이 더 크다면, end과 start를 이동하여 칠할 영역을 지정
 * 4. 칠하였으므로 answer를 +1
 * 5. 끝까지 진행 후 총 answer를 출력
 */

function solution(n, m, section) {
  let answer = 0;
  let start = 0;
  let end = 0;

  for (let num of section) {
    if (num > end) {
      start = num;
      end = start + m - 1;
      answer++;
    }
  }
  return answer;
}
