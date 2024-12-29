let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList(listOfNumbers){
    let newArray = [];
    let odd = [];
    let even = [];
    listOfNumbers.forEach(i => {
        if (i % 2 === 0) {
            even.push(i);
        } else {
            odd.push(i);
        }

    });
    newArray = odd.concat(even);
    return newArray;
}

console.log(mergeTwoList(listOfNumbers));