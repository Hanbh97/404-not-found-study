function solution(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}

/*
 * 문제 이해
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환
 */

/*
 * 문제 풀이
 * 소수 여부를 체크할 크기 n+1의 배열을 만들어 true로 채운 뒤 0과 1은 false로 초기화
 * 에라토스테네스의 체 알고리즘을 사용해 2부터 n의 제곱근까지 돌며 소수의 배수들을 false로 지워나감
 * 배열에서 true로 남아있는 요소들의 개수만 filter(Boolean)로 세어 반환
 */
