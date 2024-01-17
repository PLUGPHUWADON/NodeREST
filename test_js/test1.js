function numberSplit(num) {
    let result = [];
    let num1 = num / 2;
    result.push(parseInt(num1));
    let num2 = num - parseInt(num1);
    result.push(parseInt(num2));
    return(result);
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));