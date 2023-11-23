function solution(N) {
    let P, Parr = [];
    for (let i=1; i<=N/i; i++){
        if(N%i === 0) {
            let A=i, B=N/i;
            P = 2*(A+B);
            Parr.push(P);
        }
    }
    return Math.min(...Parr);
}