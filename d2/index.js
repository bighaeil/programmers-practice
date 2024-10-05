function solution(s, skip, index) {
    const skipSet = new Set(skip);
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);

    const arr = [];
    for (let j = 0; j < s.length; j++) {
        let currentCode = s[j].charCodeAt(0);
        for (let i = 0; i < index; i++) {
            do {
                currentCode++;
                if (currentCode > zCode) {
                    currentCode = aCode;
                }
            } while (skipSet.has(String.fromCharCode(currentCode)));
        }
        const c1 = String.fromCharCode(currentCode);
        arr.push(c1);
    }
    return arr.join('');
}

// 테스트 케이스 실행
console.log(solution("aukks", "wbqd", 5)); // 결과: "happy"