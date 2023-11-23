function solution(A, K) {
    minA = Math.min(...A);
    maxA = Math.max(...A);
    if (A.length<=100 && A.length>=0 && K>=0 && 
        K<=100 && minA >= -1000 && maxA <= 1000){
            K = K % A.length;
            let arr1 = A.slice(-K);
            let arr2 = A.slice(0,-K);
            return [...arr1,...arr2];
    }
    else {
        throw new Error("Out of range");
    }
}