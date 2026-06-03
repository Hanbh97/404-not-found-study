function solution(keymap, targets) {
  const minPress = {};

  for (let keys of keymap) {
    for (let i = 0; i < keys.length; i++) {
      const char = keys[i];
      const pressCount = i + 1;

      if (minPress[char] === undefined || pressCount < minPress[char]) {
        minPress[char] = pressCount;
      }
    }
  }

  return targets.map((target) => {
    let totalPress = 0;

    for (let char of target) {
      if (minPress[char] === undefined) {
        return -1;
      }
      totalPress += minPress[char];
    }

    return totalPress;
  });
}

/*
 * 문제 이해
 * 여러 개의 키가 배치된 키패드 정보 keymap과 입력하려는 문자열 배열 targets가 주어짐
 * 하나의 키를 여러 번 누르면 그 키에 할당된 문자들이 순서대로 입력되는 규칙을 가짐
 * 각 문자열을 완성하기 위해 키를 눌러야 하는 최소 횟수의 합을 구하되 만들 수 없는 문자열은 -1을 담아 반환
 */

/*
 * 문제 풀이
 * 모든 알파벳 문자에 대해 가장 적게 키를 누르는 횟수를 저장할 객체 minPress를 생성
 * keymap을 이중 루프로 순회하며 각 문자의 인덱스 기반 누름 횟수(i + 1)를 계산해 최솟값으로 객체를 갱신
 * targets를 순회하며 문자를 완성하는 데 필요한 누름 횟수를 누적하고 사전에 없는 문자가 나오면 즉시 -1을 반환
 */
