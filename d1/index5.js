function solution(park, routes) {
    const h = park.length;
    const w = park[0].length;

    const directions = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    }

    let startX = 0, startY = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (park[i][j] === 'S') {
                startX = i;
                startY = j;
                break;
            }
        }
    }

    let x = startX;
    let y = startY;
    routes.forEach(route => {
        const [d, l] = route.split(" ");
        const [a, b] = directions[d];

        let step = Number(l);
        let tempX = x;
        let tempY = y;
        if (tempX + a * step < 0 || tempX + a * step >= h) {
            return;
        }
        if (tempY + b * step < 0 || tempY + b * step >= w) {
            return;
        }
        for (let i = 0; i < step; i++) {
            tempX += 1 * a;
            tempY += 1 * b;
            if (park[tempX][tempY] === 'X') {
                return;
            }
        }

        x = x + a * step;
        y = y + b * step;
    });
    return [x, y];
}

// 테스트 케이스 실행
console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])); // 결과: [2,1]
console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"])); // 결과: [0,1]
console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])); // 결과: [0,0]