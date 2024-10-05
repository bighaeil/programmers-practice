function solution(today, terms, privacies) {
    const tDate = convertDate(today);
    const tMap = {};
    terms.forEach((term) => {
        const [key, value] = term.split(" ");
        tMap[key] = value;
    });

    const arr = [];
    privacies.forEach((priv, i) => {
        const [d, t] = priv.split(" ");
        const p = Number(tMap[t]) * 28;
        const flag = tDate >= convertDate(d) + p;
        if (flag) {
            arr.push(i + 1);
        }
    });
    return arr;
}

const convertDate = (str) => {
    const [y, m, d] = str.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
}

// 테스트 케이스 실행
console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
// 결과: [1, 3]

console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));
// 결과: [1, 4, 5]