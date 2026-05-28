function solution(a, b, n) {
    let totalCoke = 0; 

    while (n >= a) {
        // 이번 차례에 새로 바꾼 콜라의 개수
        let newCoke = Math.floor(n / a) * b;
        
        // 총 마신 콜라 수에 더하기
        totalCoke += newCoke;
        
        // 남은 빈 병 업데이트 = (마트에 못 내고 남은 병) + (새로 마셔서 나온 빈 병)
        n = (n % a) + newCoke;
    }

    return totalCoke;
}

/**
 * 문제 이해
 * 마트에 빈 병 a개를 가져다주면 새 콜라 b개를 주는 규칙
 * 현재 가지고 있는 빈 병의 개수는 n개
 * 새 콜라를 받아서 마시면 다시 빈 병이 생기니까, 이 병들을 모아 다시 마트에 가져갈 수 있음
 * 더이상 마트에서 새 콜라로 바꿀 수 없을 때까지 반복해서 최종적으로 받을 수 있는 콜라 개수 반환
 */

/**
 * 문제 풀이
 * while문 사용해서 현재 가진 빈 병 n을 마트 교환 최소 수량인 a보다 크거나 같을 동안 계속 반복
 * Math.floor(n / a) * b를 통해 새로 바꾼 콜라 개수 계산
 */