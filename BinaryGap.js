function solution(N) {
    var binary = N.toString(2);
    var binaryArray = binary.split('');
    var cond1 = binaryArray.filter(e => e == 1).length;
    var cond2 = binaryArray.filter(e => e == 0).length;
    if (cond1 == 1 || cond2 == 0){
        return 0;
    } else {
        var gap = binary.split('1').map(i => i.length);
        if (binaryArray[binaryArray.length-1] == '0'){
            gap.pop();
        } 
        var large_gap = Math.max(...gap);
        return large_gap;
    }
}