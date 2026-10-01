const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(5000, 20));
console.log(calculateDiscount(2000, 50));

function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 79) {
        return "B";
    } else if (score >= 40 && score <= 59) {
        return "C";
    } else if (score >= 0 && score <= 39) {
        return "F";
    } else {
        return "Некорректный балл";
    }
}

console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(50));
console.log(getGrade(20));

function getMaxNumber(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(getMaxNumber([5, 10, 3, 8, 15]));
console.log(getMaxNumber([20, 4, 12, 7]));