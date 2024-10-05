function solution(s) {
    let count = 0;
    let xCount = 0;
    let otherCount = 0;
    let firstChar = '';

    for (let i = 0; i < s.length; i++) {
        if (xCount === 0 && otherCount === 0) {
            firstChar = s[i];
            xCount++;
        } else {
            if (s[i] === firstChar) {
                xCount++;
            } else {
                otherCount++;
            }
        }
        if (xCount === otherCount) {
            count++;
            xCount = 0;
            otherCount = 0;
        }
    }

    if (xCount !== 0 || otherCount !== 0) {
        count++;
    }
    return count;
}

// 테스트 케이스 실행
console.log(solution("banana")); // 결과: 3
console.log(solution("abracadabra")); // 결과: 6
console.log(solution("aaabbaccccabba")); // 결과: 3