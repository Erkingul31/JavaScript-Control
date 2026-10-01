const student = {
    name: "Айзи",
    age: 22,
    courses: ["JavaScript", "HTML", "CSS"],
    isActive: true
};

console.log("Информация о студенте:", student);

student.age = student.age + 1;

console.log("Возраст после обновления:", student.age);

console.log("Курсы:");

for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}

const product = {
    name: "Ноутбук",
    price: 50000,
    quantity: 2
};

function getTotalCost(product) {
    const totalCost = product.price * product.quantity;

    console.log("Общая стоимость:", totalCost);
}

getTotalCost(product);

const books = [
    {
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869
    },
    {
        title: "Гордость и предубеждение",
        author: "Джейн Остин",
        year: 1813
    },
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949
    }
];

for (let i = 0; i < books.length; i++) {
    console.log(
        "Название:", books[i].title,
        "Автор:", books[i].author,
        "Год:", books[i].year
    );
}

let oldestBook = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
    }
}

console.log("Самая старая книга:", oldestBook);