function solution(s) {
  return [...s].map((char, i) => {
    const prevIndex = s.slice(0, i).lastIndexOf(char);

    return prevIndex === -1 ? -1 : i - prevIndex;
  });
}

// --풀이
// 현재 위치(i) 이전까지의 문자열에서 char를 뒤에서부터 찾는다.
// 찾았으면(i - prevIndex), 못 찾았으면 -1을 반환한다.
