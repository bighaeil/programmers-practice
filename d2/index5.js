function solution(k, score) {
    const result = [];
    const arr = [];

    for (let i = 0; i < score.length; i++) {
        const s = score[i];

        result.push(s);
        result.sort((a, b) => b - a);
        if (result.length > k) {
            result.pop();
        }
        arr.push(result[result.length - 1]);
    }
    return arr;
}

// 테스트 케이스 실행
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
// 결과: [10, 10, 10, 20, 20, 100, 100]

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
// 결과: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]