// function calculatorFunction(operation, initialValue, numbers) {
//     let total = initialValue;
//     for (const number of numbers) {
//     total = operation(total, number);
//     }
//     return total;
//     }
//     function sum(n1, n2) {
//     return n1 + n2;
//     }
//     function multiply(n1, n2) {
//     return n1 * n2;
//     }

//    console.log(calculatorFunction(sum, 0, [1, 3, 4])); // 8
//   calculatorFunction(multiply, 1, [1, 3, 4]); // 12
  

    const hello = function() {
        return 'Hello!'
        };
       console.log( hello());
        
        function useFunction(func) {
        return func();
        }
       console.log(useFunction(function () { return 7 }));
       // console.log(useFunction());
       
        function returnFunction() {
        return function() { return 7 };
        }
        const exFunc = returnFunction();
        console.log(exFunc());