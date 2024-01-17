function removeDups(arr) {
    let newarr = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (i == 0) {
            newarr.push(arr[0]);
        }

        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return(newarr);
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));