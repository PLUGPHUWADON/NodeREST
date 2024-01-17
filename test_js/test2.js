function highestDigit(num) {
    let newarr = num.toString().split("");
    newarr.sort((a,b) => a-b);
    return(newarr[newarr.length - 1]);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));