function solution(N) {
    let count=0;
    for(let i=1; i<=N/i; i++){ if(N%i === 0) count += (i*i === N) ? 1 : 2; }
    return count;
}
