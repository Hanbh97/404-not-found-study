function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
  let realReserve = reserve
    .filter((r) => !lost.includes(r))
    .sort((a, b) => a - b);

  let count = n - realLost.length;

  for (let l of realLost) {
    let extraIdx = realReserve.findIndex((r) => r === l - 1 || r === l + 1);

    if (extraIdx !== -1) {
      count++;
      realReserve.splice(extraIdx, 1);
    }
  }

  return count;
}

/*
 * 문제 이해
 * 전체 학생 수 n명 중 체육복을 도난당한 학생(lost)과 여벌이 있는 학생(reserve)이 주어짐
 * 여벌 체육복은 바로 앞번호나 뒷번호의 학생에게만 빌려줄 수 있으며 여벌이 있는 학생도 도난당했을 수 있음
 * 체육복을 적절히 빌려주어 체육수업을 들을 수 있는 학생의 최댓값을 반환
 */

/*
 * 문제 풀이
 * filter()를 사용해 여벌이 있으면서 도난당한 학생을 lost와 reserve 양쪽에서 먼저 제외하고 오름차순 정렬
 * 전체 학생 수에서 진짜 체육복이 없는 학생(realLost)의 수를 빼서 기본 수업 가능 인원(count)을 구하기
 * realLost를 순회하며 realReserve 배열에서 앞번호(l-1)나 뒷번호(l+1)가 있는지 findIndex()로 찾기
 * 빌려줄 수 있는 학생이 있다면 count를 1 올리고 빌려준 학생은 splice()로 reserve() 배열에서 제거
 */
