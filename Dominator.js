function solution(A) {
    if(A.length > 0){
        const occurs = A.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
        const [maxKey, maxValue] = Object.entries(occurs).reduce((prev, current) => (current[1] > prev[1] ? current : prev));
        if(maxValue > ((A.length)/2)){
            for(let i=0; i<A.length; i++){
                if(A[i] == maxKey){
                return i;
                }
            }
        }
    } 
    return -1;
}