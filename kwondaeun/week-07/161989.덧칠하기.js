function solution(n, m, section) {
  let count = 0;
  let maxPainted = 0;

  for (let s of section) {
    if (s > maxPainted) {
      count++;
      maxPainted = s + m - 1;
    }
  }

  return count;
}

/*
 * 문제 이해
 * 벽의 총 길이 n과 롤러의 길이 m 그리고 페인트를 다시 칠해야 하는 구역의 번호 배열 section이 주어짐
 * 롤러는 벽의 범위를 벗어날 수 없고 한 번 칠할 때 연속된 m개의 구역을 동시에 칠함
 * section에 있는 모든 구역을 칠하기 위해 롤러로 페인트칠을 해야 하는 최소 횟수를 반환
 */

/*
 * 문제 풀이
 * 페인트칠 횟수(count)와 현재까지 칠해진 최대 구역 번호(maxPainted)를 각각 0으로 초기화
 * section 배열을 돌면서 현재 구역 번호 s가 이미 칠해진 범위(maxPainted)보다 큰지 확인
 * 범위를 벗어났다면 count를 1 올리고 s부터 m만큼 칠한 새로운 범위인 's + m - 1'로 maxPainted를 갱신
 */
