function solution(points, routes) {
    const robots = [];

    for (let route of routes) {
        let path = [];
        for (let i = 0; i < route.length - 1; i++) {
            const start = points[route[i] - 1];
            const end = points[route[i + 1] - 1];
            let [r1, c1] = start;
            let [r2, c2] = end;

            while (r1 !== r2) {
                path.push([r1, c1]);
                r1 += r1 < r2 ? 1 : -1;
            }
            while (c1 !== c2) {
                path.push([r1, c1]);
                c1 += c1 < c2 ? 1 : -1;
            }
        }
        path.push(points[route[route.length - 1] - 1]);
        robots.push(path);
    }

    const map = {};
    for (let i = 0; i < robots.length; i++) {
        const path = robots[i];
        for (let j = 0; j < path.length; j++) {
            const [x, y] = path[j];
            const key = getKey(x, y, j);
            if (map[key] === undefined) {
                map[key] = 1;
            } else {
                map[key]++;
            }
        }
    }

    let count = 0;
    for (const key in map) {
        if (map[key] > 1) {
            count++;
        }
    }
    return count;
}

function getKey(x, y, time) {
    return `${x},${y},${time}`;
}

console.log(solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [2, 4]]));  // 출력: 1
console.log(solution([[3, 2], [6, 4], [4, 7], [1, 4]], [[4, 2], [1, 3], [4, 2], [4, 3]]));  // 출력: 9
console.log(solution([[2, 2], [2, 3], [2, 7], [6, 6], [5, 2]], [[2, 3, 4, 5], [1, 3, 4, 5]]));  // 출력: 0
