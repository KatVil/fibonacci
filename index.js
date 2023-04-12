// Итерационный подсчет n-го числа Фибоначчи
function fibIter(num) {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 0; i <= num; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    if (num === 1){
        return a;
    } else {
    return b;
    }
  }
// Рекурсивное вычисление n-го числа Фибоначчи
function fibRec (num) {
    if (num === 0){
        return 1;
    } else if (num === 1){
        return 2;
    }
    return num <= 0 ? num : fibRec(num - 1) + fibRec(num - 2);
  }

console.log(fibIter(3));
console.log(fibRec(3));