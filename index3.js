function solution(players, callings) {
    const rankMap = {};
    players.forEach((player, index) => {
        rankMap[player] = index;
    });

    callings.forEach(calling => {
        const currentRank = rankMap[calling];

        if (currentRank > 0) {
            let prevRank = currentRank - 1;
            let prevPlayer = players[prevRank];

            // players 배열에서 순서 교환
            [players[currentRank], players[prevRank]] = [players[prevRank], players[currentRank]];

            // rankMap도 업데이트
            rankMap[calling] = prevRank;
            rankMap[prevPlayer] = currentRank;
        }
    });

    return players;
}

// 테스트 케이스 실행
console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));
// 결과: ["mumu", "kai", "mine", "soe", "poe"]