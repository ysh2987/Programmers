// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            process.stdout.write("*")
        }
        console.log('')
    }
});

// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    let a = 0;
    for(let i=1; i <= n; i++){
        answer.push(x * i)
     }
    return answer;
}