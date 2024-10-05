function solution(edges) {
    const graph = {};
    const inDegree = {};

    edges.forEach(([a, b]) => {
        if (!graph[a]) graph[a] = [];
        graph[a].push(b);
        inDegree[b] = (inDegree[b] || 0) + 1;
        if (!inDegree[a]) inDegree[a] = 0;
    });

    let newVertex = null;
    const vertices = new Set([...Object.keys(graph), ...Object.keys(inDegree)]);

    vertices.forEach((v) => {
        if (inDegree[v] === 0) {
            newVertex = Number(v);
        }
    });

    const visited = new Set();
    function dfs(v) {
        const stack = [v];
        let count = 0;
        let edgesCount = 0;

        while (stack.length) {
            const node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                count++;
                if (graph[node]) {
                    edgesCount += graph[node].length;
                    graph[node].forEach((neighbor) => {
                        if (!visited.has(neighbor)) {
                            stack.push(neighbor);
                        }
                    });
                }
            }
        }

        return [count, edgesCount];
    }

    let donutCount = 0;
    let barCount = 0;
    let eightCount = 0;
    vertices.forEach((v) => {
        if (!visited.has(v) && v != newVertex) {
            const [nodes, edgesInComponent] = dfs(v);

            // 도넛 모양 그래프인지 확인
            if (nodes === edgesInComponent) {
                donutCount++;
            }
            // 막대 모양 그래프인지 확인
            else if (nodes - 1 === edgesInComponent) {
                barCount++;
            }
            // 8자 모양 그래프인지 확인
            else if (edgesInComponent === 2 * nodes) {
                eightCount++;
            }
        }
    });

    return [newVertex, donutCount, barCount, eightCount];
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]]));  // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]));  // [4, 0, 1, 2]
