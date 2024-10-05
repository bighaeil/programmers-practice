function solution(friends, gifts) {
    const give = {};
    const receive = {};

    friends.forEach((friend) => {
        give[friend] = 0;
        receive[friend] = 0;
    });

    gifts.forEach((gift) => {
        const [a, b] = gift.split(" ");
        give[a]++;
        receive[b]++;
    });

    const giftIndex = {};
    friends.forEach((friend) => {
        giftIndex[friend] = give[friend] - receive[friend];
    });

    const nextGift = {};
    friends.forEach((friend) => {
        nextGift[friend] = 0;
    });

    for (let i = 0; i < friends.length; i++) {
        for (let j = i; j < friends.length; j++) {
            if (i !== j) {
                const giver = friends[i];
                const receiver = friends[j];
                const giveCount = gifts.filter((gift) => gift === `${giver} ${receiver}`).length;
                const receiveCount = gifts.filter((gift) => gift === `${receiver} ${giver}`).length;

                if (giveCount > receiveCount) {
                    nextGift[giver]++;
                } else if (giveCount < receiveCount) {
                    nextGift[receiver]++;
                } else {
                    if (giftIndex[giver] > giftIndex[receiver]) {
                        nextGift[giver]++;
                    } else if (giftIndex[giver] < giftIndex[receiver]) {
                        nextGift[receiver]++;
                    }
                }
            }
        }
    }

    return Math.max(...Object.values(nextGift));
}

// 테스트 케이스 실행
console.log(solution(
    ["muzi", "ryan", "frodo", "neo"],
    ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"]
));  // 결과: 2

console.log(solution(
    ["joy", "brad", "alessandro", "conan", "david"],
    ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
));  // 결과: 4

console.log(solution(
    ["a", "b", "c"],
    ["a b", "b a", "c a", "a c", "a c", "c a"]
));  // 결과: 0