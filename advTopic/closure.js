function once(fn) {
  let called = false;
  let result;

  return function () {
    if (!called) {
      result = fn();
      called = true;
    }
    return result;
  };
}

const greet = once(() => "Hello Anjali!");
console.log(greet()); // "Hello Anjali!"
console.log(greet()); // "Hello Anjali!"
console.log(greet());