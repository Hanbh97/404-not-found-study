function solution(name, yearning, photo) {
  const memory = {};

  name.forEach((n, idx) => {
    memory[n] = yearning[idx];
  });

  return photo.map((p) => {
    return p.reduce((acc, curr) => acc + (memory[curr] || 0), 0);
  });
}

/*
 * 문제 이해
 * 그리워하는 사람의 이름 배열과 그리움 점수 배열이 순서대로 매칭되어 주어짐
 * 사진 속 인물들의 그리움 점수를 모두 더한 총점을 사진별로 배열에 담아 반환하기
 */

/*
 * 문제 풀이
 * 이름과 점수를 빠르게 찾기 위해 자바스크립트 객체 memory에 key-value 형태로 매칭하여 저장
 * map을 사용해 각 사진 배열을 순회하고 reduce를 사용해 사진 속 인물들의 점수를 누적
 * memory 객체에 이름이 없는 사람은 점수가 없으므로 short-circuit(|| 0)을 활용해 0점을 더해줌
 */
