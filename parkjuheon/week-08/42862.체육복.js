// 문제: 체육복
// 레벨: Level 1
// 문제 간략 설명: 여벌 옷이 있는 학생이 앞번호 또는 뒷번호 학생에게 옷을 빌려줄 수 있는 문제
/*
풀이:
 1. 여벌 옷도 있고 옷을 잃어버린 학생 filter로 제거
 2. 여벌 옷이 있는 학생이 앞번호 학생부터 빌려줌
 3. 체육복을 받은 학생은 lost에서 제거
 4. 전체 학생 수에서 lost에 남은 학생을 제외한 학생 수를 반환
*/

function solution(n, lost, reserve) {
  const realLost = lost.filter((student) => !reserve.includes(student));
  const realReserve = reserve.filter((student) => !lost.includes(student));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let student of realReserve) {
    let front = realLost.indexOf(student - 1);

    if (front !== -1) {
      realLost.splice(front, 1);
      continue;
    }

    let back = realLost.indexOf(student + 1);

    if (back !== -1) {
      realLost.splice(back, 1);
    }
  }

  return n - realLost.length;
}
