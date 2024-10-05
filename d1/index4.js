function solution(name, yearning, photo) {
    const map = {};
    for (let i = 0; i < name.length; i++) {
        map[name[i]] = yearning[i];
    }

    const arr = [];
    photo.forEach((item) => {
        let a = 0;
        item.forEach((item2) => {
            a += map[item2] ? map[item2] : 0;
        });
        arr.push(a);
    });
    return arr;
}


// 테스트 케이스 실행
console.log(solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
));
// 결과: [19, 15, 6]

console.log(solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
));
// 결과: [67, 0, 55]

console.log(solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
));
// 결과: [5, 15, 0]