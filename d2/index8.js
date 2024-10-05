function solution(food) {
    let a = "";
    let left = "";
    let right = "";
    for (let i = 1; i < food.length; i++) {
        const f = Math.floor(food[i] / 2);
        console.log(f, i);
        for (let j = 0; j < f; j++) {
            left = left + `${i}`;
            right = `${i}` + right;
        }
    }
    return left + "0" + right
}

// 테스트 케이스 실행
console.log(solution([1, 3, 4, 6])); // 결과: "1223330333221"
console.log(solution([1, 7, 1, 2])); // 결과: "111303111"