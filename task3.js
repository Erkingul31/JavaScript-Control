for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}

function sumNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumNumbers(5));
console.log(sumNumbers(10));

let number = 20;

while (number >= 1) {
    console.log(number);
    number--;
}

