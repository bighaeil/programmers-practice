function solution(n, m, section) {
    const arr = new Array(n);
    section.forEach((item) => {
        arr[item - 1] = true;
    });

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i]) {
            for (let j = 0; j < m && n > i + j; j++) {
                arr[i + j] = false;
            }
            count++;
        }
    }
    return count;
}

// 테스트 케이스 실행
console.log(solution(8, 4, [2, 3, 6])); // 결과: 2
console.log(solution(5, 4, [1, 3])); // 결과: 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 결과: 4
