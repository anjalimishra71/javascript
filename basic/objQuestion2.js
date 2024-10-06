const arr = [
    { name: "anjali", age: 18 },
    { name: "kajal", age: 22 },
    { name: "jyoti", age: 23 }
]

function groupedByProperty(arr, key) {
    return arr.reduce((acc, value) => {
        const currentKey = value[key];
        if (!acc[currentKey]) {
            acc[currentKey] = [];
        }
        acc[currentKey.push(value)];
        return acc;
    }, {});
}

groupedByProperty(arr, 'age');