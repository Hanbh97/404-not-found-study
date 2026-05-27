// 문제: 소수 찾기
// 레벨: Level 1
// 문제 간략 설명: 1부터 n 사이의 소수 개수를 반환하는 함수 구현
/*
풀이:
 1. 2부터 n까지 반복
 2. 각 숫자마다 2부터 루트i까지 나누어 떨어지는 수가 있는지 검사
 3. 나누어 떨어지는 수가 있으면 소수가 아니므로 break로 반복 종료
 4. 끝까지 나누어 떨어지지 않으면 소수로 result에 값 증가하여 결과 반환
*/

function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result++;
    }
  }

  return result;
}
