function solution(keymap, targets) {
    const map = {};
    for (let i = 0; i < keymap.length; i++) {
        for (let j = 0; j < keymap[i].length; j++) {
            const c = keymap[i][j];

            if (map[c] === undefined) {
                map[c] = j;
            } else {
                map[c] = Math.min(map[c], j);
            }
        }
    }

    return targets.map((target) => {
        let num = 0;
        for (let i = 0; i < target.length; i++) {
            const c = target[i];
            if (map[c] === undefined) {
                return -1;
            }
            num += map[c] + 1;
        }
        return num;
    });
}

// 테스트 케이스 실행
console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // 결과: [9, 4]
console.log(solution(["AA"], ["B"])); // 결과: [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // 결과: [4, 6]