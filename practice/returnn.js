function makeAdder(n1) {
    return function(n2) { return n1 + n2;};
    }
    console.log( makeAdder(5)(3) );