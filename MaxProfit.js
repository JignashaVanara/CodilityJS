function solution(A) {
    let maxProfit = 0, minPrice = A[0];
    for (let i in A){
        minPrice = Math.min(minPrice, A[i]);
        maxProfit = Math.max(maxProfit, A[i]-minPrice);
    }  
    return Math.max(maxProfit, 0);
}