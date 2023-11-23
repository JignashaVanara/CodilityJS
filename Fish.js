function solution(A, B) {
    const stack = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {  
        if (B[i] === 1) stack.push(A[i]);
        else {
            while (stack.length > 0 && stack[stack.length - 1] < A[i]) {
                stack.pop();
            }
            if (stack.length === 0) count++;
        }
    }

    return count + stack.length;
}