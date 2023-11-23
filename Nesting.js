function solution(S) {
    let count = 0;
    for (let i=0; i<S.length; i++){
        if(S[i]=='('){
            count++
        } 
        if(S[i]==(')')){
            count--
        }
        if(count<0) return 0; 
    }
    let result = (count === 0) ? 1:0;
    return result;
}