function solution(A) {
    if(A.length>=0 && A.length<=1000000 && A.length%2){
        let e={};
        for(let i=0; i<A.length; i++){
            if (A[i]>=0 && A[i]<=1000000000) {
                if (e[A[i]]) {
                    e[A[i]] += 1; 
                } else {
                    e[A[i]] = 1;
                }
            }
        }
        //let unpaied_ele = Object.keys(e).filter(key => e[key] % 2 !== 0).join(',');
        let unpaied_ele = Object.keys(e).find((key) => e[key] % 2);
        return parseInt(unpaied_ele);
    } else {
        throw new Error("Out of range or array contains an even number of elements");
    }
}