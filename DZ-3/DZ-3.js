// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  mood: 'happy',
};
user.hobby = 'skydiving';
console.log(user.hobby)
user.premium = false
console.log(user.premium)

const keys = Object.keys(user);
console.log(keys);

for(const key of keys){
  console.log(key);
  console.log(user[key]);
}





// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//     const keys = Object.keys(obj);
//     return keys.length;
//   };
//   console.log(countProps({})); // 0
//   console.log(countProps({ name: "Mango", age: 2 })); // 2
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
  
  
  
  
  
//    Напиши функцию findBestEmployee(employees), которая принимает объект 
// сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
//  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

  // const findBestEmployee = function (employees) {
  //   const values = Object.values(employees);
  //   let bestValue = 0;
  //   for (let value of values) {
  //     if (bestValue < value) {
  //       bestValue = value;
  //     }
  //   }
  //   const keys = Object.keys(employees);
  //   const bestName = [];
  //   for (let key of keys) {
  //     let value = employees[key];
  //     if (value === bestValue) {
  //       bestName.push(`${key}: ${bestValue}`);
  //     }
  //   }
  //   return bestName.join(", ");
  // };
  // console.log(
  //   findBestEmployee({
  //     ann: 29,
  //     david: 35,
  //     helen: 1,
  //     lorence: 99,
  //   }),
  // ); // lorence
  
  // console.log(
  //   findBestEmployee({
  //     poly: 12,
  //     mango: 17,
  //     ajax: 4,
  //   }),
  // ); // mango
  
  // console.log(
  //   findBestEmployee({
  //     lux: 147,
  //     david: 21,
  //     kiwi: 19,
  //     chelsy: 38,
  //   }),
  // );

   
// Напиши функцию countTotalSalary(employees) принимающую объект 
// зарплат. Функция считает общую сумму запрплаты работников и 
// возращает ее. Каждое поле объекта, передаваемого в функцию, 
// имеет вид "имя":"зарплата".

//   const countTotalSalary = function (employees) {
//     let total = 0;
//     const values = Object.values(employees);
//     for (let value of values) {
//       total += value;
//     }
//     return total;
//   };
//   console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400


//  5  Напиши функцию getAllPropValues(arr, prop), 
// которая получает массив объектов и имя свойства. 
// Возвращает массив значений определенного свойства 
// prop из каждого объекта в массиве. 

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
//   const getAllPropValues = function (arr, prop) {
//     let array = [];
//     let key = prop;
//     for (let obj of arr) {
//       if (obj[key] !== undefined) {
//         array.push(obj[key]);
//       }
//     }
//     return array;
//   };
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []



// 6 Напиши функцию calculateTotalPrice(allProdcuts, productName), 
// которая получает массив объектов и имя продукта (значение свойства 
//     name). Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.
 

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];
  
//   const calculateTotalPrice = function (allProdcuts, productName) {
//     for (let product of allProdcuts) {
//       let key = "name";
//       let name = product[key];
//       if (product.name === productName) {
//         let price = product["price"];
//         let quantity = product["quantity"];
//         return price * quantity;
//       }
//     }
//   };
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800