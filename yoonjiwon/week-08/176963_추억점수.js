function solution(name, yearning, photo) {
  const score = {};

  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  return photo.map((pic) => {
    let sum = 0;

    for (let person of pic) {
      sum += score[person] || 0;
    }

    return sum;
  });
}

// --풀이
// 객체 score를 생성하여 name 배열을 순회하면서 각 이름과 그리움 점수를 score 객체에 저장한다.
// photo 배열을 순회하면서 각 사진에 등장하는 사람들의 그리움 점수를 합산한다.
// 각 사진의 총 그리움 점수를 결과 배열에 저장하여 반환한다.
