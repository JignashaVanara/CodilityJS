function solution(A) {
    if(A.length > 0){
        const occurs = A.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});
        const [maxKey, maxValue] = Object.entries(occurs).reduce((prev, current) => (current[1] > prev[1] ? current : prev));
        let leader;
        if (maxValue > ((A.length)/2)) leader = maxKey;
        let S = 0;
        let leadercount = 0;

        for (let i=0; i<A.length; i++){
            if (A[i] == leader){
                leadercount++;
            }
            let firstSeq = (i+1)/2;
            let secondSeq = (A.length - i - 1) /2;
            if (leadercount > firstSeq && (maxValue - leadercount) > secondSeq) {
                S++;
            }
        }
        return S;
    }
}