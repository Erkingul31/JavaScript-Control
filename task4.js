const grades = [5, 4, 3, 5, 2, 4, 5];

let sum = 0;
let maxGrade = grades[0];

for (let i = 0; i < grades.length; i++) {
    console.log("Оценка:", grades[i]);

    sum = sum + grades[i];

    if (grades[i] > maxGrade) {
        maxGrade = grades[i];
    }
}

const average = sum / grades.length;

console.log("Сумма оценок:", sum);
console.log("Средняя оценка:", average);
console.log("Максимальная оценка:", maxGrade);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }

    return -1;
}

console.log(findCity(cities, "Бишкек"));
console.log(findCity(cities, "Ош"));
console.log(findCity(cities, "Нарын"));