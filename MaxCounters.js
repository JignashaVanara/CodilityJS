function solution(N, A) {
    let res = new Array(N).fill(0);
    let max = 0;
    let lastmax = 0;
    for (let i=0; i<A.length; i++){
        if(A[i] <= N) {
            res[A[i]-1] = Math.max(res[A[i]-1],lastmax) + 1; 
            if (res[A[i]-1] > max){
                max = res[A[i]-1];
            }
        } else {
            lastmax = max;
        }
    }
    for (let i=0; i<N; i++){
        res[i] = Math.max(res[i], lastmax); 
    }
    return res;
}
