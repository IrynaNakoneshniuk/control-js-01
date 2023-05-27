// # Завдання 3

// Створіть об'єкт "Користувач" з властивостями "ім'я", "прізвище" та масивом
// "друзів". У цьому масиві зберігаються об'єкти, кожен з яких містить ім'я та
// прізвище друга.

// Створіть функцію "вивестиДрузів", яка використовує метод масиву "forEach" для
// перебору масиву друзів користувача та виводу їх імені та прізвища у консоль. У
// цій функції використовуйте ключове слово "this" для звернення до поточного
// об'єкту.

// Створіть ще один об'єкт "Користувач" зі своїми властивостями та масивом друзів
// та викличте функцію "вивестиДрузів" для обох об'єктів, передаючи контекст через
// методи "call()" чи "apply()". Виведіть результат у консоль.


const user1={
    name:'Oleh',
    surname:'Vovchuk',
    friends:[
        {name:'Olha',surname:'Obesniuk'},
        {name:'Volodymyr',surname:'Koval'},
        {name:'Sitora',surname:'Idieva'},
    ],
    showFriends(){
        this.friends.forEach(item=>console.log(`${item.name} ${item.surname}`))
    }
};


const user2={
    name:'Petro',
    surname:'Vovchuk',
    friends:[
        {name:'Inna',surname:'Obesniuk'},
        {name:'Vasya',surname:'Koval'},
        {name:'Maryna',surname:'Idieva'},
    ],
};

user1.showFriends();

user1.showFriends.call(user2);