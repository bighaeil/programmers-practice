function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const oilSizes  = [];
    const columnToOils = Array(m).fill().map(() => new Set());

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = (x, y, oilIndex) => {
        let queue = [[x, y]];
        visited[x][y] = true;
        let oilSize = 0;

        while(queue.length) {
            const [cx, cy] = queue.shift();
            oilSize++;
            columnToOils[cy].add(oilIndex);

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;
                if (nx >= 0 && nx < n && ny >= 0 && ny < m &&
                !visited[nx][ny] && land[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return oilSize;
    }

    let oilIndex = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const oilSize = bfs(i, j, oilIndex);
                oilSizes.push(oilSize);
                oilIndex++;
            }
        }
    }

    let maxOil = 0;
    for (let j = 0; j < m; j++) {
        let oilSum = 0;
        columnToOils[j].forEach(oilIdx => {
            oilSum += oilSizes[oilIdx];
        });
        maxOil = Math.max(maxOil, oilSum);
    }
    return maxOil;
}

console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]));  // 9
console.log(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]));  // 16
