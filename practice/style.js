function first(n) {
    const sec = m => {
        const third = p => {
            return n + m + p;
        };
        return third;
    };
    return sec;

}
console.log(first(1)(2)(3))