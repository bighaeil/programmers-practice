function solution(s) {
    const arr = [];
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c] === undefined) {
            arr.push(-1);
            map[c] = i;
        } else {
            arr.push(i - map[c]);
            map[c] = Math.max(map[c], i);
        }
    }
    return arr;
}

// 테스트 케이스 실행
console.log(solution("banana")); // 결과: [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // 결과: [-1, -1, 1, -1, -1, -1]