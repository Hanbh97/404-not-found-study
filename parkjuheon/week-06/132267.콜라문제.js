// 문제: 콜라문제
// 레벨: Level 1
// 문제 간략 설명: 빈 병을 교환하면서 계속 반복하는 문제
/*
풀이:
 1. 빈 병이 a개 이상일 동안 반복
 2. Math.floor(n / a)로 교환 가능한 횟수를 구한 다음 b를 곱하여 받을 수 있는 새 콜라 개수 계산
 3. 남은 빈 병과 새로 받은 콜라 병을 다시 합쳐 반복
 4. 받은 콜라 수를 result에 넣어 반환
*/

function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    let newCola = Math.floor(n / a) * b;
    let rest = n % a;

    result += newCola;
    n = newCola + rest;
  }

  return result;
}
