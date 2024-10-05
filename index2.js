function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    let h = health;
    let i = 0;
    let time = 1;
    let consecutiveTime = 0;
    while(time <= 1000) {
        if (attacks[i][0] === time) {
            h -= attacks[i][1];
            if (h <= 0) {
                return -1;
            }
            consecutiveTime = 0;
            i++;
            if (attacks.length === i) {
                break;
            }
        } else {
            h = Math.min(health, h + x);
            consecutiveTime++;
            if (consecutiveTime === t) {
                h = Math.min(health, h + y);
                consecutiveTime = 0;
            }
        }

        time++;
    }

    return h;
}

// 테스트 케이스 실행
console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])); // 결과: 5
console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // 결과: -1
console.log(solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // 결과: -1
console.log(solution([1, 1, 1], 5, [[1, 2], [3, 2]])); // 결과: 3