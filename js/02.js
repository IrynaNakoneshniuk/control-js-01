
// # Завдання 2

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "вивести баланс", який виводить поточний баланс
// користувача в консоль.

// Створіть масив "користувачів", який містить кілька об'єктів типу "користувач".
// Використовуючи метод "forEach()", викличте метод "додати гроші" на кожному
// елементі масиву "користувачів". Використовуючи метод "filter()", створіть новий
// масив, який міститиме тільки ті об'єкти типу "користувач", у яких баланс більший
// за вказану суму. Використовуючи метод "map()", створіть новий масив, який
// містить баланс кожного користувача з масиву "користувачів". Виведіть цей масив в
// консоль.

// Використайте метод "call()", щоб викликати метод "вивести баланс" на конкретному
// об'єкті "користувач". Перевірте, що в контексті методу "вивести баланс" значення
// "this" вказує на конкретний об'єкт "користувач".

const user={
    name: "user",
    balance: 200,
    
    replenishBalance(sum){
     this.balance+= sum;
    },

    showBalance(){
        console.log(`Current Balance: ${this.balance}`);
    },
}

const users = [
    { name: 'Alice', balance: 500 },
    { name: 'Bob', balance: 200 },
    { name: 'Charlie', balance: 1000 },
];

users.forEach(item=>{
    user.replenishBalance.call(item,100);
});
console.log(users);

const highBalanceUsers=users.filter(user=>user.balance>500);
console.log(highBalanceUsers);

const arrayBalanceUsers = users.map(user=>user.balance);
console.log(arrayBalanceUsers);

users.forEach(item=>{user.showBalance.call(item)
console.log(item);
});
