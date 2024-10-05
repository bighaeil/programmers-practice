function solution(h1, m1, s1, h2, m2, s2) {
    // 시간을 초 단위로 변환
    const timeInSeconds = (h, m, s) => h * 3600 + m * 60 + s;
    const startTime = timeInSeconds(h1, m1, s1);
    const endTime = timeInSeconds(h2, m2, s2);

    // 겹치는 주기 계산
    const T_sm = 360 / (6 - 0.1); // 초침과 분침의 겹치는 주기
    const T_sh = 360 / (6 - (360 / 43200)); // 초침과 시침의 겹치는 주기

    const epsilon = 1e-6; // 부동소수점 비교를 위한 작은 값

    const overlaps = [];

    // 초침과 분침 겹치는 시간 생성
    let n_sm = Math.ceil(startTime / T_sm);
    let t_sm = n_sm * T_sm;
    while (t_sm <= endTime) {
        overlaps.push(t_sm);
        n_sm += 1;
        t_sm = n_sm * T_sm;
    }

    // 초침과 시침 겹치는 시간 생성
    let n_sh = Math.ceil(startTime / T_sh);
    let t_sh = n_sh * T_sh;
    while (t_sh <= endTime) {
        overlaps.push(t_sh);
        n_sh += 1;
        t_sh = n_sh * T_sh;
    }

    // 겹치는 시간 정렬
    overlaps.sort((a, b) => a - b);

    // 알람 횟수 계산
    let alarmCount = 0;
    let prevTime = -Infinity;
    for (let t of overlaps) {
        if (t >= startTime - epsilon && t <= endTime + epsilon) {
            if (t - prevTime > epsilon) { // 이전 알람 시간과 다르면 카운트
                alarmCount++;
                prevTime = t;
            }
        }
    }

    return alarmCount;
}

console.log(solution(0, 5, 30, 0, 7, 0)); // 2
console.log(solution(12, 0, 0, 12, 0, 30)); // 1
console.log(solution(0, 6, 1, 0, 6, 6)); // 0
console.log(solution(11, 59, 30, 12, 0, 0)); // 1
console.log(solution(11, 58, 59, 11, 59, 0)); // 1
console.log(solution(1, 5, 5, 1, 5, 6)); // 2
console.log(solution(0, 0, 0, 23, 59, 59)); // 2852