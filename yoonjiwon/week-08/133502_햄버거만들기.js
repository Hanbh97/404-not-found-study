function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let item of ingredient) {
    stack.push(item);

    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();

      count++;
    }
  }

  return count;
}

// --풀이
// 스택을 사용하여 햄버거 재료를 순서대로 저장한다.
// ingredient 배열을 순회하면서 각 재료를 스택에 추가한다.
// 스택의 길이가 4 이상이 되면, 마지막 4개의 재료가 1, 2, 3, 1 순서로 되어 있는지 확인한다.
// 만약 순서가 맞다면, 해당 재료들을 스택에서 제거하고 count를 증가시킨다.
// 최종적으로 count를 반환하여 완성된 햄버거의 개수를 알려준다.
