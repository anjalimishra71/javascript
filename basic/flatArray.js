const arr = [1, 2, 3, [4, 5, [6, 7, [8]]], 9];
function flatern(ary) {
    let result = [];
    ary.forEach(element => {
        if (Array.isArray(element)) {
            result = [...result, ...flatern(element)] //concat,flat
        } else {
            result.push(element);
        }
    });

    return result;
}

const res = flatern(arr);
console.log(res);