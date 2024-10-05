function solution(t, p) {
    const l = p.length;
    let answer = 0;
    for (let i = 0; i <= t.length - l; i++) {
        const str = t.substring(i, i + l);
        if (str <= p) {
            answer++;
        }
    }
    return answer;
}

// 테스트 케이스 실행
console.log(solution("3141592", "271")); // 결과: 2
console.log(solution("500220839878", "7")); // 결과: 8
console.log(solution("10203", "15")); // 결과: 3