function solution(X, Y, D) {
    if([X, Y, D].every(val => val >= 0 && val <= 1000000000)) {
        let jump = Math.ceil((Y-X)/D);
        return jump;
    } else {
        throw new Error("Out of range");
    }
}