const data = [
    { name: "kajal", age: 22 },
    { name: "anjali", age: 18 },
    { name: "jyoti", age: 22 },
];

//1
function groupByAge() {
    return data.reduce((groupedData, p) => {
        if (!groupedData[p.age]) {
            groupedData[p.age] = [];
        }
        groupedData[p.age].push(p);
        return groupedData;
    }, {});
}

const result = groupByAge();
console.log(result);

//2
// function groupedByProperty(array, key) {
//     return array.reduce((acc, value) => {
//         const currectKey = value[key];

//         if (!acc[currectKey]) {
//             acc[currectKey] = [];
//         }

//         acc[currectKey].push(value);
//         return acc;
//     }, {});
// }

// const result = groupedByProperty(data, 'name');

// console.log(result)
