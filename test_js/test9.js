function digitalClock(num) {
    let hour = Math.floor(num / 60 / 60 % 24);
    let min = Math.floor((num / 60) % 60);
    let sec = num % 60;

    return(`${hour}:${min}:${sec}`);
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));