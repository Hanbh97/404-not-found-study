function solution(n) {
  if (n < 2) return 0;

  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}

// --풀이
// 0부터 n까지 수를 배열에 넣는다.
// 에라토스테네스의 체를 사용하여 알고리즘을 구현한다.
// 1. 0과 1은 소수가 아니므로 false로 설정한다.
// 2. 2부터 n의 제곱근까지 반복하면서 소수가 아닌 인덱스에 false를 넣는다.
// 3. true로 남은 인덱스의 개수를 반환한다.
