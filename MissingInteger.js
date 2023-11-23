function solution(A) {
    let a = new Set(A);
    for(i=1;i<=100001;i++){
        if(!a.has(i)){
            return i;
        }
    }
    return 1;
}