function solution(A) {
    let peaks = [];
    for (let i=0; i<A.length; i++) {
        if (A[i]>A[i+1] && A[i]>A[i-1]){
            peaks.push(i);
        }
    }
    if(peaks.length === 0) return 0;
    for (let i = A.length; i > 0; i--) {
        if(A.length%i === 0) {
            let blockcount = A.length/i, peak = 0, current = -1;
            for (let j=0; j<peaks.length; j++) {
                const pi = Math.floor(peaks[j]/blockcount);
                if(pi > current) {
                    peak++;
                    current = pi;
                    if(peak === i) {
                        return i;
                    }
                }

            }
        }
    }
    return 0;
}