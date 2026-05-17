function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}

// --풀이
// 점수를 내림차순으로 정렬하고 m개씩 묶어서 가장 낮은 점수에 m을 곱하여 answer에 더한다.
// 최종 answer를 반환한다.
