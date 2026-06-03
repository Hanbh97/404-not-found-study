function solution(n, words) {
  const usedWords = new Set();
  usedWords.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const prevWord = words[i - 1];

    if (
      usedWords.has(currentWord) ||
      prevWord[prevWord.length - 1] !== currentWord[0]
    ) {
      const player = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      return [player, turn];
    }

    usedWords.add(currentWord);
  }

  return [0, 0];
}

/*
 * 문제 이해
 * n명의 사람이 영어 끝말잇기를 진행하며 이전에 등장했던 단어를 사용하거나 앞 단어의 마지막 글자로 시작하지 않으면 탈락
 * 단어 배열 words를 순서대로 읽으면서 가장 먼저 탈락하는 사람의 번호와 그 사람이 몇 번째로 단어를 말했는지를 구함
 * 만약 아무도 탈락하지 않고 정상적으로 끝말잇기가 종료된다면 [0, 0]을 반환
 */

/*
 * 문제 풀이
 * 이미 사용한 단어들을 중복 없이 효율적으로 관리하기 위해 Set 객체인 usedWords를 생성하고 첫 단어를 미리 넣어둠
 * words 배열을 1번 인덱스부터 순회하며 현재 단어가 usedWords에 이미 존재하는지 또는 앞 단어의 끝 글자와 다른지 확인
 * 탈락 조건을 만족하는 순간 현재 인덱스 i를 활용해 탈락자 번호와 차례를 계산해 반환하고 모두 통과하면 [0, 0]을 반환
 */
