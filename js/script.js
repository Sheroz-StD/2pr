 //////////// 1 /////////
// у вас есть 3 вопроса 
// спрашивает ваше имя
// фамилию 
// женаты ли вы 
// вы создать объекь с этими значениями

let usName = prompt('Как вас зовут ?');
let usLasName = prompt('Какая у вас фамилия ?');
let usMarrid = confirm('Ты холостяк ? (ок-да / отмена-нет)')

let infoUs = `Имя - ${usName} 
Фамилия - ${usLasName} 
Женат ли он - ${usMarrid}`;

console.log(`(------1------)
${infoUs}
ОТВЕТ: https://t.me/shiwo0`);

//////////// 2 ///////////
// let a = 2                  a = 3
// let b = 3                  b = 2
// поменяйте значения а и b местами
// не используя дополнительных переменых

let a = 2;
let b = 3;

//первый способ
// a = 3;
// b = 2; //не рабочий способ
//второй способ
[a, b] = [b, a]

console.log(`(------2------)
 a = ${a}(2) / b = ${b}(3)
ОТВЕТ: https://telegra.ph/4-sposoba-pomenyat-znacheniya-peremennyh-v-JavaScript-04-07`);

//////// 3 ///////

let welcom = alert('Добро пожаловать на онлайн услуги банка !')
let namaUs = prompt('Как вас зовут ?').toLowerCase().trim()

let accUs1 = {
    info: {
        usName: 'alex',
        usMoney: 10000,
        usPinCod: 7777
    }
};

let accUs2 = {
    info: {
        usName: 'roma',
        usMoney: 10,
        usPinCod: 1999
    }
};

if (accUs1.info.usName === namaUs) {
    let promPinCod = +prompt(`Введите pin-code !`);
    if (accUs1.info.usPinCod === promPinCod) {
        alert(`Добро пожаловать ${namaUs}`);
        let promMoney = prompt(`Сколько денег хотите снять ?`);
        if (promMoney <= accUs1.info.usMoney) {
            let cash0 = promMoney - accUs1.info.usMoney;
            accUs1.info.usMoney = cash0
            confirm('Оперция выполнена')
            console.log(`Вы сняли ${promMoney}$ `)
            console.log(`На вашем счету ${accUs1.info.usMoney}$`);
        } else {
            alert('На вашем счету не достаточно средств !')
        }
    } else {
        alert('Вы ввели не правильный pin-code !')
    }
} else if (accUs2.info.usName === namaUs) {
    let promPinCod = +prompt(`Введите pin-code !`);
    if (accUs2.info.usPinCod === promPinCod) {
        alert(`Добро пожаловать ${namaUs}`);
        let promMoney = prompt(`Сколько денег хотите снять ?`);
        if (promMoney <= accUs2.info.usMoney) {
            let cash0 = accUs2.info.usMoney - promMoney;
            accUs2.info.usMoney = cash0
            confirm('Оперция выполнена')
            console.log(`Вы сняли ${promMoney}$ `)
            console.log(`На вашем счету ${accUs2.info.usMoney}$`);
        } else {
            alert('На вашем счету не достаточно средств !')
        }
    } else {
        alert('Вы ввели не правильный pin-code !')
    }
} else {
    alert('Пользователь не найден проверте правильно ли вы ввели имя !')
} 

//////// 4 ///////
//let a = { price: 30 }
//let b = { price: -40 }
//let c = { price: 50 }
// объеденить и посмотреть ответ
// в переменую тотал сложить все прайсы и дать ответ

let A = { price: 30 }
let B = { price: -40 }
let C = { price: 50 }
let total = A.price + B.price + C.price
let res = Object.assign(A, B, C);

console.log(`(------3------)`);
console.log(total);//40 правильный ответ
console.log(res);//не знаю правильно ли 
/////////////////////////////////////////////////