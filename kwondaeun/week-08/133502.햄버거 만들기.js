function solution(ingredient) {
  let count = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.length >= 4) {
      const len = stack.length;
      if (
        stack[len - 4] === 1 &&
        stack[len - 3] === 2 &&
        stack[len - 2] === 3 &&
        stack[len - 1] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }

  return count;
}

/*
 * 문제 이해
 * 조리대에 쌓이는 재료 배열 ingredient가 순서대로 주어짐
 * 야채(1), 고기(2), 빵(3) 순서로 쌓이고 [빵, 야채, 고기, 빵] 즉 [1, 2, 3, 1] 순서가 되어야 햄버거 1개가 완성됨
 * 완성된 햄버거는 포장되어 나가고, 남은 재료들은 순서 그대로 유지될 때 만들 수 있는 총 햄버거 개수를 반환
 */

/*
 * 문제 풀이
 * 재료를 하나씩 쌓으면서 뒤에서부터 검사하기 위해 빈 배열 stack을 생성
 * ingredient를 순회하며 stack에 재료를 하나씩 push하고 stack의 길이가 4 이상이 될 때마다 맨 위 4개의 재료를 확인
 * 뒤에서부터 순서대로 1, 2, 3, 1인지 확인한 후 맞다면 pop을 4번 실행해 재료를 제거하고 count를 1 올림
 */
