function solution(diffs, times, limit) {

    function fn(level) {
        let totalTime = 0;
        let prevTime = times[0];

        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const timeCur = times[i];

            if (diff <= level) {
                totalTime += timeCur;
            } else {
                const mistakes = diff - level;
                totalTime += (timeCur + prevTime) * mistakes + timeCur;
            }
            prevTime = timeCur;
            if (totalTime > limit) {
                return Infinity;
            }
        }

        return totalTime;
    }

    let left = 1;
    let right = Math.max(...diffs);
    let answer = right;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (fn(mid) <= limit) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));  // 출력: 3
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));  // 출력: 2
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));  // 출력: 294
console.log(solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012));  // 출력: 39354
