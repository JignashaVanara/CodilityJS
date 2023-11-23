function solution(A) {
    if(A.length == 2) {
        return Math.abs(A[0]-A[1]);
    } else{
        let fp = A[0];
        let lp = 0;
        for (let i=1;i<A.length;i++){
            lp += A[i];
        }
        let dif = Math.abs(fp - lp);
        for (let i=1; i<A.length-1; i++){
            fp += A[i];
            lp -= A[i];
            if(Math.abs(fp-lp) < dif) {
                dif = Math.abs(fp-lp);
            }
        }
        return dif;
    }
}