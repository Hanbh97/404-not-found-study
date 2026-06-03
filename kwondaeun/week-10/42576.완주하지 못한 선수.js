function solution(participant, completion) {
  const runnerMap = {};

  for (let p of participant) {
    if (runnerMap[p] === undefined) {
      runnerMap[p] = 1;
    } else {
      runnerMap[p]++;
    }
  }

  for (let c of completion) {
    runnerMap[c]--;
  }

  for (let key in runnerMap) {
    if (runnerMap[key] > 0) {
      return key;
    }
  }
}

/*
 * 문제 이해
 * 마라톤에 참여한 선수들의 이름 배열 participant와 완주한 선수들의 이름 배열 completion이 주어짐
 * 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주함
 * 완주하지 못한 선수의 이름을 찾아 문자열로 반환
 */

/*
 * 문제 풀이
 * 참여자 명단을 전부 확인하며 이름별 등장 횟수를 객체 runnerMap에 카운팅하여 기록
 * 완주자 명단을 돌면서 runnerMap에 기록된 해당 이름의 카운트를 1씩 차감
 * 최종적으로 runnerMap을 순회하며 카운트가 0보다 큰(지워지지 않고 남아있는) 이름을 찾아 반환
 */
