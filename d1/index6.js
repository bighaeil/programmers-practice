function solution(wallpaper) {
    const x = wallpaper.length;
    const y = wallpaper[0].length;
    let minX = x;
    let minY = y;
    let maxX = 0;
    let maxY = 0;
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (wallpaper[i][j] === '#') {
                minX = Math.min(minX, i);
                minY = Math.min(minY, j);
                maxX = Math.max(maxX, i);
                maxY = Math.max(maxY, j);
            }
        }
    }
    return [minX, minY, maxX + 1, maxY + 1];
}

// 테스트 케이스 실행
console.log(solution([".#...", "..#..", "...#."]));
// 결과: [0, 1, 3, 4]

console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));
// 결과: [1, 3, 5, 8]

console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]));
// 결과: [0, 0, 7, 9]

console.log(solution(["..", "#."]));
// 결과: [1, 0, 2, 1]