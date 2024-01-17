function getBudgits(arr) {
    let result = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        result += arr[i].budget;
    }
    return(result);
}

console.log(getBudgits([
    {name: "john" , age: 21 , budget: 23000},
    {name: "steve" , age: 32 , budget: 40000},
    {name: "margin" , age: 16 , budget: 2700}
]));

console.log(getBudgits([
    {name: "john" , age: 21 , budget: 29000},
    {name: "steve" , age: 32 , budget: 32000},
    {name: "margin" , age: 16 , budget: 1600}
]));