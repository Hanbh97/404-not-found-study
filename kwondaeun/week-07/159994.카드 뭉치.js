function solution(cards1, cards2, goal) {
  for (let card of goal) {
    if (cards1[0] === card) {
      cards1.shift(); 
    } else if (cards2[0] === card) {
      cards.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}

/**
 * 문제 이해
 * 순서가 정해진 두 개의 카드 배열에서 카드를 한 장씩 꺼내서
 * 원하는 단어 배열을 만들 수 있으면 Yes, 아니면 No를 반환
 */

/**
 * 문제 풀이
 * goal 배열의 단어들을 for of 문을 사용해서 순서대로 하나씩 확인
 * cards1[0]가 card와 일치하면, cards1에서 shift() 메서드로 카드를 소모
 * cards2[0])가 card와 일치하면, cards2에서 shift()를 사용해 소모
 * 두 카드 뭉치의 맨 앞 단어 중 어느 곳에서도 card를 찾을 수 없다면 순서가 어긋난 것이므로 "No"를 반환
 * 반복문을 끝가지 통과해서 모든 단어를 순서대로 맞췄다면 "Yes"를 반환
 */
