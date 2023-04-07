// Итерационный подсчет n-го числа Фибоначчи
function fibIter(num) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
// Рекурсивное вычисление n-го числа Фибоначчи
function fibRec (num) {
    return num <= 1 ? num : fibRec(num - 1) + fibRec(num - 2);
  }

console.log(fibIter(3));
console.log(fibRec(3));