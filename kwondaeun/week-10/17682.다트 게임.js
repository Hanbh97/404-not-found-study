function solution(dartResult) {
  const scores = [];
  let currentScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];

    if (!isNaN(char)) {
      if (char === "0" && dartResult[i - 1] === "1") {
        currentScore = 10;
        scores.pop();
      } else {
        currentScore = Number(char);
      }
    } else if (char === "S") {
      scores.push(Math.pow(currentScore, 1));
    } else if (char === "D") {
      scores.push(Math.pow(currentScore, 2));
    } else if (char === "T") {
      scores.push(Math.pow(currentScore, 3));
    } else if (char === "*") {
      const len = scores.length;
      scores[len - 1] = scores[len - 1] * 2;
      if (len > 1) {
        scores[len - 2] = scores[len - 2] * 2;
      }
    } else if (char === "#") {
      const len = scores.length;
      scores[len - 1] = scores[len - 1] * -1;
    }
  }

  return scores.reduce((acc, curr) => acc + curr, 0);
}

/*
 * 문제 이해
 * 다트 게임은 총 3번의 기회로 구성되며 각 기회마다 점수(0~10)와 보너스(S, D, T)가 주어지고 선택적으로 옵션(*, #)이 붙음
 * 점수와 보너스 조합에 따라 제곱 연산을 수행하고 스타상(*)과 아차상(#)의 규칙에 맞춰 이전 점수들을 계산
 * 주어진 다트 점수 문자열 dartResult를 분석하여 얻은 총 점수를 반환
 */

/*
 * 문제 풀이
 * 3번의 점수를 각각 계산해서 저장할 배열 scores와 현재 처리 중인 점수를 담을 currentScore 변수를 선언
 * 문자열을 한 자씩 순회하며 숫자일 때 저장하되 바로 앞 글자가 1이고 현재가 0이면 10점으로 처리하는 예외를 둠
 * 보너스(S,D,T)를 만나면 제곱 계산 후 스택(배열)에 넣고 옵션(*,#)을 만나면 스택의 최신 요소들을 알맞게 배수 처리한 뒤 총합을 구
 */
