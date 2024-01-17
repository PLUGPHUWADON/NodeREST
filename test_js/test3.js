function capToFront(str) {
    let result = [];
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result.push(str[i]);
        }
    }
    for (let i = 0 ; i < str.length ; i++) {
        if (str[i] == str[i].toLowerCase()) {
            result.push(str[i]);
        }
    }
    return(result.join(""));
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));