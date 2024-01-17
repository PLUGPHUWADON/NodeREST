function sumTwoSmallestNums(arr) {
    let result = 0;
    let check = 0;
    let sortarr = arr.map(e => e).sort((a,b) => a-b);
    for (let i = 0 ; i < sortarr.length ; i++) {
        if (sortarr[i] >= 0) {
            if (check <= 1) {
                result += sortarr[i];
                check++;
            }
        }
    }
    return(result);
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,34354535345]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));