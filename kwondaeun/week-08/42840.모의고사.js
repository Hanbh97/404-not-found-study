function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const scores = [0, 0, 0];

  answers.forEach((ans, idx) => {
    if (ans === p1[idx % p1.length]) scores[0]++;
    if (ans === p2[idx % p2.length]) scores[1]++;
    if (ans === p3[idx % p3.length]) scores[2]++;
  });

  const maxScore = Math.max(...scores);
  const result = [];

  scores.forEach((score, idx) => {
    if (score === maxScore) result.push(idx + 1);
  });

  return result;
}

/*
 * 문제 이해
 * 1번, 2번, 3번 수포자가 수학 문제를 찍는 일정한 규칙이 주어짐
 * 정답 배열 answers가 주어졌을 때 가장 많은 문제를 맞힌 사람이 누구인지 구함
 * 가장 높은 점수를 받은 사람이 여러 명일 경우 오름차순으로 정렬하여 반환
 */

/*
 * 문제 풀이
 * 각 수포자의 찍기 패턴을 배열 p1, p2, p3에 저장하고 맞힌 개수를 셀 배열 scores를 만듦
 * answers를 순회하며 나머지 연산자를 활용해 각 수포자의 패턴을 무한 반복 비교하며 점수를 올림
 * Math.max()로 최고 점수를 구한 뒤 최고 점수와 일치하는 수포자의 번호(인덱스 + 1)를 결과 배열에 담아 반환
 */
