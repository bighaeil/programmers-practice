function solution(number, limit, power) {
    const arr = [];
    for (let i = 1; i <= number; i++) {
        let n = getN(i);
        arr.push(n > limit ? power : n);
    }
    return arr.reduce((a, b) => a + b);
}

function getN(num) {
    let count = 0;
    for (let j = 1; j * j <= num; j++) {
        if (num % j === 0) {
            count++; // j는 i의 약수
            if (j !== num / j) count++; // j와 i / j가 다를 경우 약수 추가
        }
    }
    return count;
}

// 테스트 케이스 실행
console.log(solution(5, 3, 2)); // 결과: 10
console.log(solution(10, 3, 2)); // 결과: 21