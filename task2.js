const age = 20;

if (age < 13) {
    console.log("Ребенок");
} else if (age >= 13 && age <= 17) {
    console.log("Подросток");
} else if (age >= 18 && age <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }

}

checkEvenOdd(10);
checkEvenOdd(7);
checkEvenOdd(24);
checkEvenOdd(15);

const visitorAge = 15;
const height = 170;

if (visitorAge < 5) {
    console.log("Слишком мал");
} else if (visitorAge >= 5 && visitorAge <= 12) {
    console.log("Добро пожаловать");
} else if (
    visitorAge >= 13 &&
    visitorAge <= 18 &&
    height > 160
) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}