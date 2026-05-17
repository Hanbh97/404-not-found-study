// 문제: 덧칠하기
// 레벨: Level 1
// 문제 간략 설명: 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수 작성
/*
풀이:
 1. 페인트가 칠해진 곳은 1, 칠해지지 않은 곳은 0으로 하는 wallArr 배열 생성
 2. wallArr만큼 반복을 하며 배열에서 칠해지지 않는 벽을 의미하는 0을 만나면
 3. 롤러의 길이 m만큼 1로 변경
 4. count로 페인트칠을 한 횟수 카운트하여 반환
*/

function solution(n, m, section) {
  const wallArr = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    section.includes(i + 1) ? wallArr.push(0) : wallArr.push(1);
  }

  for (let i = 0; i < wallArr.length; i++) {
    if (wallArr[i] === 0) {
      for (let j = i; j < i + m; j++) {
        wallArr[j] = 1;
      }
      count++;
    }
  }

  return count;
}
