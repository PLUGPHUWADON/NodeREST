function simplePair(arr,n) {
    let result = [];
    let check = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = i + 1 ; j < arr.length ; j++) {
            if (arr[i] * arr[j] == n && i != j) {
                result.push([arr[i],arr[j]]);
            }
        }
    }
    if (result.length == 0) {
        return(null);
    }
    else {
        return(result);
    }
}

console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));