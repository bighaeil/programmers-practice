function solution(ingredient) {
    const stack = [];
    let count = 0;
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            count++;
        }
    }
    return count;
}

// 테스트 케이스 실행
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 결과: 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 결과: 0