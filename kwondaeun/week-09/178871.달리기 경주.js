function solution(players, callings) {
  const playerMap = {};
  const rankMap = {};

  players.forEach((player, index) => {
    playerMap[player] = index;
    rankMap[index] = player;
  });

  for (let call of callings) {
    const currentIdx = playerMap[call];
    const frontIdx = currentIdx - 1;
    const frontPlayer = rankMap[frontIdx];

    playerMap[call] = frontIdx;
    playerMap[frontPlayer] = currentIdx;

    rankMap[frontIdx] = call;
    rankMap[currentIdx] = frontPlayer;
  }

  return Object.values(rankMap);
}

/*
 * 문제 이해
 * 선수들의 현재 순위 배열 players와 해설진이 부른 이름 배열 callings가 주어짐
 * 이름이 불린 선수는 바로 앞의 선수를 추월한 것이므로 두 선수의 순위를 서로 맞바꿈
 * 모든 호명이 끝난 후 선수들의 이름을 1등부터 순서대로 배열에 담아 반환
 */

/*
 * 문제 풀이
 * 선수의 인덱스를 찾을 playerMap과 인덱스로 선수를 찾을 rankMap 두 개의 객체를 생성
 * callings를 순회하며 호명된 선수의 현재 위치와 바로 앞 선수의 위치 및 이름을 알아냄
 * 두 맵 객체에서 두 선수의 인덱스와 이름을 교환(SWAP)하고 최종적으로 rankMap의 값들을 배열로 반환
 */
