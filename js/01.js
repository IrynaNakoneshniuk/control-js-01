// # Завдання 1

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "додати*рейтинг", яка приймає один аргумент - кількість балів,
// на яку потрібно збільшити рейтинг студента. Викличте функцію "додати*рейтинг" на
// кожному елементі масиву "студентів". Перевірте, що в контексті функції
// "додати_рейтинг" значення "this" вказує на конкретний об'єкт "студент". Виведіть
// новий масив зі зміненими рейтингами в консоль.


const students=[
    {name: "John",age:21,rating:50},
    {name: "Kate",age:20,rating:70},
    {name: "Vasyl",age:22,rating:40},
    {name: "Olha",age:22,rating:40},
];

const sayHello=function(name){
return `Hello ${name}`;
};

const sayHelloStudents=students.map(student=>sayHello(student.name));
console.log(sayHelloStudents);

const highRatingStudent=students.filter(student=>student.rating>=50);
console.log(highRatingStudent);

const addRating=function(points){
    this.rating+= points;
};

students.forEach(student=>{addRating.call(student,20)
  console.log(student)}
)