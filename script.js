function createCalculator(baseNumber) {
  let result = baseNumber;
  return {
    summation:(number) => isNumberValid(number) ? result += number : 0,
    subtraction:(number) => isNumberValid(number) ? result -= number : 0,
    multiplication:(number) => isNumberValid(number) ? result *= number : 0,
    division:(number) => isNumberValid(number) ? result /= number : 0,
    set:(number) => isNumberValid(number) ? result = number : 0,
    display:() => console.log("Result: ", result),
  }
}

function isNumberValid(number) {
  return !isNaN(number);
}

const calculator = createCalculator(100);

calculator.summation(40);
calculator.display();
calculator.subtraction(80);
calculator.display();   
calculator.multiplication(4);
calculator.display();  
calculator.division(2);
calculator.display();
calculator.set(100);
calculator.display();
calculator.summation(200);
calculator.display();
calculator.subtraction(function() {});
calculator.display();   
calculator.multiplication(3);
calculator.display();  
calculator.division(50);
calculator.display();
calculator.set('fghhgfgfh');
calculator.display();