//    Напиши функцию findBestEmployee(employees), которая принимает объект 
// сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
//  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  let bestValue = 0;
  for (let value of values) {
    if (bestValue < value) {
      bestValue = value;
    }
  }
  const keys = Object.keys(employees);
  const bestName = [];
  for (let key of keys) {
    let value = employees[key];
    if (value === bestValue) {
      bestName.push(`${key}: ${bestValue}`);
    }
  }
  return bestName.join(", ");
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);





 