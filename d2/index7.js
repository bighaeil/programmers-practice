function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let a = 0;
    for (let i = 0; i + m <= score.length; i += m) {
        const b = score[i + m -1];
        a += b * m;
    }
    return a;
}

// 테스트 케이스 실행
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 결과: 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 결과: 33