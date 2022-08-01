1//

// let userName = {
//     name: 'Vasilii',
//     age: 30,
// }

// delete (userName.name);
// delete (userName.age);
// console.log(userName);


//2

// let userName = {
//     name: 'Vasilii',
//     age: 30,
// }

// if(userName.name) {
//     console.log(true);
// }

//3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (key in student) {
//     console.log(key);
// }

// for (key in student) {
//     console.log(student[key]);
// }

//4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// }

// console.log(colors['ru pum pu ru rum'].blue);

// console.log(colors['ru pum pu ru rum'].red);

//5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andre: 664,
//     alexandra: 199
// }



// function sumSalaries (salaries) {
//     let sum  = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
// return(sum);
// }

// let midSalaries = sumSalaries(salaries) / 5;

// console.log(midSalaries);

//6

// let userName = {};
// let result = window.prompt (`Введите Ваше имя: `);

// result = userName;

// console.log(userName)

// if (userName === result ) {
//     alert('Добро пожаловать');
// }

//7

//8

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }


// student1 = student2;

// if(student2 == student1){
//     console.log(true);
// }