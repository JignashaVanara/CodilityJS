function solution(H) {
    let stack = [];
    let counter = 0;
    for (let i=0; i<H.length; i++){
        while(stack.length > 0 && H[i]<stack[stack.length-1]){
            stack.pop();
        }
        if(stack.length == 0 || H[i]>stack[stack.length-1]){
            counter++;
            stack.push(H[i])
        }
    }
    return counter;
}