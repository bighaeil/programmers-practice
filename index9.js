function solution(cards1, cards2, goal) {
    let index1 = 0;
    let index2 = 0;

    for (let i = 0; i < goal.length; i++) {
        const word = goal[i];
        if (cards1[index1] === word) {
            index1++;
        } else if (cards2[index2] === word) {
            index2++;
        } else {
            return "No";
        }
    }
    return "Yes";
}

// 테스트 케이스 실행
console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// 결과: "Yes"

console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
// 결과: "No"