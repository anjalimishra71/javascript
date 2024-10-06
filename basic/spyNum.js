function isSpyNumber(num) {
    let sum = 0;
    let product = 1;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit;
        product *= digit;
        temp = Math.floor(temp / 10);
    }

    return sum === product;
}

function findSpyNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (isSpyNumber(i)) {
            console.log(i);
        }
    }
}

// Find spy numbers between 10 and 200
findSpyNumbersInRange(10, 200);
