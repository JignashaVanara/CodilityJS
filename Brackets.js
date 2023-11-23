function solution(S) {
    let stack = [];
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let char of S) {
        if (char in brackets){
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return 0;
            }
            const top = stack.pop();
            if(brackets[top] !== char){
                return 0;
            }
        }
    }
    if (stack.length === 0) return 1; 
    else return 0;
}