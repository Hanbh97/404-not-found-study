function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;

  let r, c;
  for (let i = 0; i < H; i++) {
    const j = park[i].indexOf("S");
    if (j !== -1) {
      r = i;
      c = j;
      break;
    }
  }

  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };

  for (let route of routes) {
    const [dir, distStr] = route.split(" ");
    const dist = Number(distStr);

    let nr = r;
    let nc = c;
    let isSuccess = true;

    for (let step = 0; step < dist; step++) {
      nr += dirs[dir][0];
      nc += dirs[dir][1];

      if (nr < 0 || nr >= H || nc < 0 || nc >= W || park[nr][nc] === "X") {
        isSuccess = false;
        break;
      }
    }

    if (isSuccess) {
      r = nr;
      c = nc;
    }
  }

  return [r, c];
}

/*
 * 문제 이해
 * 직사각형 모양의 공원 격자판 정보 park와 로봇 강아지가 이동할 명령 배열 routes가 주어짐
 * 명령대로 이동할 때 공원을 벗어나거나 장애물(X)을 만나면 해당 명령을 통째로 무시하고 다음 명령을 수행
 * 모든 명령을 수행한 후 로봇 강아지가 최종적으로 위치한 세로 좌표와 가로 좌표 [r, c]를 반환
 */

/*
 * 문제 풀이
 * 이중 반복문을 통해 공원의 시작 지점 'S'의 초기 좌표 (r, c)를 먼저 찾아냄
 * 동서남북 방향에 따른 좌표 변화량을 객체 dirs에 정의하고 routes를 돌며 방향과 거리를 분리
 * 각 명령마다 한 칸씩 미리 이동해 보며 공원 경계를 벗어나거나 장애물을 만나는지 검사하고 안전할 때만 좌표를 최종 갱신
 */
