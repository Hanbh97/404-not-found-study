/**
 * 풀이 과정
 * 1. 계속해서 더할 addCoke 변수를 선언
 * 2. 더 이상 교환이 불가능할 때까지 순회
 *  2.1. 추가로 받을 수 있는 콜라 계산
 *  2.2. 현재 콜라의 수를 계산하고 추가로 받은 콜라를 더함
 */

function solution(a, b, n) {
  let addCoke = 0;

  while (n >= a) {
    let remain = ~~(n / a) * b;
    n = (n % a) + remain;
    addCoke += remain;
  }

  return addCoke;
}
