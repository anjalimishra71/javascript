const data = [
    { name: "kajal", age: 22 },
    { name: "anjali", age: 18 },
    { name: "jyoti", age: 22 },
];

function groupByAge() {
    const groupedData = {};

    data.forEach(p => {
        if (!groupedData[p.age]) {
            groupedData[p.age] = [];
        }
        groupedData[p.age].push(p);
    });

    return groupedData;
}

console.log(groupByAge());



