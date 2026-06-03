function solution(N, stages) {
  let stageUsers = new Array(N + 2).fill(0);
  for (let s of stages) {
    stageUsers[s]++;
  }

  let totalUsers = stages.length;
  const failureRates = [];

  for (let i = 1; i <= N; i++) {
    if (totalUsers === 0) {
      failureRates.push({ stage: i, rate: 0 });
    } else {
      const rate = stageUsers[i] / totalUsers;
      failureRates.push({ stage: i, rate: rate });
      totalUsers -= stageUsers[i];
    }
  }

  failureRates.sort((a, b) => {
    if (b.rate === a.rate) return a.stage - b.stage;
    return b.rate - a.rate;
  });

  return failureRates.map((item) => item.stage);
}

/*
 * 문제 이해
 * 전체 스테이지 개수 N과 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 배열 stages가 주어짐
 * 실패율은 '스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 / 스테이지에 도달한 플레이어 수'를 의미
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담긴 배열을 반환
 */

/*
 * 문제 풀이
 * 각 스테이지별 도달했으나 클리어 못한 유저 수를 카운팅 배열 stageUsers에 모아둠
 * 1번 스테이지부터 N번까지 순회하며 해당 스테이지 실패율을 계산해 객체 배열에 저장하고 도달 유저수(totalUsers)를 차감
 * 실패율을 기준으로 내림차순 정렬하되 실패율이 같으면 스테이지 번호가 작은 것이 먼저 오도록 다중 조건 정렬을 수행
 */
